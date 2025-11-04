import { useEffect, useState } from "react"
import "./Meeting.css"
import type TeamModel from "../../../models/TeamModel"
import TeamsService from "../../../services/TeamsService"
import MeetingsService from "../../../services/MeetingsService"
import type MeetingModel from "../../../models/MeetingModel"

export default function Meetings() {

    const [teams, setTeams] = useState<TeamModel[]>([])
    const [meetings, setMeetings] = useState<MeetingModel[]>([])

    useEffect(() => {
        ( async () => {
            const teams = await TeamsService.getTeams()
            setTeams(teams)
        })()
    }, [])

    async function showMeetings(e: React.ChangeEvent<HTMLSelectElement>) {
        const id = e.target.value
        const meetings = await MeetingsService.getMeetingPerTeam(id)
        setMeetings(meetings)
    }

    return (
        <div className="Meetings">
            <select onChange={showMeetings}>
                <option value="">Select team</option>
                {teams.map(({id, teamName}) => 
                    <option key={id} value={id}>
                        {teamName}
                    </option>
                )}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Description</th>
                        <th>Meeting room</th>
                    </tr>
                </thead>
                <tbody>
                    {meetings.map(({id, team, startDateTime, endDateTime, description, meetingRoom}) =>
                        <tr key={id}>
                            <td>{team.teamName}</td>
                            <td>{new Date(startDateTime).toLocaleString()}</td>
                            <td>{new Date(endDateTime).toLocaleString()}</td>
                            <td>{description}</td>
                            <td>{meetingRoom}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

// {id, firstName, lastName, address, transactionDate, role}

// "teamId": "3b8f4e46-17ce-4b4a-9b4b-6f5efb206219",
//         "startDateTime": "2025-10-10T03:00:00.000Z",
//         "endDateTime": "2025-10-10T05:10:00.000Z",
//         "description": "talking",
//         "meetingRoom": "ten",