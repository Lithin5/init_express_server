const { createUserModel } = require("../models/user.model");

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
        const { success, err, user } = await createUserModel(req.body);

        if (!success) {
            throw err;
        }

        res.send({ success, user });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createUser
};
 