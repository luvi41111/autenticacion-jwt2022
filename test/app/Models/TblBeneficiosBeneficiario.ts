import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblBeneficiosBeneficiario extends BaseModel {
  public static table='TBL_BENEFICIOS_BENEFICIARIOS'

  @column({ isPrimary: true })
  public ID: number
  
  @column()
  public ESTADO_REGISTRADURIA:string

  @column()
  public OBSERVACIONES_REGISTRADURIA:string

  @column()
  public ESTADO_CARACTERIZACION:string

  @column()
  public OBSERVACIONES_CARACTERIZACION:string

  @column()
  public FECHA_ASIGNACION:DateTime

  @column()
  public FECHA_ENTREGA_BENEFICIO:DateTime

  @column()
  public ESTADO_ID:number

  @column()
  public BENEFICIO_ID:number

  @column()
  public BENEFICIARIO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATED_AT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATED_AT: DateTime
}
