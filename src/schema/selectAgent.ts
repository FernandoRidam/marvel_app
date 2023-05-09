import * as yup from "yup";

const requiredFieldMessage = "Campo Obrigatório";

export const SelectAgentSchema = yup.object({
  agent: yup
    .number()
    .required( requiredFieldMessage ),
}).required();

export type SelectAgentData = yup.InferType<typeof SelectAgentSchema>;
