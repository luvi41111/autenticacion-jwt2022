import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblValoresCriterios extends BaseSchema {
  protected tableName = 'TBL_VALORES_CRITERIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('VALOR',45).notNullable();
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
