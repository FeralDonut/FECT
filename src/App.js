import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setListings } from './store/actions/listingsActions';
import { setSearchTotal } from './store/actions/searchTotalActions';
import fetchListings from './api/listings';
import NavBar from './components/NavBar/NavBar';
import ListingList from './components/ListingsList/ListingsList';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorDisplay from './common/ErrorDisplay/ErrorDisplay';
import './App.css';

const App = () => {
  const filters = useSelector(state => state.filters);
  const loadListingsError = useSelector(state => state.errors.loadListings);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadListings(filters){
      setLoading(true);
      const list = await fetchListings({dispatch, ...filters});
      if (list) {
        dispatch(setListings(list.data));
        dispatch(setSearchTotal(list.searchTotal));
      }
      setLoading(false);
    }
    loadListings(filters);
  }, [filters]);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <NavBar />
      {loading
        ? <CircularProgress className="loading" color="inherit" size={100} />
        : loadListingsError
          ? <ErrorDisplay message={loadListingsError} />
          : <ListingList />
      }
    </div>
  );
};

export default App;
