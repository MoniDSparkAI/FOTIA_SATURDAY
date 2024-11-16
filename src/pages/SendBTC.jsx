import React, { useState } from 'react';
import './sendBTC.css'; // Styles for the Send BTC page

function SendBTC({ setCurrentView }) {
    const [formData, setFormData] = useState({ address: '', amount: '' });
    const [errors, setErrors] = useState({ address: '', amount: '' });

    const handleBackClick = () => {
        setCurrentView('wallet'); // Go back to the wallet view
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when the user starts typing
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        const btcAddressPattern = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

        if (!formData.address || !btcAddressPattern.test(formData.address)) {
            newErrors.address = 'Please enter a valid Address.';
        }   
        if (!formData.amount || parseFloat(formData.amount) <= 0) {
            newErrors.amount = 'Amount must be greater than 0.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Transaction signed successfully!');
            // Additional logic to handle the transaction can be added here
        }
    };

    const handleClear = () => {
        setFormData({ address: '', amount: '' });
        setErrors({ address: '', amount: '' });
    };

    return (
        <div className="send-btc">
            <h1>Send BTC</h1>
            <form className="send-form" onSubmit={handleSubmit}>
                <label htmlFor="address">
                    Destination Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter a valid Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    autoComplete="off"
                />

                {errors.address && <span className="error-message">{errors.address}</span>}

                <label htmlFor="amount">
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
                {errors.amount && <span className="error-message">{errors.amount}</span>}

                <div className="form-buttons">
                    <button type="button" onClick={handleBackClick}>
                        Back
                    </button>

                    <button type="submit">Sign Transaction</button>
                    <button type="button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SendBTC;
