import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TblBeneficiarios extends BaseSchema {
  protected tableName = 'TBL_BENEFICIARIOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('ID');
      table.string('PRIMER_NOMBRE',45).nullable();
      table.string('SEGUNDO_NOMBRE',45).nullable();
      table.string('PRIMER_APELLIDO',45).nullable();
      table.string('SEGUNDO_APELLIDO',45).nullable();
      table.string('COD_GENERO',45).nullable();
      table.string('COD_ETNIA',45).nullable();
      table.string('ORIENTACION_SEXUAL',45).nullable();
      table.string('IDENTIDAD_GENERO',45).nullable();
      table.string('CORREO',45).nullable();
      table.string('COD_TIPO_DOCUMENTO',45).nullable();
      table.string('NUMERO_DOCUMENTO',45).nullable();
      table.string('DIRECCION',45).nullable();
      table.string('COD_DEPARTAMENTO',45).nullable();
      table.string('COD_MUNICIPIO',45).nullable();
      table.string('TELEFONO_1',45).nullable();
      table.string('CELULAR',45).nullable();
      table.string('EDAD',45).nullable();
      table.timestamp('CREATED_AT', { useTz: true });
      table.timestamp('UPDATED_AT', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
