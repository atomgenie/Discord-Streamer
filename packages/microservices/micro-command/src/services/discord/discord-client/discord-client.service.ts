import { Injectable } from "@nestjs/common"
import { DependenciesServices } from "services/dependencies/dependencies.service"

import { Client } from "discord.js"

@Injectable()
export class DiscordClientService {
    public readonly client: Client
    private token: string

    constructor(dependencies: DependenciesServices) {
        this.client = new Client()
        this.token = dependencies.dependencies.discord.token
    }

    public login() {
        this.client.login(this.token)
    }
}
