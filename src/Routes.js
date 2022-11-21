import React from "react";
import Settings from "pages/Settings";
import MyProfile from "pages/MyProfile";
import SinglePhoto from "pages/SinglePhoto";
import Gallery from "pages/Gallery";
import UserProfile from "pages/UserProfile";
import MyFriends from "pages/MyFriends";
import GroupMessage from "pages/GroupMessage";
import VideoChat from "pages/VideoChat";
import DirectMessage from "pages/DirectMessage";
import Messages from "pages/Messages";
import Notifications from "pages/Notifications";
import SearchResults from "pages/SearchResults";
import SingleEvent from "pages/SingleEvent";
import Events from "pages/Events";
import VideoFullScreen from "pages/VideoFullScreen";
import SingleVideo from "pages/SingleVideo";
import SinglePost from "pages/SinglePost";
import SingleStorie from "pages/SingleStorie";
import Stories from "pages/Stories";
import HomevTwo from "pages/HomevTwo";
import HomevOne from "pages/HomevOne";
import PasswordRecovery from "pages/PasswordRecovery";
import Signup from "pages/Signup";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/homevone" element={<HomevOne />} />
        <Route path="/homevtwo" element={<HomevTwo />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/singlestorie" element={<SingleStorie />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/singlevideo" element={<SingleVideo />} />
        <Route path="/videofullscreen" element={<VideoFullScreen />} />
        <Route path="/events" element={<Events />} />
        <Route path="/singleevent" element={<SingleEvent />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/directmessage" element={<DirectMessage />} />
        <Route path="/videochat" element={<VideoChat />} />
        <Route path="/groupmessage" element={<GroupMessage />} />
        <Route path="/myfriends" element={<MyFriends />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/singlephoto" element={<SinglePhoto />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
