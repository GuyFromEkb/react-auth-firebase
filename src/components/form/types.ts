export interface IFormProps {
  isRegister?: boolean;
  submitData?: (email: string, password: string) => void;
}

export interface IForm {
  email: string;
  password: string;
}
