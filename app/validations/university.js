const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addUniversity = Joi.object({
    universityImage: Joi.string().required(),
    universityName: Joi.string().required(),
    universityEmail: Joi.string().email().required().error(new Error("Please Enter a valid email")),
    phoneNumber: Joi.string().optional().regex(/^[0-9]+$/).min(8).max(15),
    countryCode: Joi.string().when("phoneNumber", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.optional()
    }).regex(/^\+\d{1,3}$/),
    universityAddress: Joi.string().required(),
    city: Joi.string().required(),
    universityCountry: Joi.string().required(),
    affiliation: Joi.string().required(),
    universityRankings: Joi.string().optional(),
    description: Joi.string().optional(),
    overView: Joi.string().optional(),
    campusImage: Joi.string().optional(),
    campusVideo: Joi.string().optional(),
    campusBrochure: Joi.string().optional(),

})

module.exports.updateUniversity = Joi.object({
    universityId: Joi.string().required(),
    universityImage: Joi.string().optional(),
    universityName: Joi.string().optional(),
    universityEmail: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    phoneNumber: Joi.string().optional().regex(/^[0-9]+$/).min(8).max(15),
    countryCode: Joi.string().when("phoneNumber", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.optional()
    }).regex(/^\+\d{1,3}$/),
    universityAddress: Joi.string().optional(),
    city: Joi.string().optional(),
    universityCountry: Joi.string().optional(),
    affiliation: Joi.string().optional(),
    universityRankings: Joi.string().optional(),
    description: Joi.string().optional(),
    overView: Joi.string().optional(),
    campusImage: Joi.string().optional(),
    campusVideo: Joi.string().optional(),
    campusBrochure: Joi.string().optional(),

})

module.exports.deleteUniversity=Joi.object({
    universityId: Joi.string().required()

})