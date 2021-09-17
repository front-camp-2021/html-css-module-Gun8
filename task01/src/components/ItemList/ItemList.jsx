import React, {useState} from 'react';
import Item from '../Item';
import './ItemList.css';

const ItemList = () => {

    const [data, setData] = useState([
        {img: 'apple-watch.png', rating: 3.4, price: 399, title: "Apple Watch Series 4 GPS"},
        {img: 'jbl-speaker.png', rating: 4.4, price: 199, title: "JBL Speaker"},
        {img: 'iphone-x.png', rating: 4.8, price: 899, title: "Apple iPhone X 128GB"},
        {img: 'beats-headphones.png', rating: 4.3, price: 459, title: "Beats Headphones"}
    ]);

    return(
        <div className="item-list">
            {data.map(obj => <Item obj = {obj}/>)}
        </div>
    );
};

export default ItemList;