import { Module } from "@nestjs/common"
import { OverlayStateService } from "./overlay-state.service"

@Module({
    providers: [OverlayStateService],
    exports: [OverlayStateService],
})
export class OverlayStateModule {}
