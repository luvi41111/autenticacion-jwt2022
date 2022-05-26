import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblFrecuencias extends BaseSchema {
  protected tableName = 'TBL_FRECUENCIAS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('NAME',100).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('CREATED_AT', { useTz: true });
      table.timestamp('UPDATED_AT', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
