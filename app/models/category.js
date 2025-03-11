const Schema = new Mongoose.Schema({
    picture: { type: String },
    categoryName: { type: String },
    isDeleted: { type: Boolean, default: false, index: true },
    isActive: { type: Boolean, default: true, index: true },

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

module.exports = Mongoose.model('category', Schema);