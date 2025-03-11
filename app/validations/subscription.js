const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.createSubscription = Joi.object({
    subscriptionName: Joi.string().required(),
    subscriptionType: Joi.string().required().valid(...Object.values(constants.SUBSCRIPTION_TYPE)).description("Monthly, Quarterly, Annually"),
    subscriptionPrice: Joi.string().required(),
})

module.exports.updateSubscription = Joi.object({
    subscriptionId: Joi.string().required(),
    subscriptionName: Joi.string().optional(),
    subscriptionType: Joi.string().optional().valid(...Object.values(constants.SUBSCRIPTION_TYPE)).description("Monthly, Quarterly, Annually"),
    subscriptionPrice: Joi.string().optional(),
})
module.exports.deleteSubscription = Joi.object({
    subscriptionId: Joi.string().required()
})
