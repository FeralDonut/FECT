import React from "React";
import TodayIcon from '@material-ui/icons/Today';
import HouseIcon from '@material-ui/icons/House';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import "./Listing.css";

const Listings = ({ listingInfo }) => {
  const {
    address,
    bathrooms,
    bedrooms,
    building_name,
    city,
    image_id,
    price,
    state,
  } = listingInfo;

  const source = "img/" + image_id + ".jpg";
  
  const launchMap = () => {
    const mapAddress = address.replace(/\s/g , "+");
    const mapLink = `https://www.google.com/maps/place/+${mapAddress}+${city}+${state}`
    window.open(mapLink)
  }

  return (
    <div className="listingContainer" onClick={launchMap}>
      <div className="heading" >{building_name ? building_name : address}</div>
        {image_id 
          ? <img src={source} className="image" alt="listing-image" />
          : <HouseIcon className="missingImage" />
        }
        <div className="address" >
          {address} {city}, {state}
        </div>
        <div className="detailContainer">
          <div className="details" title="Bedrooms"><HotelIcon fontSize="medium" />{bedrooms}</div>
          <div className="details" title="Bathrooms"><BathtubIcon fontSze="small" />{bathrooms}</div>
          <div className="details" title="Rent"><TodayIcon fontSze="small" />${price}</div>
        </div>
    </div>
  );
};

export default Listings;
