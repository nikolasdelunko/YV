const Certificates = require("../../models/certificates.model");

exports.postCertificates = async (req, res) => {
  const certificates = await Certificates.find().exec();
  if (!certificates) {
    res.status(404).send(`Certificates not found`).end();
  }

  const requiredKeys = ["link", "title"];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  } else {
    keys.forEach((k) => {
      if (req.body[k] === null || req.body === undefined) {
        res.status(400).send(`key ${k} is required`).end();
      }
    });
    const certificate = new Certificates(
      [...keys].reduce((acc, el) => ({ ...acc, [el]: req.body[el] }), {})
    );
    await certificate.save();
    res.send(`certificate name: ${certificate.title} created!`).end();
  }
};
