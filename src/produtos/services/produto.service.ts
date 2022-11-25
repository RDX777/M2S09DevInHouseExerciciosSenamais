import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

import { ProdutoEntity } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
  private produtos: ProdutoEntity[] = [
    {
      uuid: "27b05784-1558-4ec4-8a4b-ef9cb5faafce",
      nome: "Nome produto 1",
      valor: 123.12,
      descricao: "Descrição produto 1",
      disponivel: true,
      categoria: 0,
    },
    {
      uuid: "688e797e-fcf2-4b79-ba14-bee61684c3ec",
      nome: "Nome produto 2",
      valor: 1.12,
      descricao: "Descrição produto 2",
      disponivel: false,
      categoria: 1,
    },
    {
      uuid: "688e797e-1558-4b79-ba14-ef9cb5faafce",
      nome: "Nome produto 3",
      valor: 1.12,
      descricao: "Descrição produto 3",
      disponivel: true,
      categoria: 1,
    },
  ];

  coletaTodosProdutos(): ProdutoEntity[] {
    return this.produtos.filter((produto) => {
      return produto.disponivel === true;
    });
  }

  coletaPorId(uuid: string): ProdutoEntity {
    return this.produtos.find((produto) => {
      return produto.uuid === uuid;
    });
  }
}
