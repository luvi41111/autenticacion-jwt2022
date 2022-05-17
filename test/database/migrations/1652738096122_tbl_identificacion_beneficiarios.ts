import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblIdentificacionBeneficiarios extends BaseSchema {
  protected tableName = 'TBL_IDENTIFICACION_BENEFICIARIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('NOMBRE',100).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
