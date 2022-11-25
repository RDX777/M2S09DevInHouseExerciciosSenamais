import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class CarrinhoService {
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
}
