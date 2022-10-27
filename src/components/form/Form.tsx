import { FC } from "react";
import { formSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormProps, IForm } from "./types";
import "./Form.scss";

const Form: FC<IFormProps> = ({ isRegister, submitData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = ({ email, password }) => {
    submitData!(email, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>
        Email
        <input {...register("email")} />
        <span>{errors.email?.message || ""}</span>
      </label>

      <label>
        Пароль
        <input {...register("password")} autoComplete="new-password" type="password" />
        <span>{errors.password?.message || ""}</span>
      </label>

      <button> {isRegister ? "Зарегистрироваться" : "Войти"}</button>
    </form>
  );
};

export default Form;
