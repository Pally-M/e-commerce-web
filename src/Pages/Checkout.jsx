import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ShippingAddress from '../Components/ShippingAddress';
import PaymentMethod from '../Components/PaymentDetails';
import OrderSummary from '../Components/OrderSummary';
import Rating from "../Components/Rating";
import "../styles/Checkout.css";


const Checkout = () => {
    const location = useLocation();
    const { cartItems } = location.state || { cartItems: [] };

    const initialShippingDetails = {
        fullName: 'John Maker',
        addressLine1: '123 Plae Ground Street',
        addressLine2: 'Vermont',
        city: 'California',
        state: 'CA',
        zipCode: '90001',
        country: 'United States of America',
    };

    const initialPaymentDetails = {
        mastercardNumber: 'Master Card ending in 1252',
        giftCardBalance: '$53.21 gift card balance',
        billingAddress: 'same as shipping address',
    };

    const [shippingDetails, setShippingDetails] = useState(initialShippingDetails);
    const [paymentDetails, setPaymentDetails] = useState(initialPaymentDetails);

    const calculateTotal = () => {
        const itemsTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const shippingCost = 10.00; // Example shipping cost
        const estimatedGST = (itemsTotal + shippingCost) * 0.05; // Example GST calculation at 5%
        const giftCardBalance = parseFloat(paymentDetails.giftCardBalance.replace('$', '')) || 0;
        const total = itemsTotal + shippingCost + estimatedGST - giftCardBalance;
        return total.toFixed(2);
    };

    return (
        <div className="main-container">
            <div className="container">
                <h2>Checkout</h2>

                {/* Shipping Address Section */}
                <div className="section">
                    <h3>Shipping Address</h3>
                    <div className="section-content">
                        <ShippingAddress
                            shippingDetails={shippingDetails}
                            setShippingDetails={setShippingDetails}
                            readOnly={false}
                        />
                    </div>
                    <div className="section-actions">
                        <Link to="/address">
                            <button className="change-button">Change</button>
                        </Link>
                    </div>
                </div>

                {/* Payment Method Section */}
                <div className="section payment-section">
                    <h3>Payment Method</h3>
                    <div className="section-content">
                        <PaymentMethod
                            paymentDetails={paymentDetails}
                            setPaymentDetails={setPaymentDetails}
                            readOnly={false}
                        />
                    </div>
                    <div className="section-actions">
                        <Link to="/payment">
                            <button className="change-button">Change</button>
                        </Link>
                    </div>
                </div>

                {/* Review Your Bag Section */}
                <div className="section" id="review-your-bag">
                    <h3>Review Your Bag</h3>
                    <div className="section-content">
                        <div id="bagSummary">
                            {cartItems.map(item => (
                                <div key={item.id} className="bag-item">
                                    <div>
                                        <div style={{ display: 'flex', padding: '5rem' }}>
                                            <div className="product-image-container">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="product-details" >
                                                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                                                <h4>{item.tags}</h4>
                                                <p>{item.shortDescription}</p>
                                                <div>
                                                   <Rating />
                                                </div>
                                                <p>${item.price.toFixed(2)} x  {item.quantity}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="back-btn">
                    <Link to="/bag">
                        <button className="btn4">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 1.25L1.625 8L8.375 14.75" stroke="#1A1F16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        {' '} Back
                        </button>

                    </Link>
                </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
                <OrderSummary
                    itemsTotal={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                    shippingCost={10.00}
                    estimatedGST={(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 10.00) * 0.05}
                    giftCardBalance={parseFloat(paymentDetails.giftCardBalance.replace('$', '')) || 0}
                    calculateTotal={calculateTotal}
                />
            </div>
        </div>

    );

};

export default Checkout;