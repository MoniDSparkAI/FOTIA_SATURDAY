import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './makepayment.css';

const MakePayment = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState(null);
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [gasFee, setGasFee] = useState('');
    const [txHash, setTxHash] = useState('');
    const [message, setMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const generateQrCode = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5007/generate_qr_code', { responseType: 'blob' });
            const url = URL.createObjectURL(response.data);
            setQrCodeUrl(url);
        } catch (error) {
            console.error('Error generating QR code:', error);
            showMessage('Error generating QR code. Please try again.', false);
        }
    };

    const confirmTransaction = async () => {
        const userId = localStorage.getItem('user_id');

        if (!userId) {
            showMessage('User is not logged in.', false);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5007/confirm_transaction', {
                user_id: userId,
                from_address: fromAddress,
                to_address: toAddress,
                amount,
                gas_fee: gasFee,
                tx_hash: txHash,
            });

            setIsSuccess(response.data.status === 'success');
            showMessage(response.data.message, response.data.status === 'success');

            if (response.data.status === 'success') {
                setFromAddress('');
                setToAddress('');
                setAmount('');
                setGasFee('');
                setTxHash('');
                setTimeout(() => navigate('/UserDashboard'), 3000);
            }
        } catch (error) {
            console.error('Error confirming transaction:', error);
            showMessage('Error confirming transaction. Please check your details and try again.', false);
        }
    };

    const showMessage = (msg, success) => {
        setMessage(msg);
        setIsSuccess(success);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="make-payment-container">
            <h2 className="make-payment-title">Make Payment</h2>
            <button className="generate-qr-button" onClick={generateQrCode}>Generate QR Code</button>
            {qrCodeUrl && <img className="qr-code-image" src={qrCodeUrl} alt="QR Code" />}

            <h3 className="payment-section-title">Enter Transaction Details</h3>
            <label className="payment-label">From Address
                <input
                    className="payment-input"
                    type="text"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    required
                />
            </label>
            <br />

            <label className="payment-label">To Address
                <input
                    className="payment-input"
                    type="text"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    required
                />
            </label>
            <br />

            <label className="payment-label">Amount (USDT)
                <input
                    className="payment-input"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <br />

            <label className="payment-label">Transaction Fee
                <input
                    className="payment-input"
                    type="text"
                    value={gasFee}
                    onChange={(e) => setGasFee(e.target.value)}
                    required
                />
            </label>
            <br />

            <label className="payment-label">Transaction Hash
                <input
                    className="payment-input"
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    required
                />
            </label>
            <br />

            <button className="confirm-transaction-button" onClick={confirmTransaction}>Confirm Transaction</button>

            {popupVisible && (
                <div className="popup-overlay">
                    <div className="popup-message-box">
                        <p className={isSuccess ? 'popup-message-success' : 'popup-message-error'}>{message}</p>
                        <button className="popup-close-button" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MakePayment;
