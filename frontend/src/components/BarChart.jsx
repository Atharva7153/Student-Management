import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [toppers, setToppers] = useState([]);
    const backend_uri = import.meta.env.VITE_BACKEND_URI;

    useEffect(() => {
        const getToppers = async () => {
            try {
                const response = await axios.get(`${backend_uri}/get-toppers-by-course`);
                setToppers(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getToppers();
    }, []);

    const data = {
        labels: toppers.map((item) => item._id),
        datasets: [
            {
                label: "Toppers",
                data: toppers.map((item) => item.total),
                backgroundColor: "rgba(230, 57, 70, 0.85)",
                borderColor: "#E63946",
                borderWidth: 0,
                borderRadius: 8,
                borderSkipped: false,
                hoverBackgroundColor: "#B71C2C",
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ` ${ctx.parsed.y} topper${ctx.parsed.y !== 1 ? 's' : ''}`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { family: 'Inter', size: 12 },
                    color: '#6B7280',
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#EDEDED',
                },
                ticks: {
                    stepSize: 1,
                    font: { family: 'Inter', size: 12 },
                    color: '#6B7280',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;