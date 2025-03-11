const constants = require("../../config/constants");
const Schema = new Mongoose.Schema({
    jobName: {
        type: String
    },
    requiredQualifications: {
        type: Number, enum: Object.values(constants.REQUIRED_QUALIFICATIONS),
        default: constants.REQUIRED_QUALIFICATIONS.MBA
    },
    location: {
        type: String
    },
    insight: [{
        location: {
            type: String,
        },
        jobDemand: {
            type: Number, enum: Object.values(constants.JOB_DEMAND),
            default: constants.JOB_DEMAND.MEDIUM
        }
    }],
    averageSalary: {
        type: Number

    },
    salaryRange: [{
        min: { type: Number, },
        max: { type: Number, }
    }],
    jobDescription: {
        type: String
    },
    requirements: {
        type: String
    },
    isBlocked: { type: Boolean, default: false, index: true },
    isDeleted: { type: Boolean, default: false, index: true },
},
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
module.exports = Mongoose.model('jobdetails', Schema);


module.exports.list = (filter, skip, limit) => {
    const pipeline = [];
    const addFields = {};

    const qry = {
        isDeleted: false,
    };



    // Add search criteria
    if (filter?.search) {
        const trimmedSearch = filter.search.trim();
        const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const safeSearch = escapeRegex(trimmedSearch);
        const searchRegex = { $regex: safeSearch, $options: 'i' };
        qry.$or = [
            { location: searchRegex },
            { requiredQualifications: searchRegex },
            { jobName: searchRegex },
        ];
    }

    pipeline.push(
        { $match: qry },
        { $sort: { createdAt: -1 } }
    );

    pipeline.push(
        {
            $project: {

                isBlocked: 0,
                isDeleted: 0
            }
        }
    );

    if (skip !== undefined && limit !== undefined) {
        pipeline.push(...Func.pagination(skip, limit));
    }

    return dbHelper.aggregate(Model.JobDetails, pipeline).then(res => {
        if (skip !== undefined && limit !== undefined) {
            return res[0]
        }
        return res;
    });
};