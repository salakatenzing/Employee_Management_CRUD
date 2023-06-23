import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/employees/${id}`
        );
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(employee);
      await axios.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <label htmlFor="firstName"></label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating mb-2">
          <label htmlFor="lastName"></label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating mb-2">
          <label htmlFor="emailId"></label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
