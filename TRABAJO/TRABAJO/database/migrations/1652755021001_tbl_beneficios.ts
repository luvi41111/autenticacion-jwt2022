import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIOS'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('TIPO_BENEFICIO_ID').references('TBL_BENEFICIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('SECRETARIA_ID').references('TBL_SECRETARIAS.ID').onDelete('CASCADE').notNullable();
      table.integer('SUBSECRETARIA_ID').references('TBL_SUBSECRETARIAS.ID').onDelete('CASCADE').notNullable();
      table.integer('PROYECTO_ID').references('TBL_PROYECTOS.ID').onDelete('CASCADE').notNullable();
      table.integer('VALOR_ESTADISTICO_ID').references('TBL_VALORES_ESTADISTICOS.ID').onDelete('CASCADE').notNullable();
      table.integer('CATEGORIA_BENEFICIO_ID').references('TBL_CATEGORIAS_BENEFICIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('FRECUENCIA_ID').references('TBL_FRECUENCIAS.ID').onDelete('CASCADE').nullable();
      table.integer('IDENTIFICACION_BENEFICIARIO_ID').references('TBL_IDENTIFICACION_BENEFICIARIOS.ID').onDelete('CASCADE').notNullable();
      table.integer('METODO_ASIGNACION_ID').references('TBL_METODOS_ASIGNACIONES.ID').onDelete('CASCADE').notNullable();
      table.integer('ESTADO_ID').references('TBL_ESTADOS.ID').onDelete('CASCADE').notNullable();



      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
