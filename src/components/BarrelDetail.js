import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function BarrelDetail(props){
  const { barrel } = props;

function viewButtonController(){
  if (barrel.remainingPints <= 0) {
    return (<p>Barrel is empty!</p>)
  } else {
    return (<Button onClick={handleClickingSellBarrel}>Sell a Pint!</Button>)
  }
}

function handleClickingSellBarrel() {
  var updatedPints = barrel.remainingPints - 1;
  props.onSellingBarrel({ name: barrel.name, 
    brand: barrel.brand, 
    abv: barrel.abv, 
    pints: updatedPints, 
    price: barrel.price, 
    id: barrel.id})
 // return barrel.remainingPints
}

  return ( 
    <React.Fragment>
      <h1>Barrel Details</h1>
      <h3>{barrel.name} by {barrel.brand}</h3>
      <p>${barrel.price}</p>
      <p>Remaining Pints: {barrel.remainingPints}</p>
      <p>Alcohol Content: {barrel.abv}%</p>
      {viewButtonController()}
      <hr/>
    </React.Fragment>
  );
}

BarrelDetail.propTypes = {
  barrel: PropTypes.object,
  onSellingBarrel: PropTypes.func
};

export default BarrelDetail;