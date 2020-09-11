import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup, Label } from "reactstrap";

const FormTextPasswordCon = () => {
  return (
    <FormGroup>
      <Label for="passwordConfirm">Confirmar contraseña</Label>
      <Field
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        className="form-control"
      />
      <ErrorMessage
        name="passwordConfirm"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextPasswordCon;
