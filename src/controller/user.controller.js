const db = require('../models');
const User = db.user;

async function registerUser(req, res) {
  if (!req.body.name || !req.body.password || !req.body.email || !req.body.phone) {
    return res.status(400).send("Please enter all the details");
  }
  const user = {
    name: req.body.name,
    password: Buffer.from(req.body.password).toString('base64'),
    email: req.body.email,
    phone: req.body.phone,
  };
  User.create(user)
    .then(data => {
      res.send("Signed up successfully");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
}
module.exports = {
  registerUser
};