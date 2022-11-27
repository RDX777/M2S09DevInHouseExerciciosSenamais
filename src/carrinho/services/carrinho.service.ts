import { Injectable } from "@nestjs/common";
import { DescricaoProdutosDto } from "src/produtos/dtos/descricao-produtos.dto";
import { ProdutoService } from "src/produtos/services/produto.service";
import { v4 as uuidv4 } from "uuid";
import { CarrinhoDto } from "../dtos/carrinho.dto";

@Injectable()
export class CarrinhoService {
  constructor(private produtoService: ProdutoService) { }

  private carrinho = [
    {
      uuid: "75ff0ee8-a91f-43a4-b363-75cea0683ccc",
      uuidUsuario: "ab43a7a7-b3da-4058-9b35-1b2f13e6f0fb",
      valor: 123.12,
      produtos: [
        "27b05784-1558-4ec4-8a4b-ef9cb5faafce",
        "688e797e-1558-4b79-ba14-ef9cb5faafce",
      ],
    },
  ];

  private localizaCarrinho(uuid: string): CarrinhoDto {
    return this.carrinho.find((carrinhoUsuario) => {
      return carrinhoUsuario.uuid === uuid;
    });
  }

  coletaProdutosCarrinho(uuid: string) {
    const carrinho: CarrinhoDto = this.localizaCarrinho(uuid);

    const produtos: DescricaoProdutosDto[] = carrinho.produtos.map((item) => {
      const produto: DescricaoProdutosDto =
        this.produtoService.coletaPorId(item);
      return {
        nome: produto.nome,
        valor: produto.valor,
      };
    });

    return produtos;
  }

  private calculaTotal(uuid: string) {
    const carrinho = this.coletaProdutosCarrinho(uuid);
    let valor = 0;
    Object.keys(carrinho).forEach((elemento) => {
      valor = valor + parseFloat(carrinho[elemento].valor);
    });
    return valor;
  }

  adicionaProdutosCarrinho(uuid: string, uuidProdutos: any) {
    const novoCarrinho = this.carrinho.map((carrinhoUsuario) => {
      if (carrinhoUsuario.uuid === uuid) {
        const produtos = carrinhoUsuario.produtos.concat(uuidProdutos.produtos);
        carrinhoUsuario.produtos = produtos;
        carrinhoUsuario.valor = this.calculaTotal(uuid);
        return carrinhoUsuario;
      }
    });
    return novoCarrinho;
  }
}
