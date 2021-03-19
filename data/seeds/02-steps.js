
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_instructions: 'let bread sit out overnight', receipe_id: 1},
        {step_number: 1, step_instructions: 'peel & slice bananas', receipe_id: 2},
      ]);

};
