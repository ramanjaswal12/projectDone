const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addCms = Joi.object({
    phone: Joi.string().required().regex(/^[0-9]+$/).min(8).max(15),
    email: Joi.string().email().required().error(new Error("Please Enter a valid email")),
    countryCode: Joi.string().when("phone", {
        is: Joi.exist(),
        then: Joi.required(),
    }).regex(/^\+\d{1,3}$/),
    terms: Joi.string().required(),
    privacyPolicy: Joi.string().required(),
    aboutUs: Joi.string().required(),

})

module.exports.updateCms = Joi.object({
    cmsId: Joi.string().required(),
    phone: Joi.string().optional().regex(/^[0-9]+$/).min(8).max(15),
    email: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    countryCode: Joi.string().when("phone", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.optional()
    }).regex(/^\+\d{1,3}$/),
    terms: Joi.string().optional(),
    privacyPolicy: Joi.string().optional(),
    aboutUs: Joi.string().optional(),

})
module.exports.deleteCms = Joi.object({
    cmsId: Joi.string().required()
})
