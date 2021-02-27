import React from "react";
import s from "./Profile.module.css";

const Profile_left = () => {
  return (
      <div className={s.profile_left}>
        <div>
          <img alt="Avatar" src="https://i.ibb.co/tY7rKzC/QZ6A5608.jpg"></img>
        </div>
        <div>описание под аватаром</div>
      </div>
  );
};

export default Profile_left;