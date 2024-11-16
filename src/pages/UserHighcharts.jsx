import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const UserHighCharts = () => {
  // Mock data for different intervals
  const mockData = {
    daily: [
      ["2024-11-01", 100],
      ["2024-11-02", 150],
      ["2024-11-03", 200],
      ["2024-11-04", 180],
      ["2024-11-05", 220],
      ["2024-11-06", 250],
      ["2024-11-07", 300],
    ],
    weekly: [
      ["2024-10-29", 800],
      ["2024-11-05", 1200],
      ["2024-11-12", 1500],
    ],
    monthly: [
      ["2024-08-01", 4000],
      ["2024-09-01", 4500],
      ["2024-10-01", 4700],
      ["2024-11-01", 5000],
    ],
    yearly: [
      ["2020-01-01", 30000],
      ["2021-01-01", 35000],
      ["2022-01-01", 40000],
      ["2023-01-01", 45000],
      ["2024-01-01", 50000],
    ],
  };

  // State for selected interval, chart options, and latest value
  const [selectedInterval, setSelectedInterval] = useState("daily");
  const [options, setOptions] = useState({});
  const [latestAmount, setLatestAmount] = useState(null);

  useEffect(() => {
    // Get the latest data point for the selected interval
    const latestData = mockData[selectedInterval];
    const latestValue = latestData[latestData.length - 1][1];
    setLatestAmount(latestValue);

    // Update chart options dynamically based on selected interval
    setOptions({
      chart: {
        type: "line",
     
        backgroundColor: "#000", // Black background
        style: {
          fontFamily: "Arial, sans-serif",
        },
      },
      title: {
        text: `User Performance (${selectedInterval.toUpperCase()})`,
        align: "center",
        style: {
          color: "#FFD700", // Gold for title
          fontSize: "22px",
        },
      },
      xAxis: {
        type: "datetime", // Set X-axis as datetime
        title: {
          text: "Date",
          style: {
            color: "#fff", // White axis title
          },
        },
        labels: {
          style: {
            color: "#fff", // White date labels
          },
          formatter: function () {
            return Highcharts.dateFormat("%b %e, %Y", this.value); // Format: Nov 1, 2024
          },
        },
        lineColor: "#FFD700", // Gold axis line
      },
      yAxis: {
        title: {
          text: "Amount in USDT",
          style: {
            color: "#fff", // White axis title
          },
        },
        labels: {
          style: {
            color: "#fff", // White labels
          },
        },
        gridLineColor: "rgba(255, 255, 255, 0.1)", // Subtle grid lines
      },
      tooltip: {
        xDateFormat: "%b %e, %Y", // Tooltip date format
        backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black
        borderColor: "#FFD700", // Gold border
        style: {
          color: "#fff", // White tooltip text
        },
        valueSuffix: " USDT", // Adds unit to tooltip
      },
      legend: {
        enabled: true,
        itemStyle: {
          color: "#fff", // White legend text
        },
      },
      series: [
        {
          name: `Performance (${selectedInterval.toUpperCase()})`,
          data: latestData.map(([date, amount]) => [
            new Date(date).getTime(),
            amount,
          ]),
          color: "#FFF", // Gold line
          lineWidth: 3,
          marker: {
            radius: 5,
            fillColor: "#FFF", // Gold markers
          },
          shadow: {
            color: "rgba(255, 215, 0, 0.6)", // Gold shadow
            width: 10,
          },
        },
      ],
      credits: {
        enabled: false, // Disable Highcharts credits
      },
    });
  }, [selectedInterval]); // Re-run whenever the interval changes

  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ color: "#FFD700" }}>
          Latest Amount: {latestAmount} USDT
        </h2>
        <button
          onClick={() => setSelectedInterval("daily")}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedInterval === "daily" ? "#FFD700" : "#444",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Daily
        </button>
        <button
          onClick={() => setSelectedInterval("weekly")}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedInterval === "weekly" ? "#FFD700" : "#444",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Weekly
        </button>
        <button
          onClick={() => setSelectedInterval("monthly")}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedInterval === "monthly" ? "#FFD700" : "#444",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setSelectedInterval("yearly")}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedInterval === "yearly" ? "#FFD700" : "#444",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Yearly
        </button>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default UserHighCharts;
