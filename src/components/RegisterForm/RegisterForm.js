import React, { Component } from "react";
import { Link } from "react-router-dom";

import { URL_API_AUTH } from "../../utils/apiUrlAuth";

import { LogInContainer } from "../../styles/Forms";

import FormTextEmail from "../FormTextEmail";
import FormTextPassword from "../FormTextPassword";
import FormTextName from "../FormTextName/FormTextName";
import FormTextPasswordCon from "../FormTextPasswordCon/FormTextPasswordCon";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";

class RegisterForm extends Component {
  state = {
    error: null,
    message: null,
    ok: null,
    url: "/signup",
  };

  createUser = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.passwordConfirm,
    };
    const headers = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };

    await fetch(`${URL_API_AUTH}${this.state.url}`, headers)
      .then(async (res) => await this.handleErrors(res))
      .then(async (responseData) => await responseData)
      .catch(async (error) => console.log(await error));
  };

  handleErrors = async (res) => {
    const data = await res.json();

    if (res.status === 404 || res.status === 422) {
      this.setState({
        error: true,
        message: "Ocurrió un error al crear al usuario.",
      });
    } else if (res.status === 200 || res.status === 201) {
      this.setState({
        ok: true,
        error: null,
        message: "Se ha creado al usuario.",
      });
    } else {
    }
  };

  render() {
    // Form validations.
    const createUserSchema = Yup.object({
      email: Yup.string()
        .required("Esté campo es obligatorio")
        .email("No es un correo valido"),
      password: Yup.string().required("Esté campo es obligatorio"),
    });
    return (
      <LogInContainer>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={createUserSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await this.createUser(values);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              {this.state.error === true ? (
                <Alert color="warning">{this.state.message}</Alert>
              ) : (
                ""
              )}
              {this.state.ok && (
                <Alert color="primary">{this.state.message}</Alert>
              )}

              <FormTextName />

              <FormTextEmail />

              <FormTextPassword />

              <FormTextPasswordCon />

              <Button
                outline
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Registrate
              </Button>
            </Form>
          )}
        </Formik>
        <div>
          <Link className="link" to="registro">
            Iniciar Sesión
          </Link>
        </div>
      </LogInContainer>
    );
  }
}

export default RegisterForm;
