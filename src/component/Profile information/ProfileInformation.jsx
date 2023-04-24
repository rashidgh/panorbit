import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "../api/AxiosInstance";
import { useState } from "react";
import Style from "../Profile information/Profile.module.css";
import ChatBox from "../chatbox/ChatBox";

const ProfileInformation = () => {
  let [state, setState] = useState(null);
  let [portal, setPortal] = useState(true);
  let { id } = useParams();

  // console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      let data = await AxiosInstance.get(`/users/${id}`);
      setState(data.data);
    };
    fetchData();
  }, [id]);

  console.log("state", state);

  return (
    <section id={Style.profileBlock}>
      {state !== null ? (
        <>
          <article>
            <div id={Style.header}>
              <h1>Profile</h1>
              <h2>
                <span>
                  <img src={state.profilepicture} alt="profile"></img>
                </span>
                <p style={{cursor:"pointer"}} onClick={()=>setPortal(!portal)}>{state.name}</p>
                {portal ? (
                  ""
                ) : (
                  <div
                    className="portal"
                    style={{
                      position: "absolute",
                      right: "1em",
                      top: "5em",
                      display: "flex",
                      height: "18em",
                      flexDirection: "column",
                      backgroundColor: "#fff",
                      justifyContent: "space-around",
                      padding: "3em",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      style={{ height: "80px", width: "80px",borderRadius:"100%" }}
                      src={state.profilepicture}
                      alt="profile"
                    />
                    <p>{state.name}</p>
                    <p>{state.email}</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <h4
                        style={{
                          width: "5.2em",
                          padding: "6px 12px",
                          backgroundColor: "#d55151",
                            borderRadius: "20px",
                          color:"#fff"
                        }}
                      >
                        Sign out
                      </h4>
                    </Link>
                  </div>
                )}
              </h2>
            </div>
          </article>
          <aside id={Style.userDetails}>
            <div id={Style.info}>
              <aside id={Style.details}>
                <img src={state.profilepicture} alt="profile"></img>
                <h3>{state.name}</h3>
                <h4>
                  <span>Username : </span> {state.username}
                </h4>
                <h4>
                  <span>email : </span> {state.email}
                </h4>
                <h4>
                  <span>Phone : </span> {state.phone}
                </h4>
                <h4>
                  <span>Website : </span> {state.website}
                </h4>
              </aside>
              <aside id={Style.company}>
                <h3>Company</h3>
                <h4>
                  <span>Name : </span> {state.company.name}
                </h4>
                <h4>
                  <span>catchPhrase : </span> {state.company.catchPhrase}
                </h4>
                <h4>
                  <span>bs : </span> {state.company.bs}
                </h4>
              </aside>
            </div>
            <div id={Style.address}>
              <h3 style={{ textAlign: "start" }}>Address:</h3>
              <h4 style={{ paddingLeft: "6vh" }}>
                <span>Street : </span> {state.address.street}
              </h4>
              <h4 style={{ paddingLeft: "6vh" }}>
                <span>Suite : </span> {state.address.suite}
              </h4>
              <h4 style={{ paddingLeft: "6vh" }}>
                <span>City : </span> {state.address.city}
              </h4>
              <h4 style={{ paddingLeft: "6vh" }}>
                <span>Zipcode : </span> {state.address.zipcode}
              </h4>
              <img
                className={Style.map}
                src="https://media.istockphoto.com/id/865709066/photo/google-pins-on-a-world-map.jpg?b=1&s=170667a&w=0&k=20&c=tJCseHWxfStjz01K0lG_o3MuateJYL7qe2_vb2Tnmls="
                alt="map"
              />
              <div style={{ marginLeft: "58px", marginTop: "-10px" }}>
                <span className={Style.Lat}>Lat: {state.address.geo.lat}</span>{" "}
                &nbsp;
                <span className={Style.Lng}>Lat: {state.address.geo.lng}</span>
              </div>
            </div>
            <ChatBox />
          </aside>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default ProfileInformation;
