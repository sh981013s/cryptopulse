import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";

const ChartWrapper = styled.div`
  border: 2px solid #1a1a1a;
  border-radius: 10px;
  margin: 5px 0;

  h1 {
    font-size: 1.3rem;
    color: #1a1a1a;
    text-align: center;
    font-weight: 700;
    margin: 10px 0;
  }
`;

const HistoricalPriceChart = ({ prices }: { prices: number[] }) => {
  const chartRef = useRef(null);

  const getPastSevenDays = () => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dates.push(`${d.getMonth() + 1}/${d.getDate()}`);
    }
    return dates;
  };

  useEffect(() => {
    const dates = getPastSevenDays();

    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Price",
              data: prices,
              fill: false,
              borderColor: "rgb(24,236,236)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: "Price (USD)",
                color: "white", // Title color
              },
              ticks: {
                color: "white", // Tick labels color
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
                color: "white", // Title color
              },
              ticks: {
                color: "white", // Tick labels color
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white", // Legend labels (dataset labels) color
              },
            },
            tooltip: {
              titleColor: "white", // Tooltip title color
              bodyColor: "white", // Tooltip body color
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      return () => myChart.destroy();
    }
  }, [prices]);

  return (
    <ChartWrapper>
      <h1>7-Day Coin Price Trends</h1>
      <div style={{ color: "white" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </ChartWrapper>
  );
};

export default HistoricalPriceChart;
