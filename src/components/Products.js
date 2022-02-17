export const products = [
    {
        id: 1,
        name: 'Primer celular',
        stock: 50,
        pice: 45000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2202/pcd/smp/PCD_RG_KV_Merchandising_160X160_pc.png?$160_160_PNG$',
        category: 'Celulares',
    },
    {
        id: 2,
        name: 'Segundo celular',
        stock: 50,
        pice: 65000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2201/pcd/PCD_Galaxy-S21-FE_KV_Merchandising_160X160.png?$160_160_PNG$',
        category: 'Celulares',
    },
    {
        id: 2,
        name: 'Tercer celular',
        stock: 50,
        pice: 55000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2108/pcd/smp/pc/PCD_B2_KV_Merchandising_160X160.png?$160_160_PNG$',
        category: 'Celulares',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});