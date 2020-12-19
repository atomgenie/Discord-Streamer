import { Module } from "@nestjs/common"
import { OverlayModule } from "./overlay/overlay.module"

@Module({
    imports: [OverlayModule],
})
export class ServicesModule {}
