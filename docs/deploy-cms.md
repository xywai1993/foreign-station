目标：让非技术人员通过 headless CMS 修改产品文案后，自动触发 Cloudflare Pages 重新构建并上线（保持 SSG）。

步骤概览：

1. 在 Cloudflare Pages > 项目 > Settings > Deployments > Deploy Hooks 创建一个 Hook URL。
2. 在 GitHub 仓库设置一个 Secret：`CF_PAGES_DEPLOY_HOOK`，值为上一步得到的 Hook URL（用于 GitHub Actions）。
3. 选择一个 Headless CMS（推荐：Sanity / Contentful / Directus / Strapi Cloud / Netlify CMS），并在 CMS 的 Webhooks 设置中添加两个 webhook：
    - 直接调用 Cloudflare Deploy Hook（可选，直接触发 Pages）

-   在 CMS 的 webhook 地址填写 Cloudflare Deploy Hook（步骤 1 得到的 URL）。
-   可选在 Webhook 的 header 中添加 `X-Deploy-Secret: <your-secret>`，并在 CMS 配置时填写该 header 值以防止误触。
    {
    "event_type": "cms-update",
    "client_payload": {"source":"cms-name"}
    }
-   这种方式需要在 CMS 中保存一个 GitHub token（注意权限，最好只允许 repo dispatch 权限），或者把 CMS 的 webhook 先发送到一个中间服务再由中间服务调用 GitHub。
-   我们已经在仓库添加了一个 Actions workflow `.github/workflows/cf-pages-deploy.yml`，它会响应 `repository_dispatch` 事件并调用 Cloudflare Deploy Hook（`CF_PAGES_DEPLOY_HOOK` secret 必须在仓库设置中配置）。

安全建议：

-   Deploy Hook 地址视为敏感信息，不要公开，存为 repo Secret（我们在 Actions 中使用）。
-   如果直接让 CMS 调用 Cloudflare Deploy Hook，请在 CMS 请求 header 中添加一个自定义 secret 并在云端验证（Cloudflare Pages 不支持验证 header，建议用 GitHub Actions 代理方式）。
-   使用 GitHub Actions 代理可以将 secret 存在 GH Secrets，并避免把 Deploy Hook 暴露在 CMS 配置中。

测试步骤：

1. 在 GitHub 仓库设置 `CF_PAGES_DEPLOY_HOOK` secret 为你的 Cloudflare Deploy Hook URL。
2. 手动在 GitHub 仓库页面触发 Actions（Actions -> Workflows -> Trigger Cloudflare Pages Deploy -> Run workflow）确认能成功调用 Deploy Hook。
3. 在 CMS 中配置 webhook 指向 GitHub repository dispatch（或直接指向 Deploy Hook），编辑并保存一个产品，再观察 Pages 是否启动构建并部署。

故障排查：

-   如果 Actions 日志显示没有 `CF_PAGES_DEPLOY_HOOK`，检查仓库 Secrets 是否正确命名并在正确仓库下。
-   如果 Cloudflare Pages 未触发，直接在浏览器中访问 Deploy Hook URL 看是否返回 200。
-   检查 CMS 的 webhook 日志以确认 webhook 是否发送成功及响应码。

如果需要，我可以：

-   帮你生成一个 GitHub Actions workflow（已添加），并在仓库中添加一个示例 GitHub webhook payload 触发脚本；
-   或为你把现有 `pages` 的构建脚本改为 `generate` 并提供 CI 配置用于直接把生成产物发布到别的静态主机（如 S3/CloudFront）。

## 直接调用 Deploy Hook 示例

如果你决定让 CMS 直接调用 Cloudflare Pages 的 Deploy Hook，下面是可直接复制到 CMS 的配置示例，以及两个可本地运行的测试脚本（PowerShell / Bash）。

注意：Cloudflare Pages 的 Deploy Hook 本质上是一个公开可请求的 URL，任何知道该 URL 的请求者都能触发构建，因此请妥善保存该 URL；如果需要更强的安全性，应使用 GitHub Actions 代理或在 CMS 侧限制来源。

CMS 配置（示例）

-   URL: <你的 Cloudflare Deploy Hook 地址>
-   Method: POST
-   Headers:
    -   Content-Type: application/json
    -   X-Deploy-Secret: <任意自定义字符串> # 可选，仅用于日志或二次校验（Cloudflare Pages 本身不会验证此 header）
