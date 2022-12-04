const Certificates = require("../../models/certificates.model");

exports.patchCertificates = async (req, res) => {
  const certificates = await Certificates.find().exec();
  if (!certificates) {
    res.status(404).send("certificates not found").end();
  } else {
    await Certificates.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("certificates updated successfully");
  }
};
