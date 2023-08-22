import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("users", (table: Knex.CreateTableBuilder) => {
            table.bigIncrements('id');
            table.string("username", 40).notNullable().unique({indexName: "user_unique_username"});
            table.string("display_name", 40).notNullable();
            table.string("password", 255).notNullable();
            table.date('birthday').notNullable();
            table.enu('gender', ["FEMALE", "MALE"], {useNative: true, enumName: "gender_type"}).notNullable();
            table.timestamp("joined_at", {useTz: false}).notNullable().defaultTo(knex.fn.now());
        })
        .createTable('games', (table: Knex.CreateTableBuilder) => {
            table.bigIncrements('id');
            table.bigint('idPlayer1').notNullable().references('users.id');
            table.bigint('idPlayer2').notNullable().references('users.id');
            table.boolean('gameResult').defaultTo(null);
            table.timestamp('gameBegin', {useTz: false}).notNullable().defaultTo(knex.fn.now());
            table.timestamp('gameEnd', {useTz: false});
        })
        .createTable('messenger', (table: Knex.CreateTableBuilder) => {
            table.bigint('idGame').notNullable().unsigned().references('games.id');
            table.bigint('idUser').notNullable().unsigned().references('users.id');
            table.text('message').notNullable();
            table.timestamp('createdAt', {useTz: false}).notNullable().defaultTo(knex.fn.now());
        });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable('messenger')
        .dropTable('games')
        .dropTable("users");
}

