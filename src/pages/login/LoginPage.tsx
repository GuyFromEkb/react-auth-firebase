import { FC } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

import "./LoginPage.scss";

const LoginPage: FC = () => {
  return (
    <>
      <Form />
      <p className="no-acc">
        Нет аккаунта?
        <Link to="/register"> Зарегистрируйтесь!</Link>
      </p>
    </>
  );
};

export default LoginPage;
