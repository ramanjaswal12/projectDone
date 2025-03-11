const express = require('express');
const router = express.Router();

const addLocations = async (req, res, next) => {

    try {
        const { data, message } = await Services.location.addLocations(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getLocations = async (req, res, next) => {
    try {
      
        const { data, message } = await Services.location.getLocations(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateLocations = async (req, res, next) => {
    try {
        const { data, message } = await Services.location.updateLocations(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteLocations = async (req, res, next) => {
    try {
        const { data, message } = await Services.location.deleteLocations(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}


/**
 * @swagger
 * /location/addLocations:
 * 
 *  post:
 *    summary: Add Locations
 * 
 *    tags:
 *      - location
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
 *            $ref: '#/components/schemas/locationaddLocations'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/addLocations",Validator(Validations.Location.addLocations),   addLocations)


/**
 * @swagger
 * /location/getLocations:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - location
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
router.get("/getLocations", getLocations)


/**
 * @swagger
 * /location/updateLocations:
 * 
 *  put:
 *    summary: Update Locations
 * 
 *    tags:
 *      - location
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
 *            $ref: '#/components/schemas/locationupdateLocations'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateLocations", Validator(Validations.Location.updateLocations),updateLocations)


/**
 * @swagger
 * /location/deleteLocations:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - location
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
 *            $ref: '#/components/schemas/locationdeleteLocations'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteLocations",Validator(Validations.Location.deleteLocations), deleteLocations)


module.exports= router