
exports.seed = async function(knex) {
 
      await knex('ingredient_amount').insert([
        { recipe_id:1, 
          ingredient_id:3,
          quantity:"2 cup" },
    
       { recipe_id:1, 
          ingredient_id:1,
          quantity:"1 1/3 cup" },
    
       { recipe_id:1, 
         ingredient_id:2,
         quantity:"1"},
    
       { recipe_id:1, 
         ingredient_id:4,
         quantity:"2 tsp",},
    
       { recipe_id:2, 
          ingredient_id:2,
          quantity:"4"},
    
       { recipe_id:2, 
          ingredient_id:2,
          quantity:"1/4 cup"},
    
       { recipe_id:2, 
         ingredient_id:5,
         quantity:"pinch"},
    
         { recipe_id:2, 
          ingredient_id:7,
          quantity:"pinch"},
    
       { recipe_id:2, 
         ingredient_id:6,
         quantity:"2 tsp"},
    
    
         { recipe_id:3, 
          ingredient_id:10,
          quantity:"8"},
    
       { recipe_id:3, 
          ingredient_id:1,
          quantity:"1/2 cup"},
    
       { recipe_id:3, 
         ingredient_id:8,
         quantity:"1/2 cup"},
    
         { recipe_id:3, 
          ingredient_id:9,
          quantity:"3 tsp"},
      ]);
   
};
