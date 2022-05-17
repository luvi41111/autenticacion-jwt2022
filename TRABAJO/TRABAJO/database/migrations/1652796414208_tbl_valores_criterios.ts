import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblValoresCriterios extends BaseSchema {
  protected tableName = 'TBL_VALORES_CRITERIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('TIPO_PARAMETRO_ID').references('TBL_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('UNIDAD_MEDIDA_ID').references('TBL_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('CRITERIO_ID').references('TBL_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
