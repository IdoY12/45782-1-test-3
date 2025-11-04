import { NextFunction, Request, Response } from "express";
import Team from "../models/Teams";

export async function getTeams(req: Request, res: Response, next: NextFunction) {
    try {
        const theaters = await Team.findAll()
        res.json(theaters)
    } catch (e) {
        next(e)
    }
}
