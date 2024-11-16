// import React, { useState,  useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; 
// import './login.css'; 
// import axios from 'axios';
// import ThemeSwitcher from '../components/ThemeSwitcher';
// import { FaUserAlt, FaEnvelope, FaEye, FaEyeSlash,  FaMobileAlt } from 'react-icons/fa';
// import AOS from 'aos'; // Import AOS for animations
// import 'aos/dist/aos.css'; // Import AOS styles

// const Login = () => {
//     const [identifier, setIdentifier] = useState(''); 
  
   
//     const [error, setError] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginMessage, setLoginMessage] = useState('');
//     const [user, setUser] = useState(null); 
//     const [showPassword, setShowPassword] = useState(false);

//     const navigate = useNavigate(); 
//     useEffect(() => {
//         AOS.init({ duration: 1000 }); // Initialize AOS animations with a duration of 1000ms
//     }, []);

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!identifier || !password) {
//             setLoginMessage('Please fill in all fields');
//             return;
//         }

//         try {
//             const response = await fetch('http://127.0.0.1:5002/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     identifier,
//                     password,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 const userEmail = data.user.email || identifier; // Use email from response or identifier
//                 const userId = data.user_id; // Assuming the backend sends user_id

//                 // Store user data in localStorage
//                 localStorage.setItem('userEmail', userEmail); // Store email in localStorage
//                 localStorage.setItem('user_id', userId); // Store user_id in localStorage

//                 setLoginMessage(data.message);

//                 // Redirect to the UserDashboard
//                 navigate('/UserDashboard');
//             } else {
//                 setLoginMessage(data.message || 'Login failed. Please try again.');
//             }
//         } catch (error) {
//             setLoginMessage('Login failed. Please try again.');
//         }
//     };
    

//     // const handleLogout = async () => {
//     //     try {
//     //         const response = await axios.post('http://127.0.0.1:5002/logout', {
//     //             user_id: user?.id 
//     //         });

//     //         if (response.status === 200) {
//     //             setLoginMessage(response.data.message);
//     //             setUser(null); 
//     //         }
//     //     } catch (error) {
//     //         setLoginMessage('Logout failed. Please try again.');
//     //     }
//     // };

//     const validateInput = (input) => {
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
  
//         if (emailPattern.test(input) ) {
//             setError(''); 
//             return true;
//         } else {
//             setError('Please Enter Your Mentioned Email Id ');
//             return false;
//         }
//     };

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setIdentifier(value);
//       validateInput(value);
//         setUser(value);
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//       };



//     return (
//         <div className='login-page'>
//             {/* Top Bar with Home Link and Theme Switcher */}
//             <div className="top-bar-login" data-aos="fade-up">
//                 <Link to="/" className="home-link-login">Home</Link>
//                <ThemeSwitcher/>
//             </div>
//             <div className="login-container">
//             <div className="welcome-section" data-aos="fade-right">
//                 <h1 data-aos="fade-up">Welcome back to Fotia!</h1>
//                 <p data-aos="fade-up">Empower Your Next Move.</p>
//                 <p data-aos="fade-up">Login to Explore, Invest, and Succeed with Fotia.</p>
//             </div>
//             <div className="login-form-container" data-aos="fade-left">
//                 {/* {!user ? ( */}
//                     <form className="login-form-side" onSubmit={handleLogin}>
//                         <h2 data-aos="fade-up">Login!</h2>
//               <div className='input-group-login' >  
//               {/* <FaUserAlt className="iconn" />
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={user}
//                 placeholder='User Name'
//                 onChange={handleChange}
//                 className='login-input'
//                 required
//               /> */}
//               </div>
//               <div className='input-group-login'data-aos="fade-up" >  
//               <FaEnvelope className="iconn" />
//                         <input
//                             type="email"
//                             placeholder="Email "
//                             value={identifier}
//                             onChange={handleChange}
//                             className="login-input"
//                             required
//                              autoComplete="off"
//                         />

//                         </div>
//                         {error && <p className="error-message">{error}</p>}
//                         <div className='input-group-login' data-aos="fade-up">  
//                         <span className="toggle-password-login iconn" onClick={toggleShowPassword}>
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="login-input"
//                             required
//                              autoComplete="off"
//                         />
//                         </div>
//                         <button type="submit" className="login-button" data-aos="fade-up">Login</button>
//                         {loginMessage && <p className="login-message">{loginMessage}</p>}
//                         <div className="forgot-password" data-aos="fade-up">
//                         <Link to="/ForgotPassword">Forgot Password?</Link>
//                     </div>
//                     </form>
//                 {/* ) : (
//                     <div className="logout-section">
//                         <h2>Welcome, {user.username}</h2>
//                         <p>Email: {user.email}</p>
//                         <p>Phone: {user.phone_number}</p>
//                         <button onClick={handleLogout} className="logout-button">Logout</button>
//                         {loginMessage && <p className="logout-message">{loginMessage}</p>}
//                     </div>
//                 )} */}
//             </div>
// </div>
          
//      </div>
//     );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);  // Loading state

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const validateInput = (input) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(input)) {
            setError('');
            return true;
        } else {
            setError('Please enter a valid email ID.');
            return false;
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setIdentifier(value);
        validateInput(value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!identifier || !password) {
            setLoginMessage('Please fill in all fields');
            return;
        }
    
        setLoading(true); // Set loading to true when login starts
    
        try {
            const response = await axios.post('http://127.0.0.1:5002/login', {
                identifier,
                password,
            });
    
            if (response.status === 200) {
                const { user } = response.data;
    
                // Save user data in localStorage
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('user_id', user.user_id);
                localStorage.setItem('user', JSON.stringify(user));
    
                setLoginMessage('Login successful');
    
                // Redirect based on the is_first_login flag
                if (user.is_first_login) {
                    navigate('/WalletCreation');
                } else {
                    navigate('/UserDashboard');
                }
            } else {
                setLoginMessage(response.data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setLoginMessage('Invalid Email Id or Password. Please try again.');
        } finally {
            setLoading(false); // Reset loading after request completes
        }
    };
    

    return (
        <div className="login-page">
            <div className="top-bar-login" data-aos="fade-up">
                <Link to="/" className="home-link-login">Home</Link>
                <ThemeSwitcher />
            </div>
            <div className="login-container">
                <div className="welcome-section" data-aos="fade-right">
                    <h1>Welcome back to Fotia!</h1>
                    <p>Empower Your Next Move. Login to Explore, Invest, and Succeed with Fotia.</p>
                </div>
                <div className="login-form-container" data-aos="fade-left">
                    <form className="login-form-side" onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div className="input-group-login" data-aos="fade-up">
                            <FaEnvelope className="iconn" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={identifier}
                                onChange={handleChange}
                                className="login-input"
                                required
                                autoComplete="off"
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <div className="input-group-login" data-aos="fade-up">
                            <span className="toggle-password-login iconn" onClick={toggleShowPassword}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit" className="login-button" data-aos="fade-up" disabled={loading}>
                            {loading ? (
                                <div className="spinner"></div>  // Display the loading spinner
                            ) : (
                                'Join Now'
                            )}
                        </button>
                        {loginMessage && <p className="login-message">{loginMessage}</p>}
                        <div className="forgot-password" data-aos="fade-up">
                            <Link to="/ForgotPassword">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
