import { Model } from 'sequelize'
import { AllowNull, AutoIncrement, Column, Table } from 'sequelize-typescript'

@Table({ tableName: 'users' })
export default class User extends Model {
  @AutoIncrement
  @Column
    id!: number

  @AllowNull(false)
  @Column
    firstName!: string

  @AllowNull(false)
  @Column
    lastName!: string

  @AllowNull(false)
  @Column
    phone!: string

  @AllowNull(true)
  @Column
    nic!: string
}
