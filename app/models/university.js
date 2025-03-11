
const Schema = new Mongoose.Schema({
    universityImage: { type: String },
    universityName: { type: String },
    universityEmail: { type: String },
    phoneNumber: { type: String },
    countryCode: { type: String },
    universityAddress: { type: String },
    city: { type: String },
    universityCountry: { type: String },
    affiliation: { type: String },
    universityRankings: { type: String },
    description: { type: String },
    overView: { type: String },
    campusImage: { type: String },
    campusVideo: { type: String },
    campusBrochure: { type: String },
    status: { type: Boolean, default: false, index: true },
    isDeleted: { type: Boolean, default: false, index: true },
}, { timestamps: true });

module.exports = Mongoose.model('university', Schema);