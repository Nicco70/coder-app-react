const ItemDetail = ({ item }) => {
    return (
        <div className='ItemDetail'>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} key={item.id}/>
            <h2>{item.price}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;