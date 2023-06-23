import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Employees from "../features/Employees";
import CreateEmployee from "../features/CreateEmployee";
import EditEmployee from "../features/EditEmployee";

const AppRoutes = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Employees />} />
        <Route path="/allEmployees" element={<Employees />} />
        <Route path="/createEmployee" element={<CreateEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
