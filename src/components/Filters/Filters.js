import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setFilters, resetFilters } from '../../store/actions/filterActions';
import NumberedPlusOptions from "./NumberedPlusOptons";
import DisplayCountMenu from "./DisplayCountMenu";
import Paginator from "./Paginator";
import NameYourPrice from './NameYourPrice';
import { Button } from "@material-ui/core";
import "./Filters.css";

const Filters = () => {
  const filters = useSelector(state => state.filters)

  const dispatch = useDispatch();

  const handleSelection = (e) => {
    if (e.currentTarget.value === "clear") {
      dispatch(resetFilters());
    } else {
      dispatch(setFilters(e.currentTarget.name, e.currentTarget.value));
    }
  };

  return (
    <div className="dropdownContainer">
      <div className="filtersContainer">
      <div className="displayOptions">
          <DisplayCountMenu />
          <Paginator />
        </div>
        <div className="optionsContainer">
          <NumberedPlusOptions
            title="Bedrooms"
            count={6}
            value={filters.bedrooms}
            handleSelection={handleSelection}
          />
          <NumberedPlusOptions
            title="Bathrooms"
            count={4}
            value={filters.bathrooms}
            handleSelection={handleSelection}
          />
          <div className="price">
          <NameYourPrice />
          </div>
        </div>
      </div>
      <div className="clearContainer">
        <Button className="clearFilter" value="clear" onClick={handleSelection}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filters;
