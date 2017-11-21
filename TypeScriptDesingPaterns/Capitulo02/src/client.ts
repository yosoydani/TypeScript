import {Server} from "./Server";
import {IDataStore} from "./shared";

export class Client {
        store: IDataStore = {
        timestamp: 0,
        data: undefined
    };

    constructor(public server:Server) {}

    synchronize(): void {
        let updatedStore: IDataStore = this.server.synchronize(this.store);
        if(updatedStore) {
            this.store = updatedStore;
        }
    }

    update(data: string): void {
        this.store.data = data;
        this.store.timestamp = Date.now();
    }
}