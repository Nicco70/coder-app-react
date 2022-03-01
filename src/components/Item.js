import { Link } from 'react-router-dom';
import './ItemList.css'

const Item = ({ img, name, id }) => {
    return (
        <div className='itemDeList'>
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;