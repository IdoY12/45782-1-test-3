import axios from "axios"
import type MeetingModel from "../models/MeetingModel"
import type MeetingDraft from "../models/MeetingDrat"

class MeetingsService {

    async getMeetingPerTeam(id: string): Promise<MeetingModel[]> {
        const { data } = await axios<MeetingModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meeting/${id}`)
        return data
    }

    async postMeeting(draft: MeetingDraft): Promise<void> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/meeting`, draft)
    }
}

export default new MeetingsService()