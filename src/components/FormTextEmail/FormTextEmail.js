import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup, Label } from "reactstrap";

const FormTextEmail = () => {
  return (
    <FormGroup>
      <Label for="email">Email</Label>
      <Field
        type="email"
        id="email"
        name="email"
        className="form-control"
        placeholder="example@gmail.com"
      />
      <ErrorMessage
        name="email"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextEmail;
