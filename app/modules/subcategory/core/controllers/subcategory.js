const express = require('express');
const router = express.Router();

const subCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.subcategory.subCategory(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getAllSubCategory = async (req, res, next) => {
    try {

        const { data, message } = await Services.subcategory.getAllSubCategory(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

const updateSubCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.subcategory.updateSubCategory(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteSubCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.subcategory.deleteSubCategory(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}

/**
 * @swagger
 * /subcategory/subCategory:
 * 
 *  post:
 *    summary: Add Subcategory
 * 
 *    tags:
 *      - subcategory
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
 *            $ref: '#/components/schemas/subcategorysubCategory'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/subCategory", Validator(Validations.Subcategory.subCategory), subCategory)

/**
 * @swagger
 * /subcategory/getAllSubCategory:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - subcategory
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
router.get("/getAllSubcategory", getAllSubCategory)

/**
 * @swagger
 * /subcategory/updateSubCateGory:
 * 
 *  put:
 *    summary: Update Subcategory
 * 
 *    tags:
 *      - subcategory
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
 *            $ref: '#/components/schemas/subcategoryupdateSubCategory'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateSubCateGory", Validator(Validations.Subcategory.updateSubCategory), updateSubCategory)


/**
 * @swagger
 * /subcategory/deleteSubCategory:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - subcategory
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
 *            $ref: '#/components/schemas/subcategorydeleteSubCategory'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteSubCategory", Validator(Validations.Subcategory.deleteSubCategory), deleteSubCategory)

module.exports = router;