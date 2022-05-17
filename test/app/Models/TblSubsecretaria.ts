import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblSubsecretaria extends BaseModel {
  public static table='TBL_SUBSECRETARIAS'
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NAME:string

  @column()
  public SECRETARIA_ID:number 

  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
