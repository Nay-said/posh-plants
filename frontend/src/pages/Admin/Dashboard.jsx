import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title);
export const polarChartData = {
  labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'],
  datasets: [
    {
      label: '# of Sale',
      data: [12, 19, 3, 5, 9, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};
export const config = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Number of Sales',
      position: 'bottom'
    },
  },
};

const Dashboard = () => {
  return (
    <div id="Dashboard">
      <section id="polar-chart">
        <PolarArea options={config} data={polarChartData} />
      </section>
    </div>
  )
}
export default Dashboard