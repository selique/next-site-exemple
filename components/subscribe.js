import React from "react";
import axios from "axios";
import { Formik } from "formik";
import ReactGA from "react-ga";

import { MoonLoader } from "react-spinners";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSubscribed: false
    };
  }

  //dispara form de email
  handleSubmit = (values, setSubmitting) => {
    const name = "sb";
    const { email: emailSub } = values;
    const formData = new FormData();
    formData.set("email", emailSub);
    formData.set("product", name);

    //dispara evento para o google anlytics quando form de email é enviado com sucesso
    ReactGA.event({
      category: "social",
      action: "submit subscribe",
      value: emailSub
    });

    axios({
      method: "POST",
      url: `https://ninja.org/api/user/subscribe`,
      data: formData
    })
      .then(() => {
        this.setState({ hasSubscribed: true }, () => {
          setSubmitting(false);
        });
        //dispara evento para o google anlytics quando form de email é enviado com sucesso
        ReactGA.event({
          category: "social",
          action: "submit subscribe success",
          value: emailSub
        });
      })
      .catch(err => {
        console.log("err subscribe email", err);
        setSubmitting(false);
        //dispara evento para o google anlytics quando form de email é enviado com com erro
        ReactGA.event({
          category: "social",
          action: "submit subscribe failed",
          value: emailSub
        });
      });
  };
  render() {
    const { hasSubscribed } = this.state;

    return (
      <div>
        {!hasSubscribed ? (
          <Formik
            initialValues={{ email: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                this.handleSubmit(values, setSubmitting);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="sb-subscribe">
                  <input
                    placeholder="Enter your email address"
                    className="form-control sb-subscribe__input has-error"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <span className="w-100 text-danger text-left">
                      <span>{errors.email}</span>
                    </span>
                  )}
                  <button
                    type="submit"
                    className="sb-subscribe__btn"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? (
                      "Submit"
                    ) : (
                      <MoonLoader
                        sizeUnit={"px"}
                        size={18}
                        color={"#fff"}
                        loading={true}
                      />
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        ) : (
          <h5>
            <strong className="text-success">Thank you for subscribing!</strong>
          </h5>
        )}
      </div>
    );
  }
}
export default Subscribe;
