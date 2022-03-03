import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {
    const {cart} = useContext(CartContext) 
    
    return (
        <div>
            {cart.map((prod)=>(
                <li key={prod.id}> <img src={prod.img} ></img>{prod.cantidad} {prod.name} <button>Borrar Producto</button></li>
            ))}
            <>
               <button /* onClick={} */>Limpiar carrito</button>
            </>
        </div>
    );
};

export default Cart;