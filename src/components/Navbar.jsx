import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 left-[243px] w-[calc(100%-243px)] h-[91px] bg-[#FAFAFA] px-[50px] flex items-center justify-between border-b border-gray-200 z-10">
      {/* Left section */}
    

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <button className="flex items-center justify-center w-[24px] h-[24px] bg-transparent border border-[#E0E0E0] rounded-full">
          <i className="bi bi-bell-fill"></i>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/24"
            alt="User Profile"
            className="w-[24px] h-[24px] rounded-full"
          />
          <span className="text-[#B3B3B3] font-poppins text-[16px]">Username</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;