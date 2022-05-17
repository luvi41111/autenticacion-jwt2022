import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblCriterios extends BaseSchema {
  protected tableName = 'TBL_CRITERIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('ESTADO_ID').references('TBL_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('TIPO_CRITERIO_ID').references('TBL_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('CATEGORIA_CRITERO_ID').references('TBL_CRITERIOS.ID').onDelete('CASCADE').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
