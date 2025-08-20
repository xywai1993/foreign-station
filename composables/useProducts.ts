import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';

// 原有静态数据作为本地回退（fallback），当没有后端 API 可用时仍能显示产品。
const fallbackProducts = ref([
    // 密封胶
    {
        id: 1,
        name: '耐高温硅酮密封胶',
        category: 'sealant',
        description: '适用于高温工况的设备法兰、管道接口密封。',
        image: '/images/mf/mf--1.jpg',
        details: {},
    },
    {
        id: 2,
        name: '中性透明硅酮密封胶',
        category: 'sealant',
        description: '无腐蚀性，适用于电子元器件、精密仪器的粘接密封。',
        image: '/images/mf/mf--2.jpg',
        details: {},
    },
    {
        id: 3,
        name: '快干型硅酮密封胶',
        category: 'sealant',
        description: '快速表干，提高生产效率，适用于流水线作业。',
        image: '/images/mf/mf--3.jpg',
        details: {},
    },
    {
        id: 4,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--4.jpg',
        details: {},
    },
    {
        id: 5,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--5.jpg',
        details: {},
    },
    {
        id: 6,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--6.jpg',
        details: {},
    },
    {
        id: 7,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--7.jpg',
        details: {},
    },
    {
        id: 8,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--8.jpg',
        details: {},
    },
    {
        id: 9,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--9.jpg',
        details: {},
    },
    {
        id: 10,
        name: '建筑用硅酮耐候密封胶',
        category: 'sealant',
        description: '优异的耐候性，专为建筑幕墙、门窗填缝设计。',
        image: '/images/mf/mf--10.jpg',
        details: {},
    },

    // AB胶
    {
        id: 11,
        name: '环氧树脂AB胶',
        category: 'ab_glue',
        description: '高强度结构粘接，适用于金属、陶瓷、复合材料。',
        image: '/images/AB/AB--1.jpg',
        details: {},
    },
    {
        id: 12,
        name: '丙烯酸酯AB胶',
        category: 'ab_glue',
        description: '快速固化，韧性好，适用于塑料、金属的快速粘接。',
        image: '/images/AB/AB--2.jpg',
        details: {},
    },
    {
        id: 13,
        name: '透明快干AB胶',
        category: 'ab_glue',
        description: '透明无痕，5分钟快速固化，适用于工艺品、电子元件。',
        image: '/images/AB/AB--3.jpg',
        details: {},
    },
    {
        id: 14,
        name: '耐高温AB胶',
        category: 'ab_glue',
        description: '可在高达150°C的环境下长期使用，性能稳定。',
        image: '/images/AB/AB--4.jpg',
        details: {},
    },
    {
        id: 15,
        name: '耐高温AB胶',
        category: 'ab_glue',
        description: '可在高达150°C的环境下长期使用，性能稳定。',
        image: '/images/AB/AB--5.jpg',
        details: {},
    },
    {
        id: 16,
        name: '耐高温AB胶',
        category: 'ab_glue',
        description: '可在高达150°C的环境下长期使用，性能稳定。',
        image: '/images/AB/AB--6.jpg',
        details: {},
    },
    {
        id: 17,
        name: '耐高温AB胶',
        category: 'ab_glue',
        description: '可在高达150°C的环境下长期使用，性能稳定。',
        image: '/images/AB/AB--7.jpg',
        details: {},
    },

    // 502胶
    {
        id: 18,
        name: '通用型瞬干胶 (502)',
        category: 'glue_502',
        description: '中等粘度，用途广泛，适用于多种材质的快速粘接。',
        image: '/images/502/502--1.jpg',
        details: {},
    },
    {
        id: 19,
        name: '低白化瞬干胶',
        category: 'glue_502',
        description: '固化后白化程度低，适用于外观要求高的产品。',
        image: '/images/502/502--2.jpg',
        details: {},
    },
    {
        id: 20,
        name: '高强度瞬干胶',
        category: 'glue_502',
        description: '粘接强度高，适用于金属、硬质塑料等高要求场景。',
        image: '/images/502/502--3.jpg',
        details: {},
    },

    // 电工胶布
    {
        id: 21,
        name: 'PVC电气绝缘胶带',
        category: 'tape',
        description: '良好的绝缘性能和阻燃性，用于电线缠绕和绝缘保护。',
        image: '/images/jb/jb--01.jpg',
        details: {
            features: ['超高粘接强度', '优异的耐化学性', '耐高温', '适用于多种基材'],
            applications: '广泛用于航空航天、汽车制造、电子封装和建筑结构加固。',
            specs: '颜色：透明/淡黄色 | 固化时间：24小时 | 操作时间：30分钟 | 剪切强度：>20 MPa',
        },
    },
]);

const detailSample = {
    features: ['超高粘接强度', '优异的耐化学性', '耐高温', '适用于多种基材'],
    applications: '广泛用于航空航天、汽车制造、电子封装和建筑结构加固。',
    specs: '颜色：透明/淡黄色 | 固化时间：24小时 | 操作时间：30分钟 | 剪切强度：>20 MPa',
};

fallbackProducts.value.forEach((p) => {
    p.details = detailSample;
});

export const useProducts = () => {
    // SSG/SSR/CSR 通用，直接用 $fetch 拉取静态 JSON 文件
    const products = useState('products', () => []);
    const loading = ref(false);
    const error = ref<any>(null);

    // 初始化时拉取静态 JSON
    const fetchStaticProducts = async () => {
        loading.value = true;
        try {
            const data = await $fetch('/_data/products.json');
            if (Array.isArray(data)) {
                products.value = data;
            } else {
                products.value = fallbackProducts.value.slice();
            }
            error.value = null;
        } catch (e) {
            products.value = fallbackProducts.value.slice();
            error.value = e;
        } finally {
            loading.value = false;
        }
    };

    // SSR/CSR 自动拉取
    if (products.value.length === 0) {
        fetchStaticProducts();
    }

    // 保留 fetchProducts 方法，支持强制刷新
    const fetchProducts = async ({ force = false } = {}) => {
        if (loading.value) return products;
        if (!force && products.value && products.value.length > 0) return products;
        await fetchStaticProducts();
        return products;
    };

    return {
        products,
        fetchProducts,
        loading,
        error,
    };
};
