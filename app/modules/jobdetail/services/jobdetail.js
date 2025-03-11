module.exports.addJobDetail = async (body) => {
    try {
        let data = await dbHelper.create(Model.JobDetails, body)
        if (!data) throw new Error(" not found");
        return { data: data, message: "create successfully" };
    } catch (err) {
        throw err
    }
}
module.exports.getJobDetail = async (query) => {

    try {
        let { page, limit, search } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let data = await Model.JobDetails.list({ search }, skip, limit)
        if (!data) throw new Error(" not found");
        return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}
module.exports.updateJobDetail = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.JobDetails, {
            _id: body.jobDetailId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("Institutions not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteJobDetail = async (body) => {
    try {
        let data = await dbHelper.findOneAndUpdate(Model.JobDetails, { _id: body.jobDetailId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}