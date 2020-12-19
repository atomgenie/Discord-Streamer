import { Module } from "@nestjs/common"
import { EtcdModule } from "services/etcd/etcd.module"
import { OverlayStateModule } from "services/overlay-state/overlay-state.module"
import { OverlayService } from "./overlay.service"

@Module({
    providers: [OverlayService],
    imports: [EtcdModule, OverlayStateModule],
    exports: [OverlayService],
})
export class OverlayModule {}
