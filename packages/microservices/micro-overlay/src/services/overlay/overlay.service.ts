import { Injectable } from "@nestjs/common"
import { EtcdService } from "services/etcd/etcd.service"
import { OverlayStateService } from "services/overlay-state/overlay-state.service"

const OVERLAY_PREFIX = "DISCORD_OVERLAY:"

@Injectable({})
export class OverlayService {
    constructor(
        private etcdService: EtcdService,
        private stateService: OverlayStateService,
    ) {}

    public async start() {
        this.stateService.handleAdd(async value => await this.handleAdd(value))
        this.stateService.handleDelete(async value => await this.handleDelete(value))

        console.log("Overlay service started!")

        const allGuilds = await this.etcdService.getPrefix(OVERLAY_PREFIX)

        await this.stateService.sync(allGuilds)

        await this.etcdService.watchPrefix(OVERLAY_PREFIX, async (type, keyName) => {
            switch (type) {
                case "put":
                    await this.stateService.add(keyName)
                    break
                case "delete":
                    await this.stateService.delete(keyName)
                    break
            }
        })
    }

    private async handleAdd(value: string) {
        console.log("Add", value)
    }

    private async handleDelete(value: string) {
        console.log("Delete")
    }
}
