const express = require('express');
const router = express.Router();

const addInstitutions = async (req, res, next) => {

    try {
        const { data, message } = await Services.institution.addInstitutions(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getInstitutionsDetails = async (req, res, next) => {
    try {

        const { data, message } = await Services.institution.getInstitutionsDetails(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateInstitutions = async (req, res, next) => {
    try {
        const { data, message } = await Services.institution.updateInstitutions(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteInstitutions = async (req, res, next) => {
    try {
        const { data, message } = await Services.institution.deleteInstitutions(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /institution/addInstitutions:
 * 
 *  post:
 *    summary: get Institution
 * 
 *    tags:
 *      - institution
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
 *            $ref: '#/components/schemas/institutiongetInstitutionsDetails'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addInstitutions", Validator(Validations.Institution.addInstitutions), addInstitutions)

/**
 * @swagger
 * /institution/getInstitutionsDetails:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - institution
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
router.get("/getInstitutionsDetails", getInstitutionsDetails)

/**
 * @swagger
 * /institution/updateInstitutions:
 * 
 *  put:
 *    summary: Update Institution
 * 
 *    tags:
 *      - institution
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
 *            $ref: '#/components/schemas/institutionupdateInstitutions'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateInstitutions", Validator(Validations.Institution.updateInstitutions), updateInstitutions)

/**
 * @swagger
 * /institution/deleteInstitutions:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - institution
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
 *            $ref: '#/components/schemas/institutiondeleteInstitutions'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteInstitutions", Validator(Validations.Institution.deleteInstitutions), deleteInstitutions)

module.exports = router;