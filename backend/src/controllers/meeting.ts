import { NextFunction, Request, Response } from "express";
import Meeting from "../models/Meeting";
import Team from "../models/Teams";

export async function getMeetingPerTeam(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const meeting = await Meeting.findAll({
            include: [Team],
            where: { teamId: req.params.id }
        })
        res.json(meeting)
    } catch (e) {
        next(e)
    }
}

export async function createMeeting(req: Request, res: Response, next: NextFunction) {
    try {
       const createdMeeting = await Meeting.create(req.body)
       await createdMeeting.reload({include: [Team]})
       res.json(createdMeeting)
    } catch (e) {
        next(e)
    }
}
