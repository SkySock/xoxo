import { Knex } from "knex";
import {hashPassword} from "../../base/utils";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { username: "test", display_name: "Test Display Name", password: await hashPassword("test"), gender: "MALE", birthday: new Date(1998, 10, 9)},
    ]);
}
