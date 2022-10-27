import { FC } from "react";
import Form from "../../components/form/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import "./RegisterPage.scss";

const RegisterPage: FC = () => {
  return (
    <>
      <Form type="register" />
    </>
  );
};

export default RegisterPage;
