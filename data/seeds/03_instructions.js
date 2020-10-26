
exports.seed = async function(knex) {
   
  await knex('instructions').insert([
{  recipe_id:1,
   recipe_steps: 1,
   instructions: " Heat waffle iron; grease with vegetable oil or shortening"
},
{  recipe_id:1,
   recipe_steps: 2,
   instructions: "Stir ingredients until blended. Pour onto center of hot waffle iron. Close lid of waffle iron. "
  },
   
{  recipe_id:1,
   recipe_steps: 3,
   instructions: " Bake about 5 minutes or until steaming stops. Carefully remove waffle."
  },


{  recipe_id:2,
    recipe_steps: 1,
    instructions: " 	Beat eggs, milk, salt and pepper in medium bowl until blended."
 },
{  recipe_id:2,
    recipe_steps: 2,
    instructions: "heat butter in large nonstick skillet over medium heat until hot." },

{  recipe_id:2,
    recipe_steps: 3,
    instructions: "pour in egg mixture. As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds"
     },
    
{  recipe_id:2,
    recipe_steps: 4,
    instructions: " 	countinue cooking—pulling, lifting and folding eggs—until thickened and no visible liquid egg remains."
   },

{  recipe_id:3,
    recipe_steps: 1,
    instructions: " In a blender combine strawberries, milk, yogurt, sugar and vanilla. "},

 {  recipe_id:3,
    recipe_steps: 2,
    instructions: "Toss in the ice. Blend until smooth and creamy.  "},
    
 {  recipe_id:3,
    recipe_steps: 3,
    instructions: " Pour into glasses and serve." },

  ])

};