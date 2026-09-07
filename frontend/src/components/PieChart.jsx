import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const [courses, setCourses] = useState([])
  const backend_uri = import.meta.env.VITE_BACKEND_URI

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`${backend_uri}/get-courses`)
        setCourses(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    getCourses()
  }, [])

  const data = {
    labels: courses.map((course) => course._id),
    datasets: [
      {
        label: "Students",
        data: courses.map((course) => course.total),
        backgroundColor: [
          "#E63946",
          "#FF6B6B",
          "#FF8C94",
          "#FFAAA5",
          "#FFD3CE",
        ],
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 16,
          font: { family: 'Inter', size: 12 },
          color: '#1A1A2E',
        }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.label}: ${ctx.parsed} students`
        }
      }
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;

