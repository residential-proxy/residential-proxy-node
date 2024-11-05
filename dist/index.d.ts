import { RegisterDto, RegisterResponse, LoginDto, LoginResponse, ForgotPasswordResponse, ResetPasswordDto, ResetPasswordResponse, BuyKeyDto, RenewKeyDto, WWProxyKey } from "./interfaces";
import { Provinces, ProxyIPDTO, ProxyKeysDTO, Users, Proxy_Keys } from "./types";
declare class ProxySDK {
    private client;
    constructor(baseURL: string, userApiKey: string);
    register(registerDto: RegisterDto): Promise<RegisterResponse>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    forgotPassword(email: string): Promise<ForgotPasswordResponse>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<ResetPasswordResponse>;
    getProvinces(searchText?: string): Promise<Provinces[]>;
    getNewIP(proxyKey: string, provinceId?: number): Promise<ProxyIPDTO>;
    getCurrentIP(proxyKey: string): Promise<ProxyIPDTO>;
    removeOldIP(proxyKey: string): Promise<boolean>;
    getKeyList(): Promise<ProxyKeysDTO[]>;
    getKeyDetail(proxyKey: string): Promise<WWProxyKey>;
    buyNewKey(buyKeyDto: BuyKeyDto): Promise<Proxy_Keys[]>;
    renewKey(renewKeyDto: RenewKeyDto): Promise<boolean>;
    removeKey(proxyKey: string): Promise<boolean>;
    getUserInfo(): Promise<Users>;
}
export default ProxySDK;
