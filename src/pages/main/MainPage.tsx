import { FC } from "react";
import { Navigate } from "react-router-dom";

// import './MainPage.scss'

const MainPage: FC = () => {
  return (
    <>
      <Navigate to="/register" />
    </>
  );
};

export default MainPage;
