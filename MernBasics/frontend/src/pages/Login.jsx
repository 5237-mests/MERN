import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Add your form validation logic here
    if (password !== "") {
      // Handle password mismatch error
      console.log("Passwords do not match");
    } else {
      // Perform the registration logic, e.g., send data to the server
      console.log("Form submitted:", formData);

      // You can also reset the form after submission if needed
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">
                <FaSignInAlt /> Login
              </h1>
              <p className="text-center text-muted">
                Login and start setting goals
              </p>

              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
