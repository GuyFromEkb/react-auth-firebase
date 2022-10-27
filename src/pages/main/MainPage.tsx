import { observer } from "mobx-react-lite";
import { FC, useLayoutEffect } from "react";
import { Navigate } from "react-router-dom";
import { authStore } from "../../store/authStore";

// import './MainPage.scss'

const MainPage: FC = () => {
  // const { isAuth } = authStore;
  // useLayoutEffect(() => {
  //   console.log("useLayot");

  //   authStore.init();
  // });

  if (!authStore.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Welcome to Main Page!</h1>
    </>
  );
};

export default observer(MainPage);
