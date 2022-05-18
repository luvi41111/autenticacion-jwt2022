import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiosBeneficiarios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS_BENEFICIARIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('ESTADO_ID').references('TBL_ESTADOS.ID').onDelete('CASCADE').notNullable();
      table.integer('BENEFICIO_ID').references('TBL_BENEFICIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('BENEFICIARIO_ID').references('TBL_BENEFICIARIOS.ID').onDelete('CASCADE').notNullable();

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
