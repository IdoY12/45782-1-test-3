import axios from "axios"
import type TeamModel from "../models/TeamModel"

class TeamsService {
    async getTeams(): Promise<TeamModel[]> {
        const { data } = await axios<TeamModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/teams`)
        return data
    }
}

export default new TeamsService()