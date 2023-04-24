import React from 'react'
import ProfileMainBar from './ProfileMainBar'
import ProfileSideBar from './ProfileSideBar'
import Style from "../profile dashboard/ProfileDashBoard.module.css"
const ProfileMainPage = () => {
  return (
    <section id={Style.dashBoard}>
   <article>
   <ProfileSideBar/>
   <ProfileMainBar/>
   </article>
    </section>
  )
}

export default ProfileMainPage
