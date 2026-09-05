import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { useEffect } from "react";

import { Pie } from "react-chartjs-2";



function PieChart() {

  const [courses, setCourses] = useState([])
  const backend_uri = import.meta.env.VITE_BACKEND_URI

  useEffect(()=>{
    const getCourses = async () =>{
    const response = await axios.get(`${backend_uri}/get-courses`)
    console.log(response)
    setCourses(response.data)
    }

    getCourses()
    
  }, [])

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );

  const data = {
    labels: courses.map((course) => course._id),
    datasets: [
      {
        label: "Total student ",
        data: courses.map((course) => course.total),
        backgroundColor: [
          "#61dafb",
          "#42b883",
          "#dd0031",
          "#ff3e00",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  


  return <Pie data={data} options={options} />;
}

export default PieChart;
