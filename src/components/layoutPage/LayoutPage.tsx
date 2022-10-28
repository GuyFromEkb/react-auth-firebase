import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./LayoutPage.scss";

const LayoutPage: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default observer(LayoutPage);
