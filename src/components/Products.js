export const products = [
    {
        id: 1,
        name: 'Primer celular',
        stock: 50,
        pice: 45000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2202/pcd/smp/PCD_RG_KV_Merchandising_160X160_pc.png?$160_160_PNG$',
        category: 'celulares',
    },
    {
        id: 2,
        name: 'Segundo celular',
        stock: 50,
        pice: 65000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2201/pcd/PCD_Galaxy-S21-FE_KV_Merchandising_160X160.png?$160_160_PNG$',
        category: 'tablets',
    },
    {
        id: 3,
        name: 'Tercer celular',
        stock: 50,
        pice: 55000,
        img: 'https://images.samsung.com/is/image/samsung/assets/ar/2108/pcd/smp/pc/PCD_B2_KV_Merchandising_160X160.png?$160_160_PNG$',
        category: 'notebooks',
    },
];

export const traerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

/* export const traerProductos = (category) => {
    return new Promise((resolve) => {
        if (category === celulares){
            
        }else if (category === notebooks) {
            
        } else if (category === tablets) {
            
            setTimeout(() => {
                resolve(products[0]) 
             }, 2000);
    }) */