const Gender = mongoose.model('Gender', genderSchema);
const Language = mongoose.model('Language', languageSchema);
const Attachment = mongoose.model('Attachment', attachmentSchema);

// Gender Schema
const genderSchema = new Schema({
  name: { type: String, required: true }
});

// Language Schema
const languageSchema = new Schema({
  name: { type: String, required: true }
});

// Attachment Schema
const attachmentSchema = new Schema({
  file_path: { type: String, required: true },
  file_name: { type: String, required: true },
  file_type: { type: String, required: true }
});

module.exports = {
    Gender: model('Gender', genderSchema),
    Language: model('Language', languageSchema),
    Attachment: model('Attachment', attachmentSchema)
  };