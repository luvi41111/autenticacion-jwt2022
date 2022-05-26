import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblTiposParametros extends BaseSchema {
  protected tableName = 'TBL_TIPOS_PARAMETROS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('NOMBRE',45).notNullable();
      table.string('DESCRIPCION',200).nullable();
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
