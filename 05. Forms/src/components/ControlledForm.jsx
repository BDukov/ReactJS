import { useState } from "react";

const formInitialState = {
    username: "",
    password: "",
    age: ""
}

export default function ControlledForm() {

    const [formValues, setFormValues] = useState(formInitialState);


const changeHandler = (e) => {
    setFormValues(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
    console.log(e.target.value);
    console.log(e.target.name);
}

const resetFormHandler = () => {
    setFormValues(formInitialState);
}

const submitHandler = () => {
    resetFormHandler();
}

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
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
          <input type="text" name="password" id="password" value={formValues.password} onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="password"  value={formValues.age} onChange={changeHandler}/>
        </div>
        <div>
          {/* <input type="submit" value="Register"/> */}
          <button type="button" onClick={resetFormHandler}>Reset</button>
          <button type="button" onClick={submitHandler}>Register</button>
        </div>
      </form>
    </>
  );
}
