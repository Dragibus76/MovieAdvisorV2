import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Spinner.css'; 

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setShowSpinner(false);
        }, 5000); 
      }, []);

      
  return (
    <div className="center-screen">
      <div className="spinner">
        <FaSpinner />
      </div>
    </div>
  );
};

export default Spinner;
