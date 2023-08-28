export interface MinimalUserInfoDTO {
    id: string;
    username: string;
}

export interface BaseUserInfoDto {
    id: string;
    username: string;
    display_name: string;
    birthdate: Date;
    gender: boolean;
    joined_at: string;
}

export interface UserInfoInListDto {
    id: string;
    username: string;
    display_name: string;
    age: number;
    gender: boolean;
    joined_at: string;
}