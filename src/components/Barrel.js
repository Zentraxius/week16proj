import React from "react";
import PropTypes from "prop-types";

function handleSellingBarrel(props){
  if (Barrel.remainingPints != 0) {
    // barrel pints -1
  } else {
    // barrel has no remaining pints
  }
}

function Barrel(props){
  return (
    <React.Fragment>

      <h2>(Name goes here), by (Brand goes here)</h2>
      <p>Price will be here</p>
      <p>Available pints will be here</p>
      <p>Alcohol content will go here</p>
      <hr/>

      <button onClick={handleSellingBarrel}>This Button will sell a pint!</button>
    </React.Fragment>
  )
}

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