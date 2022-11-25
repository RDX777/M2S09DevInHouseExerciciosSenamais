import { Controller, Get } from "@nestjs/common";

import { ProdutoService } from "../services/produto.service";

@Controller("produtos")
export class ProdutoController {
  constructor(private produtoService: ProdutoService) { }

  @Get()
  coletaTodosProdutos() {
    return this.produtoService.coletaTodosProdutos();
  }
}
