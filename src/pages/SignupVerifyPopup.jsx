import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './signupVerifyPopup.css'; // Style the modal with CSS

const SignupVerifyPopup = ({ message, email, onClose }) => {
    const navigate = useNavigate(); // Create a navigate function

    const handleClose = () => {
        if (email) {
            // Open the email client with the user's email pre-filled
            window.location.href = `mailto:${email}`;
        }
        onClose(); // Call the onClose prop for any cleanup logic
        navigate('/'); // Redirect to Login page
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h3>Verification</h3>
                <p>{message}</p>
                <button onClick={handleClose}>Close</button> {/* Use handleClose */}
            </div>
        </div>
    );
};

export default SignupVerifyPopup;
// import React from 'react';
// import './signupVerifyPopup.css'; // Style the modal with CSS

// const SignupVerifyPopup = ({ message, email, onClose }) => {
//     const handleOpenEmail = () => {
//         if (email) {
//             // Extract the domain from the email
//             const emailDomain = email.split('@')[1]?.toLowerCase();
//             let emailProviderUrl = '';

//             // Redirect to the appropriate email provider's login or inbox page
//             if (emailDomain.includes('gmail.com')) {
//                 emailProviderUrl = 'https://mail.google.com/';
//             } else if (emailDomain.includes('yahoo.com')) {
//                 emailProviderUrl = 'https://mail.yahoo.com/';
//             } else if (emailDomain.includes('outlook.com') || emailDomain.includes('hotmail.com') || emailDomain.includes('live.com')) {
//                 emailProviderUrl = 'https://outlook.live.com/';
//             } else if (emailDomain.includes('icloud.com')) {
//                 emailProviderUrl = 'https://www.icloud.com/mail';
//             } else if (emailDomain.includes('zoho.com')) {
//                 emailProviderUrl = 'https://mail.zoho.com/';
//             } else if (emailDomain) {
//                 emailProviderUrl = `https://www.${emailDomain}`;
//             }

//             // Open the email provider's page in a new tab
//             if (emailProviderUrl) {
//                 window.open(emailProviderUrl, '_blank');
//             } else {
//                 alert('Unable to determine the email provider.');
//             }
//         } else {
//             alert('No email provided.');
//         }
//     };

//     return (
//         <div className="popup-overlay">
//             <div className="popup">
//                 <h3>Verification</h3>
//                 <p>{message}</p>
//                 <button onClick={handleOpenEmail}>Open Email</button> {/* Opens the email provider */}
//                 <button onClick={onClose}>Close</button> {/* Close the popup */}
//             </div>
//         </div>
//     );
// };

// export default SignupVerifyPopup;
