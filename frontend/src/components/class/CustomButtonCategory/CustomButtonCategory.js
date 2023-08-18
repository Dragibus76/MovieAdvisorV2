import React from 'react';


const CustomButtonCategory = ({ isActive, onClick }) => {
  return (
    <button
      className={`custom-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    />
  );
};

export default CustomButtonCategory;
