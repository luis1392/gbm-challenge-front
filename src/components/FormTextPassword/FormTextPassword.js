import React from "react";

import { Field, ErrorMessage } from "formik";
import { FormGroup, Label } from "reactstrap";

const FormTextPassword = () => {
  return (
    <FormGroup>
      <Label for="password">Contraseña</Label>
      <Field
        type="password"
        id="password"
        name="password"
        className="form-control"
      />
      <ErrorMessage
        name="password"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextPassword;
