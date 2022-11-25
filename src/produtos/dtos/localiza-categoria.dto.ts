import { IsEnum } from "class-validator";
import { Categoria } from "../utils/categoria.enum";

export class LocalizaCategoriaDto {
  @IsEnum(Categoria)
  readonly categoria: Categoria;
}
