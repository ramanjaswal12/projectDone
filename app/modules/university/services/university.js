module.exports.addUniversity=async(body)=>{
    try {
        let data = await dbHelper.create(Model.University, body)
        if (!data) throw new Error("  not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}

module.exports.getAllUniversity = async (query) => {
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.University, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.University, { isDeleted: false })
        let result = {
            records: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "All subscriptions successfully"
        };

    } catch (err) {
        throw err
    }
}

module.exports.updateUniversity=async(body)=>{

    let data = await dbHelper.findOneAndUpdate(Model.University, {
        _id: body.universityId, isDeleted: false
    }, body, { new: true })
    if (!data) throw new Error(" not found");
    return { data: data, message: "update successfully" };

}

module.exports.deleteUniversity = async (body) => {
    let qry = { isDeleted: false, _id: body.universityId }
    let data = await dbHelper.findOneAndUpdate(Model.University, qry, {  isDeleted: true}, { new: true })
    if (!data) throw new Error("something error");
    return { data: data, message: "update successfully" };
}