// Charts.jsx
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function Charts() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Price",
            borderColor: "rgba(186, 255, 10, 0.96)",
            data: [3000, 2000, 1000, 1500, 1200, 1800, 1600, 2000, 2500, 3000],
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 shadow-md p-4 md:w-96 w-full h-56 flex flex-col items-center justify-between text-right text-sm">
      <div className="flex items-center justify-between w-full">
        <div className="font-semibold">Day wise comparison</div>
        <div className="flex items-center gap-2 text-gray-200">
          <div className="rounded-md bg-white flex items-center justify-center p-1">
            <div className="font-semibold">Day</div>
          </div>
          <div className="rounded-md flex items-center justify-center p-1 text-white">
            <div className="font-semibold">Month</div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-between mt-2">
        <div className="flex-1 h-32">
          <div className="flex flex-col items-start justify-start space-y-1">
            <canvas ref={chartRef} width={100} height={45}></canvas>
          </div>
          <div className="flex items-start justify-between w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <div key={number} className="flex-1 p-1">
                <div>{number}</div>
              </div>
            ))}
            <div className="flex items-center justify-center p-1">
              <div className="font-semibold">Date</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
