import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class CompraDto {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  readonly uuidCarrinho: string;

  @ValidateNested()
  @Type(() => EnderecoDto)
  readonly endereco: EnderecoDto[];

  @ValidateNested()
  @Type(() => PagamentoDto)
  readonly pagamento: PagamentoDto[];
}

export class EnderecoDto {
  @IsString()
  readonly rua: string;

  @IsString()
  readonly numero: number;

  @IsString()
  readonly bairro: string;

  @IsString()
  readonly cidade: string;

  @IsString()
  readonly cep: string;
}

export class PagamentoDto {
  @IsString()
  readonly cartao: string;

  @IsString()
  readonly nome: string;

  @IsString()
  readonly vencimento: string;

  @IsString()
  readonly cvv: string;
}
