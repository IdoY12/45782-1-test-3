import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import Team from "./Teams";

@Table({
    underscored: true
})
export default class Meeting extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Team)
    @AllowNull(false)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startDateTime: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    endDateTime: Date

    @AllowNull(false)
    @Column(DataType.STRING)
    description: string

    @AllowNull(false)
    @Column(DataType.STRING)
    meetingRoom: string

    @BelongsTo(() => Team, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    team: string
}