import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Style from "./_posts.module.css"
import AxiosInstance from '../api/AxiosInstance';

const Post = () => {
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
    <section>
      <article>
        <div id={Style.header}>
          <h1>Posts</h1>
          <h2>
            <span>
              <img src={state.profilepicture}></img>
            </span>
            {state.name}
          </h2>
        </div>
      </article>
      <div>
      <h1 id={Style.PostMessage}>Coming Soon</h1>
      </div>
    </section>
  )
}

export default Post
