import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userDashboard.css';
import { useNavigate, Link } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import MarketsSection from './MarketSection';
import BTCConverter from './BTCConverter';
import UserNetworkTree from './UserNetworkTree';
import WalletDetails from './WalletDetails';
import ThemeSwitcher from '../components/ThemeSwitcher';
import UserHighchart from './UserHighcharts';
import MLMReport from './MlMReport';
import TransactionHistory from './TransactionHistory';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [cryptoData, setCryptoData] = useState({
    bitcoin: {},
    ethereum: {},
    tether: {},
    marketData: [],
  });
  const [activeSection, setActiveSection] = useState('dashboard');
  const [networkData, setNetworkData] = useState([]);
  const [btcToInr, setBtcToInr] = useState(0);
  const [btcAmount, setBtcAmount] = useState(0);
  const [inrAmount, setInrAmount] = useState(0);
  const [conversionType, setConversionType] = useState('btcToInr');
  const [conversionResult, setConversionResult] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState('');
  const [loading, setLoading] = useState(false);  // Added loading state

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      console.log('No user data found');
    }
  }, []);

  const handleLogout = async () => {
    const userId = localStorage.getItem('user_id');

    if (!userId) {
      setLogoutMessage('User is not logged in or session has expired.');
      return;
    }
    setLoading(true);  // Start loading spinner
    try {
      const response = await fetch('http://127.0.0.1:5002/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        setLogoutMessage(data.message || 'Logout successful!');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
      } else {
        const errorData = await response.json();
        setLogoutMessage(errorData.message || 'Logout failed');
      }
    } catch (error) {
      setLogoutMessage('Error: ' + error.message);
    }
    finally {
      setLoading(false);  // End loading spinner
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin,ethereum,tether',
          vs_currencies: 'usd,inr',
          include_24hr_change: 'true',
        },
      });

      const marketResponse = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      });

      setCryptoData({
        bitcoin: response.data.bitcoin,
        ethereum: response.data.ethereum,
        tether: response.data.tether,
        marketData: marketResponse.data,
      });

      setBtcToInr(response.data.bitcoin.inr);
    } catch (error) {
      console.error('Error fetching cryptocurrency data', error);
    }
  };

  const fetchNetworkData = () => {
    const mockData = [
      {
        id: '1',
        name: 'Parent Node 1',
        children: [
          { id: '2', name: 'Child 1' },
          { id: '3', name: 'Child 2' },
        ],
      },
      {
        id: '4',
        name: 'Parent Node 2',
        children: [
          { id: '5', name: 'Child 3' },
          { id: '6', name: 'Child 4' },
        ],
      },
      // more mock data...
    ];
    setNetworkData(mockData);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'dashboard') {
      fetchCryptoData();
    } else if (section === 'network') {
      fetchNetworkData();
    }
    setMenuOpen(false);
  };

  const handleConversion = () => {
    if (conversionType === 'btcToInr') {
      setConversionResult((btcAmount * btcToInr).toFixed(2));
    } else {
      setConversionResult((inrAmount / btcToInr).toFixed(6));
    }
  };




  const LoadingSpinner = () => (
    <div className="loading-spinner">
      Log Off<br></br>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>

    </div>
  );

  return (
    <div className="userdashboard-container">
      {loading ? (
        <div className="loading-screen">

          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className={`userdashboard-sidebar ${menuOpen ? 'open' : ''}`}>
            <div className="userdashboard-logo">USER DASHBOARD</div>
            <ul className="userdashboard-menu">
              <li>
                <button
                  className={activeSection === 'dashboard' ? 'active' : ''}
                  onClick={() => handleSectionChange('dashboard')}
                >
                  Dashboard Overview
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'wallet' ? 'active' : ''}
                  onClick={() => handleSectionChange('wallet')}
                >
                  Wallet Details
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'network' ? 'active' : ''}
                  onClick={() => handleSectionChange('network')}
                >
                  Network
                </button>
              </li>
              
              <li>
                <button
                  className={activeSection === 'transaction' ? 'active' : ''}
                  onClick={() => handleSectionChange('transaction')}
                >
                 Transaction History
                </button>
              </li>
              <li>
                {/* <button
                  className={activeSection === 'reports' ? 'active' : ''}
                  onClick={() => handleSectionChange('reports')}
                >
                  Reports PDF
                </button> */}
              </li>
              <li>
                {user && (
                  <button onClick={handleLogout}>Log Out</button>
                )}
                {logoutMessage && <p>{logoutMessage}</p>}
              </li>
            </ul>
          </div>

          <div className="userdashboard-main-content">
            <ThemeSwitcher />
            <header className="userdashboard-header">
              <Link to="/" className="home-link-dash ">Home</Link>
              <button className="hamburger-menu" onClick={toggleMenu}>
                ☰
              </button>
            </header>

            {activeSection === 'dashboard' && (
              <>
                <div className="userdashboard-overview">
                  <div>
                    {user ? (
                      <div>
                        <h1 className="userdashboard-header-head">
                          Welcome, {user.username}!
                        </h1>
                        <p className="userdashboard-header-content">
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p className="userdashboard-header-content">
                          <strong>Phone:</strong> {user.phone_number}
                        </p>
                        <p className="userdashboard-header-content">
                          <strong>Referral Code:</strong> {user.referral_code}
                        </p>
                      </div>
                    ) : (
                      <p>Loading user data...</p>
                    )}
                  </div>
                  <MarketsSection cryptoData={cryptoData} />
                </div>

                <div className="dashboard-main">
                  <section className="userdashboard-highchart-section">
                    <h3>TOTAL EARNINGS</h3>
                    <UserHighchart />
                  </section>

                </div>
                <BTCConverter />
              </>
            )}
            {activeSection === 'wallet' && <WalletDetails />}
            {activeSection === 'network' && (
              <section className="network-section">
                <h3>User Network</h3>
                <UserNetworkTree />
              </section>
            )}
            {activeSection === 'reports' && <MLMReport />}
            {activeSection === 'transaction' && <TransactionHistory/>}
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
