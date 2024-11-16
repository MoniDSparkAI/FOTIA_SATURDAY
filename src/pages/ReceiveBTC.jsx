import React, { useState } from 'react';
import './receiveBTC.css';

function ReceiveBTC({ setCurrentView }) {
  const [qrCode, setQrCode] = useState(null);
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false); // State to track if the link has been copied

  const handleBackClick = () => {
    setCurrentView('wallet'); // Go back to the wallet view
  };

  const handleGenerateQR = () => {
    // Mock address and QR code generation logic
    const newAddress = 'bc1q6d749dy5gsnzx7...zfLg4cpw0gtkwdn';
    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(
      newAddress
    )}`;

    setAddress(newAddress);
    setQrCode(qrCodeUrl);
  };

  const handleCopyClick = () => {
    if (qrCode) {
      navigator.clipboard.writeText(qrCode);
      setCopied(true); // Set copied to true
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className="receive-btc">
      <h2 className="receive-head">Receive BTC</h2>

      <div className="tab-buttons">
        <button className="active-tab" onClick={handleGenerateQR}>
          Address
        </button>
      </div>

      <div className="qr-code">
        {qrCode ? (
          <img src={qrCode} alt="QR Code" />
        ) : (
          <p>Click "Address" to generate a QR code.</p>
        )}
      </div>

      <div className="labels-section">
        <label>ADDRESS</label><br />
        <input
          type="text"
          placeholder="QR code link will appear here"
          value={qrCode || ''}
          readOnly
        />
        {qrCode && (
          <>
            <button className="copy-btn" onClick={handleCopyClick}>
              Copy Address
            </button>
            {copied && <span className="copied-message">Address copied!</span>} {/* Display "Link copied" message */}
          </>
        )}
      </div>

      <button className="back-btn" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
}

export default ReceiveBTC;
