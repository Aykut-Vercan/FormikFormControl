import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './Form.module.css'


const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

const initialValues = {
  email: "",
  password: ""
};

const SignInForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={(values) => { console.log(values); }}>
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className={styles.container}>
            <h1>Sign in</h1>
            <Form>
              <div className={styles.formRow}>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" className={errors.email && touched.email ? styles.inputError : null} />
                <ErrorMessage name="email" component="span" className={styles.error} />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" id="password" className={errors.password && touched.password ? styles.inputError : null} />
                <ErrorMessage name="password" component="span" className={styles.error} />
              </div>

              <button type="submit" className={!(dirty && isValid) ? styles.disabledBtn : ""} disabled={!(dirty && isValid)}>
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
