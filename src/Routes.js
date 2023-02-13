import React from "react";
import { ProtectedRoute } from "components";
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
        <Route
          path="/homevtwo"
          element={<ProtectedRoute element={HomevTwo} />}
        />
        <Route path="/stories" element={<ProtectedRoute element={Stories} />} />
        <Route
          path="/singlestorie"
          element={<ProtectedRoute element={SingleStorie} />}
        />
        <Route
          path="/singlepost"
          element={<ProtectedRoute element={SinglePost} />}
        />
        <Route
          path="/singlevideo"
          element={<ProtectedRoute element={SingleVideo} />}
        />
        <Route
          path="/videofullscreen"
          element={<ProtectedRoute element={VideoFullScreen} />}
        />
        <Route path="/events" element={<ProtectedRoute element={Events} />} />
        <Route
          path="/singleevent"
          element={<ProtectedRoute element={SingleEvent} />}
        />
        <Route
          path="/searchresults"
          element={<ProtectedRoute element={SearchResults} />}
        />
        <Route
          path="/notifications"
          element={<ProtectedRoute element={Notifications} />}
        />
        <Route
          path="/messages"
          element={<ProtectedRoute element={Messages} />}
        />
        <Route
          path="/directmessage"
          element={<ProtectedRoute element={DirectMessage} />}
        />
        <Route
          path="/videochat"
          element={<ProtectedRoute element={VideoChat} />}
        />
        <Route
          path="/groupmessage"
          element={<ProtectedRoute element={GroupMessage} />}
        />
        <Route
          path="/myfriends"
          element={<ProtectedRoute element={MyFriends} />}
        />
        <Route
          path="/userprofile"
          element={<ProtectedRoute element={UserProfile} />}
        />
        <Route path="/gallery" element={<ProtectedRoute element={Gallery} />} />
        <Route
          path="/singlephoto"
          element={<ProtectedRoute element={SinglePhoto} />}
        />
        <Route
          path="/myprofile"
          element={<ProtectedRoute element={MyProfile} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute element={Settings} />}
        />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
