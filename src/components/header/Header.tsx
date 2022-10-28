import { observer } from "mobx-react-lite";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import "./Header.scss";

const Header: FC = () => {
  const { isAuth, logout } = authStore;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <h1 className="header_logo">React-auth</h1>
          <nav className="header__links">
            {isAuth && (
              <NavLink end to="/">
                Главная страница
              </NavLink>
            )}
            <NavLink to="/register"> Регистрация</NavLink>
            {isAuth ? <button onClick={logout}>Выйти</button> : <NavLink to="/login"> Войти</NavLink>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
