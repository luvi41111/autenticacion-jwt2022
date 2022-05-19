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
      }
    ];

    await Database
      .connection('pg')
      .table('TBL_SECRETARIAS')
      .multiInsert(registros);
  }
}
