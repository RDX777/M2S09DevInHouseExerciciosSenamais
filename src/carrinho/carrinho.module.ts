import { Module } from "@nestjs/common";
import { ProdutoService } from "src/produtos/services/produto.service";

import { CarrinhoController } from "./controllers/carrinho.controller";
import { CarrinhoService } from "./services/carrinho.service";

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService, ProdutoService],
})
export class CarrinhoModule { }
