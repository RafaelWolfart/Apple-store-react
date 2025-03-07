const products = [
    {
        id: 1,
        title: "iPhone 13",
        price: 500,
        category: "iPhone",
        description: "Storage: 128, 256, 512",
        image: "/public/img/IP13BLK1.svg",
    },
    {
        id: 2,
        title: "iPhone 14",
        price: 600,
        category: "iPhone",
        description: "Storage: 128, 256, 512",
        image: "/public/img/IP13BLK1.svg",
    },
    {
        id: 3,
        title: "iPhone 15",
        price: 700,
        category: "iPhone",
        description: "Storage: 128, 256, 512",
        image: "/public/img/iPhone-15-Pink.svg",
    },
    {
        id: 4,
        title: "iPad Air",
        price: 400,
        category: "iPad",
        description: "Storage: 128, 256, 512",
        image: "x",
    },
    {
        id: 5,
        title: "iPad Pro",
        price: 500,
        category: "iPad",
        description: "Storage: 128, 256, 512",
        image: "x",
    },
    {
        id: 6,
        title: "AirPods Pro",
        price: 200,
        category: "Accessories",
        description: "Colores: blanco, negro, plata",
        image: "x",
    },
    {
        id: 7,
        title: "AirPods Max",
        price: 700,
        category: "Accessories",
        description: "Colores: blanco, negro, plata",
        image: "x",
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 1000);
    });
};