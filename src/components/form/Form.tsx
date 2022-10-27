import { FC } from "react";
import { formSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormProps, IForm } from "./types";
import "./Form.scss";
import { LS_PROFILE_EMAIL, LS_PROFILE_ID, LS_PROFILE_TOKEN, LS_KEY } from "../../utils/getUserTheme";
import { authStore } from "../../store/authStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Form: FC<IFormProps> = ({ isRegister, submitData }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = async ({ email, password }) => {
    const user = await submitData(email, password);

    if (user) {
      const userObj = {
        profileEmail: String(user.email),
        profileId: user.uid,
        profileToken: await user.getIdToken(),
      };

      authStore.setAuthProfile = userObj;
      const lsObj = JSON.stringify(userObj);
      localStorage.setItem(LS_KEY, lsObj);
      navigate({ pathname: "/" });
    }
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

export default observer(Form);
