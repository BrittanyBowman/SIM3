const bcrypt = require("bcrypt");

module.exports = {
  login: (req, res) => {
    let { username, password } = req.body;

    req.app
      .get("db")
      .find_user([username, password])
      .then(() => {
        res.status(200).send("Success");
      })
      .catch(err => {
        res.status(500).send(err);
        console.log("Login Fail");
      });
  },
  register: (req, res) => {
    let { username, password } = req.body;
    req.app
      .get("db")
      .create_user([username, password])
      .then(() => {
        res.status(200).send("Success");
      })
      .catch(err => {
        res.status(500).send(err);
        console.log("Register Fail");
      });
  }
};
