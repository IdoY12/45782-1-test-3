import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type TeamModel from "../../../models/TeamModel"
import type MeetingDraft from "../../../models/MeetingDrat"
import TeamsService from "../../../services/TeamsService"
import "./AddMeeting.css"
import MeetingsService from "../../../services/MeetingsService"


export default function AddMeeting() {

    const [teams, setTeams] = useState<TeamModel[]>([])
    const { handleSubmit, register, reset } = useForm<MeetingDraft>()

    useEffect(() => {
            ( async () => {
                const teams = await TeamsService.getTeams()
                setTeams(teams)
            })()
    }, [])

    async function submit(draft: MeetingDraft) {
        await MeetingsService.postMeeting(draft)
        reset()
    }

    return (
        <div className="AddMeeting">
            <form onSubmit={handleSubmit(submit)}>

                <select {...register('teamId', {
                    required: true
                })}>
                    <option value="">Select team</option>
                    {teams.map(({id, teamName}) => 
                        <option key={id} value={id}>
                            {teamName}
                        </option>
                    )}
                </select>
                <input type="datetime-local" placeholder="Start Time" {...register('startDateTime', {
                    required: true
                })} />
                <input type="datetime-local" placeholder="End Time" {...register('endDateTime', {
                    required: true
                })} />
                <input placeholder="Description" {...register('description', {
                    required: true
                })} />
                <input placeholder="Meeting room" {...register('meetingRoom', {
                    required: true
                })} />
                <button>Add meeting</button>

            </form>
        </div>
    )
}

    // startDateTime: Date
    // endDateTime: Date
    // description: string
    // meetingRoom: string
    // teamId: string