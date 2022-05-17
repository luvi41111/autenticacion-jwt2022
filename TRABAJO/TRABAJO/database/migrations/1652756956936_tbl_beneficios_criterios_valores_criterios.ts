import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiosCriteriosValoresCriterios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('VALOR_CRITERIO_ID').references('TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('CRITERIO_ID').references('TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('BENEFICIO_ID').references('TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS.ID').onDelete('CASCADE').notNullable();

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
