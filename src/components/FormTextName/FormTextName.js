import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup, Label } from "reactstrap";

const FormTextName = () => {
  return (
    <FormGroup>
      <Label for="name">Nombre completo </Label>
      <Field type="text" id="name" name="name" className="form-control" />
      <ErrorMessage
        name="name"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextName;
