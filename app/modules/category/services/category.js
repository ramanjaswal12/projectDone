
module.exports.category = async (body) => {
    try {

        let result = await dbHelper.create(Model.category, body)
        if (!result) throw new Error("category not found");
        return { data: result, message: "create successfully" };
    } catch (err) {
        throw err
    }
}

module.exports.getAllCategory = async (query) => {
    try {

        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry = { isDeleted: false }
        let data = await dbHelper.find(Model.category, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.category, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "All SubCategories successfully"
        };


        // let data = await Model.category.find({ isDeleted: false });
        // return { data: data, message: "getAllcategories" };
    } catch (err) {
        throw err
    }
}
module.exports.updateCategory = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.category, { _id: body.categoryId, isDeleted: false },
            body, { new: true })
        if (!data) throw new Error("category not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}

module.exports.deleteCategory = async (body) => {

    try {
        let data = await dbHelper.findOneAndUpdate(Model.category, { _id: body.categoryId, isDeleted: false }, { isDeleted: true }, { new: true })
        if (!data) throw new Error("category not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}

module.exports.categoryBYSubCategory = async (paramsId) => {

    paramsId = new Mongoose.Types.ObjectId(paramsId)
    try {

        const user = await Model.category.aggregate([
            {
                $match: { isDeleted: false, _id: paramsId }
            },

            {
                $lookup: {
                    from: "subcategories",
                    let: { userId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$categoryId", "$$userId"]
                                }
                            }
                        },
                    ],
                    as: "subcategories Details"
                }
            },
        ]);
        if (!user) throw new Error("category not found");
        return { data: user, message: "delete successfully" };
    }
    catch (err) {
        throw err
    }
}
