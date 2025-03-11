const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.category = Joi.object({
    picture: Joi.string().required(),
    categoryName: Joi.string().required(),
})

module.exports.updateCategory = Joi.object({
    categoryId: Joi.string().required(),
    categoryName: Joi.string().optional(),
    picture: Joi.string().optional(),
    
    
})
module.exports.deleteCategory = Joi.object({
    categoryId: Joi.string().required(),
    
})
