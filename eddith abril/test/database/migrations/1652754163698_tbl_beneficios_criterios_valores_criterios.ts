import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiosCriteriosValoresCriterios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.integer('PONDERACION').nullable();
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
