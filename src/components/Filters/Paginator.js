import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../store/actions/filterActions";
import { Pagination } from "@material-ui/lab";
import "./Filters.css";

const Paginator = () => {
  const searchTotal = useSelector(state => state.searchTotal);
  const filters = useSelector(state => state.filters);
  const clearSearch = useSelector(state => state.clearSearch);

  const { limit, bedrooms, bathrooms, price } = filters;
  
  const [pageMarker, setPageMarker] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  
  /* set paginator back to 1st page if any filter changes
    clearSearch used in the case where pagination is only thing changed
    before filters are reset
  */
  useEffect(() => {
    setPageMarker(1);
  }, [bedrooms, bathrooms, price, limit, clearSearch]);

  useEffect(() => {
    setPageCount(Math.ceil(searchTotal / limit));
  }, [limit, searchTotal])

  const dispatch = useDispatch();

  // Material UI component passes event as first parameter and value as second
  const handleOffset = (event, value) => {
    setPageMarker(value);
    dispatch(setFilters("offset", value - 1));
  };

  return (
    <div className="paginator">
      {searchTotal > 0
        &&
        <Pagination
          count={pageCount}
          page={pageMarker}
          variant="outlined"
          shape="rounded"
          name="paginator"
          onChange={handleOffset}
        />
      }
    </div>
  );
};

export default Paginator;
