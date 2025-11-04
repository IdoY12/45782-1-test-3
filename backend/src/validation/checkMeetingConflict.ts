import { NextFunction, Request, Response } from "express";
import Meeting from "../models/Meeting";
import { Op } from "sequelize";

export async function checkMeetingConflict(req: Request, res: Response, next: NextFunction) {
    try {
        const { teamId, startDateTime, endDateTime } = req.body

        const conflict = await Meeting.findOne({
            where: {
                teamId,
                startDateTime: { [Op.lt]: endDateTime },
                endDateTime: { [Op.gt]: startDateTime } 
            }
        });

        if (conflict) {
            return next({
                status: 409,
                message: "Meeting conflict: time slot already taken"
            })
        }

        next()
    } catch (e) {
        next(e)
    }
}
