import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TblBeneficiosCriteriosValoresCriterio extends BaseModel {
  public static table = 'TBL_BENEFICIOS_CRITERIOS_VALORES_CRITERIOS'
  
  @column({ isPrimary: true })
  public ID: number

  @column()
  public VALOR_CRITERIO_ID: number

  @column()
  public CRITERIO_ID:number

  @column()
  public BENEFICIO_ID:number

  @column()
  public PONDERACION:number

  
  @column.dateTime({ autoCreate: true })
  public CREATEDAT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATEDAT: DateTime
}
