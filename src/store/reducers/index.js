import { combineReducers } from 'redux';
import filters from './filters';
import listings from './listings';
import searchTotal from './searchTotal';
import clearSearch from './clearSearch';
import errors from './errors';

export default combineReducers({
  filters,
  listings,
  searchTotal,
  clearSearch,
  errors,
})