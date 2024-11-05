import axios, { AxiosInstance } from "axios";
import {
  RegisterDto,
  RegisterResponse,
  LoginDto,
  LoginResponse,
  ForgotPasswordResponse,
  ResetPasswordDto,
  ResetPasswordResponse,
  BuyKeyDto,
  RenewKeyDto,
  WWProxyKey,
} from "./interfaces";

import {
  Provinces,
  ProxyIPDTO,
  ProxyKeysDTO,
  Users,
  Proxy_Keys,
} from "./types";

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

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    try {
      const response = await this.client.post<RegisterResponse>(
        "/api/client/register",
        registerDto
      );
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Registration failed");
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    try {
      const response = await this.client.post<LoginResponse>(
        "/api/client/login",
        loginDto
      );
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Login failed");
    }
  }

  async forgotPassword(email: string): Promise<ForgotPasswordResponse> {
    try {
      const response = await this.client.post<ForgotPasswordResponse>(
        "/api/client/forgot-password",
        { email }
      );
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(
        errorResponse.message || "Failed to process forgot password request"
      );
    }
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto
  ): Promise<ResetPasswordResponse> {
    try {
      const response = await this.client.post<ResetPasswordResponse>(
        "/api/client/reset-password",
        resetPasswordDto
      );
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to reset password");
    }
  }

  async getProvinces(searchText?: string): Promise<Provinces[]> {
    try {
      const response = await this.client.get("/api/client/provinces", {
        params: { search_text: searchText },
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get provinces");
    }
  }

  async getNewIP(proxyKey: string, provinceId?: number): Promise<ProxyIPDTO> {
    try {
      const response = await this.client.get("/api/client/proxy/available", {
        params: { proxy_key: proxyKey, province_id: provinceId },
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get new IP");
    }
  }

  async getCurrentIP(proxyKey: string): Promise<ProxyIPDTO> {
    try {
      const response = await this.client.get("/api/client/proxy/current", {
        params: { proxy_key: proxyKey },
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get current IP");
    }
  }

  async removeOldIP(proxyKey: string): Promise<boolean> {
    try {
      const response = await this.client.post("/api/client/proxy/remove", {
        proxy_key: proxyKey,
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to remove old IP");
    }
  }

  async getKeyList(): Promise<ProxyKeysDTO[]> {
    try {
      const response = await this.client.get("/api/client/key/list");
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get key list");
    }
  }

  async getKeyDetail(proxyKey: string): Promise<WWProxyKey> {
    try {
      const response = await this.client.get("/api/client/key/detail", {
        params: { proxy_key: proxyKey },
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get key detail");
    }
  }

  async buyNewKey(buyKeyDto: BuyKeyDto): Promise<Proxy_Keys[]> {
    try {
      const response = await this.client.post("/api/client/key/buy", buyKeyDto);
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to buy new key");
    }
  }

  async renewKey(renewKeyDto: RenewKeyDto): Promise<boolean> {
    try {
      const response = await this.client.post(
        "/api/client/key/renewal",
        renewKeyDto
      );
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to renew key");
    }
  }

  async removeKey(proxyKey: string): Promise<boolean> {
    try {
      const response = await this.client.post("/api/client/key/remove", {
        proxy_key: proxyKey,
      });
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to remove key");
    }
  }

  async getUserInfo(): Promise<Users> {
    try {
      const response = await this.client.get("/api/client/user/current");
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response?.data;
      throw new Error(errorResponse.message || "Failed to get user info");
    }
  }
}

export default ProxySDK;
