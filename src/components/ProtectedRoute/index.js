import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const access = localStorage.getItem("access");

  if (
    !access &&
    [
      "/homevtwo",
      "/stories",
      "/singlestorie",
      "/singlepost",
      "/singleevent",
      "/events",
      "/videofullscreen",
      "/singlevideo",
      "/searchresults",
      "/notifications",
      "/messages",
      "/directmessage",
      "/videochat",
      "/groupmessage",
      "/myfriends",
      "/userprofile",
      "/gallery",
      "/singlephoto",
      "/myprofile",
      "/settings",
    ].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
