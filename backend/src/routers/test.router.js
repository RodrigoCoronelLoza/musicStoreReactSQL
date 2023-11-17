import { Router } from "express";
import {
  clarinet_accesories,
  sample_tags_clar,
  saxophone_accesories,
  sample_tags_sax,
} from "../data.js";
// import mysql from "mysql";

// const connection = require("../db.js");
import connection from "../db.js";
// const dba = db;
// db();
const router = Router();
// console.log("sonseras");

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "password",
// database: "music_store",
// });

router.get("/", (req, res) => {
  //   res.send(clarinet_accesories);
});

// router.get("/slides", (req, res) => {
//   res.send(imageSlide);
// });

router.get("/clar", (req, res) => {
  // console.log("sonseras");
  // const GET_QUERY = `SELECT * FROM music_store.clarinet`;
  // connection.query(GET_QUERY, (err) => {
  // if (err) {
  // console.log("sonseras");
  // console.log(err);
  // } else res.send("hecho ca");
  // });
  const sql = "SELECT tags FROM music_store.clarinet2";
  connection.query(sql, async (err, data) => {
    const len = data.length;
    let array_tags = JSON.parse(data[0].tags);

    for (let i = 1; i < len; i++) {
      array_tags = array_tags.concat(JSON.parse(data[i].tags));
    }
    // const counter = {};
    // // console.log(array_tags);
    // array_tags.forEach((ele) => {
    //   if (counter[ele]) {
    //     counter[ele] += 1;
    //   } else {
    //     counter[ele] = 1;
    //   }
    // });

    // console.log(counter);

    function foo(array) {
      let a = [],
        b = [],
        arr = [...array], // clone array so we don't change the original when using .sort()
        prev;

      arr.sort();
      for (let element of arr) {
        if (element !== prev) {
          a.push(element);
          b.push(1);
        } else ++b[b.length - 1];
        prev = element;
      }

      return [a, b];
    }

    const counter = foo(array_tags);
    const tags_founded = counter[0];
    const ocurrence_founded = counter[1];
    const len2 = tags_founded.length;

    var final_array = [{ name: "All", count: tags_founded.length }];
    // var json_arr = {};
    // var a = [];
    for (let i = 0; i < len2; i++) {
      // console.log("iteracion" + i);
      // console.log(tags_founded[i]);
      // console.log(ocurrence_founded[i]);
      //
      // json_arr["name"] = tags_founded[i];
      // json_arr["count"] = ocurrence_founded[i];
      // a = json_arr;
      // console.log(json_arr);

      final_array = final_array.concat({
        name: tags_founded[i],
        count: ocurrence_founded[i],
      });
      // console.log(final_array);
    }

    // console.log(final_array);

    if (err) return res.json(err);
    return res.json(final_array);
  });
  // res.send(clarinet_accesories);
});

export default router;
