const Schema = new Mongoose.Schema({
    picture: { type: String },
    subCategoryName: { type: String },
    categoryId: { type: Mongoose.Schema.Types.ObjectId, ref: "category", required: true },
    isDeleted: { type: Boolean, default: false, index: true },
    isActive: { type: Boolean, default: true, index: true },

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

module.exports = Mongoose.model('subcategory', Schema);
