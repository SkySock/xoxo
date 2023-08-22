import {Gender} from "./index";

export interface CreateUserDTO {
    username: string;
    password: string;
    display_name: string;
    birthday: Date;
    gender: "FEMALE" | "MALE";
}