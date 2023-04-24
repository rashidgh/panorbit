import React from "react";
import LandingPage from "./component/landingpage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInformation from "./component/Profile information/ProfileInformation";
import ProfileMainPage from "./component/profile dashboard/ProfileMainPage";
import Gallery from "./component/Gallery/Gallery";
import Post from "./component/Post/Post";
import ToDo from "./component/ToDo/ToDo";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profileDashBoard" element={<ProfileMainPage />}>
          <Route path="profile/:id" element={<ProfileInformation />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="post" element={<Post />} />
          <Route path="todo" element={ <ToDo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
