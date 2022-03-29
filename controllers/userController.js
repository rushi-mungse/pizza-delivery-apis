class UserController {
  getUserInfo(req, res, next) {
    const { name, email, passward } = req.body;
    res.json({ userInfo: req.body });
  }
}

export default new UserController();
