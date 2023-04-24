import React, { useState, useEffect } from "react";
import styles from "./ChatBox.module.css";
import AxiosInstance from "../api/AxiosInstance";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  const [isMaximized, setIsMaximized] = useState({ x: false, y: false });

  const toggleMaximize = () => {
    setIsMaximized((prevState) => ({
      ...prevState,
      y: !prevState.y,
    }));
  };

  let [userData, setUserData] = useState([]);

  useEffect(() => {
    let data = async () => {
      try {
        let FinalUserData = await AxiosInstance.get("users");
        console.log(FinalUserData.data);
        setUserData(FinalUserData.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    data();
  }, []);

  return (
    <div
      className={`${styles.chatBox} ${isMaximized.y ? styles.maximizedY : ""} ${
        isMaximized.x ? styles.maximizedX : ""
      }`}
    >
      <div className={styles.header} onClick={toggleMaximize}>
        <div
          className={`${styles.arrow} ${
            isMaximized.y ? styles.rotateArrow : ""
          }`}
        />
        <div className={styles.title}>
          {/* chat icon */}
          <FontAwesomeIcon icon={faComments} id={styles.ChatIcon} />
          Chat
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.userList}>
          {userData.map((val, ind) => {
            return (
              <ul>
                <Link to={`/profileDashBoard/profile/${val.id}`}>
                  <li>
                    <span id={styles.profilePic}>
                      <img src={val.profilepicture} />
                    </span>
                    {val.name}
                  </li>
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;




