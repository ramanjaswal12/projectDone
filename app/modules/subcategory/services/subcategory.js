module.exports.subCategory = async (body) => {
    try {
        let result = await dbHelper.create(Model.subcategory, body)
        if (!result) throw new Error("subcategory not found");
        return { data: result, message: "create successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getAllSubCategory = async (query) => {

    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry = { isDeleted: false }
        let data = await dbHelper.find(Model.subcategory, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.subcategory, { isDeleted: false })

        let result = Object.assign({}, {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        })
        return {
            data: result, message: "All SubCategories successfully"
        };


        // let qry = { isDeleted: false };
        // if (categoryId) qry.categoryId = ObjectId(categoryId)

        // let data = await Model.subcategory.find(qry);
        // return { data: data, message: "getAllSubCategories" };
    } catch (err) {
        throw err
    }
}
module.exports.updateSubCategory = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.subcategory, {
            _id: body.subCategoryId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("subcategory not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteSubCategory = async (body) => {

    try {
        let data = await dbHelper.findOneAndUpdate(Model.subcategory, { _id: body.subCategoryId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("subcategory not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}