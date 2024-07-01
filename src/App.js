import React from "react";

// IMPORTAN FILE
import NumberDisplay from "./view/number.js";
import EmployeeForm from "./view/employeForm.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NumberDisplay />
      <EmployeeForm />
    </div>
  );
};

export default App;
