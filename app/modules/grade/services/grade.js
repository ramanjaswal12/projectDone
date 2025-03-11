module.exports.addGrade = async (body) => {
    try {
        let data = await dbHelper.create(Model.grade, body)
        if (!data) throw new Error("subcategory not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getGradeDetails = async (query) => {
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.grade, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.grade, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "get grades"
        };


    } catch (err) {
        throw err
    }
}
module.exports.updateGrade = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.grade, {
            _id: body.gradeId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("qualification not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteGrade = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.grade, { _id: body.gradeId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}