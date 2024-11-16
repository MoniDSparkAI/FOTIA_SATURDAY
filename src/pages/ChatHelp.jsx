import React, { useState } from 'react';
import './Chathelp.css';
import image1 from '../assets/fotia-gif.gif'; // Update with actual path
import fotiaLogo from '../assets/FOTIA-LOGOO.png'

const Chathelp = () => {
    const [isActive, setIsActive] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To manage the loading state

    // Get user_id from localStorage
    const userId = localStorage.getItem('user_id');

    // Toggle the visibility of the chatbox
    const toggleChatbox = () => {
        setIsActive(!isActive);
    };

    // Send a message to the Flask backend and get the response
    const handleSendMessage = async () => {
        if (inputValue === "") return;

        // Add the user's message to the messages array immediately
        const userMessage = { name: "User", message: inputValue };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        
        // Clear the input immediately
        setInputValue('');
        
        setIsLoading(true); // Set loading to true when sending message

        try {
            // Send the message and user ID to the Flask backend
            const response = await fetch('http://127.0.0.1:5000/ask', {
                method: 'POST',
                body: JSON.stringify({ query: inputValue, user_id: userId }),  // Send user_id here
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();

            // Add the bot's message to the messages array
            const botMessage = { name: "IVY", message: data.response };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { name: "IVY", message: "Sorry, something went wrong. Please try again later." };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }

        setIsLoading(false); // Set loading to false after the message is sent
    };

    // Send a message when the Enter key is pressed
    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    // Handle input changes and restrict the character count
    const handleInputChange = (e) => {
        if (e.target.value.length <= 84) {
            setInputValue(e.target.value);
        }
    };

    return (
        <div className="chatHelpbox">
            <div className={`chatHelpbox__support ${isActive ? 'chatbox--active' : 'chatbox--inactive'}`}>
                <div className="chatHelpbox__header">
                    <div className="chatHelpbox__image--header">
                        <img src={fotiaLogo} alt="Chat Bot" />
                    </div>
                    <div className="chatHelpbox__content--header">
                        <h4 className="chatHelpbox__heading--header">FOTIABot</h4>
                        <p className="chatHelpbox__description--header">Hi. My name is FOTIABot. How can I help you?</p>
                    </div>
                </div>
                <div className="chatHelpbox__messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`messages_item ${msg.name === "IVY" ? "messages_item--visitor" : "messages_item--operator"}`}>
                            {msg.message}
                        </div>
                    ))}
                    {/* Show loading indicator if sending message */}
                    {isLoading && <div className="messages_item messages_item--loading">Uploading...</div>}
                </div>
                <div className="chatHelpbox__footer">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                        placeholder="Write a message..."
                        maxLength="84" // Allow a maximum of 84 characters
                    />
                    <button className="send__button" onClick={handleSendMessage} disabled={isLoading}>Send</button>
                </div>
            </div>
            <div className="chatHelpbox__buttonn">
                <button className='ChathelpImg' onClick={toggleChatbox}><img src={image1} alt="Chat" /></button>
            </div>
        </div>
    );
};

export default Chathelp;
