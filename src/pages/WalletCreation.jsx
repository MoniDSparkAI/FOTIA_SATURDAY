// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './walletcreation.css'; // Import the CSS file for styling

// // const WalletCreation = () => {
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);
// //     const [walletDetails, setWalletDetails] = useState(null);
 
// //     // Get user_id from localStorage
// //     const userId = localStorage.getItem('user_id');

// //     const createWallet = async () => {
// //         if (!userId) {
// //             setError("User ID not found.");
// //             return;
// //         }

// //         setLoading(true);
// //         setError(null);

// //         try {
// //             const response = await axios.post('http://localhost:5004/create_wallet', {
// //                 user_id: userId,
// //             });
// //             setWalletDetails(response.data);
// //         } catch (error) {
// //             setError("An error occurred while creating the wallet.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="wallet-creation">
         
// //             <button onClick={createWallet} className="create-wallet-button">
// //                 Create Fotia Wallet
// //             </button>

// //             {loading && (
// //                 <div className="modal">
// //                     <div className="modal-content">
// //                         <h2>Please wait, creating your wallet...</h2>
// //                     </div>
// //                 </div>
// //             )}

// //             {walletDetails && (
// //                 <div className="wallet-details">
// //                     <h3>Wallet Created Successfully!</h3>
// //                     <p>Address: {walletDetails.address}</p>
// //                     <p>Private Key: {walletDetails.private_key}</p>
// //                 </div>
// //             )}

// //             {error && <p className="error">{error}</p>}
// //         </div>
// //     );
// // };

// // export default WalletCreation;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './walletcreation.css'; // Import the CSS file for styling

// // const WalletCreation = () => {
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);
// //     const [walletDetails, setWalletDetails] = useState(null);
 
// //     // Get user_id from localStorage
// //     const userId = localStorage.getItem('user_id');

// //     const createWallet = async () => {
// //         if (!userId) {
// //             setError("User ID not found.");
// //             return;
// //         }

// //         setLoading(true);
// //         setError(null);

// //         try {
// //             const response = await axios.post('http://localhost:5004/create_wallet', {
// //                 user_id: userId,
// //             });
// //             setWalletDetails(response.data);
// //         } catch (error) {
// //             setError("An error occurred while creating the wallet.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="wallet-creation">
// //             <h1 className="wallet-creation-title">Create Your Fotia Wallet</h1>

// //             <button onClick={createWallet} className="create-wallet-button">
// //                 Create Fotia Wallet
// //             </button>

// //             {loading && (
// //                 <div className="modal">
// //                     <div className="modal-content">
// //                         <h2>Please wait, creating your wallet...</h2>
// //                     </div>
// //                 </div>
// //             )}

// //             {walletDetails && (
// //                 <div className="wallet-details">
// //                     <h3>Wallet Created Successfully!</h3>
// //                     <p><strong>Address:</strong> {walletDetails.address}</p>
// //                     <p><strong>Private Key:</strong> {walletDetails.private_key}</p>
// //                 </div>
// //             )}

// //             {error && <p className="error">{error}</p>}
// //         </div>
// //     );
// // };

// // export default WalletCreation;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './walletcreation.css'; // Import the CSS file for styling

// const WalletCreation = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [walletDetails, setWalletDetails] = useState(null);
 
//     // Get user_id from localStorage
//     const userId = localStorage.getItem('user_id');

//     const createWallet = async () => {
//         if (!userId) {
//             setError("User ID not found.");
//             return;
//         }

//         setLoading(true);
//         setError(null);

//         try {
//             const response = await axios.post('http://localhost:5004/create_wallet', {
//                 user_id: userId,
//             });
//             setWalletDetails(response.data);
//         } catch (error) {
//             setError("An error occurred while creating the wallet.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="wallet-creation">
//             <h1 className="wallet-creation-title">Create Your Fotia Wallet</h1>

//             <button onClick={createWallet} className="create-wallet-button">
//                 <i className="fa fa-wallet"></i> Create Fotia Wallet
//             </button>

//             {loading && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Please wait, creating your wallet...</h2>
//                     </div>
//                 </div>
//             )}

//             {walletDetails && (
//                 <div className="wallet-details">
//                     <h3>Wallet Created Successfully!</h3>
//                     <div className="wallet-card">
//                         <p><strong>Address:</strong> {walletDetails.address}</p>
//                         <p><strong>Private Key:</strong> <span className="tooltip">••••••••
//                             <span className="tooltip-text">{walletDetails.private_key}</span>
//                         </span></p>
//                     </div>
//                 </div>
//             )}

//             {error && <p className="error">{error}</p>}
//         </div>
//     );
// };

// export default WalletCreation;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './walletcreation.css'; // Import the CSS file for styling

// const WalletCreation = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [walletDetails, setWalletDetails] = useState(null);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false); // New state to handle button disablement
 
//     // Get user_id from localStorage
//     const userId = localStorage.getItem('user_id');

//     const createWallet = async () => {
//         if (!userId) {
//             setError("User ID not found.");
//             return;
//         }

//         setLoading(true);
//         setError(null);
//         setIsButtonDisabled(true); // Disable the button when the process starts

