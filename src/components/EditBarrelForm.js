import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBarrelForm(props) {
  const { barrel } = props;
  function handleEditBarrelFormSubmission(event) {
    event.preventDefault();
    props.onEditBarrel({
      names: event.target.names.value,
      brand: event.target.brand.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      id: barrel.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBarrelFormSubmission}
        buttonText="Update Barrel"
      />
    </React.Fragment>
  );
}

EditBarrelForm.propTypes = {
  onEditBarrel: PropTypes.func,
};

export default EditBarrelForm;
