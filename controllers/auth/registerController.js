import Joi from "joi";

class RegisterController {
  async register(req, res, next) {
    const { name, email, passward, repeatPassward } = req.body;

    const registerSchema = Joi.object({
      name: Joi.string().min(5).max(30).required(),
      email: Joi.string().email().required(),
      passward: Joi.string().pattern(RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
      repeatPassward: Joi.ref("passward"),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) return next(error);

    res.json({ msg: req.body });
  }
}

export default new RegisterController();
