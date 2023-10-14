import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Menu
      </button>
      {isOpen && (
        <div className="absolute bg-white border shadow-lg w-48">
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
              Option 1
            </li>
            <li className="py-2 px-4 hover-bg-blue-100 cursor-pointer">
              Option 2
            </li>
            <li className="py-2 px-4 hover-bg-blue-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
