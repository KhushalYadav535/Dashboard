import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Men', 'Women'],
  datasets: [
    {
      label: 'Total Employees',
      data: [120, 96],
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const data2 = {
  labels: ['Men', 'Women'],
  datasets: [
    {
      label: 'Talent Request',
      data: [6, 10],
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

function MainContent() {
  return (
    <div className="flex-1 p-8 mt-[91px] bg-[#FAFAFA]">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-[#FFEFE7] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Available Position</h2>
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm text-red-500">4 Urgently needed</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#E8F0FB] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Job Open</h2>
          <p className="text-2xl font-bold">10</p>
          <p className="text-sm text-gray-500">4 Active hiring</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#FDEBF9] text-gray-500 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">New Employees</h2>
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm">4 Department</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#161E54] p-4 rounded-lg shadow lg:col-span-1 lg:row-span-1 lg:col-start-4">
          <h2 className="text-lg font-semibold text-white">Recently Activity</h2>
          <p className="text-sm text-gray-300">10:40 AM, Fri 10 Sept 2021</p>
          <p className="text-sm text-gray-300">You Posted a New Job</p>
          <p className="text-sm text-gray-300">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
          <p className="text-sm text-gray-300">Today you made 12 Activity</p>
          <div className="flex justify-between items-center mt-2">
            <a href="#" className="text-white bg-[#FF5151] px-2 py-1 rounded">
              See All Activity
            </a>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Employees</h2>
          <p className="text-sm text-green-500">+2%</p>
          <p className="text-2xl font-bold">216</p>
          <p className="text-sm text-gray-500">120 Men</p>
          <p className="text-sm text-green-500">+2% Past month</p>
          <p className="text-sm text-gray-500">96 Women</p>
          <Line data={data} />
        </div>
        {/* Card 6 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Talent Request</h2>
          <p className="text-sm text-green-500">+5%</p>
          <p className="text-2xl font-bold">16</p>
          <p className="text-sm text-gray-500">6 Men</p>
          <p className="text-sm text-green-500">+5% Past month</p>
          <p className="text-sm text-gray-500">10 Women</p>
          <Line data={data2} />
        </div>
        {/* Card 7 */}
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-semibold">Announcement</h2>
          <p className="text-sm text-gray-500">Today, 13 Sep 2021</p>
          <p className="text-sm text-gray-500">
            Outing schedule for every department
          </p>
          <p className="text-sm text-gray-500">5 Minutes ago</p>
          <p className="text-sm text-gray-500">Meeting HR Department</p>
          <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
          <p className="text-sm text-gray-500">
            IT Department needs two more talents for UX/UI Designer position
          </p>
          <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
          <a href="#" className="text-blue-500">
            See All Announcement
          </a>
        </div>
        {/* Card 8 */}
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
          <p className="text-sm text-gray-500">Today, 13 Sep 2021</p>
          <p className="text-sm text-gray-500">Priority</p>
          <p className="text-sm text-gray-500">Review candidate applications</p>
          <p className="text-sm text-gray-500">Today - 11.30 AM</p>
          <p className="text-sm text-gray-500">Other</p>
          <p className="text-sm text-gray-500">Interview with candidates</p>
          <p className="text-sm text-gray-500">Today - 10.30 AM</p>
          <p className="text-sm text-gray-500">
            Short meeting with product designer from IT Department
          </p>
          <p className="text-sm text-gray-500">Today - 09.15 AM</p>
          <a href="#" className="text-blue-500">
            Create a New Schedule
          </a>
          <p className="text-sm text-gray-500">
            Sort Front-end developer candidates
          </p>
          <p className="text-sm text-gray-500">Today - 11.30 AM</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
