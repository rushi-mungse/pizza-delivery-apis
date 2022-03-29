import Joi from "joi";
import { User } from "../../models";
import CustomErroHandler from "../../services/CustomErrorHandler";
import bcrypt from "bcrypt";

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

    try {
      const exist = await User.findOne({ email });
      if (exist) {
        return next(
          CustomErroHandler.alreadyExist("This email is already taken.")
        );
      }

      const hashPassword = await bcrypt.hash(password, 10);

      try {
        const user = new User({
          name,
          email,
          password: hashPassword,
        });
        const result = await user.save();
      } catch (error) {
        return next(error);
      }
    } catch (error) {
      return next(error);
    }

    res.json({ msg: req.body });
  }
}

export default new RegisterController();
