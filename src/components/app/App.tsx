import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import MainPage from "../../pages/main/MainPage";
import RegisterPage from "../../pages/register/RegisterPage";
import "./App.scss";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
