import { FC } from "react";
import "./Form.scss";

interface IProps {
  type?: "register" | "login";
  submitData?: (email: string, password: string) => void;
}

const Form: FC<IProps> = ({ type = "login" }) => {
  return (
    <>
      <form className="form">
        <label>
          <p>Email</p>
          <input type="email" />
        </label>

        <label>
          <p>Пароль</p>
          <input autoComplete="new-password" type="password" />
        </label>

        <button> {type === "register" ? "Зарегистрироваться" : "Войти"}</button>
      </form>
    </>
  );
};

export default Form;
