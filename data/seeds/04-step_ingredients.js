
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_id: 1, quantity: 5, ingredient_id: 1},
        {step_id: 2, quantity: 1, ingredient_id: 2}
      ]);
};
