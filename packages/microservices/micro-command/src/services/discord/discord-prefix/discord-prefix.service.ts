import { Injectable } from "@nestjs/common"

@Injectable()
export class DiscordPrefixService {
    public async getPrefix(): Promise<string> {
        return "-d"
    }
}
