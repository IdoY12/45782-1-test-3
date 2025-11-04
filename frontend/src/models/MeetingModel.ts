import type TeamModel from "./TeamModel"

export default interface MeetingModel {
    id: string
    startDateTime: string
    endDateTime: string
    description: string
    meetingRoom: string
    team: TeamModel
}