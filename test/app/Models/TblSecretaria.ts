import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblSecretaria extends BaseModel {
  public static table='TBL_SECRETARIAS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NOMBRE:string

  @column()
  public COD_SECRETARIA:string

  @column()
  public COD_DEPENDENCIA:string

  @column()
  public ESTADO_ID:number
  
  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
