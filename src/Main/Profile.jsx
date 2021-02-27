import React from "react";
import s from "./Profile.module.css";
import Profile_left from "./Profile_left";
import Profile_right from "./Profile_right";

const Profile = () => {
  return (
    <div className={s.profile}>
        <Profile_left/>
        <Profile_right/>
    </div>
  );
};

export default Profile;
