import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblSubsecretarias extends BaseSchema {
  protected tableName = 'TBL_SUBSECRETARIAS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('SECRETARIA_ID').references('TBL_SECRETARIAS.ID').onDelete('CASCADE').notNullable();

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
