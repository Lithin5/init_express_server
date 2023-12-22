const { createBookModel } = require("../models/book.model");

const createBook = async (req, res) => {
    try {
        const { success, err, book } = await createBookModel(req.body);

        if (!success) {
            throw err;
        }

        res.send({ success, book });        
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createBook,
};
