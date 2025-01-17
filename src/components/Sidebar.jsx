import React from 'react';

function Sidebar() {
  return (
    <div className="w-[243px] h-full bg-[#FAFAFA] border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <img src="/Group 29966.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <h3 className="text-lg font-semibold mb-4">MAIN MENU</h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-white bg-[#FF5151] flex items-center space-x-2 p-2 rounded">
              <i className="bi bi-house-door-fill"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-people-fill"></i>
              <span>Recruitment</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-calendar-fill"></i>
              <span>Schedule</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-person-fill"></i>
              <span>Employee</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-building"></i>
              <span>Department</span>
            </a>
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-4">OTHER</h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-life-preserver"></i>
              <span>Support</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
              <i className="bi bi-gear-fill"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-200">
        <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;