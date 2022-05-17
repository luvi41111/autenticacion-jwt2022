import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblValoresCriterio extends BaseModel {
  public static table = 'TBL_VALORES_CRITERIOS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public VALOR:string

  @column()
  public TIPO_PARAMETRO_ID:number

  @column()
  public UNIDAD_MEDIDA_ID:number

  @column()
  public CRITERIO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
