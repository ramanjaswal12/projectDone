const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.addLocations = Joi.object({
    location: Joi.string().required(),
})

module.exports.updateLocations = Joi.object({
    locationId: Joi.string().required(),
    location: Joi.string().required(),

})
module.exports.deleteLocations = Joi.object({
    locationId: Joi.string().required(),
})
