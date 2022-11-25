import { Categoria } from "../utils/categoria.enum";

export class ProdutoEntity {
  uuid: string;
  nome: string;
  valor: number;
  descricao: string;
  disponivel: boolean;
  categoria: Categoria;
}
