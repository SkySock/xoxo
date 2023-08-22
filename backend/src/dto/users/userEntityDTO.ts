export interface UserEntityDTO {
    id: string;
    username: string;
    display_name: string;
    password: string;
    birthdate: Date;
    gender: "FEMALE" | "MALE";
    joined_at: string;
}