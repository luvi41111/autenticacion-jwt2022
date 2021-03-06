import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import  TblBeneficiosBeneficiario from 'App/Models/TblBeneficiosBeneficiario'

export default class TblBeneficiario extends BaseModel {
  public static table='TBL_BENEFICIARIOS'

  @column({ isPrimary: true })
  public ID: number

  @column()
  public PRIMER_NOMBRE:string

  @column()
  public SEGUNDO_NOMBRE:string

  @column()
  public PRIMER_APELLIDO:string

  @column()
  public SEGUNDO_APELLIDO:string

  @column()
  public COD_GENERO:string

  @column()
  public COD_ETNIA:string

  @column()
  public ORIENTACION_SEXUAL:string
  
  @column()
  public IDENTIDAD_GENERO:string

  @column()
  public CORREO:string

  @column()
  public COD_TIPO_DOCUMENTO:string

  @column()
  public NUMERO_DOCUMENTO:string

  @column()
  public DIRECCION:string

  @column()
  public COD_DEPARTAMENTO:string

  @column()
  public COD_MUNICIPIO:string

  @column()
  public TELEFONO_1:string

  @column()
  public CELULAR:string

  @column()
  public EDAD:string

  @column()
  public ESTADO_ID:number

  @column.dateTime({ autoCreate: true })
  public CREATED_AT: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public UPDATED_AT: DateTime


  @hasMany(() => TblBeneficiosBeneficiario)
  public  TblBeneficiosBeneficiario : HasMany<typeof TblBeneficiosBeneficiario>
}

