import React from "react";
import PropTypes from "prop-types";

function Barrel(props){
  return (
    <React.Fragment>

      <h2>{props.name}, by {props.brand}</h2>
      <p>${props.price}/pint</p>
      <p>Available Pints: {props.remainingPints}</p>
      <p>Alcohol by Volume: %{props.abv}</p>
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