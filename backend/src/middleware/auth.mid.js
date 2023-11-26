import jwt from "jsonwebtoken";
import { UNAUTHORIZED } from "../constants/httpStatus.js";

export default (req, res, next) => {
  // const { verify } = jwt;
  const token = req.headers.access_token;
  // console.log(token);
  if (!token) {
    // console.log("casara");
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
