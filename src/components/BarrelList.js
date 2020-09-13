import React from "react";
import PropTypes from "prop-types";
import Barrel from "./Barrel";

function BarrelList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.barrelList.map((barrel) =>
      <Barrel
      whenBarrelClicked = { props.onBarrelSelection }
      names = {barrel.name}
      brand = {barrel.brand}
      price = {barrel.price}
      abv = {barrel.abv}
      remainingPints = {barrel.remainingPints}
      id = {barrel.id}
      key = {barrel.id}/>
      )}
      <hr/>
    </React.Fragment>
  );
}

BarrelList.propTypes = {
  barrelList: PropTypes.array,
  onBarrelSelection: PropTypes.func
};

export default BarrelList;