import React from 'react';
import './Item.css';

const Item = (props) => {
    const {img, rating, price, title} = props.obj;
    console.log(title);
    return(
        <div className="item">
            <img className="item-img" src={'/img/' + img} alt={title}/>
            <div className="rating-and-price">
                <div className="rating">
                    {rating}
                    <img src={"/img/star.svg"} alt=""/>
                </div>
                <div className="price">${price}</div>
            </div>
            <div className="item-description">
                <h2>{title}</h2>
                <p>Redesigned from scratch and completely revised</p>
            </div>
            <div className="item-buttons">
                <div className="wishlist-btn">
                    <img src={"/img/heart.svg"} alt=""/>
                    wishlist
                </div>
                <div className="add-to-cart-btn">
                    <img src={"/img/shopping-bag.png"} alt=""/>
                    add to cart
                </div>
            </div>
        </div>
    );
};

export default Item;