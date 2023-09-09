import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['18573278880', '7634213314', '247826471']; //callee number

function totalDuration(data)
{
    var num = 0;
    for(let i = 0; i<data.length; i++)
    {
        num += data[i];
    }
    return num;
}
 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [244, 52, 96],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function Duration() {
  return   <>
  <h1>{totalDuration(data['datasets'][0]['data'])} mins</h1>
  <h3>Total call duration today</h3>
  <div style={{
    height:'100vh'
  }}>
    <Bar options={options} data={data} />
    </div>
    </>
}
