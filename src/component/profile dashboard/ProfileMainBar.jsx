import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from "../profile dashboard/ProfileDashBoard.module.css"
const ProfileMainBar = () => {
  return (
    <div id={Style.mainBar}>
      <Outlet/>
    </div>
  )
}

export default ProfileMainBar
