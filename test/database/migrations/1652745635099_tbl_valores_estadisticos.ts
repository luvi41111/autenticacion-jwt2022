import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblValoresEstadisticos extends BaseSchema {
  protected tableName = 'TBL_VALORES_ESTADISTICOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('COD_VALOR_ESTADISTICO',45).nullable();
      table.string('NOMBRE',200).notNullable();
      table.string('UNIDAD_MEDIDA',45).notNullable();
      table.integer('PLAN_META').notNullable();
      table.integer('PROYECTO_ID').notNullable();
   

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
