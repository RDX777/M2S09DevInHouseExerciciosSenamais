import { ProdutoEntity } from "src/produtos/entities/produto.entity";
import { UsuarioEntity } from "src/usuarios/entities/usuario.entity";

export class CarrinhoEntity {
  uuid: string;
  uuidUsuario: UsuarioEntity["uuid"];
  valor: number;
  produtos: ProdutoEntity["uuid"][];
}
