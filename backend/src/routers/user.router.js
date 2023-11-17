import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";
const router = Router();
import connection from "../db.js";

import handler from "express-async-handler";
// import bycrypt from "bycrypt";

router.post(
  "/login",
  handler((req, res) => {
    const { email, password } = req.body;

    // const sql = `SELECT * FROM music_store.users2
    // WHERE email='${email}'AND password='${password}'`;
    // const quer = connection.query(sql, async (err, data) => {
    // if (err) return res.json(err);
    // return data;
    // });
    // const user = quer;
    // console.log(user);
    var user = "";
    get_user(email, password, function (result) {
      user = result;

      // console.log(user);

      // const user = sample_users.find(
      //   (user) => user.email === email && user.password === password
      // );
      if (user) {
        res.send(generateTokenResponse(user));
        return;
      }

      res.status(BAD_REQUEST).send("Username or password is invalid");
    });
  })
);

function get_user(email, password, callback) {
  const sql = `SELECT * FROM music_store.users2 
    WHERE email='${email}'AND password='${password}'`;
  connection.query(sql, async (err, data) => {
    if (err) return res.json(err);
    // console.log(data);
    return callback(data[0]);
  });
}

const generateTokenResponse = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token,
  };
};

export default router;
