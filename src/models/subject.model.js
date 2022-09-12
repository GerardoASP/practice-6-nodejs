const mongoose = require('mongoose');
const subjectSchema = mongoose.Schema({
    subject_name:{type: String, require: true},
    subject_code:{type: String, require: true, unique: true},
    amount_credits:{type: Number, require: true},
    amount_hours:{type: Number, require: true}
});

module.exports = mongoose.model('SubjectCollection', subjectSchema);