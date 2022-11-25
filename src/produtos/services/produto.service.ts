import { Injectable } from "@nestjs/common";

import { CriaProdutoDto } from "../dtos/cria-produto.dto";

@Injectable()
export class ProdutoService {
  private produtos: CriaProdutoDto[] = [
    {
      nome: "Nome produto 1",
      valor: 123.12,
      descricao: "descrição produto 1",
      disponivel: true,
      categoria: 0,
    },
    {
      nome: "Nome produto 2",
      valor: 1.12,
      descricao: "descrição produto 2",
      disponivel: true,
      categoria: 1,
    },
  ];
}
