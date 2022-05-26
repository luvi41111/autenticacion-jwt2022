import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblFrecuencia extends BaseModel {
  public static table ='TBL_FRECUENCIAS'

  @column({ isPrimary: true })
  public ID: number

  @column()
  public NAME:string

  @column.dateTime({ autoCreate: true })
  public CREATED_AT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATED_AT: DateTime
}
