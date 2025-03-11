
/**
 * Function to send otp
 * @param {*} body
 * @returns 
 */

module.exports.sendOtp = async (body) => {
    try {
        const qry = { isDeleted: false }
        if (body.email) { qry.email = body.email, qry.isEmailverified = true }
        else if (body.phone) { qry.phone = body.phone, qry.isPhoneVerified = true, qry.countryCode = body.countryCode }
        let role;
        if (isUserPortal) role = constants.ROLE.USER
        const user = await Model.User.findOne(qry)
        console.log('user: ', user);

        if (user && [OTP_TYPE.SIGNUP].includes(Number(body.otpType))) {
            if (body.email) throw new Error(MSG.EMAIL_ALREADY_IN_uSE)
        }
        const otp = new Model.Otp(body)
        await otp.save()
        return { message: MSG.OTP_SENT_SUCCESSFULLY }
    } catch (error) {

        throw error;
    }

}
/**
 * Function to verify otp
 * @param {*} body
 * @returns 
 */
module.exports.verifyOtp = async (body) => {
    console.log('body: ', body);
    try {
        let otp, user, role;
        const qry = { isDeleted: false }
        body.otpType = Number(body.otpType);
        console.log('body.otpType: ', body.otpType);

        if (body.email) {
            body.isEmailVerified = true;
            qry.isEmailVerified = true;
            qry.email = body.email;
            otp = await Services.Otp.verifyEmailCode(body.email, body.code, body.otpType);
        }
        else if (body.phone) {
            body.isPhoneVerified = true, qry.isPhoneVerified = true, qry.phone = body.phone, qry.countryCode = body.countryCode;
            otp = await Services.Otp.verifyPhoneOtp(body.countryCode, body.phone, body.code, body.otpType)
        }
        else {
            throw new Error(MSG.INVALID_INPUT)
        }
        if (!otp) throw new Error(MSG.INVALID_OTP)

        if (isUserPortal) role = constants.ROLE.USER
        user = await Model.User.findOne(qry)
        console.log('user: ', user);

        if (body.otpType == constants.OTP_TYPE.SIGNUP) {
            if (user && body.email) throw new Error(MSG.EMAIL_ALREADY_IN_USE);
            else if (user && body.phone) throw new Error(MSG.PHONE_ALREADY_IN_USE);
            qry.role = body.role

            if (body.password) qry.password = body.password
            let userData = {
                ...qry,
                isEmailVerified: body.isEmailVerified,
                isPhoneVerified: body.isPhoneVerified
            }
            user = await dbHelper.create(Model.User, userData)
        }
        else { throw new Error(MSG.INVALID_INPUT); }
        await dbHelper.deleteMany(Model.Sessions, { userId: user._id })
        let sessionData = {
            deviceType: body.deviceType, deviceToken: body.deviceToken, jti: Func.generateRandomStringAndNumbers(20), userId: user._id
        }
        let session = await dbHelper.create(Model.Sessions, sessionData)
        const result = {
            ...user.toObject(),
            token: Auth.getToken({ _id: session._id, jti: session.jti, isForget: body.otpType == constants.OTP_TYPE.FORGET }),
            tokenType: "Bearer",
            password: undefined
        }
        return { data: result, message: MSG.OTP_VERIFIED };
    }
    catch (error) {
        console.log('error: ', error);
        throw error;
    }
};
/**
 * Function to log In
 * @param {*} body 
 * @returns
 */
module.exports.logIn = async (body) => {

    try {
        if (isUserPortal) { body.role = constants.ROLE.USER }
        const user = await dbHelper.findOne(Model.User, { email: body.email, isEmailVerified: true, isDeleted: false, role: body.role })

        if (!user) throw new Error(MSG.ACCOUNT_NOT_FOUND)
        if (!user.password) throw new Error(MSG.PASSWORD_NOT_SET);
        const isMatch = await user.comparePassword(body.password)
        if (!isMatch) throw new Error(MSG.INVALID_CREDENTIALS);
        if (user.isBlocked) throw new Error(MSG.ACCOUNT_BLOCKED);

        await dbHelper.deleteMany(Model.Sessions, { userId: user._id })
        let sessionData = {
            deviceType: body.deviceType,
            deviceToken: body.deviceToken,
            jti: Func.generateRandomStringAndNumbers(20),
            userId: user._id
        }
        let session = await dbHelper.create(Model.Sessions, sessionData)
        const result = {
            ...user.toObject(),
            token: Auth.getToken({ _id: session._id, jti: session.jti }),
            tokenType: "Bearer",
            password: undefined,
            password: undefined
        }
        return { data: result, message: MSG.LOGIN_SUCCESS }
    }
    catch (err) {
        console.log('err: ', err);
        throw err
    }
}

/**
 * Function to get profile
 * @param {*} user
 * @returns 
 */
module.exports.changePassword = async (user, body) => {
    try {
        const userExist = await dbHelper.findOne(Model.User, { _id: user._id }, { password: 1, isEmailVerified: 1, isBlocked: 1 })
        if (!userExist) throw new Error(MSG.ACCOUNT_NOT_FOUND);
        if (!userExist.isEmailVerified) throw new Error(MSG.EMAIL_NOT_VERIFIED)
        if (userExist.isBlocked) throw new Error(MSG.ACCOUNT_BLOCKED)

        if (!body.resetPassword) {
            if (!userExist.password) throw new Error(MSG.PASSWORD_NOT_SET);
            const isMatch = await userExist.comparePassword(body.oldPassword)
            if (!isMatch) throw new Error(MSG.OLD_PASS_NOT_MATCH);
        }
        const isOldSame = await userExist.comparePassword(body.newPassword)
        if (isOldSame) throw new Error(MSG.PASSWORDS_SHOULD_BE_DIFFERENT);

        userExist.password = body.newPassword;
        await userExist.save();

        return { message: MSG.PASSWORD_CHANGED_SUCCESSFULLY };

    }
    catch (err) {
        console.log('err: ', err);
        throw err
    }
}

