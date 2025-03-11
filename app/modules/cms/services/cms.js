module.exports.addCms = async (body) => {
    try {
        let data = await dbHelper.create(Model.Cms, body)
        if (!data) throw new Error(" cms not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}
module.exports.getCms = async () => {
    try {
        let data = await Model.Cms.find({ isDeleted: false });
        return { data: data, message: "get all Cms" };
    } catch (err) {
        throw err
    }

}
module.exports.updateCms = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.Cms, {
            _id: body.cmsId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("cms not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteCms = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.Cms, { _id: body.cmsId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}