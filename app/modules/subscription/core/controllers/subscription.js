const express = require('express');
const router = express.Router();


const createSubscription = async (req, res, next) => {

    try {
        const { data, message } = await Services.subscription.createSubscription(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getSubscription = async (req, res, next) => {

    try {
        const { data, message } = await Services.subscription.getSubscription(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateSubscription = async (req, res, next) => {

    try {
        const { data, message } = await Services.subscription.updateSubscription(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteSubscription = async (req, res, next) => {
    try {
        const { data, message } = await Services.subscription.deleteSubscription(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /subscription/createSubscription:
 * 
 *  post:
 *    summary: Create Subscription
 * 
 *    tags:
 *      - subscription
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
 *            $ref: '#/components/schemas/subscriptioncreateSubscription'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/createSubscription",Validator(Validations.subscription.createSubscription),createSubscription)

/**
 * @swagger
 * /subscription/getSubscription:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - subscription
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
router.get("/getSubscription", getSubscription)

/**
 * @swagger
 * /subscription/updateSubscription:
 * 
 *  put:
 *    summary: Update Subscription
 * 
 *    tags:
 *      - subscription
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
 *            $ref: '#/components/schemas/subscriptionupdateSubscription'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateSubscription", Validator(Validations.subscription.updateSubscription),updateSubscription)

/**
 * @swagger
 * /subscription/deleteSubscription:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - subscription
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
 *            $ref: '#/components/schemas/subscriptiondeleteSubscription'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteSubscription", Validator(Validations.subscription.deleteSubscription),deleteSubscription)


module.exports = router;