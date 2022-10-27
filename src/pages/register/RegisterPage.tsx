import { FC } from "react";
import Form from "../../components/form/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// import "./RegisterPage.scss";

const RegisterPage: FC = () => {
  const auth = getAuth();

  const createUser = async (email: string, password: string) => {
    console.log("CREATE USER");
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  };

  return (
    <>
      <Form submitData={createUser} isRegister />
    </>
  );
};

export default RegisterPage;
