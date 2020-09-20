import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function CreateBarrelForm(props){
  
  function handleNewBarrelFormSubmission(event){
    event.preventDefault();
    props.onNewBarrelCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      abv: event.target.abv.value, 
      price: event.target.price.value, 
      remainingPints: 288, // Number of pints in a barrel of beer in the UK!
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleNewBarrelFormSubmission}
      buttonText="Add Barrel"/>
    </React.Fragment>
  );
}

CreateBarrelForm.propTypes = {
  onNewBarrelCreation: PropTypes.func
};

export default CreateBarrelForm;