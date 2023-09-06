import { z } from "zod";

export const createTodoFormSchema = z.object({
   title: z.string().nonempty("Título é obrigatório"),
   content: z
      .string()
      .nonempty("Conteúdo é obrigatório")
      .min(8, "É necessário conter pelo menos oito caracteres"),
});

//Gerar um tipo com base no schema
export type TCreateTodoFormValues = z.infer<typeof createTodoFormSchema>;