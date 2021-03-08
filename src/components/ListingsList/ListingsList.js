import React from "react";
import { useSelector } from 'react-redux'
import Listing from "../Listing/Listing";
import "./ListingListStyles.css";

const ListingList = () => {
  const listings = useSelector(state => state.listings);

  const list = listings.map((item, index) => (
    <Listing key={index} listingInfo={item} className="listing" />
  ));

  return (
  <div>
    {list.length > 0 
      ? <div className="list">{list}</div>
      : <div className="noResults">No results were found that match your criteria</div>}
  </div>
  );
};

export default ListingList;
