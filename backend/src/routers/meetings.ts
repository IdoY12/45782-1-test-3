import { Router } from "express";
import { createMeeting, getMeetingPerTeam } from "../controllers/meeting";
import validation from "../validation/validation";
import { meetingValidator } from "../validation/meetingValidator";
import { checkMeetingConflict } from "../validation/checkMeetingConflict";

const meetingRouter = Router()

meetingRouter.get('/:id', getMeetingPerTeam)
meetingRouter.post('/', validation(meetingValidator), checkMeetingConflict, createMeeting)

export default meetingRouter
