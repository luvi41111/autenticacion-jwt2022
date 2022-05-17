import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblCriterio extends BaseModel {
  public static table='TBL_CRITERIOS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NOMBRE:string

  @column()
  public DESCRIPCION:string

  @column()
  public ESTADO_ID:number

  @column()
  public TIPO_CRITERIO_ID:number

  @column()
  public CATEGORIA_CRITERO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
