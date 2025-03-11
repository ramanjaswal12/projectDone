const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addGrade = Joi.object({
    grade: Joi.string().required(),
})

module.exports.updateGrade = Joi.object({
    gradeId: Joi.string().required(),
    grade: Joi.string().required(),

})
module.exports.deleteGrade = Joi.object({
    gradeId: Joi.string().required(),
})
