import { IsString } from "class-validator";

export class LocalizaProdutoUuidDto {
  @IsString()
  readonly uuid: string;
}
