import React from 'react';
import "./Filters.css";

const NumberedPlusOptions = ({
  title, count, handleSelection, value
}) => {
const options = new Array(count + 1).fill(0);

  return (
    <div className="numberedContainer">
      {title}:
      <div className={`buttonsContainer ${title}`}>
        {options.map((num, index) => (
          <button 
            className={`numberedBtn ${title} ${parseInt(value) === index ? "selected" : ""}`}
            value={index}
            name={title.toLowerCase()}
            onClick={handleSelection}
          >
            {index}+
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberedPlusOptions;
