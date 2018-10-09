class GlobalStore {
  private static instance: GlobalStore;

  private _stores = {};

  constructor() {}

  public static getInstance(): GlobalStore {
    if (!this.instance) {
      this.instance = new GlobalStore();
    }
    return this.instance;
  }

  public setStore(key: string, value: any) {
    this._stores[key] = value;
  }

  public getStore(key: string, defaultValue: any) {
    const value = this._stores[key] || defaultValue;
    return value;
  }

  public removeStore(key: string) {
    this._stores[key] = null;
  }
}

export let store = GlobalStore.getInstance();
export const GLOBAL_TITLE = 'global-title';
export const COPY_RECORD = 'copy-record';
