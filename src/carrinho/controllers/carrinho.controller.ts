import { Controller, Get, Param } from "@nestjs/common";

import { CarrinhoService } from "../services/carrinho.service";

@Controller("carrinho")
export class CarrinhoController {
  constructor(private carrinhoService: CarrinhoService) { }
}
