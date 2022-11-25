import { Module } from "@nestjs/common";

import { ProdutoController } from "./controllers/produto.controller";
import { ProdutoService } from "./services/produto.service";

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule { }
