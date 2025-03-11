const express = require('express');
const router = express.Router();

const addGrade = async (req, res, next) => {

    try {
        const { data, message } = await Services.grade.addGrade(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getGradeDetails = async (req, res, next) => {
    try {

        const { data, message } = await Services.grade.getGradeDetails(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateGrade = async (req, res, next) => {
    try {
        const { data, message } = await Services.grade.updateGrade(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteGrade = async (req, res, next) => {
    try {
        const { data, message } = await Services.grade.deleteGrade(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}



/**
 * @swagger
 * /grade/addGrade:
 * 
 *  post:
 *    summary: Add Grade
 * 
 *    tags:
 *      - grade
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
 *            $ref: '#/components/schemas/gradeaddGrade'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addGrade", Validator(Validations.Grade.addGrade), addGrade)


/**
 * @swagger
 * /grade/getGradeDetails:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - grade
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
router.get("/getGradeDetails", getGradeDetails)


/**
 * @swagger
 * /grade/updateGrade:
 * 
 *  put:
 *    summary: Update Grade
 * 
 *    tags:
 *      - grade
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
 *            $ref: '#/components/schemas/gradeupdateGrade'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateGrade", Validator(Validations.Grade.updateGrade), updateGrade)


/**
 * @swagger
 * /grade/deleteGrade:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - grade
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
 *            $ref: '#/components/schemas/gradedeleteGrade'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteGrade", Validator(Validations.Grade.deleteGrade), deleteGrade)


module.exports = router;