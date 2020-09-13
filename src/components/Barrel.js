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

      <h2>{Barrel.name}, by {Barrel.brand}</h2>
      <p>${Barrel.price}/pint</p>
      <p>Available Pints: {Barrel.remainingPints}</p>
      <p>Alcohol by Volume: %{Barrel.abv}</p>
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
}

export default Barrel;