const Schema = new Mongoose.Schema({
    entityType: {
        type: String, enum: Object.values(constants.ENTITY_TYPE),
        default: constants.ENTITY_TYPE.GRADE
    },
    name: {
        type: String
    },
    isDeleted: { type: Boolean, default: false, index: true },
},
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
module.exports = Mongoose.model('educationentity', Schema);