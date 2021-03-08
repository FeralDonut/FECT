import React from "react";
import WarningIcon from '@material-ui/icons/Warning';
import './ErrorDisplay.css';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="errorLoading">
      <WarningIcon className='errorIcon'/>
      {message}
    </div>
  );
};

export default ErrorDisplay;