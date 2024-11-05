export interface RegisterDto {
    email: string;
    username: string;
    password: string;
}
export interface LoginDto {
    username: string;
    password: string;
}
export interface ResetPasswordDto {
    token: string;
    newPassword: string;
}
export interface BuyKeyDto {
    key_type: "VIP" | "NORMAL" | "ONE_HOUR";
    quantity: number;
    days: number;
}
export interface RenewKeyDto {
    key: string;
    days: number;
}
export interface RegisterResponse {
    message: string;
    userId: string;
}
export interface ResponseError {
    error: string;
    status: number;
}
export interface LoginResponse {
    message: string;
    user: {
        email: string;
        name: string;
        apiKey: string;
    };
    refreshToken: string;
    accessToken: string;
}
export interface ForgotPasswordResponse {
    message: string;
}
export interface ResetPasswordResponse {
    message: string;
}
export interface WWProxyKey {
    uuid: string;
    vip: number;
    expiredTime: string;
    alias: string | null;
    expiredFlag: boolean;
}
