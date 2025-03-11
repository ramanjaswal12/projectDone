
const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});
module.exports.addEducationEntity = Joi.object({
    entityType: Joi.string().required(),
    name: Joi.string().required(),
})
module.exports.updateEducationEntity = Joi.object({
    educationEntityId: Joi.string().required(),
    name: Joi.string().required(),
})

module.exports.deleteEducationEntity = Joi.object({
    educationEntityId: Joi.string().required(),

})
