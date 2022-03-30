import CustomErroHandler from "../services/CustomErrorHandler";
import JwtService from "../services/JwtService";

const auth = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header)
      return next(CustomErroHandler.errorHanlder(400, "unAutherization"));

    const token = header.split(" ")[1];
    const { id } = JwtService.verifyToken(token);
    const user = {
      id,
    };
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }
};

export default auth;
