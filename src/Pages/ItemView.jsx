import React from 'react';
import Sidebar from '../Components/Sidebar';
import Product from '../Components/ProductDetail';
import Sidebag from '../Components/Sidebag';

const ItemView = () => {
    return (
        <>
        <Sidebar />
        <Product />
        <Sidebag />
        </>
    );
}

export default ItemView;