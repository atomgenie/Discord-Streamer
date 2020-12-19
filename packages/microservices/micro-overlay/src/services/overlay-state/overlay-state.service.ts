import { Injectable } from "@nestjs/common"
import { difference } from "lodash"

@Injectable()
export class OverlayStateService {
    public state: string[] = []

    private addSubscribers: ((value: string) => Promise<void>)[] = []
    private deleteSubscriber: ((value: string) => Promise<void>)[] = []

    private async triggerDelete(value: string): Promise<void> {
        const promises = this.deleteSubscriber.map(async fn => await fn(value))
        await Promise.all(promises)
    }

    private async triggerAdd(value: string): Promise<void> {
        const promises = this.addSubscribers.map(async fn => await fn(value))
        await Promise.all(promises)
    }

    public async delete(value: string) {
        if (this.state.indexOf(value) === -1) {
            return
        }

        this.state = this.state.filter(elm => elm !== value)
        await this.triggerDelete(value)
    }

    public async add(value: string) {
        if (this.state.indexOf(value) !== -1) {
            return
        }

        this.state = [...this.state, value]
        await this.triggerAdd(value)
    }

    public async sync(values: string[]) {
        const toAdd = difference(values, this.state)
        const toDelete = difference(this.state, values)

        this.state = values

        const promiseAdd = toAdd.map(async elm => await this.triggerAdd(elm))
        const promiseDelete = toDelete.map(async elm => await this.triggerDelete(elm))

        await promiseAdd
        await promiseDelete
    }

    public handleAdd(fn: (value: string) => Promise<void>): () => void {
        this.addSubscribers = [...this.addSubscribers, fn]

        return () => {
            this.addSubscribers = this.addSubscribers.filter(targetFn => targetFn !== fn)
        }
    }

    public handleDelete(fn: (value: string) => Promise<void>): () => void {
        this.deleteSubscriber = [...this.deleteSubscriber, fn]

        return () => {
            this.deleteSubscriber = this.deleteSubscriber.filter(
                targetFn => targetFn !== fn,
            )
        }
    }
}
