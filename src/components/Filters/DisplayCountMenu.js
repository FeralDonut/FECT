import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../store/actions/filterActions';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const DisplayCountMenu = () => {
  const limitValue = useSelector( state => state.filters.limit)

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (e) => {
    if(e.currentTarget.value) {
      dispatch(setFilters("limit", e.currentTarget.value));
    }
    setAnchorEl(null);
  };

  return (
    <div className="displayCountContainer">
      Results per page: 
      <Button className="displaySelect" onClick={handleClick}>
        {limitValue}
      </Button>
      <div >
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleSelect}
      >
        <MenuItem value={10} onClick={handleSelect}>10</MenuItem>
        <MenuItem value={25} onClick={handleSelect}>25</MenuItem>
        <MenuItem value={50} onClick={handleSelect}>50</MenuItem>
      </Menu>
      </div>
    </div>
  );
}

export default DisplayCountMenu;