import axios from "axios";
class ProxySDK {
    constructor(baseURL, userApiKey) {
        this.client = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
                "user-api-key": userApiKey,
            },
        });
    }
    async getProvinces(searchText) {
        const response = await this.client.get("/api/client/provinces", {
            params: { search_text: searchText },
        });
        return response.data;
    }
    async getNewIP(proxyKey, provinceId) {
        const response = await this.client.get("/api/client/proxy/available", {
            params: { proxy_key: proxyKey, province_id: provinceId },
        });
        return response.data;
    }
    async getCurrentIP(proxyKey) {
        const response = await this.client.get("/api/client/proxy/current", {
            params: { proxy_key: proxyKey },
        });
        return response.data;
    }
    async removeOldIP(proxyKey) {
        const response = await this.client.post("/api/client/proxy/remove", {
            proxy_key: proxyKey,
        });
        return response.data;
    }
    async getKeyList() {
        const response = await this.client.get("/api/client/key/list");
        return response.data;
    }
    async getKeyDetail(proxyKey) {
        const response = await this.client.get("/api/client/key/detail", {
            params: { proxy_key: proxyKey },
        });
        return response.data;
    }
    async buyNewKey(buyKeyDto) {
        const response = await this.client.post("/api/client/key/buy", buyKeyDto);
        return response.data;
    }
    async renewKey(renewKeyDto) {
        const response = await this.client.post("/api/client/key/renewal", renewKeyDto);
        return response.data;
    }
    async removeKey(proxyKey) {
        const response = await this.client.post("/api/client/key/remove", {
            proxy_key: proxyKey,
        });
        return response.data;
    }
    async getUserInfo() {
        const response = await this.client.get("/api/client/user/current");
        return response.data;
    }
}
export default ProxySDK;
