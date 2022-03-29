class UserController {
  getUserInfo(req, res, next) {
    res.json({ msg: "all ok" });
  }
}

module.exports = new UserController();
