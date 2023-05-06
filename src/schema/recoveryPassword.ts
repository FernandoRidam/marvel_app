import * as yup from "yup";

const requiredFieldMessage = "Campo Obrigatório";

export const RecoveryPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required( requiredFieldMessage ),
}).required();

export type RecoveryPasswordFormData = yup.InferType<typeof RecoveryPasswordSchema>;
