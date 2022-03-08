import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {
    const {cart, removeItem, getTotal, clearItem} = useContext(CartContext) 
    if (cart.length === 0){
        return <h1>No hay productos en el carrito</h1>
    }
    
    return (
        <div>
            {cart.map((prod)=>(
                <li key={prod.id}> <img src={prod.img} ></img>{prod.cantidad} {prod.name} <button onClick={() => removeItem(prod.id)}>Borrar Producto</button></li>
            ))}
            <>
               <button onClick={() => clearItem()}>Limpiar carrito</button>
            </>
            <h1>Total: ${getTotal()} </h1>
            <button>Terminar Compra</button>
        </div>
    );
};

export default Cart;