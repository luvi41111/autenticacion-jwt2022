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
      COD_VALOR_ESTADISTICO: 'CO10BD',
      NOMBRE: 'Entidades, Organismos y Dependencias Asistidos Técnicamente',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 40,
      PROYECTO_ID: 2,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 3,
      COD_VALOR_ESTADISTICO: 'EV28AC',
      NOMBRE: 'Documentos de Estrategias de Posicionamiento y Articulación Interinstitucional Implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 3,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 4,
      COD_VALOR_ESTADISTICO: 'HA56AA',
      NOMBRE: 'Sistemas de Información Implementados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID: 4,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 5,
      COD_VALOR_ESTADISTICO: 'GE15AA',
      NOMBRE: 'Documentos de Lineamientos Técnicos Realizados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 45,
      PROYECTO_ID: 5,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 6,
      COD_VALOR_ESTADISTICO: 'GH89AA',
      NOMBRE: 'Personas Formadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 193,
      PROYECTO_ID: 6,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 7,
      COD_VALOR_ESTADISTICO: 'SS47AD',
      NOMBRE: 'Nuevos Instrumentos de Agregación de Demanda Implementados',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 33,
      PROYECTO_ID: 7,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 8,
      COD_VALOR_ESTADISTICO: 'ED77AD',
      NOMBRE: 'Estudiantes Beneficiados con Estrategias de Promoción del Bilingüismo',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 2000,
      PROYECTO_ID: 8,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 9,
      COD_VALOR_ESTADISTICO: 'PC51AG',
      NOMBRE: 'Espacios de Participación Promovidos',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 6,
      PROYECTO_ID: 9,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 10,
      COD_VALOR_ESTADISTICO: 'CU81IA',
      NOMBRE: 'Personas Capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 700,
      PROYECTO_ID: 10,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 11,
      COD_VALOR_ESTADISTICO: 'BC89AA',
      NOMBRE: 'Niños y Niñas Atendidos en Servicio Integrales',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 12900,
      PROYECTO_ID: 11,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 12,
      COD_VALOR_ESTADISTICO: 'SL91BC',
      NOMBRE: 'Campañas de Promoción de Modos, Condiciones y Estilos de Vida Saludables Implementadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 1,
      PROYECTO_ID:12,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 13,
      COD_VALOR_ESTADISTICO: 'IS75AP',
      NOMBRE: 'Personas Beneficiadas con Raciones de Alimentos',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 220000,
      PROYECTO_ID: 13,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 14,
      COD_VALOR_ESTADISTICO: 'MU06AB',
      NOMBRE: 'Espacios de Participación Promovidos',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 3,
      PROYECTO_ID: 14,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 15,
      COD_VALOR_ESTADISTICO: 'JU66AF',
      NOMBRE: 'Personas que Acceden a La Información Disponible',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 50,
      PROYECTO_ID: 15,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 16,
      COD_VALOR_ESTADISTICO: 'NV82AA',
      NOMBRE: 'Personas Capacitadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 4540,
      PROYECTO_ID: 16,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 17,
      COD_VALOR_ESTADISTICO: 'GO92AB',
      NOMBRE: 'Espacios de Integración de Oferta Pública Generados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 3,
      PROYECTO_ID: 17,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 18,
      COD_VALOR_ESTADISTICO: 'SE81BD',
      NOMBRE: 'Documentos de Lineamientos Técnicos Elaborados',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 0.2,
      PROYECTO_ID: 18,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 19,
      COD_VALOR_ESTADISTICO: 'DG27AB',
      NOMBRE: 'Obras de Infraestructura para la Reducción del Riesgo de Desastres Realizadas',
      UNIDAD_MEDIDA: 'Número',
      META_PLAN: 10,
      PROYECTO_ID: 19,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    {
      ID: 20,
      COD_VALOR_ESTADISTICO: 'IF79BE',
      NOMBRE: 'Bibliotecas con Reforzamiento Estructural',
      UNIDAD_MEDIDA: '%',
      META_PLAN: 70,
      PROYECTO_ID: 20,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date()
    },
    // {
    //   ID: ,
    //   COD_VALOR_ESTADISTICO: '',
    //   NOMBRE: '',
    //   UNIDAD_MEDIDA: '',
    //   META_PLAN: ,
    //   PROYECTO_ID: ,
    //   CREATED_AT: new Date(),
    //   UPDATED_AT: new Date()
    // },
    //agregar sendo valor estadistico de proyecto id 1
  
    
  ];

  await Database
      .connection('pg')
      .table('TBL_VALORES_ESTADISTICOS')
      .multiInsert(registros);
  }
}
