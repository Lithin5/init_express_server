const { createUserModel, validateLogin } = require("../models/user.model");

const createUser = async (req, res) => {
    try {
        const { success, err, user } = await createUserModel(req.body);

        if (!success) {
            throw err;
        }

        res.send({ success, user });
    } catch (err) {
        res.status(500).send(err);
    }
};

const loginUser = async (req, res) => {
    try {
        const { success, err, user, token } = await validateLogin(req.body);                

        if (!success) {
            throw err;
        }

        res.send({ success, user, token });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createUser,
    loginUser
};
