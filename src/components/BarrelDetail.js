import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function BarrelDetail(props){
  const { barrel } = props;

function handleClickingSellBarrel() {
  if (barrel.remainingPints !=0){
    props.onSellingBarrel(barrel.remainingPints--)
  }else{props.onSellingBarrel(barrel.remainingPints=0)}
}

  return ( 
    <React.Fragment>
      <h1>Barrel Details</h1>
      <h3>{barrel.name} by {barrel.brand}</h3>
      <p>${barrel.price}</p>
      <p>Remaining Pints: {barrel.remainingPints}</p>
      <p>Alcohol Content: {barrel.abv}%</p>
      <Button onClick={handleClickingSellBarrel}>Sell a Pint!</Button>
      <Button onClick={props.onClickingEdit}>Edit Barrel</Button>
      <hr/>
    </React.Fragment>
  );
}

BarrelDetail.propTypes = {
  barrel: PropTypes.object,
  onSellingBarrel: PropTypes.func
};
export default BarrelDetail;