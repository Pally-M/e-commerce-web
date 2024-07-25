import React, { useState } from 'react';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import appleWatch from '../Assets/apple-watch.png';
import headphones from '../Assets/headphones.png';
import iphone11Black from '../Assets/iphone-11-black.png';
import iphone11Green from '../Assets/iphone-11-green.png';
import iphone11Red from '../Assets/iphone-11-red.png';
import iphone11White from '../Assets/iphone-11-white.png';
import dellXpsWhite from '../Assets/dell-xps-13-white.png';
import iphone11Blue from '../Assets/iphone-12-pro-blue.png';
import macbook from '../Assets/macbook.png';
import samsungNote21 from '../Assets/samsung-note21.png';
import '../App.css';
import { addToSideBag } from './Sidebag';
import { addToBag } from './Bag';

const ProductList = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        {
            id: 1,
            image: appleWatch,
            name: "Apple Watch",
            smallDescription: "Series 5 SE",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 529.99,
            rating: 4
        },
        {
            id: 2,
            image: headphones,
            name: "Sony ZX33OBT",
            smallDescription: "Light Grey",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescriptio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 39.99,
            rating: 4
        },
        {
            id: 3,
            image: iphone11Black,
            name: "iPhone 11",
            smallDescription: "Serious Black",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 4,
            image: iphone11Green,
            name: "iPhone 11",
            smallDescription: "Subway Blue",
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 5,
            image: iphone11Red,
            name: "iPhone 11",
            smallDescription: "Product RED",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 6,
            image: iphone11White,
            name: "iPhone 11",
            smallDescription: "Milky White",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 7,
            image: iphone11Red,
            name: "iPhone 13",
            smallDescription: "Product RED",
            description : 'Upgrade to the iPhone 13 in Product RED for enhanced performance, stunning camera capabilities, and vibrant design.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 8,
            image: iphone11Red,
            name: "iPhone 14",
            smallDescription: "Product RED",
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 619.99,
            rating: 4
        },
        {
            id: 9,
            image: dellXpsWhite,
            name: "Dell XPS 13",
            smallDescription: "White",
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 1799.99,
            rating: 4
        },
        {
            id: 10,
            image: iphone11Blue,
            name: "iPhone 11",
            smallDescription: "Navy Blue",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 729.99,
            rating: 4
        },
        {
            id: 11,
            image: macbook,
            name: "Macbook",
            smallDescription: "Macbook Air",
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 3799.99,
            rating: 5
        },
        {
            id: 12,
            image: samsungNote21,
            name: "Samsung Note 21",
            smallDescription: "Violet",
            fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce commodo vestibulum nulla, quis gravida ex placerat vel.Integer sagittis eros nec libero vehicula, non fringilla neque eleifend.Phasellus commodo diam in arcu posuere, quis consectetur ligula consectetur.Sed ultricies ex a felis luctus, vitae efficitur lacus pharetra.Quisque lacinia justo sit amet leo fermentum, sed suscipit leo mattis.Ut nec elit at ipsum tempor scelerisque.Vivamus dictum lorem ut quam luctus, sed convallis leo varius.Sed eget elit ut nisi fermentum ultrices.Nullam nec nulla in libero lobortis molestie nec in libero.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac libero nec magna tincidunt volutpat.Curabitur nec libero id lorem commodo tempor.Mauris in odio eget sem bibendum posuere ac eu nisl.Aliquam erat volutpat.Phasellus feugiat, eros eget tristique vehicula, est risus aliquam lacus, ac suscipit nisl velit at nibh.Sed elementum odio sit amet sapien iaculis, sed vestibulum libero scelerisque.Mi vate risus eros.',
            price: 319.99,
            rating: 4
        }
    ];

    const handleItemView = (product) => {

       navigate('/item-view', {state: {product} });
    };

    const handleAddToBag = (product) => {
        addToSideBag(product);
        addToBag(product);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='container'>
                <div className="search-bar mb-4 mx-auto" style={{ maxWidth: '50%' }}>
                    <label className="search-label" htmlFor="search">Search Item</label>
                    <input
                        type="text"
                        id="search"
                        className="form-control"
                        placeholder="Apple Watch, Samsung 21, Macbook Pro"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            <div className='row'>
                {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-12 col-sm-12 mb-4'>
                        <div className='card w-50 border-0 bg-transparent' >
                            <img src={product.image} alt={product.name} className="card-image mx-auto d-block" height='230' width='190' onClick={() => handleItemView(product)} />
                            <div className="card-content d-flex flex-column">
                                <div className="card-title">{product.name}</div>
                                <div className="card-description">{product.smallDescription}</div>
                                <div className="mt-auto d-flex action">
                                    <span className="card-price">$ {product.price}</span>
                                    <button className='btn' onClick={() =>
                                        handleAddToBag(product)}>
                                        <i className='bi bi-bag-plus-fill'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <div className="col-12">
                        <p>No results</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default ProductList;