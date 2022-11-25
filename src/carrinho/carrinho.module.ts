import { Module } from "@nestjs/common";

import { CarrinhoController } from "./controllers/carrinho.controller";
import { CarrinhoService } from "./services/carrinho.service";

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule { }
