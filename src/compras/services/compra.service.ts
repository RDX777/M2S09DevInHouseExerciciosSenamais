import { Injectable } from "@nestjs/common";
import { CompraDto } from "../dtos/compra.dto";

import * as moment from "moment";
import "moment/locale/pt-br";

@Injectable()
export class CompraService {
  private compras = [];
  private cartoesCreditoConfiaveis = [
    {
      cartao: "4444 4444 4444 4444",
      nome: "Nome Cliente 1",
      vencimento: "2030-12-12",
      cvv: "222",
    },
    {
      cartao: "4444 4444 4444 4441",
      nome: "Nome Cliente 1",
      vencimento: "2030-12-12",
      cvv: "222",
    },
  ];

  efetuaCompra(dadosCliente: CompraDto): boolean {
    if (this.validaCartao(dadosCliente)) {
      if (this.validaData(dadosCliente.pagamento[0].vencimento)) {
        this.compras = [...this.compras, dadosCliente];
        return true;
      } else {
        throw new Error("Cartão vencido");
      }
    } else {
      throw new Error("Cartão não confiavel");
    }
  }

  private validaData(dataCartao: string): boolean {
    const ageRaw = moment(dataCartao, "YYYY-MM-DD");
    const nowDate = moment();
    const age = ageRaw.diff(nowDate, "days");
    if (age > 0) {
      return true;
    }
    return false;
  }

  private validaCartao(dadosCartao: CompraDto): boolean {
    const cartao = this.cartoesCreditoConfiaveis.find((cartaoCredito) => {
      return cartaoCredito.cartao === dadosCartao.pagamento[0].cartao;
    });
    if (cartao) {
      if (
        Object.entries(cartao).toString() ===
        Object.entries(dadosCartao.pagamento[0]).toString()
      ) {
        return true;
      }
    }
    return false;
  }
}
