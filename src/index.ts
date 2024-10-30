import axios, { AxiosInstance } from "axios";

class ProxySDK {
  private client: AxiosInstance;

  constructor(baseURL: string, userApiKey: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "user-api-key": userApiKey,
      },
    });
  }

  async getProvinces(searchText?: string) {
    const response = await this.client.get("/api/client/provinces", {
      params: { search_text: searchText },
    });
    return response.data;
  }

  async getNewIP(proxyKey: string, provinceId?: number) {
    const response = await this.client.get("/api/client/proxy/available", {
      params: { proxy_key: proxyKey, province_id: provinceId },
    });
    return response.data;
  }

  async getCurrentIP(proxyKey: string) {
    const response = await this.client.get("/api/client/proxy/current", {
      params: { proxy_key: proxyKey },
    });
    return response.data;
  }

  async removeOldIP(proxyKey: string) {
    const response = await this.client.post("/api/client/proxy/remove", {
      proxy_key: proxyKey,
    });
    return response.data;
  }

  async getKeyList() {
    const response = await this.client.get("/api/client/key/list");
    return response.data;
  }

  async getKeyDetail(proxyKey: string) {
    const response = await this.client.get("/api/client/key/detail", {
      params: { proxy_key: proxyKey },
    });
    return response.data;
  }

  async buyNewKey(buyKeyDto: any) {
    const response = await this.client.post("/api/client/key/buy", buyKeyDto);
    return response.data;
  }

  async renewKey(renewKeyDto: any) {
    const response = await this.client.post(
      "/api/client/key/renewal",
      renewKeyDto
    );
    return response.data;
  }

  async removeKey(proxyKey: string) {
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
