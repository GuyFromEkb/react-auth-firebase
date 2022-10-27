import { User } from "firebase/auth";

export interface IFormProps {
  isRegister?: boolean;
  submitData: (email: string, password: string) => Promise<User | null>;
}

export interface IForm {
  email: string;
  password: string;
}
