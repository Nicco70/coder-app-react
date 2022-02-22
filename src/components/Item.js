import './ItemList.css'

const Item = ({ product }) => {
    return (
        <div className='itemDeList'>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name}/>
        </div>
    );
};

export default Item;