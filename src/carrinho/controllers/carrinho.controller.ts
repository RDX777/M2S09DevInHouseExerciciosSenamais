import { Controller, Get, Param } from "@nestjs/common";
import { DescricaoProdutosDto } from "src/produtos/dtos/descricao-produtos.dto";

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
}
