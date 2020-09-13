import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function CreateBarrelForm(props){
  
  function handleNewBarrelFormSubmission(event){
    event.preventDefault();
    props.onNewBarrelCreation({name: event.target.name.value, brand: event.target.brand.value, abv: event.target.abv.value, price: event.target.price.value, remainingPints: event.target.remainingPints.value})
  }

  return (
    <React.Fragment>
    <form onSubmit={handleNewBarrelFormSubmission}>
      <input
      type='text'
      name='name'
      placeholder='Barrel Name' />
      <br/>
      <input
      type='text'
      name='brand'
      placeholder='Brand' />
      <br/>
      <input 
      type='text'
      name='price'
      placeholder='Price'/>
      <br/>
      <input 
      type='text'
      name='abv'
      placeholder='Alcohol by Volume'/>
      <br/>
      <input 
      type='text'
      name='remainingPints'
      placeholder='Number of Pints'/>
      <button type='submit'>Add a Barrel</button>
    </form>
    </React.Fragment>
  );
}

CreateBarrelForm.propTypes = {
  onNewBarrelCreation: PropTypes.func
};

export default CreateBarrelForm;