import { NestFactory } from "@nestjs/core"
import { IndexModule } from "./index.module"
import { getEnv } from "helpers/env"
import { DiscordService } from "./services/discord/discord.service"

const bootstrap = async () => {
    const rootModule = IndexModule.withDependencies({
        discord: {
            token: getEnv("DISCORD_TOKEN"),
        },
        etcd: {
            host: getEnv("ETCD_HOST"),
        },
    })

    const app = await NestFactory.createMicroservice(rootModule)

    await app.get(DiscordService).start()
}

bootstrap()
