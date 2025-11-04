import { Router } from "express";
import { getTeams } from "../controllers/teams";

const teamsRouter = Router()

teamsRouter.get('/', getTeams)

export default teamsRouter