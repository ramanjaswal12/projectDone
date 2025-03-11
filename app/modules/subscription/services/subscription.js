module.exports.createSubscription = async (body) => {

    try {
        
        let data = await dbHelper.create(Model.Subscription, body)
        if (!data) throw new Error(" subscription not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}

module.exports.getSubscription = async (query) => {
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.Subscription, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.Subscription, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "All subscriptions successfully"
        };

    } catch (err) {
        throw err
    }
}

module.exports.updateSubscription = async (body) => {
    try {
        let qry = { isDeleted: false, _id: body.subscriptionId }
        let data = await dbHelper.findOneAndUpdate(Model.Subscription, qry, body, { new: true })
        if (!data) throw new Error("something error");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}

module.exports.deleteSubscription = async (body) => {
    let qry = { isDeleted: false, _id: body.subscriptionId }
    let data = await dbHelper.findOneAndUpdate(Model.Subscription, qry, {  isDeleted: true}, { new: true })
    if (!data) throw new Error("something error");
    return { data: data, message: "update successfully" };
}