import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblSecretarias extends BaseSchema {
  protected tableName = 'TBL_SECRETARIAS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID')
      table.string('NOMBRE',200).notNullable();
      table.string('COD_SECRETARIA',45).notNullable();
      table.string('COD_DEPENDENCIA',45).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('CREATED_AT', { useTz: true })
      table.timestamp('UPDATED_AT', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
