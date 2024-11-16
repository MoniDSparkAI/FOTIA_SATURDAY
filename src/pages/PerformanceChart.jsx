/**
 * The `PerformanceChart` function creates a solid gauge chart using Highcharts to display performance
 * data with color-coded ranges.
 * @returns The `PerformanceChart` component is being returned. It is a functional component that
 * renders a Highcharts solid gauge chart displaying performance data. The chart has specific
 * configurations for the title, tooltip, pane, yAxis, plotOptions, series, and credits. The component
 * returns a `div` containing the `HighchartsReact` component with the specified `options`.
 */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'; // Required for advanced chart types
import SolidGauge from 'highcharts/modules/solid-gauge'; // Required for solid gauge

// Initialize the modules
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

const PerformanceChart = () => {
  const options = {
    chart: {
      type: 'solidgauge',
      
    },
    title: {
      text: 'Performance',
      style: {
        fontSize: '20px',
      },
    },
    tooltip: {
      enabled: false,
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          outerRadius: '100%',
          innerRadius: '80%',
          backgroundColor: '#e0e0e0',
          borderWidth: 0,
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      stops: [
        [0.2, '#FF0000'], // Red at 20%
        [0.4, '#FFA500'], // Orange at 40%
        [0.6, '#FFFF00'], // Yellow at 60%
        [0.8, '#008000'], // Green at 80%
        [1.0, '#0000FF'], // Blue at 100%
      ],
      lineWidth: 0,
      tickPositions: [0, 20, 40, 60, 80, 100],
      labels: {
        format: '{value}%',
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          format: '{y}%',
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
          },
        },
      },
    },
    series: [
      {
        name: 'Performance',
        data: [65], // Initial value
      },
    ],
    credits: {
      enabled: false, // Disable Highcharts credits
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PerformanceChart;
