// Fetch products from CMS and write to public/_data/products.json
// Usage: set CMS_API_URL or PUBLIC_API_BASE in environment, then run this script before build.
import fs from 'fs/promises';

const raw = process.env.CMS_API_URL || process.env.PUBLIC_API_BASE || '';
if (!raw) {
    console.log('CMS_API_URL or PUBLIC_API_BASE not set, skipping fetch-cms-products.');
    process.exit(0);
}

const apiBase = typeof raw === 'string' ? raw.replace(/\/$/, '') : '';
const url = `${apiBase}`;

async function main() {
    try {
        console.log('Fetching products from', url);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        const json = await res.json();
        const data = json?.data?.products;
        const products = Array.isArray(data) ? data : data.products ?? data;
        products.forEach((element) => {
            element.id = element._id;
        });
        await fs.mkdir('public/_data', { recursive: true });
        await fs.writeFile('public/_data/products.json', JSON.stringify(products, null, 2), 'utf8');
        console.log('Wrote public/_data/products.json with', (products || []).length, 'items');
    } catch (e) {
        console.error('Error fetching products:', e.message || e);
        process.exit(1);
    }
}

main();
