import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/AuthContext";
import { useFormik } from "formik";
import api from "../../services/api";
import "./Login.css";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Login = () => {
  const { setAuthenticated } = useContext(Context);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      console.log(values);
      api.post("/auth/token/", { values }).then((res) => {
        console.log(res);
      });
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
