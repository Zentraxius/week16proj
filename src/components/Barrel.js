import React from "react";
import PropTypes from "prop-types";


Barrel.propTypes = {
  name: PropTypes.string, // Name of brew "Fifth Mountain Ale"
  brand: PropTypes.string, // Brand of Barrel "Jack Daniels"
  price: PropTypes.number, // Price for a pint "$1.25"
  abv: PropTypes.number, // Alcohol by volume, "5.5%"
  id: PropTypes.number,
  remainingPints: PropTypes.number,
  onBarrelClick: PropTypes.func,
  onBarrelSell: PropTypes.func
}

export default Barrel;