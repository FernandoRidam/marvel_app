import * as yup from "yup";

const requiredFieldMessage = "Campo Obrigatório";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required( requiredFieldMessage ),

  password: yup
    .string()
    .required( requiredFieldMessage ),
}).required();

export type LoginData = yup.InferType<typeof LoginSchema>;
