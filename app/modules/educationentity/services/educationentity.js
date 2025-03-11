module.exports.addEducationEntity = async (body) => {
    try {
        let data = await dbHelper.create(Model.EducationEntity, body)
        if (!data) throw new Error(" Not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}
module.exports.getEducationEntity = async (query) => {
    console.log(query.EntityType)
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry = { isDeleted: false }
        let data = await dbHelper.find(Model.EducationEntity, qry, {}, { skip, limit })
        if (!data) throw new Error(MSG.ACCOUNT_NOT_FOUND);

        let total = await dbHelper.countDocuments(Model.EducationEntity, { isDeleted: false })


        if (query.EntityType === "Location") {
            data = data.filter(num => num.entityType === "Location")
        }
        else if (query.EntityType === "Institution") {
            data = data.filter(num => num.entityType === "Institution")
        }
        else if (query.EntityType === "Grade") {
            data = data.filter(num => num.entityType === "Grade")
        }
        else if (query.EntityType === "Qualification") {
            data = data.filter(num => num.entityType === "Qualification")
        }

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "getLocations"
        };

    } catch (err) {
        throw err
    }

}
module.exports.updateEducationEntity = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.EducationEntity, {
            _id: body.educationEntityId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error(" not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteEducationEntity = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.EducationEntity, { _id: body.educationEntityId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}