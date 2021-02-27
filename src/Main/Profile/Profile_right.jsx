import React from "react";
import s from "./Profile.module.css";

const Profile_right = () => {
  return (
      <div className={s.profile_right}>
        <div>ИМЯ, ФАМИЛИЯ и/или НИК</div>
        <div>Дата рождения</div>
        <div>город</div>
        <div>семейное положение</div>
        <div>образование</div>
        <div>список увлечений (группы?)</div>
      </div>
  );
};

export default Profile_right;