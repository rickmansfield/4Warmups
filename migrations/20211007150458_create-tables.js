
exports.up = function (knex) {
    //1 farm has many ranchgers
    return knex.schema.createTable('farms', table => {
        table.increments();
        table.string('farm_name', 128).notNullable;
    })
        .createTable('ranchers', table => {
            table.increments();
            table.string('rancher_name', 128);
            //foreign key that points to farms table
            table.integer('farm_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('farms')
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('ranchers')
    .dropTableIfExists('farms');

};
