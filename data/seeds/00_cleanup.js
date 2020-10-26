exports.seed = async function(knex) {
	await knex("ingredient_amount").truncate()
	await knex("instructions").truncate()
	await knex("ingredient").truncate()
	await knex("recipe").truncate()
}