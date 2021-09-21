import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  //State to hold the input range value
  const [value, setValue] = useState(50000);

  //This function holds changes made to the input range
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <div className={classes.container}>
        <form>
          <div className={classes.formItem}>
            <label className={classes.text} for="name">
              Name
            </label>
            <input type="text" required></input>
          </div>
          <div className={classes.formItem}>
            <label className={classes.text} for="email">
              Email
            </label>
            <input type="email" required></input>
          </div>
          <div className={classes.formItem}>
            <label className={classes.text} for="date of birth">
              Date of Birth
            </label>
            <input type="date" required></input>
          </div>
          <div className={classes.formItem}>
            <label className={classes.text} for="favourite color">
              Favourite Colour
            </label>
            <input type="color"></input>
          </div>
          <div className={classes.formItem}>
            <label className={classes.text} for="salary">
              Salary
            </label>
            <div className={classes.salary}>
              <input
                type="range"
                min="0"
                max="100000"
                id="slider"
                onChange={handleChange}
                value={value}
              ></input>

              <p>£{value}</p>
            </div>
          </div>
          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
