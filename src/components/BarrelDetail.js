import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function BarrelDetail(props){
  const { barrel, onSellingBarrel } = props;

  // function handleClickingSellBarrel(){
  //   if (barrel.remainingPints === 0){
  //     props.onSellingBarrel(barrel.remainingPints = 0)
  //   }
  //   else {
  //     props.onSellingBarrel(barrel.remainingPints --)
  //   }
  // }

  return (  //this.state vs this.setstate
    <React.Fragment>
      <h1>Barrel Details</h1>
      <h3>{barrel.name} by {barrel.brand}</h3>
      <p>${barrel.price}</p>
      <p>Remaining Pints: {barrel.remainingPints}</p>
      <p>Alcohol Content: {barrel.abv}%</p>
      <Button onClick={() => onSellingBarrel(barrel)}>Sell a Pint!</Button>
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