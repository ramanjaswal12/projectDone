const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.subCategory = Joi.object({
    picture: Joi.string().required(),
    subCategoryName: Joi.string().required(),
    categoryId: Joi.string().required(),
    subCategoryName: Joi.string().required(),
})

module.exports.updateSubCategory = Joi.object({
    subCategoryId: Joi.string().required(),
    subCategoryName: Joi.string().optional(),
    categoryId: Joi.string().optional(),
    picture: Joi.string().optional(),
})

module.exports.deleteSubCategory = Joi.object({
    subCategoryId: Joi.string().required()
})
