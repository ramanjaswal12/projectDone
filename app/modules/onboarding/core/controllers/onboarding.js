const express = require('express');
const router = express.Router();

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const sendOtp = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.sendOtp(req.body)
        return res.success(message, data);
    }
    catch (err) {
        console.log('err: ', err);
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyOtp = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.verifyOtp(req.body)
        return res.success(message, data)
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logIn = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.logIn(req.body)
        return res.success(message, data)
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const changePassword = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.changePassword(req.user, req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getProfile = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.getProfile(req.user)
        return res.success({ message, data })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logout = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.logout(req.user)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const updateProfile = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.updateProfile(req.body, req.user)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const sendOtpToUpdate = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.sendOtpToUpdate(req.body, req.user)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyOtpToUpdate = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.verifyOtpToUpdate(req.body, req.user)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * Function to verify otp
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteAccount = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.deleteAccount(req.user)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

const socialLogin = async (req, res, next) => {
    try {
        const { data, message } = await Services.onboarding.socialLogin(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}









/**
 * @swagger
 * /onboarding/send-otp:
 * 
 *  post:
 *    summary: sendOtp
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingsendOtp'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/send-otp", Validator(Validations.Onboarding.sendOtp), sendOtp)

/**
 * @swagger
 * /onboarding/verify-otp:
 * 
 *  post:
 *    summary: Verify OTP
 * 
 *    tags:
 *      - Onboarding
 *    
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingverifyOtp'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/verify-otp", Validator(Validations.Onboarding.verifyOtp), verifyOtp)


/**
 * @swagger
 * /onboarding/log-in:
 * 
 *  post:
 *    summary: Log In
 * 
 *    tags:
 *      - Onboarding
 *    
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardinglogIn'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/log-in", Validator(Validations.Onboarding.logIn), logIn)


/**
 * @swagger
 * /onboarding/change-password:
 * 
 *  post:
 *    summary: Change Password
 * 
 *    tags:
 *      - Onboarding
 *    
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingchangePassword'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/change-password", Auth.verify("user"), Validator(Validations.Onboarding.changePassword), changePassword)


/**
 * @swagger
 * /onboarding/:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.get("/", Auth.verify("user"), getProfile)


/**
 * @swagger
 * /onboarding/logout:
 * 
 *  get:
 *    summary: logout
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.get("/logout", Auth.verify("user"), logout)


/**
 * @swagger
 * /onboarding/:
 * 
 *  put:
 *    summary: Update Profile
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 * 
 *    security:
 *      - bearerAuth: []
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingupdateProfile'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/", Auth.verify("user"), Validator(Validations.Onboarding.updateProfile), updateProfile)


/**
 * @swagger
 * /onboarding/send-otp-to-update:
 * 
 *  post:
 *    summary: sendOtpToUpdate
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingsendOtp'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/send-otp-to-update", Auth.verify("user"), Validator(Validations.Onboarding.sendOtp), sendOtpToUpdate);


/**
 * @swagger
 * /onboarding/verify-otp-to-update:
 * 
 *  post:
 *    summary: Verify OTP to updte
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingverifyOtp'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/verify-otp-to-update", Auth.verify("user"), Validator(Validations.Onboarding.verifyOtp), verifyOtpToUpdate);


/**
 * @swagger
 * /onboarding/:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - Onboarding
 * 
 *    security:
 *      - bearerAuth: []
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 * 
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/", Auth.verify("user"), deleteAccount)

/**
 * @swagger
 * /onboarding/social-login:
 * 
 *  post:
 *    summary: social Login
 * 
 *    tags:
 *      - Onboarding
 * 
 *    parameters:
 *      - in: header
 *        name: x-portal
 *        required: true
 *        description: Specifies the portal type. Valid options are `user`.
 *        schema:
 *          type: string
 *          enum:
 *            - user
 *      - in: header
 *        name: appkey
 *        required: false
 *        description: Specifies the appkey when you have to by pass encryption.
 *        schema:
 *          type: string
 *      
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/onboardingsocialLogin'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/social-login", Validator(Validations.Onboarding.socialLogin), socialLogin);



module.exports = router;