

// import React, { useState } from 'react';
// import './btcConverter.css';
// // import PerformanceChart from './PerformanceChart';

// const BTCConverter = () => {
//   const [conversionType, setConversionType] = useState('btcToInr'); // Default to BTC to INR
//   const [btcAmount, setBtcAmount] = useState('');
//   const [inrAmount, setInrAmount] = useState('');
//   const [conversionResult, setConversionResult] = useState('');
//   const [cryptoType, setCryptoType] = useState('btc'); // Default to BTC
//   const BTC_TO_INR_RATE = 2000000; // 1 BTC = 2,000,000 INR (example rate)
//   const ETH_TO_INR_RATE = 150000; // 1 ETH = 150,000 INR (example rate)
//   const USDT_TO_INR_RATE = 1; // 1 USDT = 1 INR (example rate)
//   const INR_TO_BTC_RATE = 1 / BTC_TO_INR_RATE; // Conversion for INR to BTC
//   const INR_TO_ETH_RATE = 1 / ETH_TO_INR_RATE; // Conversion for INR to ETH
//   const INR_TO_USDT_RATE = 1 / USDT_TO_INR_RATE; // Conversion for INR to USDT

//   // Conversion logic
//   const handleConversion = () => {
//     let result;
//     if (conversionType === 'btcToInr') {
//       if (cryptoType === 'btc') {
//         result = btcAmount * BTC_TO_INR_RATE;
//         setConversionResult(`${result.toFixed(2)} INR`);
//       } else if (cryptoType === 'eth') {
//         result = btcAmount * ETH_TO_INR_RATE; // ETH conversion
//         setConversionResult(`${result.toFixed(2)} INR`);
//       } else if (cryptoType === 'usdt') {
//         result = btcAmount * USDT_TO_INR_RATE; // USDT conversion
//         setConversionResult(`${result.toFixed(2)} INR`);
//       }
//     } else if (conversionType === 'inrToBtc') {
//       if (cryptoType === 'btc') {
//         result = inrAmount * INR_TO_BTC_RATE;
//         setConversionResult(`${result.toFixed(8)} BTC`);
//       } else if (cryptoType === 'eth') {
//         result = inrAmount * INR_TO_ETH_RATE;
//         setConversionResult(`${result.toFixed(8)} ETH`);
//       } else if (cryptoType === 'usdt') {
//         result = inrAmount * INR_TO_USDT_RATE;
//         setConversionResult(`${result.toFixed(8)} USDT`);
//       }
//     }
//   };

//   // Event handler for input change (INR or BTC)
//   const handleAmountChange = (e) => {
//     if (conversionType === 'btcToInr') {
//       setBtcAmount(e.target.value);
//     } else if (conversionType === 'inrToBtc') {
//       setInrAmount(e.target.value);
//     }
//   };

//   // Update conversion type
//   const handleConversionTypeChange = (type) => {
//     setConversionType(type);
//     // Reset amounts when switching conversion type
//     setBtcAmount('');
//     setInrAmount('');
//     setConversionResult('');
//   };

//   return (
//     <section className="userdashboard-converter">
//       <h3>Convert</h3>
//       <div className="userdashboard-conversion-type">
//         <button
//           onClick={() => handleConversionTypeChange('btcToInr')}
//           className={conversionType === 'btcToInr' ? 'active' : ''}
//         >
//           BTC/ETH/USDT to INR
//         </button>
//         <button
//           onClick={() => handleConversionTypeChange('inrToBtc')}
//           className={conversionType === 'inrToBtc' ? 'active' : ''}
//         >
//           INR to BTC/ETH/USDT
//         </button>
//       </div>

//       <div className="userdashboard-crypto-select">
//         <select onChange={(e) => setCryptoType(e.target.value)} value={cryptoType}>
//           <option value="btc">BTC</option>
//           <option value="eth">ETH</option>
//           <option value="usdt">USDT</option>
//         </select>
//       </div>

//       <div className="userdashboard-conversion-form">
//         {conversionType === 'btcToInr' ? (
//           <>
//             <input
//               type="number"
//               placeholder={`Enter ${cryptoType.toUpperCase()} Amount`}
//               value={btcAmount}
//               onChange={handleAmountChange}
//             />
//             <span className="currency">{cryptoType.toUpperCase()}</span>
//           </>
//         ) : (
//           <>
//             <input
//               type="number"
//               placeholder="Enter INR Amount"
//               value={inrAmount}
//               onChange={handleAmountChange}
//             />
//             <span className="currency">INR</span>
//           </>
//         )}
//       </div>

