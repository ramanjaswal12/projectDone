const express = require('express');
const router = express.Router();


const category = async (req, res, next) => {
    try {
        const { data, message } = await Services.category.category(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const getAllCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.category.getAllCategory(req.query)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const updateCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.category.updateCategory(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const deleteCategory = async (req, res, next) => {
    try {
        const { data, message } = await Services.category.deleteCategory(req.body)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}
const categoryBYSubCategory = async (req, res, next) => {
    try {


        const { data, message } = await Services.category.categoryBYSubCategory(req.params.id)
        return res.success({ data: data, message: message })
    }
    catch (err) {
        next(err)
    }
}



/**
 * @swagger
 * /category/category:
 * 
 *  post:
 *    summary: Add Category
 * 
 *    tags:
 *      - category
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
 *            $ref: '#/components/schemas/categorycategory'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.post("/category", Validator(Validations.Category.category), category)

/**
 * @swagger
 * /category/getAllCategory:
 * 
 *  get:
 *    summary: Get profile
 * 
 *    tags:
 *      - category
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
router.get("/getAllCategory", getAllCategory)

/**
 * @swagger
 * /category/updateCategory:
 * 
 *  put:
 *    summary: Update Category
 * 
 *    tags:
 *      - category
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
 *            $ref: '#/components/schemas/categoryupdateCategory'
 * 
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.put("/updateCateGory", Validator(Validations.Category.updateCategory), updateCategory)


/**
 * @swagger
 * /category/deleteCategory:
 * 
 *  delete:
 *    summary: Delete Account
 * 
 *    tags:
 *      - category
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
 *            $ref: '#/components/schemas/categorydeleteCategory'
 *     
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 */
router.delete("/deleteCategory", Validator(Validations.Category.deleteCategory), deleteCategory)
router.get("/categoryBYSubCategory/:id", categoryBYSubCategory)
module.exports = router;