-   Body: {}

curl 示例（也可放在 CMS 的 webhook 里作为自定义请求模板）

```bash
curl -X POST -H "Content-Type: application/json" -H "X-Deploy-Secret: my-secret-value" -d '{}' "https://api.cloudflare.com/client/v4/pages/webhooks/<hook-id>"
```

PowerShell 示例（可供 Windows 本地测试或在 CI 中运行）

```powershell
$env:DEPLOY_HOOK = "https://api.cloudflare.com/client/v4/pages/webhooks/<hook-id>"
$headers = @{"Content-Type" = "application/json"; "X-Deploy-Secret" = "my-secret-value"}
Invoke-RestMethod -Uri $env:DEPLOY_HOOK -Method Post -Headers $headers -Body '{}'
```

安全提示

目标：最终方案为“构建时从 CMS 拉取产品数据（SSG） + CMS 直接触发 Cloudflare Pages 的 Deploy Hook”，本文档说明配置与注意点。

快速步骤

1. 在 Cloudflare Pages → 项目 → Settings → Deployments → Deploy Hooks 创建一个 Hook URL（记录好 URL）。
2. 在你的 Headless CMS（例如 Sanity/Contentful/Directus/Strapi）里添加一个 webhook：Method=POST，URL 填入上一步的 Deploy Hook；触发条件为“发布/发布后”（publish）事件。
3. 在 Cloudflare Pages 的构建环境变量里添加 `CMS_API_URL`（或 `PUBLIC_API_BASE`），指向你的 CMS API 基址（构建时脚本会使用它去拉取 `/products`）。
4. 每次 CMS 内容发布后，CMS 会触发 Deploy Hook，Cloudflare Pages 开始构建；构建脚本会先运行 `scripts/fetch-cms-products.js`，把最新数据写入 `public/_data/products.json`，然后 Nuxt 构建会在生成阶段使用该数据生成页面。

如何在 CI/Cloudflare Pages 中配置

-   在 Pages 项目设置的 Environment Variables 中添加：
    -   `CMS_API_URL` = https://cms.example.com/api
-   让 CMS 的 webhook 指向你在第 1 步创建的 Deploy Hook（通常 CMS 支持在发布动作触发 webhook）。

构建流程要点

-   `npm run build` 会先执行 `node ./scripts/fetch-cms-products.js`（通过 `fetch:cms` 脚本），确保 `public/_data/products.json` 包含最新产品数据。
-   Nuxt 的 `composables/useProducts.ts` 在构建/SSR 阶段会优先读取 `public/_data/products.json`，如不存在则回退到远程拉取或静态数据。

安全与运维注意

-   Deploy Hook URL 被视为敏感信息，请通过 CMS 的权限控制和内部文档/密码管理工具分享给运营人员；避免在公共聊天或公开页面暴露。
-   如果 CMS 公开暴露 webhook 管理权限或你需要更严格的访问控制，可考虑在 CMS 侧使用自定义 header（如 `X-Deploy-Secret`）并把该 header 作为日志或二次校验；但 Cloudflare Pages 本身不会验证自定义 header。
-   如果需要额外安全层，可使用中间代理（例如 GitHub Actions 或自建 serverless）来触发 Deploy Hook 并验证签名。

测试与故障排查

-   本地测试：在本地设置 `CMS_API_URL` 环境变量，然后运行：
    ```powershell
    $env:CMS_API_URL = 'http://127.0.0.1:3154/jp-admin/product/all-list'
    npm run fetch:cms
    ```
    检查 `public/_data/products.json` 是否被生成并包含正确数据。
-   构建日志：如果 Cloudflare Pages 未触发构建，检查 CMS 的 webhook 发送日志；如果构建后页面未更新，检查构建日志中 `fetch-cms-products.js` 的输出与错误信息。

如需帮助

-   我可以：
    -   根据你的 CMS 返回的数据结构调整 `scripts/fetch-cms-products.js` 的字段映射；
    -   为 Cloudflare Pages 构建日志添加更详细的输出或失败报警；
    -   或把构建验证流程（在 CI 中）自动化并把成功/失败通知到 Slack/邮件。

---

以上就是精简后的最终方案说明。若确认，我将不再保留任何多余逻辑。
