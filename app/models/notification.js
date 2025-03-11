
const Schema = new Mongoose.Schema({
    title: { type: String },
    sendTo: { type: Mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    notificationType: {
        type: String, enum: Object.values(constants.NOTIFICATION_TYPE),
        default: constants.NOTIFICATION_TYPE.SMS
    },
    message: { type: String },
    isDeleted: { type: Boolean, default: false, index: true },
}, { timestamps: true });

module.exports = Mongoose.model('notification', Schema);
