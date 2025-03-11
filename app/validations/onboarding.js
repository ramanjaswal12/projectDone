// const constants = require("../../config/constants");

const Joi = require("joi").defaults((schema) => {
    switch (schema.type) {
        case "string":
            return schema.replace(/\s+/, " ");
        default:
            return schema;
    }
});

Joi.objectId = () => Joi.string().pattern(/^[0-9a-f]{24}$/, "valid ObjectId");

module.exports.create = Joi.object({
    email: Joi.string().email().required()
});

module.exports.sendOtp = Joi.object({
    otpType: Joi.number().required().valid(...Object.values(constants.OTP_TYPE)).description("1 for signup, 2 for login, 3 for foget,4 for update")
    , phone: Joi.string().optional().regex(/^[0-9]+$/).min(8).max(15),
    email: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    countryCode: Joi.string().when("phone", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.optional()
    }).regex(/^\+\d{1,3}$/)
}).or("phone", "email")

module.exports.verifyOtp = Joi.object({
    code: Joi.number().required(),
    otpType: Joi.number().required().valid(...Object.values(constants.OTP_TYPE)).description("1 for signup, 2 for login, 3 for forget"),
    email: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    phone: Joi.string().optional(),
    countryCode: Joi.string().optional(),
    password: Joi.string().optional(),
    deviceToken: Joi.string().optional(),
    deviceType: Joi.string().valid(...Object.values(constants.DEVICETYPE)).optional().description("ANDROID IOS WEB"),
}).or('phone', 'email');

module.exports.logIn = Joi.object({
    email: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    password: Joi.when("email",
        { is: Joi.exist, then: Joi.string().required(), otherwise: Joi.string().optional() }
    ),
    deviceToken: Joi.string().optional(),
    deviceType: Joi.string().valid(...Object.values(constants.DEVICETYPE)).optional().description("ANDROID IOS WEB")

})

module.exports.changePassword = Joi.object({
    oldPassword: Joi.string().optional(),
    newPassword: Joi.string().required(),
    resetPassword: Joi.boolean().optional()
});

module.exports.updateProfile = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    fullName: Joi.string().optional(),
    userName: Joi.string().optional(),
    email: Joi.string().email().optional().error(new Error("Please Enter a valid email")),
    phone: Joi.string().optional(),
    countryCode: Joi.string().optional(),
    password: Joi.string().optional(),
    image: Joi.string().optional().allow("", null),
    isProfileCompleted: Joi.boolean().optional(),
    dob: Joi.date().optional()
});

module.exports.socialLogin = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    fullName: Joi.string().optional(),
    gender: Joi.number().optional(),
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
    image: Joi.string().optional(),
    email: Joi.string().when("socialType", {
        is: constants.SOCIAL_TYPE.GOOGLE,
        then: Joi.required()
    }).optional(),
    countryCode: Joi.string().optional(),
    phone: Joi.string().optional(),
    socialId: Joi.string().required(),
    socialType: Joi.number().valid(...Object.values(constants.SOCIAL_TYPE)).required().description("1 for Google, 2 for Apple, 3 for FB"),
    deviceToken: Joi.string().optional(),
    deviceType: Joi.string().valid(...Object.values(constants.DEVICETYPE)).optional().description("ANDROID IOS WEB"),
})

module.exports.createSubscription = Joi.object({
    subscriptionName: Joi.string().required(),
    subscriptionType: Joi.string().required().valid(...Object.values(constants.SUBSCRIPTION_TYPE)).description("Monthly, Quarterly, Annually"),
    subscriptionPrice: Joi.string().required(),

})

module.exports.updateSubscription = Joi.object({
    subscriptionId: Joi.string().required(),
    subscriptionName: Joi.string().optional(),
    subscriptionType: Joi.string().optional().valid(...Object.values(constants.SUBSCRIPTION_TYPE)).description("Monthly, Quarterly, Annually"),
    subscriptionPrice: Joi.string().optional(),
})
module.exports.deleteSubscription = Joi.object({
    subscriptionId: Joi.string().required()
})
