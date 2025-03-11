const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addInstitutions = Joi.object({
    institutionName: Joi.string().required(),
})

module.exports.updateInstitutions = Joi.object({
    institutionId: Joi.string().required(),
    institutionName: Joi.string().required(),

})
module.exports.deleteInstitutions = Joi.object({
    institutionId: Joi.string().required(),
})
