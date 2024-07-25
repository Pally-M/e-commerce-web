import React from 'react';
import Card from "../Assets/Name=card.png";
import Gift from "../Assets/Name=gift.png";

const PaymentDetails = ({ paymentDetails, isEditingPayment, handleInputChange, savePaymentDetails, togglePaymentEdit }) => {
    return (
        <div className="section" id="payment-method">
           
            {!isEditingPayment ? (
                <div>
                    <p><img src={Card} alt="Mastercard    " />&nbsp;Mastercard Number: {paymentDetails.mastercardNumber}</p>
                    <p><img src={Gift} alt="Mastercard   " />&nbsp;Gift Card Balance: {paymentDetails.giftCardBalance}</p>
                    <p><img src={Gift} alt="Mastercard   " /> &nbsp;Billing Address: {paymentDetails.billingAddress}</p>
                   
                </div>
            ) : (
                <form>
                    <div className="form-group">
                        <label htmlFor="mastercardNumber">Mastercard Number</label>
                        <input
                            type="text"
                            id="mastercardNumber"
                            name="mastercardNumber"
                            value={paymentDetails.mastercardNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="giftCardBalance">Gift Card Balance</label>
                        <input
                            type="text"
                            id="giftCardBalance"
                            name="giftCardBalance"
                            value={paymentDetails.giftCardBalance}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddress">Billing Address</label>
                        <input
                            type="text"
                            id="billingAddress"
                            name="billingAddress"
                            value={paymentDetails.billingAddress}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="button" onClick={savePaymentDetails}>Save</button>
                </form>
            )}
        </div>
    );
};

export default PaymentDetails;