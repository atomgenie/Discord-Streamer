import { Module } from "@nestjs/common"
import { EtcdModule } from "services/etcd/etcd.module"
import { DiscordOverlayService } from "./discord-overlay.service"

@Module({
    providers: [DiscordOverlayService],
    exports: [DiscordOverlayService],
    imports: [EtcdModule],
})
export class DiscordOverlayModule {}
