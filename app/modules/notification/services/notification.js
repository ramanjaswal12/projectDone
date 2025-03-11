module.exports.addNotification = async (body) => {

    try {
        let data = await dbHelper.create(Model.Notification, body)
        if (!data) throw new Error(" cms not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}
module.exports.getNotification = async (query) => {
    try {

        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.Notification, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.Notification, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "get Notification"
        };


        // let data = await Model.Notification.find({ isDeleted: false });
        // return { data: data, message: "get all Cms" };
    } catch (err) {
        throw err
    }

}
module.exports.updateNotification = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.Notification, {
            _id: body.notificationId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("cms not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteNotification = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.Notification, { _id: body.notificationId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}