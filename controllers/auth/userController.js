import { User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";

class UserController {
  async me(req, res, next) {
    try {
      const user = await User.findOne({ _id: req.user.id }).select(
        "-password -updatedAt -__v"
      );
      if (!user) {
        return next(CustomErrorHandler.errorHanlder(400, "unAutherized"));
      }
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
