import { Injectable } from "@nestjs/common"
import { Message } from "discord.js"
import { DiscordOverlayService } from "../discord-overlay/discord-overlay.service"
import { DiscordPrefixService } from "../discord-prefix/discord-prefix.service"

@Injectable()
export class DiscordMessageService {
    constructor(
        private prefixService: DiscordPrefixService,
        private overlayService: DiscordOverlayService,
    ) {}

    public async handleMessage(message: Message) {
        const command = message.content.split(" ")

        if (!command[0]) {
            return
        }

        const prefix = await this.prefixService.getPrefix()

        if (command[0] === prefix) {
            if (message.guild) {
                await this.overlayService.startOverlay(message.guild.id)
            }
        }
    }
}
