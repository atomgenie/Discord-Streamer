import { Injectable } from "@nestjs/common"
import { EtcdService } from "services/etcd/etcd.service"

const OVERLAY_PREFIX = "DISCORD_OVERLAY:"
@Injectable()
export class DiscordOverlayService {
    constructor(private etcdService: EtcdService) {}

    public async startOverlay(guildId: string) {
        await this.etcdService.put(OVERLAY_PREFIX + guildId, "true")
        console.log(await this.etcdService.getPrefix(OVERLAY_PREFIX))
    }
}
