import React from "react";
import PropTypes from "prop-types";

function BarrelDetail(props){
  const { barrel } = props;

  return ( 
    <React.Fragment>
      <h1>Barrel Details</h1>
      <h3>{barrel.name} by {barrel.brand}</h3>
      <p>${barrel.price}</p>
      <p>Remaining Pints: {barrel.remainingPints}</p>
      <p>Alcohol Content: %{barrel.abv}</p>
      <hr/>
    </React.Fragment>
  );
}

BarrelDetail.propTypes = {
  barrel: PropTypes.object
};

export default BarrelDetail;