import React, { useEffect, useRef, useState } from 'react';
import './MarketSection.css'; // Import the CSS file

const MarketsSection = ({ cryptoData }) => {
  const scrollContainer = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  // Auto-scroll effect with pause on hover (horizontal scroll)
  useEffect(() => {
    const autoScroll = () => {
      if (!isAutoScroll) return;
      const scrollStep = 1;
      const delay = 30;

      const scrollInterval = setInterval(() => {
        if (scrollContainer.current) {
          const maxScrollLeft = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
          if (scrollContainer.current.scrollLeft >= maxScrollLeft) {
            scrollContainer.current.scrollLeft = 0; // Reset scroll to the start
          } else {
            scrollContainer.current.scrollLeft += scrollStep;
          }
        }
      }, delay);

      return scrollInterval;
    };

    const interval = autoScroll();

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  const handleMouseEnter = () => setIsAutoScroll(false); // Stop auto-scroll on hover
  const handleMouseLeave = () => setIsAutoScroll(true);  // Resume auto-scroll when hover ends

  return (
    <section
      className="userdashboard-markets-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className='marketsection-heading'>Market Updates</h3>
      <div className="userdashboard-markets-scroll" ref={scrollContainer}>
        
        <ul className="userdashboard-markets-list">
          {cryptoData.marketData.map((coin) => (
            <li key={coin.id} className="userdashboard-markets-row">
              <span className="userdashboard-markets-col">{coin.name}</span>
              <span className="userdashboard-markets-col">${coin.current_price}</span>
              <span className={`userdashboard-markets-col ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MarketsSection;
