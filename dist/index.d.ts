declare class ProxySDK {
    private client;
    constructor(baseURL: string, userApiKey: string);
    getProvinces(searchText?: string): Promise<any>;
    getNewIP(proxyKey: string, provinceId?: number): Promise<any>;
    getCurrentIP(proxyKey: string): Promise<any>;
    removeOldIP(proxyKey: string): Promise<any>;
    getKeyList(): Promise<any>;
    getKeyDetail(proxyKey: string): Promise<any>;
    buyNewKey(buyKeyDto: any): Promise<any>;
    renewKey(renewKeyDto: any): Promise<any>;
    removeKey(proxyKey: string): Promise<any>;
    getUserInfo(): Promise<any>;
}
export default ProxySDK;
