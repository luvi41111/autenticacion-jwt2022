import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblValoresEstadisticos extends BaseSchema {
  protected tableName = 'TBL_VALORES_ESTADISTICOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('PROYECTO_ID').references('TBL_VALORES_ESTADISTICOS.ID').onDelete('CASCADE').notNullable();

     

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
