const UserModel = require('../models/user');
const userOperations = {
    async register(userObject) {
        const result = await UserModel.create(userObject);
        //console.log('Result is ',result);
        return result._id;
    },
    async login({ userid, password }) {
        const result = await UserModel.findOne({ "userid": userid, "password": password });
        console.log('Login Result is ', result);
        return result;
    },
    async setHighScore({ currScore, userid }) {
        const result = await UserModel.findOne({ "userid": userid });

        if (result.highscore < currScore) {
            await UserModel.updateOne({ "userid": userid }, { $set: { "highscore": currScore } });
        }
        return result;
    },
    async getHighScore({ userid }) {
        const result = await UserModel.findOne({ "userid": userid });
        return result;
    }
}
module.exports = userOperations;