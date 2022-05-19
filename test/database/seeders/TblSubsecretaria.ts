import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database';

export default class TblSubsecretariaSeeder extends BaseSeeder {
  public async run () {
    const registros = [
      {
        ID: 1,
        NOMBRE: 'Secretaría Privada',
        SECRETARIA_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 2,
        NOMBRE: 'Secretaria de Comunicaciones',
        SECRETARIA_ID: 2,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 3,
        NOMBRE: 'Secretaria de Evaluación y Control',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 4,
        NOMBRE: 'Secretaria de Hacienda',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 5,
        NOMBRE: 'Secretaría General',
        SECRETARIA_ID: 5,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 6,
        NOMBRE: 'Secretaria de Gestion Humana y Servicio a la Ciudadania',
        SECRETARIA_ID: 6,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 7,
        NOMBRE: 'Secretaria de Suministros y Servicios',
        SECRETARIA_ID: 7,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 8,
        NOMBRE: 'Secretaria de Educación',
        SECRETARIA_ID: 8,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 9,
        NOMBRE: 'Secretaria de Participacion Ciudadana',
        SECRETARIA_ID: 9,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 10,
        NOMBRE: 'Secretaria de Cultura Ciudadana',
        SECRETARIA_ID: 10,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      // {
      //   ID: 11,
      //   NOMBRE: '',
      //   SECRETARIA_ID: ,
      //   CREATED_AT: new Date(),
      //   UPDATED_AT: new Date()
      // },
      {
        ID: 12,
        NOMBRE: 'Secretaria de Salud',
        SECRETARIA_ID: 12,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 13,
        NOMBRE: 'Secretaria de Inclusion Social, Familia y Derechos Humanos',
        SECRETARIA_ID: 13,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 14,
        NOMBRE: 'Secretaría de las Mujeres',
        SECRETARIA_ID: 14,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 15,
        NOMBRE: 'Secretaría de la Juventud',
        SECRETARIA_ID: 15,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 16,
        NOMBRE: 'Secretaría de La No-Violencia',
        SECRETARIA_ID: 16,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 17,
        NOMBRE: 'SECRETARIA DE GOBIERNO Y GESTION DEL GABINETE',
        SECRETARIA_ID: 17,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 18,
        NOMBRE: 'Secretaría de Seguridad y Convivencia',
        SECRETARIA_ID: 18,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 19,
        NOMBRE: 'Departamento Administrativo de Gestión del Riesgo de Desastres',
        SECRETARIA_ID: 19,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 20,
        NOMBRE: 'Secretaría de Infraestructura Física',
        SECRETARIA_ID: 20,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
    ];

    await Database
      .connection('pg')
      .table('TBL_SUBSECRETARIAS')
      .multiInsert(registros);
  }
}
