import { Injectable } from "@nestjs/common"
import { DiscordClientService } from "./discord-client/discord-client.service"
import { DiscordMessageService } from "./discord-message/discord-message.service"

@Injectable()
export class DiscordService {
    constructor(
        private client: DiscordClientService,
        private messageService: DiscordMessageService,
    ) {}

    public async start() {
        this.client.client.on("ready", () => {
            console.log("Bot ready!")
        })

        this.client.login()

        this.client.client.on("message", message => {
            this.messageService.handleMessage(message)
        })
    }
}
