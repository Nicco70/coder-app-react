import './ItemList.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className='itemDeList'>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name}/>
            <div>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;