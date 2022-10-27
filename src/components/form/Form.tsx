import { FC } from "react";
import "./Form.scss";

interface IProps {
  type?: "register" | "login";
  submitData?: (email: string, password: string) => void;
}

const Form: FC<IProps> = ({ type = "login", submitData }) => {
  //   const onSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // const formData = new FormData(e.target);
  //     // const data = new FormData(e.target as unknown as HTMLFormElement);
  //     const data = new FormData(e.currentTarget);
  //     console.log(data.get("email"));
  //     // submitData()
  //   };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Email</p>
          <input name="email" type="email" />
        </label>

        <label>
          <p>Пароль</p>
          <input autoComplete="new-password" name="pasword" type="password" />
        </label>

        <button> {type === "register" ? "Зарегистрироваться" : "Войти"}</button>
      </form>
    </>
  );
};

export default Form;
