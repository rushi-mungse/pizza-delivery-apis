import Joi from "joi";
import { User } from "../../models";
import CustomErroHandler from "../../services/CustomErrorHandler";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
import { JWT_REFRESH_SECRET } from "../../config";

class LoginController {
  async loginUser(req, res, next) {
    const { email, password } = req.body;

    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) return next(error);

    try {
      const user = await User.findOne({ email });
      if (!user)
        return next(
          CustomErroHandler.wrongAuthentication("Username or Password wrong.")
        );

      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return next(
          CustomErroHandler.wrongAuthentication("Username or Password wrong.")
        );
      const accessToken = JwtService.signToken({ id: user._id });
      const refreshToken = JwtService.signToken(
        { id: user._id },
        JWT_REFRESH_SECRET,
        "1y"
      );

      return res.json({ accessToken, refreshToken });
    } catch (error) {
      return next(error);
    }
  }
}

export default new LoginController();
