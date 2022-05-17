import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblTiposParametro extends BaseModel {
  public static table = 'TBL_TIPOS_PARAMETROS'
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NOMBRE:string

  @column()
  public DESCRIPCION:string

  @column.dateTime({ autoCreate: true })
  public CREATED_AT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATED_AT: DateTime
}
