import jwt from "jsonwebtoken";
import { UNAUTHORIZED } from "../constants/httpStatus.js";

export default (req, res, next) => {
  const token = req.headers.access_token;
  if (!token) {
    return res.status(UNAUTHORIZED).send();
  }

  try {
    const decoded = jwt.verify(token, "SomeRandomText");
    req.user = decoded;
  } catch (error) {
    res.status(UNAUTHORIZED).send();
  }

  return next();
};
