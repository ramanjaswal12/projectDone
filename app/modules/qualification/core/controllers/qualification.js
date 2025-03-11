const express = require('express');
const router = express.Router();



const addQualification = async (req, res, next) => {
    console.log("hii-----------------")
    try {
        const { data, message } = await Services.qualification.addQualification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getQualificationDetails = async (req, res, next) => {
    try {

        const { data, message } = await Services.qualification.getQualificationDetails(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateQualification = async (req, res, next) => {
    try {
        const { data, message } = await Services.qualification.updateQualification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteQualification = async (req, res, next) => {
    try {
        const { data, message } = await Services.qualification.deleteQualification(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /qualification/addQualification:
 * 
 *  post:
 *    summary: Add Qualification
 * 
 *    tags:
 *      - qualification
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
 *            $ref: '#/components/schemas/qualificationaddQualification'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addQualification", Validator(Validations.Qualification.addQualification), addQualification)

/**
 * @swagger
 * /qualification/getQualificationDetails:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - qualification
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
router.get("/getQualificationDetails", getQualificationDetails)

/**
 * @swagger
 * /qualification/updateQualification:
 * 
 *  put:
 *    summary: Update Qualification
 * 
 *    tags:
 *      - qualification
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
 *            $ref: '#/components/schemas/qualificationupdateQualification'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateQualification", Validator(Validations.Qualification.updateQualification), updateQualification)


/**
 * @swagger
 * /qualification/deleteQualification:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - qualification
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
 *            $ref: '#/components/schemas/qualificationdeleteQualification'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteQualification", Validator(Validations.Qualification.deleteQualification), deleteQualification)

module.exports = router;