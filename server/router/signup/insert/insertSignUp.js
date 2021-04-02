const router = require("express").Router();
const FacebookModel = require("../../../schema/signUp");

// save information (db)
router.route("/insertSign").post(async (req, res) => {
  const username = req.body.username;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const facebook = new FacebookModel({
    username: username,
    lastname: lastname,
    email: email,
    password: password,
  });
  try {
    await facebook.save();
    res.send("done");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
