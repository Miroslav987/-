import React from "react";
import { Routes, Route } from "react-router-dom";

import IncomePage from "./pages/IncomePage";
import OutputPage from "./pages/OutputPage";
import DiagramPage from "./pages/DiagramPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

const PAGES_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/registration",
    element: <RegistrationPage />,
    id: 2,
  },
  {
    link: "/login",
    element: <LoginPage />,
    id: 3,
  },
  {
    link: "/income",
    element: <IncomePage />,
    id: 4,
  },
  {
    link: "/output",
    element: <OutputPage />,
    id: 5,
  },
  {
    link: "/diagram",
    element: <DiagramPage />,
    id: 6,
  },
];

const MainRouting = () => {
  return (
    <Routes>
      {PAGES_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRouting;
