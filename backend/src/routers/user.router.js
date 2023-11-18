import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";
const router = Router();
import connection from "../db.js";

import handler from "express-async-handler";
import bcrypt from "bcryptjs";
const PASSWORD_HASH_SALT_ROUNDS = 10;

router.post(
  "/login",
  handler(async (req, res) => {
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
    get_user(email, function (result) {
      user = result;

      // console.log(user);

      // const user = sample_users.find(
      //   (user) => user.email === email && user.password === password
      // );
      if (user && bcrypt.compare(password, user.password)) {
        res.send(generateTokenResponse(user));
        return;
      }

      res.status(BAD_REQUEST).send("Username or password is invalid");
    });
  })
);

router.post(
  "/register",
  handler(async (req, res) => {
    const { name, email, password, address } = req.body;
    var user = "";
    get_user(email, function (result) {
      user = result;
      if (user) {
        res.status(BAD_REQUEST).send("User already exists, please login!");
        return;
      }
      const hashedPassword = bcrypt.hash(password, PASSWORD_HASH_SALT_ROUNDS);

      const newUser = {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        address,
      };

      // console.log("carejo");
      var resultado = "";
      create_user(newUser, function (result) {
        // resultado = result;
        get_user(email.toLowerCase(), function (result) {
          resultado = result;
          console.log(resultado);
          res.send(generateTokenResponse(resultado));
        });
      });
    });
  })
);

function get_user(email, callback) {
  const sql = `SELECT * FROM music_store.users2 
    WHERE email='${email}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    console.log(data);
    return callback(data[0]);
  });
}

function create_user(newU, callback) {
  const sql = `INSERT INTO music_store.users2 
  (name, email, password, address, isAdmin)
  VALUES ('${newU.name}','${newU.email}','${newU.password}','${newU.address}','False')`;

  connection.query(sql, async (err, data) => {
    if (err) throw err;
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
