import * as yup from "yup";

export const formSchema = yup
  .object({
    email: yup.string().email("введите корректный email").required(),
    password: yup.string().required().min(6, "минимум 6 символа"),
  })
  .required();
