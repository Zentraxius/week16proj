import React from "react";
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
            type='text'
            name='brand'
            placeholder='Brand' />
        <input
          type='text'
          name='abv'
          placeholder='Alcohol Percentage' />
        <input
          type='text'
          name='price'
          placeholder='Price per pint' />
        <Button type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;