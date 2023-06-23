import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customerList = await axios.get(
          "http://localhost:8080/api/v1/employees"
        );
        setCustomers(customerList.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigate = (id) => {
    const destination = `/edit-employee/${id}`;
    navigate(destination);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Employee List</h1>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.emailId}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleNavigate(customer.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <a href="/createEmployee">
        <button className="btn btn-primary">Create New Employee</button>
      </a>
    </div>
  );
};

export default Employees;
