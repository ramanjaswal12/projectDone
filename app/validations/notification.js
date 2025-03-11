const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addNotification = Joi.object({
    title: Joi.string().required(),
    notificationType: Joi.string().optional().valid(...Object.values(constants.NOTIFICATION_TYPE)).description("Sms, Email, PushNotification"),
    sendTo: Joi.string().required(),
    message: Joi.string().required(),
})

module.exports.updateNotification = Joi.object({
    notificationId: Joi.string().required(),
    title: Joi.string().optional(),
    notificationType: Joi.string().optional().valid(...Object.values(constants.NOTIFICATION_TYPE)).description("Sms, Email, PushNotification"),
    sendTo: Joi.string().optional(),
    message: Joi.string().optional(),
})

module.exports.deleteNotification = Joi.object({
    notificationId: Joi.string().required(),
})
