
const Schema = new Mongoose.Schema({
    subscriptionName: { type: String },
    subscriptionType: { type: String, enum: Object.values(constants.SUBSCRIPTION_TYPE), default: constants.SUBSCRIPTION_TYPE.MONTHLY },
    subscriptionPrice: { type: String },
    isDeleted: { type: Boolean, default: false, index: true },
}, { timestamps: true });

module.exports = Mongoose.model('subscription', Schema);