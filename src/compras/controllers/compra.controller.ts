import { Controller, Post, Body, HttpStatus } from "@nestjs/common";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";

import { CompraDto } from "../dtos/compra.dto";
import { CompraService } from "../services/compra.service";

@Controller("compras")
export class CompraController {
  constructor(private compraService: CompraService) { }

  @Post()
  efetuaCompra(@Body() dadosCliente: CompraDto) {
    try {
      const resultadoCompra = this.compraService.efetuaCompra(dadosCliente);
      console.log("resultado", resultadoCompra);
      return new NestResponseBuilder()
        .withStatus(HttpStatus.ACCEPTED)
        .withBody({ message: "Compra realizada com sucesso!" })
        .build();
    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody({ message: error.message })
        .build();
    }
  }
}
