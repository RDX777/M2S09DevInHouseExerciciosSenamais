import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { DescricaoProdutosDto } from "src/produtos/dtos/descricao-produtos.dto";
import { LocalizaProdutoUuidDto } from "src/produtos/dtos/localiza-produto-uuid.dto";

import { LocalizaCarrinhoUuidDto } from "../dtos/localiza-carrinho-uuid.dto";

import { CarrinhoService } from "../services/carrinho.service";

@Controller("carrinho")
export class CarrinhoController {
  constructor(private carrinhoService: CarrinhoService) { }

  @Get(":uuid")
  coletaProdutosCarrinho(
    @Param() params: LocalizaCarrinhoUuidDto,
  ): DescricaoProdutosDto[] {
    return this.carrinhoService.coletaProdutosCarrinho(params.uuid);
  }

  @Post(":uuid")
  adicionaProdutosCarrinho(
    @Param() params: LocalizaCarrinhoUuidDto,
    @Body() uuidProdutos: LocalizaProdutoUuidDto[],
  ) {
    return this.carrinhoService.adicionaProdutosCarrinho(
      params.uuid,
      uuidProdutos,
    );
  }
}
