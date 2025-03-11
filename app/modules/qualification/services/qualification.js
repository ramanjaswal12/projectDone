module.exports.addQualification = async (body) => {

    try {
        let data = await dbHelper.create(Model.qualification, body)
        if (!data) throw new Error("subcategory not found");
        return { data: data, message: "created successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getQualificationDetails = async (query) => {
    try {

        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.qualification, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.qualification, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "getAllqualification"
        };

    } catch (err) {
        throw err
    }
}
module.exports.updateQualification = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.qualification, {
            _id: body.qualificationId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("qualification not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteQualification = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.qualification, { _id: body.qualificationId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}