
exports.seed = function(knex, Promise) {
      return knex('receipe').insert([
        {receipe_name: 'bread pudding'},
        {receipe_name: 'banana pudding'}
      ]);
};
