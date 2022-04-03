import React from 'react';
import UseProducts from '../UseProducts/UseProducts';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div>
            <h1>This is order page { products.length }</h1>
        </div>
    );
};

export default Orders;