import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProductList from '../Components/ProductList';
import Sidebag from '../Components/Sidebag';

const Dasboard = () => {
    return (
        <>
        <div className="container m">
        <Sidebar />
             <div className="row ms-3">

                <div className="col-9">
                    <ProductList />
                </div>
                <div className="col-3 me-0">
                <Sidebag />
                </div>
             </div>
        </div>

        </>
    );
};
        

export default Dasboard;