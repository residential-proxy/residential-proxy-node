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
    async register(registerDto) {
        try {
            const response = await this.client.post("/api/client/register", registerDto);
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Registration failed");
        }
    }
    async login(loginDto) {
        try {
            const response = await this.client.post("/api/client/login", loginDto);
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Login failed");
        }
    }
    async forgotPassword(email) {
        try {
            const response = await this.client.post("/api/client/forgot-password", { email });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to process forgot password request");
        }
    }
    async resetPassword(resetPasswordDto) {
        try {
            const response = await this.client.post("/api/client/reset-password", resetPasswordDto);
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to reset password");
        }
    }
    async getProvinces(searchText) {
        try {
            const response = await this.client.get("/api/client/provinces", {
                params: { search_text: searchText },
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get provinces");
        }
    }
    async getNewIP(proxyKey, provinceId) {
        try {
            const response = await this.client.get("/api/client/proxy/available", {
                params: { proxy_key: proxyKey, province_id: provinceId },
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get new IP");
        }
    }
    async getCurrentIP(proxyKey) {
        try {
            const response = await this.client.get("/api/client/proxy/current", {
                params: { proxy_key: proxyKey },
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get current IP");
        }
    }
    async removeOldIP(proxyKey) {
        try {
            const response = await this.client.post("/api/client/proxy/remove", {
                proxy_key: proxyKey,
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to remove old IP");
        }
    }
    async getKeyList() {
        try {
            const response = await this.client.get("/api/client/key/list");
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get key list");
        }
    }
    async getKeyDetail(proxyKey) {
        try {
            const response = await this.client.get("/api/client/key/detail", {
                params: { proxy_key: proxyKey },
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get key detail");
        }
    }
    async buyNewKey(buyKeyDto) {
        try {
            const response = await this.client.post("/api/client/key/buy", buyKeyDto);
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to buy new key");
        }
    }
    async renewKey(renewKeyDto) {
        try {
            const response = await this.client.post("/api/client/key/renewal", renewKeyDto);
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to renew key");
        }
    }
    async removeKey(proxyKey) {
        try {
            const response = await this.client.post("/api/client/key/remove", {
                proxy_key: proxyKey,
            });
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to remove key");
        }
    }
    async getUserInfo() {
        try {
            const response = await this.client.get("/api/client/user/current");
            return response.data;
        }
        catch (error) {
            const errorResponse = error.response?.data;
            throw new Error(errorResponse.message || "Failed to get user info");
        }
    }
}
export default ProxySDK;
