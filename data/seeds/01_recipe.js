exports.seed = async function(knex) {
	await knex("recipe").insert([   
    { recipe_name: "Bisquick Waffles"},
    { recipe_name: "Scrambled Eggs"},
    { recipe_name: " Strawberry Smoothie"}
	])
}

