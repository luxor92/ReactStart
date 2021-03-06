import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          height="100px"
          src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_5.jpg"
        ></img>
      </div>
      <div className={classes.descriptionBlock}>avatar+description</div>
    </div>
  );
};

export default ProfileInfo;
