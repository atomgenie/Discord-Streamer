import { Module } from "@nestjs/common"
import { DiscordPrefixService } from "./discord-prefix.service"

@Module({
    providers: [DiscordPrefixService],
    exports: [DiscordPrefixService],
})
export class DiscordPrefixModule {}
