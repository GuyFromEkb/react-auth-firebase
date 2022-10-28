import { FC } from "react";
import Form from "../../components/form/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { authStore } from "../../store/authStore";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

const RegisterPage: FC = () => {
  // const { isAuth } = authStore;
  // if (isAuth) return <Navigate to="/" />;

  const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    return user ? user : null;
  };

  return (
    <>
      <Form submitData={createUser} isRegister />
    </>
  );
};

export default observer(RegisterPage);
