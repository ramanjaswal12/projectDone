const express = require('express');
const router = express.Router();
// -------------------------add Notification---------------------------------
const addNotification = async (req, res, next) => {

    try {
        const { data, message } = await Services.notification.addNotification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getNotification = async (req, res, next) => {
    try {

        const { data, message } = await Services.notification.getNotification(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateNotification = async (req, res, next) => {
    try {
        const { data, message } = await Services.notification.updateNotification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteNotification = async (req, res, next) => {
    try {
        const { data, message } = await Services.notification.deleteNotification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /notification/addNotification:
 * 
 *  post:
 *    summary: Add Notification
 * 
 *    tags:
 *      - notification
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
 *            $ref: '#/components/schemas/notificationaddNotification'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addNotification", Validator(Validations.Notification.addNotification), addNotification)

/** 
 * @swagger
 * /notification/getNotification:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - notification
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
router.get("/getNotification", getNotification)

/**
 * @swagger
 * /notification/updateNotification:
 * 
 *  put:
 *    summary: Update Notification
 * 
 *    tags:
 *      - notification
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
 *            $ref: '#/components/schemas/notificationupdateNotification'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateNotification", Validator(Validations.Notification.updateNotification), updateNotification)


/**
 * @swagger
 * /notification/deleteNotification:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - notification
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
 *            $ref: '#/components/schemas/notificationdeleteNotification'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteNotification", Validator(Validations.Notification.deleteNotification), deleteNotification)

module.exports = router;