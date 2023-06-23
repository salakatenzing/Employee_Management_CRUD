// import React, { useState } from "react";
// import axios from "axios";

// function CreateEmployee() {
//   const [firstName, setFName] = useState("");
//   const [emailId, setEmail] = useState("");
//   const [lastName, setLName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const customer = { firstName, emailId, lastName };
//     await axios.post("http://localhost:8080/api/v1/customers", customer);
//     setFName("");
//     setEmail("");
//     setLName("");
//   };

//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <h1>Create User</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-floating mb-2">
//           <label htmlFor="name">First Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={firstName}
//             onChange={(e) => setFName(e.target.value)}
//           />
//         </div>
//         <div className="form-floating mb-2">
//           <label htmlFor="name">Last Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={lastName}
//             onChange={(e) => setLName(e.target.value)}
//           />
//         </div>

//         <div className="form-floating mb-2">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={emailId}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Create Customer
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateEmployee;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
  const [firstName, setFName] = useState("");
  const [emailId, setEmail] = useState("");
  const [lastName, setLName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const customer = { firstName, emailId, lastName };
    await axios.post("http://localhost:8080/api/v1/employees", customer);
    setFName("");
    setEmail("");
    setLName("");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="text-center">Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
