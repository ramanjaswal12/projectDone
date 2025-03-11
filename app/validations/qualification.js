const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addQualification = Joi.object({
    qualificationTitle: Joi.string().required(),
})

module.exports.updateQualification = Joi.object({
    qualificationId: Joi.string().required(),
    qualificationTitle: Joi.string().required(),

})
module.exports.deleteQualification = Joi.object({
    qualificationId: Joi.string().required(),
})
