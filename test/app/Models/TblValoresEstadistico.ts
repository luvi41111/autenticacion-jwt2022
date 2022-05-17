import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblValoresEstadistico extends BaseModel {
  public static table ='TBL_VALORES_ESTADISTICOS'

  @column({ isPrimary: true })
  public ID: number

  @column()
  public COD_VALOR_ESTADISTICO:string

  @column()
  public NOMBRE:string

  @column()
  public UNIDAD_MEDIDA:number

  @column()
  public META_PLAN:number

  @column()
  public PROYECTO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATED_AT: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATED_AT: DateTime
}
