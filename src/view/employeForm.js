import React from "react";
import { Form, Field } from "react-final-form";
import "../assets/css/form.css";

const EmployeeForm = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, 0, 2));
  };

  const resetForm = (form) => {
    form.reset();
  };

  return (
    <div className="employee-form-container">
      <h2>Employee Form</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>First Name:</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="form-field">
              <label>Last Name:</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div className="form-field">
              <label>
                Employed:
                <Field name="employed" component="input" type="checkbox" />
              </label>
            </div>

            <div className="form-field">
              <label>Education:</label>
              <Field name="education" component="select">
                <option value="">Select Education</option>
                <option value="master">Master</option>
                <option value="beginner">Beginner</option>
              </Field>
            </div>

            <div className="form-field">
              <label>Skills:</label>
              <div className="checkbox-group">
                <label>
                  <Field
                    name="skills"
                    component="input"
                    type="checkbox"
                    value="HTML"
                  />{" "}
                  HTML
                </label>
                <label>
                  <Field
                    name="skills"
                    component="input"
                    type="checkbox"
                    value="CSS"
                  />{" "}
                  CSS
                </label>
                <label>
                  <Field
                    name="skills"
                    component="input"
                    type="checkbox"
                    value="JavaScript"
                  />{" "}
                  JavaScript
                </label>
                <label>
                  <Field
                    name="skills"
                    component="input"
                    type="checkbox"
                    value="NodeJS"
                  />{" "}
                  NodeJS
                </label>
                <label>
                  <Field
                    name="skills"
                    component="input"
                    type="checkbox"
                    value="ReactJS"
                  />{" "}
                  ReactJS
                </label>
              </div>
            </div>

            <div className="form-field">
              <label>Preferred:</label>
              <div className="radio-group">
                <label>
                  <Field
                    name="preferred"
                    component="input"
                    type="radio"
                    value="Front End"
                  />{" "}
                  Front End
                </label>
                <label>
                  <Field
                    name="preferred"
                    component="input"
                    type="radio"
                    value="Back End"
                  />{" "}
                  Back End
                </label>
                <label>
                  <Field
                    name="preferred"
                    component="input"
                    type="radio"
                    value="Full Stack"
                  />{" "}
                  Full Stack
                </label>
              </div>
            </div>

            <div className="form-field">
              <label>Note:</label>
              <Field
                name="note"
                component="input"
                type="text"
                placeholder="Enter your notes here"
              />
            </div>

            <div className="form-buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={() => resetForm(form)}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>

            <div className="json-preview">
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default EmployeeForm;
