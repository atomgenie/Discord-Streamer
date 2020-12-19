import { Module } from "@nestjs/common"
import { DiscordClientModule } from "./discord-client/discord-client.module"
import { DiscordService } from "./discord.service"
import { DiscordMessageModule } from "./discord-message/discord-message.module"
import { DiscordOverlayModule } from "./discord-overlay/discord-overlay.module"
import { DiscordPrefixModule } from "./discord-prefix/discord-prefix.module"

@Module({
    imports: [
        DiscordClientModule,
        DiscordMessageModule,
        DiscordOverlayModule,
        DiscordPrefixModule,
    ],
    providers: [DiscordService],
    exports: [DiscordService],
})
export class DiscordModule {}
