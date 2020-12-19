import { Module } from "@nestjs/common"
import { DiscordPrefixModule } from "../discord-prefix/discord-prefix.module"
import { DiscordMessageService } from "./discord-message.service"

@Module({
    providers: [DiscordMessageService],
    exports: [DiscordMessageService],
    imports: [DiscordPrefixModule],
})
export class DiscordMessageModule {}
