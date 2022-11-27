import { Module } from "@nestjs/common";
import { CompraService } from "./services/compra.service";
import { CompraController } from "./controllers/compra.controller";

@Module({
  controllers: [CompraController],
  providers: [CompraService],
})
export class CompraModule { }
