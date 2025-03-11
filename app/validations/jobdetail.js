const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addJobDetail = Joi.object({
    jobName: Joi.string().required(),
    requiredQualifications: Joi.number()
        .valid(...Object.values(constants.REQUIRED_QUALIFICATIONS)) 
        .required(),
    location: Joi.string().required(),
    insight: Joi.array().items(
        Joi.object({
            location: Joi.string().required(),
            jobDemand: Joi.number().valid(...Object.values(constants.JOB_DEMAND))
            .default(constants.JOB_DEMAND.MEDIUM)
        })
    ).min(1).required(),
    averageSalary: Joi.number().required(),
    salaryRange: Joi.array().items(
        Joi.object({
            min: Joi.number().required(),
            max: Joi.number().required()
        })
    ).min(1).required(),
    jobDescription: Joi.string().required(),
    requirements: Joi.string().required(),

})

module.exports.updateJobDetail = Joi.object({
    jobDetailId: Joi.string().required(),

    jobName: Joi.string().optional(),
    requiredQualifications: Joi.number()
        .valid(...Object.values(constants.REQUIRED_QUALIFICATIONS)) 
        .optional(),
    location: Joi.string().optional(),
    insight: Joi.array().items(
        Joi.object({
            location: Joi.string().optional(),
            jobDemand: Joi.number().valid(...Object.values(constants.JOB_DEMAND))
            .default(constants.JOB_DEMAND.MEDIUM)
        })
    ).min(1).optional(),
    averageSalary: Joi.number().optional(),
    salaryRange: Joi.array().items(
        Joi.object({
            min: Joi.number().optional(),
            max: Joi.number().optional()
        })
    ).min(1).required(),
    jobDescription: Joi.string().optional(),
    requirements: Joi.string().optional(),






















    jobName: Joi.string().optional(),
    requiredQualifications: Joi.string().optional(),
    location: Joi.string().optional(),
    jobDemand: Joi.string().optional(),
    averageSalary: Joi.number().optional(),
    minSalary: Joi.number().optional(),
    maxSalary: Joi.number().optional(),
    jobDescription: Joi.string().optional(),
    requirements: Joi.string().optional(),

})
module.exports.deleteJobDetail = Joi.object({
    jobDetailId: Joi.string().required(),
})
