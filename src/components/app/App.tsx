import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import MainPage from "../../pages/main/MainPage";
import RegisterPage from "../../pages/register/RegisterPage";
import "./App.scss";
import "../../firebase";
import { authStore } from "../../store/authStore";
import LayoutPage from "../layoutPage/LayoutPage";

const App: FC = () => {
  useEffect(() => {
    authStore.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
