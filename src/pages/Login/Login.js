import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { useFormik } from "formik";
import "./Login.css";

const Login = () => {
  const { setAuthenticated } = useContext(Context);
  const history = useHistory();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //fetch api for login
      //header ----> moises
      //value ----> goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H
      setAuthenticated(true);
      history.push("/home");
    },
  });
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
