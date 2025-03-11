const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addFaq = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
})

module.exports.updateFaq = Joi.object({
    faqId: Joi.string().required(),
    question: Joi.string().optional(),
    answer: Joi.string().optional(),
})
module.exports.deleteFaq = Joi.object({
    faqId: Joi.string().required(),
})
