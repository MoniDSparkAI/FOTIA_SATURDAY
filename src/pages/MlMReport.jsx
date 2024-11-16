import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './mlmreport.css'; // Import the CSS file

const MLMReport = () => {
  const [users, setUsers] = useState([
    {  name: 'User 1', referralId: '123', referredBy: 'Admin' },
    { name: 'User 2', referralId: '124', referredBy: '123' },
    // Add 25 users or more based on your data structure
  ]);

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("MLM Network Report", 20, 20);
    let y = 30; // Starting Y position for text

    // Loop through the users and add them to the PDF
    users.forEach(user => {
      doc.text(`ID: ${user.id} | Name: ${user.name} | Referral ID: ${user.referralId} | Referred By: ${user.referredBy}`, 20, y);
      y += 10; // Adjust Y position for next line
    });

    // Save the generated PDF
    doc.save('mlm_network_report.pdf');
  };

  return (
    <div className="mlm-report-container">
      <h1 className="mlm-report-header">Download Your Network Members Details</h1>
      <ul className="mlm-report-list">
        {users.map(user => (
          <li key={user.id} className="mlm-report-list-item">
            {user.name} (Referral ID: {user.referralId}) - Referred By: {user.referredBy}
          </li>
        ))}
      </ul>
      <button onClick={generatePDF} className="mlm-report-button">Download Report</button>
    </div>
  );
};

export default MLMReport;
