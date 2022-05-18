import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiarios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIARIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('ESTADO_ID').references('TBL_ESTADOS.ID').onDelete('CASCADE').notNullable();
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
