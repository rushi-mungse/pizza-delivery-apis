import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

class JwtService {
  static signToken(payload, secret = JWT_SECRET, expiry = "60s") {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
}

export default JwtService;
