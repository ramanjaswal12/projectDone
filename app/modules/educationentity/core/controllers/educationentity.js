const express = require('express');
const router = express.Router();

const addEducationEntity = async (req, res, next) => {
    try {
        const { data, message } = await Services.educationentity.addEducationEntity(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getEducationEntity = async (req, res, next) => {
    try {

        const { data, message } = await Services.educationentity.getEducationEntity(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateEducationEntity = async (req, res, next) => {
    try {
        const { data, message } = await Services.educationentity.updateEducationEntity(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteEducationEntity = async (req, res, next) => {
    try {
        const { data, message } = await Services.educationentity.deleteEducationEntity(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /educationentity/addEducationEntity:
 * 
 *  post:
 *    summary: Add Education Entity
 * 
 *    tags:
 *      - educationentity
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
 *            $ref: '#/components/schemas/educationentityaddEducationEntity'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addEducationEntity", Validator(Validations.EducationEntity.addEducationEntity), addEducationEntity)

/**
 * @swagger
 * /educationentity/getEducationEntity:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - educationentity
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
router.get("/getEducationEntity", getEducationEntity)

/**
 * @swagger
 * /educationentity/updateEducationEntity:
 * 
 *  put:
 *    summary: Update Education Entity
 * 
 *    tags:
 *      - educationentity
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
 *            $ref: '#/components/schemas/educationentityupdateEducationEntity'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateEducationEntity", Validator(Validations.EducationEntity.updateEducationEntity), updateEducationEntity)


/**
 * @swagger
 * /educationentity/deleteEducationEntity:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - educationentity
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
 *            $ref: '#/components/schemas/educationentitydeleteEducationEntity'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteEducationEntity", Validator(Validations.EducationEntity.deleteEducationEntity), deleteEducationEntity)

module.exports = router;