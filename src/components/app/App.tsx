import React, { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import MainPage from "../../pages/main/MainPage";
import RegisterPage from "../../pages/register/RegisterPage";
import "./App.scss";
import "../../firebase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

const Layout: FC = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
