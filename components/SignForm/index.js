import React, { useState } from "react";
import styles from "./SignForm.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignForm = (props) => {
  const { submitText, onSubmit, errorText } = props;
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#inputEmail").value;
    const password = document.querySelector("#inputPassword").value;
    const user = { username, password };
    try {
      await onSubmit(user);
      document.querySelector("#redirect-home").click();
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className={`card ${styles.cardSignin} my-5`}>
            <div className={styles.cardBody}>
              <h5 className={`${styles.cardTitle} text-center`}>Sign In</h5>
              <form onSubmit={handleSubmit} className={styles.formSignin}>
                <div className={`${styles.formLabelGroup} form-label-group`}>
                  <input
                    type="email"
                    id="inputEmail"
                    className={`${styles.input} form-control`}
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label className={styles.label} htmlFor="inputEmail">
                    Email address
                  </label>
                </div>

                <div className={styles.formLabelGroup}>
                  <input
                    type="password"
                    id="inputPassword"
                    className={`${styles.input} form-control`}
                    placeholder="Password"
                    required
                  />
                  <label className={styles.label} htmlFor="inputPassword">
                    Password
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className={`${styles.labelCheckbox} custom-control-label`}
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {errorText}
                  </div>
                )}

                <button
                  className={`${styles.button} btn btn-lg btn-primary btn-block text-uppercase w-100`}
                  type="submit"
                >
                  {submitText}
                </button>

                <hr className="my-4" />
                <button
                  className={`${styles.button} ${styles.btnGoogle} btn btn-lg btn-google btn-block text-uppercase w-100 mb-2`}
                  type="submit"
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Sign in
                  with Google
                </button>
                <button
                  className={`${styles.button} ${styles.btnFacebook} btn btn-lg btn-facebook btn-block text-uppercase w-100`}
                  type="submit"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="mr-2" /> Sign
                  in with Facebook
                </button>
              </form>
              <Link href="/">
                <a hidden id="redirect-home" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignForm;
