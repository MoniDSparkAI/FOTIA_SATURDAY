// VerifyEmail.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const VerifyyEmail = () => {
    const { token } = useParams();
    const [message, setMessage] = useState("Verifying your email...");
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Call the backend verification endpoint when the component loads
        axios.get(`http://127.0.0.1:5001/verify-email/<token>`)
            .then(response => {
                setMessage("Verification successful!");
                setIsVerified(true);
            })
            .catch(error => {
                setMessage("Verification failed. The link may be expired or invalid.");
            });
    }, [token]);

    const handleRedirect = () => {
        navigate('/Login');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>{message}</h2>
            {isVerified && (
                <button 
                    onClick={handleRedirect} 
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Go to Login
                </button>
            )}
        </div>
    );
};

export default VerifyyEmail;
