import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as currentUserActions from "../../redux/actions/currentUser";
import { withRouter } from "react-router-dom";
import { LogInContainer } from "../../styles/Forms";

import FormTextEmail from "../FormTextEmail";
import FormTextPassword from "../FormTextPassword";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "reactstrap";
class LoginForm extends Component {
  createUser = async (values) => {
    await this.props.logIn(values.email, values.password);
    this.handlerCheckUser();
  };
  handlerCheckUser = async () => {
    if (this.props.currentUserReducer.currentUser.token_type === "Bearer") {
      if (this.props.location.search) {
        const preRedirectTo = window.decodeURIComponent(
          this.props.location.search
        );
        const redirectTo = preRedirectTo.split("?redirectTo=/");
        this.props.history.push(`/${redirectTo[1]}`);
      } else {
        this.props.history.push("/private");
        window.location.href = "/private";
      }
    } else {
      this.setState({ error: true });
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
            email: "",
            password: "",
          }}
          validationSchema={createUserSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await this.createUser(values);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <FormTextEmail />

              <FormTextPassword />

              <Button
                outline
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Iniciar sesión
              </Button>
            </Form>
          )}
        </Formik>
        <div>
          <span>¿No te has registrado?</span>
          <Link className="link" to="registro">
            Regístrate
          </Link>
        </div>
      </LogInContainer>
    );
  }
}

const mapStateToProps = ({ currentUserReducer }) => {
  return {
    currentUserReducer,
  };
};
const actions = {
  logIn: currentUserActions.logIn,
};
export default withRouter(connect(mapStateToProps, actions)(LoginForm));
