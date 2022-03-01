import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    const [qty, setQty] = useState(0);

    const onAdd = (cantidad) => {
        setQty(cantidad);
    };
    return (
        <div className='itemDetailContenedor'>
            <img className='imagenDeDetail' src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>

                {qty === 0 ? (
                    <Counter stock={product.stock} onAdd={onAdd} />
                ) : (
                    <>
                        <Link to="/cart">
                            Ir al carrito
                        </Link>
                    </>
                )}
                <Link to="/">
                    Volver al Home
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;