const express = require('express');
const router = express.Router();

const addFaq = async (req, res, next) => {

    try {
        const { data, message } = await Services.faq.addFaq(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getFaq = async (req, res, next) => {
    try {

        const { data, message } = await Services.faq.getFaq(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateFaq = async (req, res, next) => {
    try {
        const { data, message } = await Services.faq.updateFaq(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteFaq = async (req, res, next) => {
    try {
        const { data, message } = await Services.faq.deleteFaq(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /faq/addFaq:
 * 
 *  post:
 *    summary: Add Faq
 * 
 *    tags:
 *      - faq
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
 *            $ref: '#/components/schemas/faqaddFaq'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addFaq", Validator(Validations.Faq.addFaq), addFaq)

/**
 * @swagger
 * /faq/getFaq:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - faq
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
router.get("/getFaq", getFaq)

/**
 * @swagger
 * /faq/updateFaq:
 * 
 *  put:
 *    summary: Update Faq
 * 
 *    tags:
 *      - faq
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
 *            $ref: '#/components/schemas/faqupdateFaq'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateFaq", Validator(Validations.Faq.updateFaq), updateFaq)

/**
 * @swagger
 * /faq/deleteFaq:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - faq
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
 *            $ref: '#/components/schemas/faqdeleteFaq'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteFaq", Validator(Validations.Faq.deleteFaq), deleteFaq)

module.exports = router;