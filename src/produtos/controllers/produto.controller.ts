import { Controller, Get, Param } from "@nestjs/common";

import { ProdutoService } from "../services/produto.service";
import { ProdutoEntity } from "../entities/produto.entity";
import { LocalizaProdutoUuidDto } from "../dtos/localiza-produto-uuid.dto";
import { LocalizaCategoriaDto } from "../dtos/localiza-categoria.dto";

@Controller("produtos")
export class ProdutoController {
  constructor(private produtoService: ProdutoService) { }

  @Get()
  coletaTodosProdutos(): ProdutoEntity[] {
    return this.produtoService.coletaTodosProdutos();
  }

  @Get(":uuid")
  coletaPorId(@Param() params: LocalizaProdutoUuidDto): ProdutoEntity {
    return this.produtoService.coletaPorId(params.uuid);
  }

  @Get("/categorias/:categoria")
  coletaPorCategoria(@Param() params: LocalizaCategoriaDto): ProdutoEntity[] {
    return this.produtoService.coletaPorCategoria(params.categoria);
  }
}
