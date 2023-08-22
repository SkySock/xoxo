export {CreateUserDTO} from "./createUserDTO";
export {UserEntityDTO} from "./userEntityDTO";


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

export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}