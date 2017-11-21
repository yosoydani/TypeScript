import {IDataStore,IDataSyncInfo} from "./shared";

export class Server {
    store: IDataStore = {
        timestamp: 0,
        data: ""
    };
    synchronize(clientDataStore: IDataStore): IDataSyncInfo {
        if(clientDataStore.timestamp > this.store.timestamp) {
            this.store = clientDataStore;
            return undefined;
        } else if(clientDataStore.timestamp < this.store.timestamp) {
            return {
                timestamp:this.store.timestamp,
                data: this.store.data
            };
        } else {
        return undefined;
        }
    }
}