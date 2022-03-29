import Joi from "joi";
import { User } from "../../models";
import CustomErroHandler from "../../services/CustomErrorHandler";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";

class RegisterController {
  async registerUser(req, res, next) {
    const { name, email, password, repeatpassword } = req.body;

    const registerSchema = Joi.object({
      name: Joi.string().min(5).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
      repeatPassword: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) return next(error);

    let accessToken;
    try {
      const exist = await User.findOne({ email });
      if (exist) {
        return next(
          CustomErroHandler.alreadyExist("This email is already taken.")
        );
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashPassword,
      });

      const result = await user.save();
      accessToken = JwtService.signToken({ id: result._id });

      return res.status(200).json({ accessToken });
    } catch (error) {
      return next(error);
    }
  }
}

export default new RegisterController();
