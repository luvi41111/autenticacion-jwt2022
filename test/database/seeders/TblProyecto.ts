import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database';


export default class TblProyectoSeeder extends BaseSeeder {
  public async run () {
    const registros = [
      {
        ID: 1,
        COD_PROYECTO: '200332',
        NOMBRE: 'Fortalecimiento de la Alcaldía como Institución Abierta y Cercana a la Gente',
        SECRETARIA_ID: 1,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 2,
        COD_PROYECTO: '200410',
        NOMBRE: 'Fortalecimiento y Encuentro de Procesos y Medios Alternativos, Independientes, Comunitarios y Ciudadanos',
        SECRETARIA_ID: 2,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 3,
        COD_PROYECTO: '200428',
        NOMBRE: 'Mejoramiento del Sistema de Control Interno Desde el Proceso de Auditoría Interna en Medellín',
        SECRETARIA_ID: 3,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 4,
        COD_PROYECTO: '200256',
        NOMBRE: 'Mordenización Digital de la Hacienda Pública',
        SECRETARIA_ID: '4',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 5,
        COD_PROYECTO: '200215',
        NOMBRE: 'Fortalecimiento en la Prevención del Daño Antijurídico y la Defensa Jurídica',
        SECRETARIA_ID: 5,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 6,
        COD_PROYECTO: '200189',
        NOMBRE: 'Administración del Centro de Prácticas',
        SECRETARIA_ID: 6,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 7,
        COD_PROYECTO: '200347',
        NOMBRE: 'Administración del Abastecimiento Innovador, Sostenible y Social del Municipio',
        SECRETARIA_ID: '7',
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 8,
        COD_PROYECTO: '200377',
        NOMBRE: 'Mejoram Compa Comunic en Ingle',
        SECRETARIA_ID: 8,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 9,
        COD_PROYECTO: '200251',
        NOMBRE: 'Asistencia Técnica y Acompañamiento a Organizaciones y Redes Sociales',
        SECRETARIA_ID: 9,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 10,
        COD_PROYECTO: '200081',
        NOMBRE: 'Implementación de Estrategias de Economía Creativa y Cultural',
        SECRETARIA_ID: 10,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 11,
        COD_PROYECTO: '200389',
        NOMBRE: 'Fortalecimiento del Servicio de Atención Integral a Madres Gestantes y Lactantes',
        SECRETARIA_ID: 11,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 12,
        COD_PROYECTO: '200191',
        NOMBRE: 'Desarrollo de la Estrategia Medellín Me Cuida Salud',
        SECRETARIA_ID: 12,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      {
        ID: 13,
        COD_PROYECTO: '200075',
        NOMBRE: 'Implementación del Programa de Alimentación Escolar-Pae',
        SECRETARIA_ID: 13,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 14,
        COD_PROYECTO: '200306',
        NOMBRE: 'Implementación de Estrategias para Transformar Imaginarios Culturales Sexistas',
        SECRETARIA_ID: 14,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 15,
        COD_PROYECTO: '200166',
        NOMBRE: 'Asesoría en Salud para Jóvenes Vulnerables-Emancipados',
        SECRETARIA_ID: 15,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 16,
        COD_PROYECTO: '200082',
        NOMBRE: 'Construcción de Paz a Través del Arte y la Cultura',
        SECRETARIA_ID: 16,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 17,
        COD_PROYECTO: '200292',
        NOMBRE: 'Fortalecimiento de Estrategias de Gobierno Efectivo en el Territorio',
        SECRETARIA_ID: 17,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 18,
        COD_PROYECTO: '200281',
        NOMBRE: 'Administración del Espacio Público para el Disfrute de la Ciudadanía',
        SECRETARIA_ID: 18,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 19,
        COD_PROYECTO: '200227',
        NOMBRE: 'Desarrollo de Estrategias de Reducción del Riesgo',
        SECRETARIA_ID: 19,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      {
        ID: 20,
        COD_PROYECTO: '200079',
        NOMBRE: 'Rehabilitación e Intervención Parque Biblioteca Zona Nororiental',
        SECRETARIA_ID: 20,
        ESTADO_ID: 1,
        CREATED_AT: new Date(),
        UPDATED_AT: new Date()
      },
      
      // {
      //   ID: ,
      //   COD_PROYECTO: '',
      //   NOMBRE: '',
      //   SECRETARIA_ID: ,
      //   ESTADO_ID: 1,
      //   CREATED_AT: new Date(),
      //   UPDATED_AT: new Date()
      // },
      
    ];

    await Database
      .connection('pg')
      .table('TBL_PROYECTOS')
      .multiInsert(registros);
  }
}
