
const Schema = new Mongoose.Schema({
    email: { type: String },
    countryCode: { type: String },
    phone: { type: String },
    terms: { type: String },
    privacyPolicy: { type: String },
    aboutUs: { type: String },
    isDeleted: { type: Boolean, default: false, index: true },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

module.exports = Mongoose.model('cms', Schema);