import { Module } from "@nestjs/common"
import { DiscordOverlayModule } from "../discord-overlay/discord-overlay.module"
import { DiscordPrefixModule } from "../discord-prefix/discord-prefix.module"
import { DiscordMessageService } from "./discord-message.service"

@Module({
    providers: [DiscordMessageService],
    exports: [DiscordMessageService],
    imports: [DiscordPrefixModule, DiscordOverlayModule],
})
export class DiscordMessageModule {}
