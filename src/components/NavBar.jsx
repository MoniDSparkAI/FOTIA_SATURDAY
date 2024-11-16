// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './NavBar.css'; // Ensure this is where your CSS styles are located
// import ThemeSwitcher from './ThemeSwitcher';

// const NavBar = () => {
 
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">   FOTIA</div>
   
//       <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//         <li>
//           <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//         </li>
//         <li>
//           <Link to="/AboutUs" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//         </li>
//         <li>
//           <Link to="/Service" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
//         </li>
//         <li>
//           <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//         </li>
//         {/* <li>
//           <Link to="/UserDashboard" onClick={() => setIsMobileMenuOpen(false)}>User Dashboard</Link> 
//         </li>
//         <li>
//           <Link to="/AdminDashboard" onClick={() => setIsMobileMenuOpen(false)}>Admin Dashboard</Link> 
//         </li> */}
//         <li>
//           <Link to="/SignUp" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link> {/* Link to Dashboard */}
//         </li>
//         <li>
//           <Link to="/Login" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Login</Link> {/* Link to Dashboard */}
//         </li>
        
//       </ul>
// {/*     
//       <div className="auth-buttons">
//         <button className="sign-in">Sign Up</button>
     
//         <button className="sign-in">Login</button>
//       </div> */}
//       <ThemeSwitcher/>  

//       <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//         {isMobileMenuOpen ? (
//           <FontAwesomeIcon icon={faTimes} />
//         ) : (
//           <FontAwesomeIcon icon={faBars} />
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './NavBar.css'; // Ensure this is where your CSS styles are located
// import ThemeSwitcher from './ThemeSwitcher';
// import fotiaLogo from '../assets/FOTIA-LOGOO.png';
// import AOS from 'aos'; // Import AOS for animations
// import 'aos/dist/aos.css'; // Import AOS styles
 
// const NavBar = () => {
 
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS animations with a duration of 1000ms
// }, []);
//  const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
 
 
//   return (
//     <nav className="navbar">
//       <div className="logo" data-aos="fade-right" >
//         <div className='fotia-img'>
//         <img data-aos="fade-right " className='fotia-logo-img' src={fotiaLogo}/>  
//         </div>
//       <div className='fotia-heading'>
//         fotia
//       </div>
//       </div>
   
//       <ul  className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//         <li >
//           <Link    to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//         </li>
//         <li>
//           <Link to="/AboutUs" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//         </li>
//         <li>
//           <Link to="/Service" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
//         </li>
       
//         <li>
//           <Link to="/Portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
//         </li>
//         <li>
//           <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//         </li>
//         {/* <li>
//           <Link to="/UserDashboard" onClick={() => setIsMobileMenuOpen(false)}>User Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/AdminDashboard" onClick={() => setIsMobileMenuOpen(false)}>Admin Dashboard</Link>
//         </li> */}
//         <li>
//           <Link to="/SignUp" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link> {/* Link to Dashboard */}
//         </li>
//         <li>
//           <Link to="/Login" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Login</Link> {/* Link to Dashboard */}
//         </li>
       
//       </ul>
// {/*    
//       <div className="auth-buttons">
//         <button className="sign-in">Sign Up</button>
     
//         <button className="sign-in">Login</button>
//       </div> */}
//       <ThemeSwitcher />  
 
//       <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//         {isMobileMenuOpen  ? (
//           <FontAwesomeIcon  icon={faTimes} />
//         ) : (
//           <FontAwesomeIcon icon={faBars} />
//         )}
//       </div>
//     </nav>
//   );
// };
 
//  export default NavBar;
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import './NavBar.css';
// import ThemeSwitcher from './ThemeSwitcher';
// import fotiaLogo from '../assets/fotia-uptae-logo.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const NavBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     // Check for logged-in user in localStorage
//     const loggedInUser = localStorage.getItem('userEmail');
//     if (loggedInUser) {
//       setUser(loggedInUser);
//     }
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleProfileClick = () => {
//     navigate('/UserDashboard');
//   };

//   return (
//     <nav className="navbar">
//     <div className="logo" data-aos="fade-right">
//       <div className="fotia-img">
//         <img data-aos="fade-right" className="fotia-logo-img" src={fotiaLogo} alt="Fotia Logo" />
//       </div>
//       <div className="fotia-heading">Fotia</div>
//     </div>
  
//     <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
//       <li>
//         <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//       </li>
//       <li>
//         <Link to="/AboutUs" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//       </li>
//       <li>
//         <Link to="/Service" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
//       </li>
//       <li>
//         <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//       </li>
  
//       {!user ? (
//         <>
//           <li>
//             <Link to="/SignUp" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/Login" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
//           </li>
//         </>
//       ) : (
//         <li>
//           <button className="sign-in" onClick={handleProfileClick}>
//             <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
//           </button>
//         </li>
//       )}
//     </ul>
  
//     {/* Conditionally render ThemeSwitcher */}
//     {user ? (
//       <ThemeSwitcher />
//     ) : (
//       <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//         {isMobileMenuOpen ? (
//           <FontAwesomeIcon icon={faTimes} />
//         ) : (
//           <FontAwesomeIcon icon={faBars} />
//         )}
//       </div>
//     )}
//   </nav>
  
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import ThemeSwitcher from './ThemeSwitcher';
import fotiaLogo from '../assets/FOTIA-LOGOO.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // Store userId
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('user_id');
    if (userIdFromStorage) {
      setIsLoggedIn(true);
      setUserId(userIdFromStorage); // Set userId if it's found in localStorage
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfileClick = () => {
    // Use navigate to redirect to the dashboard page
    navigate('/UserDashboard');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo" data-aos="fade-right">
        <div className="fotia-img">
          <img
            data-aos="fade-right"
            className="fotia-logo-img"
            src={fotiaLogo}
            alt="Fotia Logo"
          />
        </div>
        <div className="fotia-heading">fotia</div>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/AboutUs"
            className={isActive('/AboutUs') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Service"
            className={isActive('/Service') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/Portfolio"
            className={isActive('/Portfolio') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={isActive('/Contact') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link
                to="/SignUp"
                className={`sign-in ${isActive('/SignUp') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className={`sign-in ${isActive('/Login') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button className="sign-in" onClick={handleProfileClick}>
              Profile
            </button>
          </li>
        )}
      </ul>

      <ThemeSwitcher />

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
