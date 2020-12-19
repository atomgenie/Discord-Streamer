import { Injectable } from "@nestjs/common"

@Injectable()
export class DiscordOverlay {
    public startOverlay() {
        console.log("toto")
    }
}
