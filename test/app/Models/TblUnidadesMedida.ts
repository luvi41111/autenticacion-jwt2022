import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblUnidadesMedida extends BaseModel {
  public static table='TBL_UNIDADES_MEDIDAS'
 
  @column({ isPrimary: true })
  public ID: number

  @column()
  public NOMBRE:string

  @column()
  public DESCRIPCION:string
  
  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
