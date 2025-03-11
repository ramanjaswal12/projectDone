module.exports.addInstitutions = async (body) => {
    try {
        let data = await dbHelper.create(Model.institution, body)
        if (!data) throw new Error("subcategory not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getInstitutionsDetails = async (query) => {
    
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry = {  }
        let data = await dbHelper.find(Model.institution, qry, {}, { skip, limit })
       
        let total = await dbHelper.countDocuments(Model.institution, qry)

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "get institutions"
        };

    } catch (err) {
        throw err
    }
}
module.exports.updateInstitutions = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.institution, {
            _id: body.institutionId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("Institutions not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteInstitutions = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.institution, { _id: body.institutionId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}