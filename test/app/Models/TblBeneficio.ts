import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblBeneficio extends BaseModel {
  public static table ='TBL_BENEFICIOS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NOMBRE:string

  @column()
  public DESCRIPCION:string

  @column()
  public TIPO_BENEFICIO_ID:number
  
  @column()
  public SECRETARIA_ID:number

  @column()
  public SUBSECRETARIA_ID:number

  @column()
  public PROYECTO_ID:number

  @column()
  public VALOR_ESTADISTICO_ID:number

  @column()
  public VALOR_ESTADISTICO_OTRO:string

  @column()
  public VALOR_ESTADISTICO_JUSTIFICACION:string

  @column()
  public CATEGORIA_BENEFICIO_ID:number

  @column()
  public PRECIO_NETO:number

  @column()
  public PRECIO_BRUTO:number

  @column()
  public PRESUPUESTO_TOTAL:number

  @column()
  public FECHA_INICIO:DateTime

  @column()
  public FECHA_FIN:DateTime

  @column()
  public BENEFICIO_RECURRENTE:boolean

  @column()
  public FRECUENCIA_ID:number

  @column()
  public FRECUENCIA_OTRO:string

  @column()
  public REALIZA_CARACTERIZACION:boolean

  @column()
  public IDENTIFICACION_BENEFICIARIO_ID:number

  @column()
  public METODO_ASIGNACION_ID:number

  @column()
  public OBSERVACIONES:string

  @column()
  public ESTADO_ID:number

  
  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