//         try {
//             const response = await axios.post('http://localhost:5004/create_wallet', {
//                 user_id: userId,
//             });
//             setWalletDetails(response.data);
//         } catch (error) {
//             setError("An error occurred while creating the wallet.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="wallet-creation">
//             <h1 className="wallet-creation-title">Create Your Fotia Wallet</h1>

//             <button 
//                 onClick={createWallet} 
//                 className="create-wallet-button" 
//                 disabled={isButtonDisabled} // Disable button when state is true
//             >
//                 <i className="fa fa-wallet"></i> Create Fotia Wallet
//             </button>

//             {loading && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Please wait, creating your wallet...</h2>
//                     </div>
//                 </div>
//             )}

//             {walletDetails && (
//                 <div className="wallet-details">
//                     <h3>Wallet Created Successfully!</h3>
//                     <div className="wallet-card">
//                         <p><strong>Address</strong><br></br> <br></br>{walletDetails.address}</p>
//                         <p><strong>Private Key</strong> <br></br><br></br> <span>{walletDetails.private_key}</span>
                         
//                         </p>
//                     </div>
//                 </div>
//             )}

//             {error && <p className="error">{error}</p>}
//         </div>
//     );
// };

// export default WalletCreation;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './walletcreation.css'; // Import the CSS file for styling

// const WalletCreation = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [walletDetails, setWalletDetails] = useState(null);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false); // New state to handle button disablement
 
//     // Get user_id from localStorage
//     const userId = localStorage.getItem('user_id');

//     const createWallet = async () => {
//         if (!userId) {
//             setError("User ID not found.");
//             return;
//         }

//         setLoading(true);
//         setError(null);
//         setIsButtonDisabled(true); // Disable the button when the process starts

//         try {
//             const response = await axios.post('http://localhost:5004/create_wallet', {
//                 user_id: userId,
//             });
//             setWalletDetails(response.data);
//         } catch (error) {
//             setError("An error occurred while creating the wallet.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="wallet-creation">
//             <h1 className="wallet-creation-title">Create Your Fotia Wallet</h1>

//             {/* Only show the button if the wallet is not created */}
//             {!walletDetails && (
//                 <button 
//                     onClick={createWallet} 
//                     className="create-wallet-button" 
//                     disabled={isButtonDisabled} // Disable button while loading
//                 >
//                     <i className="fa fa-wallet"></i> Create Fotia Wallet
//                 </button>
//             )}

//             {loading && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Please wait, creating your wallet...</h2>
//                     </div>
//                 </div>
//             )}

//             {walletDetails && (
//                 <div className="wallet-details">
//                     <h3>Wallet Created Successfully!</h3>
//                     <div className="wallet-card">
//                         <p><strong>Address:</strong><br />{walletDetails.address}</p>
//                         <p><strong>Private Key:</strong><br /><span>{walletDetails.private_key}</span></p>
//                         <p>Note your wallet address and private key.also it will be show on your email id</p>
//                     </div>
//                 </div>
//             )}

//             {error && <p className="error">{error}</p>}
//         </div>
//     );
// };

// export default WalletCreation;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import './walletcreation.css'; // Import the CSS file for styling

const WalletCreation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [walletDetails, setWalletDetails] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // New state to handle button disablement
    const navigate = useNavigate(); // Initialize useNavigate for redirecting

    // Get user_id from localStorage
    const userId = localStorage.getItem('user_id');

    const createWallet = async () => {
        if (!userId) {
            setError("User ID not found.");
            return;
        }

        setLoading(true);
        setError(null);
        setIsButtonDisabled(true); // Disable the button when the process starts

        try {
            const response = await axios.post('http://localhost:5004/create_wallet', {
                user_id: userId,
            });
            setWalletDetails(response.data);
        } catch (error) {
            setError("An error occurred while creating the wallet.");
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        // Redirect to home page when Next button is clicked
        navigate('/MakePayment');  // Update '/home' with your actual route if necessary
    };

    return (
        <div className="wallet-creation">
            <h1 className="wallet-creation-title">Create Your Fotia Wallet</h1>

            {/* Only show the create wallet button if the wallet is not created */}
            {!walletDetails && (
                <button 
                    onClick={createWallet} 
                    className="create-wallet-button" 
                    disabled={isButtonDisabled} // Disable button while loading
                >
                    <i className="fa fa-wallet"></i> Create Fotia Wallet
                </button>
            )}

            {loading && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Please wait, creating your wallet...</h2>
                    </div>
                </div>
            )}

            {walletDetails && (
                <div className="wallet-details">
                    <h3>Wallet Created Successfully!</h3>
                    <div className="wallet-card">
                        <p><strong>Address</strong><br />{walletDetails.address}</p>
                        <p><strong>Private Key</strong><br />{walletDetails.private_key}</p>
                        <p><b>Please note down your wallet address and private key. These details will also be sent to your registered email address.</b></p>
                    </div>
                    {/* Show the "Next" button after wallet creation */}
                    <button onClick={handleNext} className="next-button">
                        Next
                    </button>
                </div>
            )}

            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default WalletCreation;
