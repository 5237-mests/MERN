// import React, { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });

//   const { name, email, password, password2 } = formData;

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   return (
//     <>
//       <section className="heading">
//         <h1>
//           <FaUser /> Register
//         </h1>
//         <p>Please create an account</p>
//       </section>

//       <section className="form">
//         <form>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               value={name}
//               placeholder="Enter your name"
//               onChange={(e) => onChange(e)}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => onChange(e)}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               placeholder="Enter password"
//               onChange={(e) => onChange(e)}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="password2"
//               value={password2}
//               placeholder="Confirm password"
//               onChange={(e) => onChange(e)}
//             />
//           </div>

//           <div className="form-group">
//             <button className="btn btn-block">Submit</button>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Add your form validation logic here
    if (password !== password2) {
      // Handle password mismatch error
      console.log("Passwords do not match");
    } else {
      // Perform the registration logic, e.g., send data to the server
      console.log("Form submitted:", formData);

      // You can also reset the form after submission if needed
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
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
                <FaUser /> Register
              </h1>
              <p className="text-center">Please create an account</p>

              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => onChange(e)}
                  />
                </div>

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
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    value={password2}
                    placeholder="Confirm password"
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

export default Register;
