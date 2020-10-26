exports.seed = async function(knex) {
   
  await knex('ingredient').insert([
    { ingredient_name: "milk"},
{ ingredient_name: "egg"},
{ ingredient_name: "bisquick mix"},
{ ingredient_name: " vegetable oil"},
{ ingredient_name: "salt"},
{ ingredient_name: "butter"},
{ ingredient_name: "pepper"},
{ ingredient_name: "yogurt"},
{ ingredient_name: "white sugar"},
{ ingredient_name: "strawberry"}
  ]);

};
