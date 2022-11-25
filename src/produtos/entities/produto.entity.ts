import { IsEnum } from "class-validator";
import { Categoria } from "../utils/categoria.enum";

export class ProdutoEntity {
  uuid: string;
  nome: string;
  valor: number;
  descricao: string;
  disponivel: boolean;
  @IsEnum(Categoria)
  categoria: Categoria;
}
