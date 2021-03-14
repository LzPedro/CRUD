const mongoose_i = require('mongoose');
const Schema = mongoose_i.Schema;

const letter = new Schema(
    {
        from: { type: String, default: null },
        to: { type: String, default: null },
        body: { type: String, default: null }
    },
    { timestamps: true } /* Com esse campo, o mongoose é capaz de gerenciar os campos 'createdAt' e 'updatedAt' */
)

module.exports = mongoose_i.model('Letter', letter);