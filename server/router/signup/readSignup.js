const router = require("express").Router();
const FacebookModel = require("../../schema/signUp");

// read login
let user = {};
router.route("/readLog").post(async (req, res) => {
  FacebookModel.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "მომხმარებელი არ არსებობს", success: false });
      console.log(result);
    } else if (result.password == req.body.password) {
      user = result;
      res.json({ user: result, success: true });
    } else {
      res.json({ message: "პაროლი არასწორია", success: false });
    }
  });
});

module.exports = router;
