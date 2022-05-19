import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database';

export default class TblValorEstadisticoSeeder extends BaseSeeder {
  public async run () {
    const registros = [
      {
      ID: 1,
      COD_VALOR_ESTADISTICO: 'PV32AA',
      NOMBRE: 'Sistemas de Información Actualizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 1,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 2,
      COD_VALOR_ESTADISTICO: 'PV32AB',
      NOMBRE: 'Documentos de evaluación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 70,
      PROYECTO_ID: 1,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 3,
      COD_VALOR_ESTADISTICO: 'PV45AA',
      NOMBRE: 'Documentos de evaluación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 5,
      PROYECTO_ID: 2,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 4,
      COD_VALOR_ESTADISTICO: 'PV45AB',
      NOMBRE: 'Entidades, organismos y dependencias asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 27,
      PROYECTO_ID: 2,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 5,
      COD_VALOR_ESTADISTICO: 'PV66AC',
      NOMBRE: 'Documentos de lineamientos técnicos realizados',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 55,
      PROYECTO_ID: 3,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 6,
      COD_VALOR_ESTADISTICO: 'PV66AA',
      NOMBRE: 'Documentos de investigación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 2,
      PROYECTO_ID: 3,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 7,
      COD_VALOR_ESTADISTICO: 'PV66AB',
      NOMBRE: 'Entidades, organismos y dependencias asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 35,
      PROYECTO_ID: 3,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 8,
      COD_VALOR_ESTADISTICO: 'CO10BD',
      NOMBRE: 'Entidades, organismos y dependencias asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 40,
      PROYECTO_ID: 4,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 9,
      COD_VALOR_ESTADISTICO: 'CO10BB',
      NOMBRE: 'Documentos de lineamientos técnicos realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 3,
      PROYECTO_ID: 4,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 10,
      COD_VALOR_ESTADISTICO: 'CO10BC',
      NOMBRE: 'Personas capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 50,
      PROYECTO_ID: 4,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 11,
      COD_VALOR_ESTADISTICO: 'CO10BA',
      NOMBRE: 'Documentos de investigación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 2,
      PROYECTO_ID: 4,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 12,
      COD_VALOR_ESTADISTICO: 'CO23AB',
      NOMBRE: 'Personas capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 515,
      PROYECTO_ID: 5,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 13,
      COD_VALOR_ESTADISTICO: 'CO10BA',
      NOMBRE: 'Sistemas de información implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1168,
      PROYECTO_ID: 5,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 14,
      COD_VALOR_ESTADISTICO: 'CO65EA',
      NOMBRE: 'Entidades, organismos y dependencias asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 40,
      PROYECTO_ID: 6,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 15,
      COD_VALOR_ESTADISTICO: 'CO65EB',
      NOMBRE: 'Documentos de planeación realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 12,
      PROYECTO_ID: 6,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 16,
      COD_VALOR_ESTADISTICO: 'CO59AD',
      NOMBRE: 'Documentos metodológicos realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 7,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 17,
      COD_VALOR_ESTADISTICO: 'CO59AC',
      NOMBRE: 'Personas capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 50,
      PROYECTO_ID: 7,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 18,
      COD_VALOR_ESTADISTICO: 'CO59AA',
      NOMBRE: 'Documentos de lineamientos técnicos realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 7,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 19,
      COD_VALOR_ESTADISTICO: 'CO59AB',
      NOMBRE: 'Espacios de integración de oferta pública generados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 4,
      PROYECTO_ID: 7,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 20,
      COD_VALOR_ESTADISTICO: 'EV28AC',
      NOMBRE: 'Documentos de estrategias de posicionamiento y articulación interinstitucional implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 8,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 21,
      COD_VALOR_ESTADISTICO: 'EV28AB',
      NOMBRE: 'Sistemas de información implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 2,
      PROYECTO_ID: 8,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 22,
      COD_VALOR_ESTADISTICO: 'EV28AA',
      NOMBRE: 'Programas asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 8,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 23,
      COD_VALOR_ESTADISTICO: 'HA56AA',
      NOMBRE: 'Sistemas de información implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 9,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 24,
      COD_VALOR_ESTADISTICO: 'HA56AC',
      NOMBRE: 'Personas capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 50,
      PROYECTO_ID: 9,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 25,
      COD_VALOR_ESTADISTICO: 'HA56AB',
      NOMBRE: 'Índice de capacidad en la prestación de servicios de tecnología',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 99.6,
      PROYECTO_ID: 9,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 26,
      COD_VALOR_ESTADISTICO: 'HA20AB',
      NOMBRE: 'Sistemas de transporte público financiados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 10,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 27,
      COD_VALOR_ESTADISTICO: 'HA22AA',
      NOMBRE: 'Proyectos apoyados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 11,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 28,
      COD_VALOR_ESTADISTICO: 'HA39AA',
      NOMBRE: 'Documentos de evaluación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 3,
      PROYECTO_ID: 12,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 29,
      COD_VALOR_ESTADISTICO: 'HA73AA',
      NOMBRE: 'Programa de sanemiento fiscal y financiero ejecutado',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 32,
      PROYECTO_ID: 13,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 30,
      COD_VALOR_ESTADISTICO: 'HA73AA',
      NOMBRE: 'Programa de sanemiento fiscal y financiero ejecutado',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 32,
      PROYECTO_ID: 14,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 31,
      COD_VALOR_ESTADISTICO: 'HA89AC',
      NOMBRE: 'Sistema de gestión documental implementado',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 15,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 32,
      COD_VALOR_ESTADISTICO: 'HA89AB',
      NOMBRE: 'Entidades, organismos y dependencias asistidos técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 6,
      PROYECTO_ID: 15,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 33,
      COD_VALOR_ESTADISTICO: 'HA94AA',
      NOMBRE: 'Programa de sanemiento fiscal y financiero ejecutado',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 100,
      PROYECTO_ID: 16,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 34,
      COD_VALOR_ESTADISTICO: 'HA11AC',
      NOMBRE: 'Documentos de lineamientos técnicos realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 60,
      PROYECTO_ID: 17,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 35,
      COD_VALOR_ESTADISTICO: 'HA11AA',
      NOMBRE: 'Documentos de investigación elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 4,
      PROYECTO_ID: 17,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 36,
      COD_VALOR_ESTADISTICO: 'HA11AB',
      NOMBRE: 'Programa de sanemiento fiscal y financiero ejecutado',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 95,
      PROYECTO_ID: 17,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 37,
      COD_VALOR_ESTADISTICO: 'GE15AA',
      NOMBRE: 'Documentos de lineamientos técnicos realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 45,
      PROYECTO_ID: 18,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 38,
      COD_VALOR_ESTADISTICO: 'GE16AA',
      NOMBRE: 'Sistemas de información actualizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 4,
      PROYECTO_ID: 19,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    
  ];

  await Database
      .connection('pg')
      .table('TBL_VALORES_ESTADISTICOS')
      .multiInsert(registros);
  }
}
