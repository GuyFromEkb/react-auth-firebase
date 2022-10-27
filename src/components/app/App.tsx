import React, { FC, useEffect } from "react";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import MainPage from "../../pages/main/MainPage";
import RegisterPage from "../../pages/register/RegisterPage";
import "./App.scss";
import "../../firebase";
import { authStore } from "../../store/authStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

function App() {
  useEffect(() => {
    authStore.init();
  }, []);


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

const Layout: FC = observer(() => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => console.log(toJS(authStore.isAuth))}>Show userProfile</button>
      <button onClick={() => navigate({ pathname: "/" })}>Go To Main</button>
      <Outlet />
    </div>
  );
});
