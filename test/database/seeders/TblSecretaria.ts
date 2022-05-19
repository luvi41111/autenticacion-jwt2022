import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database';

export default class TblSecretariaSeeder extends BaseSeeder {
  public async run () {
    const registros = [
      {
        ID: 1,
        NOMBRE: 'Secretaría Privada',
        COD_SECRETARIA: 'PV',
        COD_DEPENDENCIA: '701',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 2,
        NOMBRE: 'Secretaría de Comunicaciones',
        COD_SECRETARIA: 'CO',
        COD_DEPENDENCIA: '702',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 3,
        NOMBRE: 'Secretaría de Evaluación y Control',
        COD_SECRETARIA: 'EV',
        COD_DEPENDENCIA: '703',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 4,
        NOMBRE: 'Secretaría Hacienda',
        COD_SECRETARIA: 'HA',
        COD_DEPENDENCIA: '704',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 5,
        NOMBRE: 'Secretaría General',
        COD_SECRETARIA: 'EG',
        COD_DEPENDENCIA: '705',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 6,
        NOMBRE: 'Secretaría de Gestión Humana y Servicio a la Ciudadanía',
        COD_SECRETARIA: 'GH',
        COD_DEPENDENCIA: '706',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 7,
        NOMBRE: 'Secretaría Suministros y Servicios',
        COD_SECRETARIA: 'SS',
        COD_DEPENDENCIA: '707',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 8,
        NOMBRE: 'Secretaría Educación',
        COD_SECRETARIA: 'ED',
        COD_DEPENDENCIA: '711',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 9,
        NOMBRE: 'Secretaría de Participación Ciudadana',
        COD_SECRETARIA: 'PC',
        COD_DEPENDENCIA: '712',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 10,
        NOMBRE: 'Secretaría de Cultura Ciudadana',
        COD_SECRETARIA: 'CU',
        COD_DEPENDENCIA: '713',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 11,
        NOMBRE: 'Unidad Administrativa Especial Buen Comienzo',
        COD_SECRETARIA: 'BC',
        COD_DEPENDENCIA: '714',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 12,
        NOMBRE: 'Secretaría de Salud',
        COD_SECRETARIA: 'SL',
        COD_DEPENDENCIA: '721',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 13,
        NOMBRE: 'Secretaría de Inclusión Social, Familia y Derechos Humanos',
        COD_SECRETARIA: 'IS',
        COD_DEPENDENCIA: '722',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 14,
        NOMBRE: 'Secretaría de las Mujeres',
        COD_SECRETARIA: 'MU',
        COD_DEPENDENCIA: '723',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 15,
        NOMBRE: 'Secretaría de la Juventud',
        COD_SECRETARIA: 'JU',
        COD_DEPENDENCIA: '724',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 16,
        NOMBRE: 'Secretaría de La No-Violencia',
        COD_SECRETARIA: 'NV',
        COD_DEPENDENCIA: '725',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 17,
        NOMBRE: 'Secretaría de Gobierno y Gestión del Gabinete',
        COD_SECRETARIA: 'GO',
        COD_DEPENDENCIA: '731',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 18,
        NOMBRE: 'Secretaría de Seguridad y Convivencia',
        COD_SECRETARIA: 'SE',
        COD_DEPENDENCIA: '732',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 19,
        NOMBRE: 'Departamento Administrativo de Gestión del Riesgo de Desastres',
        COD_SECRETARIA: 'DG',
        COD_DEPENDENCIA: '733',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 20,
        NOMBRE: 'Secretaría de Infraestructura Física',
        COD_SECRETARIA: 'IF',
        COD_DEPENDENCIA: '741',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
    ];

    await Database
      .connection('pg')
      .table('TBL_SECRETARIAS')
      .multiInsert(registros);
  }
}
