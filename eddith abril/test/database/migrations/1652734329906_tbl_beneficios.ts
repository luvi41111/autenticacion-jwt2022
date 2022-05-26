import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID');
      table.string('NOMBRE', 200).notNullable();
      table.string('DESCRIPCION',500).notNullable();
      table.string('VALOR_ESTADISTICO_OTRO',100).nullable();
      table.string('VALOR_ESTADISTICO_JUSTIFICACION',200).nullable();
      table.integer('PRECIO_NETO').notNullable();
      table.integer('PRECIO_BRUTO').notNullable();
      table.integer('PRESUPUESTO_TOTAL').notNullable();
      table.dateTime('FECHA_INICIO').notNullable();
      table.dateTime('FECHA_FIN').notNullable();
      table.boolean('BENEFICIO_RECURRENTE ').notNullable();
      table.string('FRECUENCIA_OTRO',30).nullable();
      table.boolean('REALIZA_CARACTERIZACION').notNullable();
      table.string('OBSERVACIONES',1000).nullable();
      
     
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
