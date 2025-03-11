const express = require('express');
const router = express.Router();

const addJobDetail = async (req, res, next) => {

    try {
        const { data, message } = await Services.jobdetail.addJobDetail(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getJobDetail = async (req, res, next) => {
    try {

        const { data, message } = await Services.jobdetail.getJobDetail(req.query)
        
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateJobDetail = async (req, res, next) => {
    try {
        const { data, message } = await Services.jobdetail.updateJobDetail(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteJobDetail = async (req, res, next) => {
    try {
        const { data, message } = await Services.jobdetail.deleteJobDetail(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /jobdetail/addJobDetail:
 * 
 *  post:
 *    summary: Add JOB Details
 * 
 *    tags:
 *      - jobdetail
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
 *            $ref: '#/components/schemas/jobdetailaddJobDetail'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addJobDetail",Validator(Validations.jobdetail.addJobDetail), addJobDetail)

/**
 * @swagger
 * /jobdetail/getJobDetail:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - jobdetail
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
router.get("/getJobDetail", getJobDetail)

/**
 * @swagger
 * /jobdetail/updateJobDetail:
 * 
 *  put:
 *    summary: Update Job Detail
 * 
 *    tags:
 *      - jobdetail
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
 *            $ref: '#/components/schemas/jobdetailupdateJobDetail'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateJobDetail", Validator(Validations.jobdetail.updateJobDetail), updateJobDetail)

/**
 * @swagger
 * /jobdetail/deleteJobDetail:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - jobdetail
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
 *            $ref: '#/components/schemas/jobdetaildeleteJobDetail'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteJobDetail",Validator(Validations.jobdetail.deleteJobDetail),  deleteJobDetail)

module.exports = router;

// Validator(Validations.Institution.addJobDetail),
// Validator(Validations.Institution.updateJobDetail),
// Validator(Validations.Institution.deleteJobDetail),