export interface IFormProps {
  type?: "register" | "login";
  submitData?: (email: string, password: string) => void;
}

export interface IForm {
  email: string;
  password: string;
}
