const express = require('express');
const router = express.Router();

const addUniversity = async (req, res, next) => {

    try {
        const { data, message } = await Services.university.addUniversity(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getAllUniversity = async (req, res, next) => {

    try {
        const { data, message } = await Services.university.getAllUniversity(req.query)
        return res.success({ message: message, data: data });
    }
    catch (err) {
        next(err)
    }
}
const updateUniversity=async(req,res,next)=>{
    try {
        const { data, message } = await Services.university.updateUniversity(req.body)
        return res.success({ message: message, data: data });
    }
    catch (err) {
        next(err)
    }
}
const deleteUniversity=async(req,res,next)=>{
    try {
        const { data, message } = await Services.university.deleteUniversity(req.body)
        return res.success({ message: message, data: data });
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /university/addUniversity:
 * 
 *  post:
 *    summary: Add University
 * 
 *    tags:
 *      - university
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
 *            $ref: '#/components/schemas/universityaddUniversity'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addUniversity", Validator(Validations.University.addUniversity), addUniversity)


/**
 * @swagger
 * /university/getAllUniversity:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - university
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
router.get("/getAllUniversity", getAllUniversity)


/**
 * @swagger
 * /university/updateUniversity:
 * 
 *  put:
 *    summary: Update University
 * 
 *    tags:
 *      - university
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
 *            $ref: '#/components/schemas/universityupdateUniversity'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateUniversity",Validator(Validations.University.updateUniversity) ,updateUniversity)


/**
 * @swagger
 * /university/deleteUniversity:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - university
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
 *            $ref: '#/components/schemas/universitydeleteUniversity'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteUniversity",Validator(Validations.University.deleteUniversity),deleteUniversity)
module.exports = router

