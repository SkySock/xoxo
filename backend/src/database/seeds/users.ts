import { Knex } from "knex";
import {hashPassword} from "../../base/utils";

async function generateUsers(size: number)  {
    const passwordHash = await hashPassword("test");
    const gender = () => Math.random() >= 0.5 ? "MALE" : "FEMALE";
    let users = Array.from(Array(size), (_, id) => {
        return {
            username: `test${id}`,
            display_name: "Test Display Name",
            password: passwordHash,
            gender: gender(),
            birthday: new Date(Math.round(Math.random() * 80) + 1938, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27) + 1),
            joined_at: new Date(2020, 2, 28)
        }
    });

    console.log(users)
    return users
}

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();
    // Inserts seed entries
    await knex("users").insert(await generateUsers(10000));
}
