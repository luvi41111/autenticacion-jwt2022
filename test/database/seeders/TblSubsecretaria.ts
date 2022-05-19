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
        NOMBRE: 'Subsecretaria de Comunicación Estrategica',
        SECRETARIA_ID: 2,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 4,
        NOMBRE: 'Equipo Movilizacion',
        SECRETARIA_ID: 2,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 5,
        NOMBRE: 'Equipo de Gestion Estrategica',
        SECRETARIA_ID: 2,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 6,
        NOMBRE: 'Equipo Digital y Organizacional',
        SECRETARIA_ID: 2,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 7,
        NOMBRE: 'Secretaria De Evaluacion y Control',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 8,
        NOMBRE: 'Subsecretaria de Evaluacion y Seguimiento',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 9,
        NOMBRE: 'Equipo Auditorias Basadas en Riesgos',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 10,
        NOMBRE: 'Equipo Auditorias Reglamentarias',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 11,
        NOMBRE: 'SUBSECRETARIA DE ASESORIA Y ACOMPAÑAMIENTO',
        SECRETARIA_ID: 3,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 12,
        NOMBRE: 'Secretaria de Hacienda',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 13,
        NOMBRE: 'Unidad de Apoyo a la Gestion Juridica',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 14,
        NOMBRE: 'Subsecretaria de Ingresos',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 15,
        NOMBRE: 'Subsecretaria de Presupuesto y Gestion Financiera',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 16,
        NOMBRE: 'Subsecretaria de Tesoreria',
        SECRETARIA_ID: 4,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 17,
        NOMBRE: 'Secretaria General',
        SECRETARIA_ID: 5,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 18,
        NOMBRE: 'Subsecretaria de Prevencion del Daño Antijuridico',
        SECRETARIA_ID: 5,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 19,
        NOMBRE: 'Unidad Prevencion del Daño Antijuridico',
        SECRETARIA_ID: 5,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 20,
        NOMBRE: 'Subsecretaria de Defensa y Proteccion de lo Publico',
        SECRETARIA_ID: 5,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 21,
        NOMBRE: 'Unidad de Procesos Juridicos',
        SECRETARIA_ID: 5,
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
