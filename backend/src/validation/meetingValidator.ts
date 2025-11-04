import Joi from "joi";

export const meetingValidator = Joi.object({
    teamId: Joi.string().uuid().required(),
    startDateTime: Joi.date().required(),
    endDateTime: Joi.date().required(),
    description: Joi.string().min(2).max(200).required(),
    meetingRoom: Joi.string().min(2).max(100).required()
})