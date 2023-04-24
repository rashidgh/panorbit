import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "../api/AxiosInstance";
import { CgChevronRightO } from "react-icons/cg";
import Style from "../profile dashboard/ProfileDashBoard.module.css";
const ProfileSideBar = () => {
  let [state, setState] = useState({});
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetch = async () => {
      try {
        let data = await AxiosInstance.get(`/users/${id}`);
        console.log(data.data);
        setState(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fetch();
  }, []);

  return (
    <section id={Style.sidebar}>
      <article id={Style.articleSideBlock}>
        <ul>
          <Link to={`/profileDashBoard/profile/${state.id}`}>
            <li>
              Profile <CgChevronRightO style={{ fontSize: "24px" }} />
            </li>
          </Link>
          <Link to={"/profileDashBoard/post"}>
            <li>
              Post <CgChevronRightO style={{ fontSize: "24px" }} />
            </li>
          </Link>
          <Link to={"/profileDashBoard/gallery"}>
            <li>
              Gallery <CgChevronRightO style={{ fontSize: "24px" }} />
            </li>
          </Link>

          <Link to={"/profileDashBoard/todo"}>
            <li>
              ToDo <CgChevronRightO style={{ fontSize: "24px" }} />
            </li>
          </Link>
        </ul>
      </article>
    </section>
  );
};

export default ProfileSideBar;
