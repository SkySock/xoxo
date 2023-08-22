export interface RegistrationUserDTO {
    username: string;
    password: string;
    display_name: string;
    birthday: Date;
    gender: "FEMALE" | "MALE";
}