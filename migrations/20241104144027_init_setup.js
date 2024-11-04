/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.raw(`CREATE TABLE users(
    ID SERIAL PRIMARY KEY,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    salt character varying(255)
    );`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.raw(`DROP TABLE users`);
};
