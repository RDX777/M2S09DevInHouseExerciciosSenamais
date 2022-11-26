import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CarrinhoProdutoDto {
  @IsString()
  readonly uuid: string;

  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsNumberString()
  readonly valor: number;
}
