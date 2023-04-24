import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../api/AxiosInstance";
import style from "./LandingPage.module.css";

const LandingPage = () => {
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
    <section id={style.LandingPageParent}>
      <article className={style.LandingPageListChild}>
        <main className={style.LandingPageListChild1}>
          <div className={style.SelectAccount1}>
            <h1>Select an account</h1>
          </div>
          <div className={style.userList}>
            {userData.map((val, ind) => {
              return (
                <ul>
                  <Link to={`/profileDashBoard/profile/${val.id}`}>
                    <li>
                      <span id={style.profilePic}>
                        <img src={val.profilepicture} />
                      </span>
                      {val.name}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </main>
      </article>
    </section>
  );
};

export default LandingPage;
