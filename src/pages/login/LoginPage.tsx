import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

import "./LoginPage.scss";

const LoginPage: FC = () => {
  const auth = getAuth();

  const loginUser = async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user ? user : null;
  };

  return (
    <>
      <Form submitData={loginUser} />
      <p className="no-acc">
        Нет аккаунта?
        <Link to="/register"> Зарегистрируйтесь!</Link>
      </p>
    </>
  );
};

export default LoginPage;