//       <button onClick={handleConversion} className="convert-button">Convert Now</button>
//       <h4>Conversion Result: {conversionResult || "Enter a value to convert"}</h4>
      
//       <p className="conversion-note">
//         The ultimate price and output are determined by the amount of tokens in the pool at the time of your swap.
//       </p>
//       {/* <PerformanceChart /> */}
//     </section>
//   );
// };

// export default BTCConverter;

import React, { useState } from 'react';
import './btcConverter.css';
import PerformanceChart from './PerformanceChart';

const BTCConverter = () => {
  const [conversionType, setConversionType] = useState('btcToInr');
  const [btcAmount, setBtcAmount] = useState('');
  const [inrAmount, setInrAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');  // State for USDT
  const [conversionResult, setConversionResult] = useState('');
  
  // Conversion rates
  const BTC_TO_INR_RATE = 2000000; // 1 BTC = 2,000,000 INR (example rate)
  const INR_TO_BTC_RATE = 1 / BTC_TO_INR_RATE; // Conversion for INR to BTC
  const USDT_TO_INR_RATE = 1; // Assuming 1 USDT = 1 INR (replace with actual rate)
  const INR_TO_USDT_RATE = 1 / USDT_TO_INR_RATE; // Assuming 1 INR = 1 USDT

  const handleConversion = () => {
    if (conversionType === 'btcToInr') {
      const result = btcAmount * BTC_TO_INR_RATE;
      setConversionResult(`${result.toFixed(2)} INR`);
    } else if (conversionType === 'inrToBtc') {
      const result = inrAmount * INR_TO_BTC_RATE;
      setConversionResult(`${result.toFixed(8)} BTC`);
    } else if (conversionType === 'usdtToInr') {
      const result = usdtAmount * USDT_TO_INR_RATE;
      setConversionResult(`${result.toFixed(2)} INR`);
    } else if (conversionType === 'inrToUsdt') {
      const result = inrAmount * INR_TO_USDT_RATE;
      setConversionResult(`${result.toFixed(2)} USDT`);
    }
  };

  return (
    <div className="userdashboard-converter-two">
      {/* BTC Converter Section */}
      <div className="userdashboard-converter">
        <h3>Convert</h3>
        <div className="userdashboard-conversion-type">
          <button
            onClick={() => setConversionType('btcToInr')}
            className={conversionType === 'btcToInr' ? 'active' : ''}
          >
            BTC to INR
          </button>
          <button
            onClick={() => setConversionType('inrToBtc')}
            className={conversionType === 'inrToBtc' ? 'active' : ''}
          >
            INR to BTC
          </button>
          <button
            onClick={() => setConversionType('usdtToInr')}
            className={conversionType === 'usdtToInr' ? 'active' : ''}
          >
            USDT to INR
          </button>
          <button
            onClick={() => setConversionType('inrToUsdt')}
            className={conversionType === 'inrToUsdt' ? 'active' : ''}
          >
            INR to USDT
          </button>
        </div>
        <div className="userdashboard-conversion-form">
          {conversionType === 'btcToInr' ? (
            <>
              <input
                type="number"
                placeholder="Enter BTC Amount"
                value={btcAmount}
                onChange={(e) => setBtcAmount(e.target.value)}
              />
              <span className="currency">BTC</span>
            </>
          ) : conversionType === 'inrToBtc' ? (
            <>
              <input
                type="number"
                placeholder="Enter INR Amount"
                value={inrAmount}
                onChange={(e) => setInrAmount(e.target.value)}
              />
              <span className="currency">INR</span>
            </>
          ) : conversionType === 'usdtToInr' ? (
            <>
              <input
                type="number"
                placeholder="Enter USDT Amount"
                value={usdtAmount}
                onChange={(e) => setUsdtAmount(e.target.value)}
              />
              <span className="currency">USDT</span>
            </>
          ) : (
            <>
              <input
                type="number"
                placeholder="Enter INR Amount"
                value={inrAmount}
                onChange={(e) => setInrAmount(e.target.value)}
              />
              <span className="currency">INR</span>
            </>
          )}
        </div>
        <button onClick={handleConversion} className="convert-button">
          Convert Now
        </button>
        <h4>Conversion Result: {conversionResult}</h4>
        <p className="conversion-note">
          The ultimate price and output are determined by the amount of tokens in the pool at the time of your swap.
        </p>
      </div>
    
      {/* Performance Chart Section */}
      <div className="performance-chart-container">
        <PerformanceChart />
      </div>
    </div>
  );
};

export default BTCConverter;
