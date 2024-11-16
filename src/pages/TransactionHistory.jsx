import React, { useState, useEffect } from "react";
import axios from "axios";
import "./transactionhistory.css";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]); // Ensure it's an array by default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("user_id");

  // Function to fetch transactions
  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5008/get-transactions", {
        user_id: userId,
      });
      console.log(response.data); // Log the response to check the structure
      // Assuming response.data.result contains the array of transactions
      setTransactions(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setError("Error fetching transactions.");
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when the component mounts
  useEffect(() => {
    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  // Handle the refresh button click
  const handleRefresh = () => {
    fetchTransactions();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="transaction-history">
      <h2 className="transaction-history-head">Transaction History</h2>
      {error && <p className="error">{error}</p>}
      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <div className="transactions">
          {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <div className="transaction-card" key={index}>
                <p><strong>Hash:</strong> {tx.hash}</p>
                <p><strong>From:</strong> {tx.from}</p>
                <p><strong>To:</strong> {tx.to}</p>
                <p><strong>Value:</strong> {tx.value / 1e18} MATIC</p> {/* Assuming the value is in Wei, adjust as needed */}
                <p><strong>Timestamp:</strong> {new Date(tx.timestamp * 1000).toLocaleString()}</p>
                <p><strong>Block Number:</strong> {tx.block_number}</p>
              </div>
            ))
          ) : (
            <p>No transactions available or invalid data.</p>
          )}
        </div>
      )}
      <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default TransactionHistory;
