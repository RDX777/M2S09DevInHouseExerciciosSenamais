import { IsString } from "class-validator";

export class LocalizaCarrinhoUuidDto {
  @IsString()
  readonly uuid: string;
}
