import { Injectable } from "@nestjs/common"
import { DependenciesServices } from "services/dependencies/dependencies.service"
import { Etcd3 } from "etcd3"

@Injectable()
export class EtcdService {
    private client: Etcd3

    constructor(dependencies: DependenciesServices) {
        this.client = new Etcd3({ hosts: dependencies.dependencies.etcd.host })
    }

    public async put(key: string, value: string) {
        await this.client.put(key).value(value)
    }

    public async get(key: string): Promise<string | undefined> {
        const res = await this.client.get(key).string()

        if (res === null) {
            return undefined
        }

        return res
    }

    public async delete(key: string) {
        await this.client.delete().key(key)
    }

    public async getPrefix(keyPrefix: string): Promise<string[]> {
        return this.client.getAll().prefix(keyPrefix).keys()
    }

    public async watchPrefix(
        prefixKey: string,
        handler: (type: "put" | "delete", keyName: string) => void,
    ): Promise<void> {
        const watcher = await this.client.watch().prefix(prefixKey).create()
        watcher.on("put", res => handler("put", res.key.toString()))
        watcher.on("delete", res => handler("delete", res.key.toString()))
    }
}
