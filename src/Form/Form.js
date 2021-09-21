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
            <div className={classes.text}>Name</div>
            <input type="text" required></input>
          </div>
          <div className={classes.formItem}>
            <div className={classes.text}>Email</div>
            <input type="email" required></input>
          </div>
          <div className={classes.formItem}>
            <div className={classes.text}>Date of Birth</div>
            <input type="date" required></input>
          </div>
          <div className={classes.formItem}>
            <div className={classes.text}>Favourite Colour</div>
            <input type="color"></input>
          </div>
          <div className={classes.formItem}>
            <div className={classes.text}>Salary</div>
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