/**
 * Function to get profile
 * @param {*} user
 * @returns 
 */
module.exports.getProfile = async (user) => {
    try {

        let result = Object.assign({}, user)
        result.password = undefined;
        return { data: result, message: MSG.DATA_FETCHED }
    }
    catch (error) {
        throw error;
    }

}

module.exports.logout = async (user) => {
    try {
        await Model.Sessions.deleteOne({ userId: user._id })
        return { message: MSG.LOGOUT_SUCCESS }

    }
    catch (err) {
        throw (err)
    }
}

module.exports.updateProfile = async (body, user,) => {
    try {
        if (body.email) {
            let emailExist = await dbHelper.findOne(Model.User, { _id: { $ne: user._id }, email: body.email, isEmailVerified: true, isDeleted: false })
            if (emailExist) { throw new Error(MSG.EMAIL_ALREADY_IN_USE) }
        }
        if (body.phone) {
            let isPhoneExist = await dbHelper.findOne(Model.User, { _id: { $ne: user._id }, phone: body.phone, isPhoneVerified: true, isDeleted: false })
            if (isPhoneExist) { throw new Error(MSG.PHONE_ALREADY_IN_USE) }
        }
        if (body.secretPin) { body.secretPin = await Func.hashPasswordUsingBcrypt(body.secretPin); }

        let userExist = await dbHelper.findOneAndUpdate(Model.User, { _id: user._id, isDeleted: false }, body, { new: true })
        if (!userExist) throw new Error(MSG.ACCOUNT_NOT_FOUND);

        if (body.bankDetails) {
            let bankDetails = body.bankDetails
            bankDetails.userID = user._id
            await dbHelper.create(BankDetail, bankDetails)
        }
        return { data: userExist, message: MSG.PROFILE_UPDATED_SUCCESSFULLY };
    }
    catch (err) {
        throw (err)
    }
}

module.exports.sendOtpToUpdate = async (body, user) => {
    try {
        let qry = { isDeleted: false };
        if (body.email) { qry.email = body.email, qry.isEmailVerified = true }
        else if (body.phone) { qry.phone = body.phone, qry.countryCode = body.countryCode, qry.isPhoneVerified = true }

        qry.userId = { $ne: user._id };
        let userExist = await dbHelper.findOne(Model.User, qry);

        if (userExist && body.email) throw new Error(MSG.EMAIL_ALREADY_IN_USE);
        else if (userExist && body.phone) throw new Error(MSG.PHONE_ALREADY_IN_USE);

        body.userId = user._id
        const otp = new Model.Otp(body);
        await otp.save();
        return { message: MSG.OTP_SENT_SUCCESSFULLY };
    }
    catch (err) {
        throw (err)
    }
}

module.exports.verifyOtpToUpdate = async (body, user) => {

    try {
        let otp, qry = { isDeleted: false }
        if (body.email) {
            body.isEmailVerified = true
            qry.isEmailVerified = true;
            qry.email = body.email
            otp = await Services.Otp.verifyEmailCode(body.email, body.code, body.otpType);
        }
        else if (body.phone) {
            body.isPhoneVerified = true
            qry.phone = body.phone
            qry.isPhoneVerified = true
            otp = await Services.Otp.verifyPhoneOtp(body.countryCode, body.phone, body.code, body.otpType);

        }
        if (!otp) throw new Error(MSG.INVALID_OTP)
        const existingUser = await Model.User.findOne(qry);

        if (existingUser) {
            if (body.email) throw new Error(MSG.EMAIL_ALREADY_IN_USE);
            if (body.phone) throw new Error(MSG.PHONE_ALREADY_IN_USE);
        }

        let updatedUser = await Model.User.updateById(user._id, body)
        return { data: updatedUser, message: MSG.OTP_VERIFIED };

    }
    catch (err) {
        throw err
    }

}

module.exports.deleteAccount = async (user) => {
    console.log('user: ', user);
    let qry = { _id: user._id, isDeleted: false }
    let body = { isDeleted: true }
    const result = await dbHelper.findOneAndUpdate(Model.User, qry, body);
    if (!result) throw new Error(MSG.INVALID_ID);
    return { message: MSG.ACCOUNT_DELETED_SUCCESSFULLY };
}
module.exports.socialLogin = async (body) => {
    try {

        let user = await dbHelper.findOne(Model.User, { socialId: body.socialId, socialType: body.socialType, isDeleted: false })
        if (!user) {
            body.isSocialLogin = true
            if (body.email) {
                user = await dbHelper.findOne(Model.User, { email: body.email, isEmailVerified: true, isDeleted: false });
                if (!user) {
                    body.isEmailVerified = true;
                    user = await dbHelper.create(Model.User, body);
                } else {
                    user = await dbHelper.findOneAndUpdate(Model.User, { _id: user._id }, body);
                }
            }
            else {
                user = await dbHelper.create(Model.User, body);
            }
        }


        await dbHelper.deleteMany(Model.Sessions, { userId: user._id });
        let sessionData = {
            deviceType: body.deviceType,
            deviceToken: body.deviceToken,
            jti: Func.generateRandomStringAndNumbers(20),
            userId: user._id
        }
        let session = dbHelper.create(Model.Sessions, sessionData)
        const result = {
            ...user.toObject(),
            token: Auth.getToken({ _id: session._id, jti: session.jti }),
            tokenType: "Bearer",
            password: undefined
        };
        return { data: result, message: MSG.LOGIN_SUCCESS };
    }
    catch (err) {
        throw err
    }

}

