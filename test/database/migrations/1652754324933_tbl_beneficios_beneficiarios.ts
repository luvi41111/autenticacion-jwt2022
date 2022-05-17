import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiosBeneficiarios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS_BENEFICIARIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('ESTADO_REGISTRADURIA',45).nullable();
      table.string('OBSERVACIONES_REGISTRADURIA',45).nullable();
      table.string('ESTADO_CARACTERIZACION',45).nullable();
      table.string('OBSERVACIONES_CARACTERIZACION',45).nullable();
      table.dateTime('FECHA_ASIGNACION').notNullable();
      table.dateTime('FECHA_ENTREGA_BENEFICIO').notNullable();
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
