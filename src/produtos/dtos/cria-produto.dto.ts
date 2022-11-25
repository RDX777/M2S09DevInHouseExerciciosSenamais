import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from "class-validator";
import { Categoria } from "../utils/categoria.enum";
import { LocalizaUuidDto } from "./localiza-uuid.dto";

export class CriaProdutoDto {
  @IsString()
  readonly uuid: string;

  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsNumberString()
  readonly valor: number;

  readonly descricao: string;

  @IsBoolean()
  readonly disponivel: boolean;

  readonly categoria: Categoria;
}
