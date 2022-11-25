import { Controller, Get, Param } from "@nestjs/common";

import { ProdutoService } from "../services/produto.service";
import { ProdutoEntity } from "../entities/produto.entity";
import { LocalizaUuidDto } from "../dtos/localiza-uuid.dto";

@Controller("produtos")
export class ProdutoController {
  constructor(private produtoService: ProdutoService) { }

  @Get()
  coletaTodosProdutos(): ProdutoEntity[] {
    return this.produtoService.coletaTodosProdutos();
  }

  @Get(":uuid")
  coletaPorId(@Param() params: LocalizaUuidDto): ProdutoEntity {
    return this.produtoService.coletaPorId(params.uuid);
  }
}
