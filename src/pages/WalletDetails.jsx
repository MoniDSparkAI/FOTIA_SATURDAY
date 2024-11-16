// import React, { useState } from 'react';
// import './walletDetails.css';
// import ReceiveBTC from './ReceiveBTC';
// import SendBTC from './SendBTC';

// function WalletDetails() {
//   const [currentView, setCurrentView] = useState('wallet'); // Tracks the current view
//   const [selectedCoin, setSelectedCoin] = useState('Tether'); // Tracks selected coin
//   const [selectedNetwork, setSelectedNetwork] = useState('Polygon'); // Tracks selected network

//   const renderView = () => {
//     switch (currentView) {
//       case 'receive':
//         return <ReceiveBTC setCurrentView={setCurrentView} />;
//       case 'send':
//         return <SendBTC setCurrentView={setCurrentView} />;
//       default:
//         return (
//           <div className="wallet-details">
//         <h3 className='wallet-details-instruction'>  ! We currently support Tether (Polygon) only !</h3>
//             <div className="dropdowns">
           
//               <div className="coin-select">
//                 <h3>Select Coin</h3>
//                 <select value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
              
//                   <option value="Tether">Tether</option>
//                   <option value="Bitcoin">Bitcoin</option>
//                   <option value="Ethereum">Ethereum</option>
//                 </select>
//               </div>
//               <div className="network-select">
//                 <h3>Select Network</h3>
//                 <select value={selectedNetwork} onChange={(e) => setSelectedNetwork(e.target.value)}>
                
//                   <option value="Ethereum">ETH</option>
//                   <option value="BNB">BTC</option>
//                   <option value="Polygon">Polygon</option>
//                   <option value="Solana">Solana</option>
//                 </select>
//               </div>
//             </div>
//             <h2>{selectedCoin} Wallet</h2>
//             <p>0.00000000 {selectedCoin} (0.00 USD)</p>
//             <p>There are no transactions yet.</p>
//             <div className="wallet-buttons">
//               <button className="send-btn" onClick={() => setCurrentView('send')}>
//                 Send
//               </button>
//               <button className="receive-btn" onClick={() => setCurrentView('receive')}>
//                 Receive
//               </button>
//             </div>
//           </div>
//         );
//     }
//   };

//   return <div className="wallet-container">{renderView()}</div>;
// }

// export default WalletDetails;

