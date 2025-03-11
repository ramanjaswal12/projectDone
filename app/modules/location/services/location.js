module.exports.addLocations = async (body) => {
    try {
        let data = await dbHelper.create(Model.location, body)
        if (!data) throw new Error("Locations not found");
        return { data: data, message: "create successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getLocations = async (query) => {
    try {

        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.location, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.location, { isDeleted: false })

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
module.exports.updateLocations = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.location, {
            _id: body.locationId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("locations not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteLocations = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.location, { _id: body.locationId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}