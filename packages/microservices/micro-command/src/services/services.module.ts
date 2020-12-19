import { Module } from "@nestjs/common"
import { DiscordModule } from "./discord/discord.module"
import { EtcdModule } from "./etcd/etcd.module"

@Module({
    imports: [DiscordModule, EtcdModule],
})
export class ServicesModule {}
