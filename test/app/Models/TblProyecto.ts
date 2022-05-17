import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblProyecto extends BaseModel {
  public static table='TBL_PROYECTOS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public COD_PROYECTO:string

  @column()
  public NOMBRE:string

  @column()
  public SECRETARIA_ID:number

  @column()
  public ESTADO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
