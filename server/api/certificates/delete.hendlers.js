const Certificates = require("../../models/certificates.model");

exports.deleteCertificatesById = async (req, res) => {
  const certificates = await Certificates.find().exec();
  if (!certificates) {
    res.status(404).send(`education not found`).end();
  } else {
    await Certificates.findByIdAndDelete(req.params.id).exec();
    res.send(`Education with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteCertificates = async (req, res) => {
  const certificates = await Certificates.find().exec();
  if (!certificates) {
    res.status(404).send(`education not found`).end();
  } else {
    const lastCertificate = certificates.slice(-1);
    await Certificates.findByIdAndDelete(
      lastCertificate.length ? lastCertificate[0]._id : null
    ).exec();
    res
      .send(
        lastCertificate.length
          ? "Last certificate deleted successfully"
          : "no certificate found"
      )
      .end();
  }
};
