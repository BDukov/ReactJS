import { useState } from "react";

export default function ControlledFormRaw() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [ageValue, setAgeValue] = useState(0);

  const usernameChangeHandler = (e) => {
    console.log(e.target.value);
    setUsernameValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
    setPasswordValue(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeValue(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = () => {
    console.log(usernameValue);
    console.log(passwordValue);
    console.log(ageValue);
    resetFormHandler();
  };

  const resetFormHandler = () => {
    setUsernameValue("");
    setPasswordValue("");
    setAgeValue(0);
  };

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
            value={usernameValue}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" value={passwordValue} onChange={passwordChangeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" name="password" id="password"  value={ageValue} onChange={ageChangeHandler}/>
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
