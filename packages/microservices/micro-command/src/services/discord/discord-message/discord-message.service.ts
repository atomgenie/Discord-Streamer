import { Injectable } from "@nestjs/common"
import { Message } from "discord.js"
import { DiscordPrefixService } from "../discord-prefix/discord-prefix.service"

@Injectable()
export class DiscordMessageService {
    constructor(private prefixService: DiscordPrefixService) {}

    public async handleMessage(message: Message) {
        const command = message.content.split(" ")

        if (!command[0]) {
            return
        }

        const prefix = await this.prefixService.getPrefix()

        if (command[0] === prefix) {
            console.log("OUIOUO")
        }
    }
}
