import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database';


export default class TblProyectoSeeder extends BaseSeeder {
  public async run () {
    const registros = [
      {
        ID: 1,
        COD_PROYECTO: '200332',
        NOMBRE: 'Fortalecimiento de la alcaldía como institución abierta y cercana a la gente',
        SECRETARIA_ID: 1,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 2,
        COD_PROYECTO: '200345',
        NOMBRE: 'Administración de la unidad de cumplimiento de los proyectos estratégicos del municipio de medellín',
        SECRETARIA_ID: 1,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 3,
        COD_PROYECTO: '200366',
        NOMBRE: 'Fortalecimiento del conglomerado y el gobierno corporativo en el municipio de medellín',
        SECRETARIA_ID: 1,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 4,
        COD_PROYECTO: '200410',
        NOMBRE: 'Fortalecimiento y encuentro de procesos y medios alternativos, independientes, comunitarios y ciudadanos',
        SECRETARIA_ID: 2,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 5,
        COD_PROYECTO: '220023',
        NOMBRE: '22pp99- Fortalecimiento de los procesos y medios de comunicación comunitarios',
        SECRETARIA_ID: 2,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 6,
        COD_PROYECTO: '200365',
        NOMBRE: 'Asesoría en estrategias comunicacionales para la divulgación del plan de desarrollo',
        SECRETARIA_ID: 2,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 7,
        COD_PROYECTO: '200359',
        NOMBRE: 'Fortalecimiento de redes ciudadanas y de dependencias en estrategias para la movilización y la participación',
        SECRETARIA_ID: 2,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 8,
        COD_PROYECTO: '200428',
        NOMBRE: 'Mejoramiento del sistema de control interno desde el proceso de auditoría interna en medellín',
        SECRETARIA_ID: 3,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 9,
        COD_PROYECTO: '200256',
        NOMBRE: 'Modernización digital de la hacienda pública',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 10,
        COD_PROYECTO: '040320',
        NOMBRE: 'Acuerdo metro',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 11,
        COD_PROYECTO: '200122',
        NOMBRE: 'Aportes al área metropolitana del valle de aburrá',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 12,
        COD_PROYECTO: '200139',
        NOMBRE: 'Aplicación de estrategias para la gestión financiera',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 13,
        COD_PROYECTO: '200173',
        NOMBRE: 'Administración del recaudo y la cartera morosa',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 14,
        COD_PROYECTO: '200219',
        NOMBRE: 'Optimización de los excedentes de liquidez',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 15,
        COD_PROYECTO: '200289',
        NOMBRE: 'Asistencia técnica a la gestión de la hacienda pública',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 16,
        COD_PROYECTO: '200294',
        NOMBRE: 'Fortalecimiento y control de los ingresos tributarios y no tributarios',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 17,
        COD_PROYECTO: '200311',
        NOMBRE: 'Apoyo a la calidad de la información contable',
        SECRETARIA_ID: 4,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 18,
        COD_PROYECTO: '200215',
        NOMBRE: 'Fortalecimiento en la prevención del daño antijurídico y la defensa jurídica',
        SECRETARIA_ID: 5,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 19,
        COD_PROYECTO: '200216',
        NOMBRE: 'Mejoramiento de herramientas para la información jurídica',
        SECRETARIA_ID: 5,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
     
    ];

    await Database
      .connection('pg')
      .table('TBL_PROYECTOS')
      .multiInsert(registros);
  }
}
