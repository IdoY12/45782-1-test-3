import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Meeting from "./Meeting";


@Table({
    underscored: true
})
export default class Team extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    teamName: string

    @HasMany(() => Meeting, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    meetings: string
}