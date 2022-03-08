import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
        
    const addToCart = (product, cantidad) =>{
        if (isInCart(product.id)){
            sumarCantidad (product.id, cantidad)
        } else {
            setCart([...cart, {...product, cantidad} ])
        }
    };
/* findindex, findex o some: */
    const isInCart = (id) =>{
        return cart.some((producto)=> producto.id === id)
    }

    /* mas funciones */
    const sumarCantidad = (id, cantidad) => {
        cart.map(
            (producto) => producto.id === id && (producto.cantidad += cantidad)
        );
    };

    const clearItem = () => {
        setCart([])
    }

    const removeItem = (id) =>{
        const itemsFiltrados = cart.filter((prod)=>prod.id !== id)
        setCart(itemsFiltrados)
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.cantidad
        })
        return count
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.cantidad
        })
        return total
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearItem, removeItem, getQuantity, getTotal }}>
        {children}
        </CartContext.Provider>
    );
};
