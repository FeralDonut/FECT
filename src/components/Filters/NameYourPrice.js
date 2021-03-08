import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../store/actions/filterActions';
import useDebounce from '../../utils/debounce';
import TextField from '@material-ui/core/TextField';

const NameYourPrice = () => {
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const debouncedAmount = useDebounce(amount, 500);

  useEffect(() => {
    if (debouncedAmount) {
      dispatch(setFilters("price", debouncedAmount))
    }
  }, [debouncedAmount]);

  return (
    <TextField
      label="Maximum Rent"
      onChange={(e) => setAmount(e.currentTarget.value)}
      type="number"
    />
  )
};

export default NameYourPrice;