const Schema = new Mongoose.Schema({
    grade: { type: String },
    isDeleted: { type: Boolean, default: false, index: true },
},
 { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

module.exports = Mongoose.model('grade', Schema);