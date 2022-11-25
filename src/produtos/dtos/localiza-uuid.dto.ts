import { IsString } from "class-validator";

export class LocalizaUuidDto {
  @IsString()
  readonly uuid: string;
}
