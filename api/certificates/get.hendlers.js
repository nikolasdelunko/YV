const Certificates = require("../../models/certificates.model");

exports.getCertificatesById = async (req, res) => {
  const certificates = await Certificates.findById(req.params.id).exec();

  if (!certificates) {
    res.status(404).send(`certificates not found`).end();
  }

  res.send(certificates).end();
};

exports.getCertificates = async (req, res) => {
  const certificates = await Certificates.find().exec();

  if (!certificates) {
    res.status(404).send(`certificates not found`).end();
  }

  res.send(certificates).end();
};