import React, { useState, useEffect } from 'react';
import './walletDetails.css';
import QRCode from 'qrcode';
function WalletDetails() {
  const [walletAddress, setWalletAddress] = useState('');
  const [usdtBalance, setUsdtBalance] = useState(null);
  const [maticBalance, setMaticBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSendPopup, setShowSendPopup] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);

  const [selectedCoin, setSelectedCoin] = useState('Tether'); // Tracks selected coin
   const [selectedNetwork, setSelectedNetwork] = useState('Polygon'); // Tracks selected network

  const [formData, setFormData] = useState({
    from_address: '',
    private_key: '',
    to_address: '',
    amount: ''
  });

  const userId = localStorage.getItem('user_id');
  const [qrCode, setQrCode] = useState('');
  const [showReceiveQr, setShowReceiveQr] = useState(false);


  useEffect(() => {
    const fetchWalletDetails = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        setError('');
        const walletResponse = await fetch(`http://localhost:5005/get_wallet_address/${userId}`);
        const walletData = await walletResponse.json();

        if (walletResponse.ok) {
          setWalletAddress(walletData.wallet_address);
        } else {
          setError(walletData.error || 'Failed to fetch wallet address.');
        }
      } catch (error) {
        setError('Error fetching wallet details.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletDetails();
  }, [userId]);

  const fetchBalances = async () => {
    if (!walletAddress) {
      setError('Wallet address not found.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const balanceResponse = await fetch(`http://localhost:5005/balance/${userId}`);
      const balanceData = await balanceResponse.json();

      if (balanceResponse.ok) {
        setUsdtBalance(balanceData.usdt_balance);
        setMaticBalance(balanceData.matic_balance);
      } else {
        setError(balanceData.error || 'Failed to fetch balances.');
      }
    } catch (error) {
      setError('Error fetching balances.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sendToken = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5006/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          user_id: userId
        })
      });

      const data = await response.json();

      if (response.ok) {
        setTransactionHash(data.txn_hash);
       
        setShowSendPopup(false);
      } else {
        setError(data.error || 'Transaction failed.');
      }
    } catch (error) {
      setError('Error sending token.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReceiveClick = async () => {
    if (!walletAddress) {
      setError('Wallet address not found.');
      return;
    }

    try {
      // Generate the QR code for the wallet address
      const qrCodeData = await QRCode.toDataURL(walletAddress);
      setQrCode(qrCodeData);
      setShowReceiveQr(true);
    } catch (error) {
      setError('Error generating QR code.');
      console.error(error);
    }
  };

  return (
    <div className="wallet-details">
       <h3 className='wallet-details-instruction'>  ! We currently support Tether (Polygon) only !</h3>
          
       <div className="dropdowns">
           
               <div className="coin-select">
                <h3>Select Coin</h3>                 <select value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
              
                   <option value="Tether">Tether</option>
                   <option value="Bitcoin">Bitcoin</option>
                   <option value="Ethereum">Ethereum</option>
                </select>
              </div>
              <div className="network-select">
                 <h3>Select Network</h3>
                <select value={selectedNetwork} onChange={(e) => setSelectedNetwork(e.target.value)}>
                
                   <option value="Ethereum">ETH</option>
                  <option value="BNB">BTC</option>
                  <option value="Polygon">Polygon</option>
                   <option value="Solana">Solana</option>
                 </select>
               </div>
             </div>
      {loading ? (
        <p className='balance-details'>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {walletAddress ? (
            <>
            <p className='balance-details-instruction'> Click the <b>Check Balance</b> button to view your balance details</p>
              <p className='balance-details'>Wallet Address<br></br><br></br> {walletAddress}</p>
              <p className='balance-details' >USDT Balance: {usdtBalance !== null ? `${usdtBalance} USDT` : 'Not fetched'}</p>
              <p className='balance-details'>MATIC Balance: {maticBalance !== null ? `${maticBalance} MATIC` : 'Not fetched'}</p>
              <button className="send-btn" onClick={fetchBalances}>
                Check Balance
              </button>
              <button className="send-btn" onClick={() => setShowSendPopup(true)}>
                Send Token
              </button>
              <button className="receive-btn" onClick={handleReceiveClick}>
                Receive
              </button>
              {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
            </>
          ) : (
            <p>No wallet address found for the user.</p>
          )}
        </>
      )}

{showSendPopup && (
  <div className="popup-wallet">
    <h3>Send Token</h3>
    <input
      className="popup-input"
      type="text"
      name="from_address"
      placeholder="From Address"
      value={formData.from_address}
      onChange={handleInputChange}
    />
    <input
      className="popup-input"
      type="text"
      name="private_key"
      placeholder="Private Key"
      value={formData.private_key}
      onChange={handleInputChange}
    />
    <input
      className="popup-input"
      type="text"
      name="to_address"
      placeholder="To Address"
      value={formData.to_address}
      onChange={handleInputChange}
    />
    <input
      className="popup-input popup-input-number"
      type="number"
      name="amount"
      placeholder="Amount"
      value={formData.amount}
      onChange={handleInputChange}
    />
    <button className="send-button" onClick={sendToken}>Send</button>
    <button className="cancel-button" onClick={() => setShowSendPopup(false)}>Cancel</button>
  </div>
)}

{transactionHash && (
  <div className="transaction-details">
    <h4>Transaction Hash: {transactionHash}</h4>
    {transactionDetails && (
      <div>
        <p>From: {transactionDetails.from}</p>
        <p>To: {transactionDetails.to}</p>
        <p>Amount: {transactionDetails.amount} USDT</p>
        <p>Timestamp: {transactionDetails.timestamp}</p>
      </div>
    )}
  </div>
)}
  {showReceiveQr && (
        <div className="popup-wallet">
          <div className="popup-content">
            <h3>Receive USDT</h3>
            <p>Scan this QR code to receive USDT:</p>
            <img src={qrCode} alt="Wallet Address QR Code" />
            <button className='send-button' onClick={() => setShowReceiveQr(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default WalletDetails;

