import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['USA', 'INDIA', 'Others'],
  datasets: [
    {
      label: '#Call Destinations',
      data: [2, 5, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
function numCall(arr)
{
    var num = 0;
    for(let i =0; i<arr.length; i++)
        {
            num += arr[i];
        }
    return num;
}
export default function Destination() {
  return <>
  <div>
     <h1>{numCall(data['datasets'][0]['data'])}</h1>
     <h3>Total Number of calls Today</h3>
  </div>
  <div style={{
    height:'100vh'
  }}>

    <Pie data={data} />;
    </div>
    </>
}
