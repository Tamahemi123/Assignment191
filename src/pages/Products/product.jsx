

const Product = ({ name, price, imageUrl }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
            <span>${price}</span>
            <a href="#">View Details</a>
        </div>
    );
}

export default Product;
