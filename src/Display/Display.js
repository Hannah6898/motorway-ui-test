import React from "react";
import classes from "./Display.module.css";
import Form from "../Form/Form";

const Display = (props) => {
  //Main image display
  return (
    <div>
      <div>
        <div className={classes.container}>
          {
            //Mapping through car images
            props.images &&
              props.images.map((img) => (
                <div className={classes.galleryContainer}>
                  <div className={classes.galleryItem}>
                    <div className={classes.image} key={img.id}>
                      <img src={img.url} alt={img.alt_description} />
                    </div>
                    <div className={classes.text}>{img.user.first_name}</div>
                  </div>
                </div>
              ))
          }

          {
            //Mapping through user images
            props.images &&
              props.images.map((img) => (
                <div className={classes.galleryContainer}>
                  <div className={classes.galleryItem}>
                    <div className={classes.image} key={img.id}>
                      <img src={img.user.profile_image} alt="" />
                    </div>
                    <div className={classes.text}>{img.user.first_name}</div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Display;
