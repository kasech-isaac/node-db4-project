exports.up = async function(knex) {
    await knex.schema.createTable("recipe", (table)=>{
      table.increments("id")
      table.text("recipe_name").notNull()  
    })
  
    await knex.schema.createTable("ingredient", (table)=>{
      table.increments("id")
      table.text("ingredient_name").notNull()  
    })
  
    await knex.schema.createTable("instructions", (table)=>{
      table.increments("id")
      table.text("instructions").notNull();
      table.integer("recipe_id")
      .references("id") 
      .inTable("recipe")
      table.integer("recipe_steps").notNull()  
    })
  
    await knex.schema.createTable("ingredient_amount", (table)=>{
      table.increments("id")
      table.string("quantity").notNull()
      table
          .integer("recipe_id")
          .references("id") 
          .inTable("recipe")  
          .notNull()
      table
          .integer("ingredient_id")
          .references("id") 
          .inTable("ingredient")
          .notNull()
  
    })
  
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("ingredient_amount")
      await knex.schema.dropTableIfExists("instructions")
      await knex.schema.dropTableIfExists("ingredient")
      await knex.schema.dropTableIfExists("recipe")
  };
