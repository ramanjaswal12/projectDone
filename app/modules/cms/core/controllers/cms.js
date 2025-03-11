const express = require('express');
const router = express.Router();

const addCms = async (req, res, next) => {
    try {
        const { data, message } = await Services.cms.addCms(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getCms = async (req, res, next) => {
    try {

        const { data, message } = await Services.cms.getCms()
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateCms = async (req, res, next) => {
    try {
        const { data, message } = await Services.cms.updateCms(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteCms = async (req, res, next) => {
    try {
        const { data, message } = await Services.cms.deleteCms(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}




/**
 * @swagger
 * /cms/addCms:
 * 
 *  post:
 *    summary: Add Cms
 * 
 *    tags:
 *      - cms
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
 *            $ref: '#/components/schemas/cmsaddCms'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addCms", Validator(Validations.Cms.addCms),addCms)

/**
 * @swagger
 * /cms/getCms:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - cms
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
router.get("/getCms", getCms)

/**
 * @swagger
 * /cms/updateCms:
 * 
 *  put:
 *    summary: Update Qualification
 * 
 *    tags:
 *      - cms
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
 *            $ref: '#/components/schemas/cmsupdateCms'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateCms",  Validator(Validations.Cms.updateCms),updateCms)

/**
 * @swagger
 * /cms/deleteCms:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - cms
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
 *            $ref: '#/components/schemas/cmsdeleteCms'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteCms", Validator(Validations.Cms.deleteCms), deleteCms)

module.exports = router;