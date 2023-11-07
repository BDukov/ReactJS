/* eslint-disable react/prop-types */
import { useState } from "react";

const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "Male",
  swimming: false,
  football: false,
  voleyball: false,
};

export default function ControlledForm({ formRef }) {
  const [formValues, setFormValues] = useState(formInitialState);
  const [ageError, setAgeError] = useState("");

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const resetFormHandler = () => {
    setFormValues(formInitialState);
  };

  const submitHandler = () => {
    resetFormHandler();
  };

  const onCheckboxChange = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.checked,
    }));
  };
  // eslint-disable-next-line no-unused-vars
  const ageValidator = (e) => {
    if (formValues.age < 0 || formValues.age > 120) {
      setAgeError("Age must be between 0 and 120");
    } else {
        setAgeError("");
    }
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form ref={formRef}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="password"
            value={formValues.age}
            onChange={changeHandler}
            onBlur={ageValidator}
          />
          {ageError && <p>{ageError}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender </label>
          <select
            name="gender"
            id="gender"
            onChange={changeHandler}
            value={formValues.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <h3>Hobbies</h3>
          <label htmlFor="hobbies">Swimming</label>
          <input
            type="checkbox"
            name="swimming"
            id="swimming"
            checked={formValues.swimming}
            onChange={onCheckboxChange}
          />
          <label htmlFor="hobbies">Football</label>
          <input
            type="checkbox"
            name="football"
            id="football"
            checked={formValues.football}
            onChange={onCheckboxChange}
          />
          <label htmlFor="hobbies">Voleyball</label>
          <input
            type="checkbox"
            name="voleyball"
            id="voleyball"
            checked={formValues.voleyball}
            onChange={onCheckboxChange}
          />
        </div>
        <div>
          {/* <input type="submit" value="Register"/> */}
          <button type="button" onClick={resetFormHandler}>
            Reset
          </button>
          <button type="button" onClick={submitHandler}>
            Register
          </button>
        </div>
      </form>
    </>
  );
}
