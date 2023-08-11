import React from "react";
import styles from "../styles/Avatar.module.css";
import avatarImage from "../assets/default_profile_nqohxy.jpg"

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={avatarImage}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;