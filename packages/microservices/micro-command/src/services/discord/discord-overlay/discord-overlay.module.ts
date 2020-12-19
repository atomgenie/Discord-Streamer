import { Module } from "@nestjs/common"
import { DiscordOverlay } from "./discord-overlay.service"

@Module({
    providers: [DiscordOverlay],
    exports: [DiscordOverlay],
})
export class DiscordOverlayModule {}
