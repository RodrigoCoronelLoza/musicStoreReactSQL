import { Router } from "express";
import connection from "../db.js";
import handler from "express-async-handler";

const router = Router();

router.get(
  "/clarinet",
  handler((req, res) => {
    const sql = "SELECT * FROM music_store.clarinet2";
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/clarinet/tags",
  handler((req, res) => {
    const sql = "SELECT tags FROM music_store.clarinet2";
    connection.query(sql, async (err, data) => {
      const len = data.length;
      let array_tags = JSON.parse(data[0].tags);

      for (let i = 1; i < len; i++) {
        array_tags = array_tags.concat(JSON.parse(data[i].tags));
      }

      function foo(array) {
        let a = [],
          b = [],
          arr = [...array],
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

      for (let i = 0; i < len2; i++) {
        final_array = final_array.concat({
          name: tags_founded[i],
          count: ocurrence_founded[i],
        });
      }

      if (err) return res.json(err);
      return res.json(final_array);
    });
  })
);

router.get(
  "/clarinet/search/:searchTerm",
  handler((req, res) => {
    const { searchTerm } = req.params;
    const sql = `SELECT * FROM music_store.clarinet2 WHERE name REGEXP '${searchTerm}'`;
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/clarinet/tag/:tag",
  handler((req, res) => {
    const { tag } = req.params;
    const sql = `SELECT * FROM music_store.clarinet2 WHERE tags REGEXP'${tag}'`;
    connection.query(sql, async (err, data) => {
      console.log(data);
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/clarinet/:clarId",
  handler((req, res) => {
    const { clarId } = req.params;
    const sql = `SELECT * FROM music_store.clarinet2 WHERE id='${clarId}'`;
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/saxophone",
  handler((req, res) => {
    const sql = "SELECT * FROM music_store.saxophone2";
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/saxophone/tags",
  handler((req, res) => {
    const sql = "SELECT tags FROM music_store.saxophone2";
    connection.query(sql, async (err, data) => {
      const len = data.length;
      let array_tags = JSON.parse(data[0].tags);

      for (let i = 1; i < len; i++) {
        array_tags = array_tags.concat(JSON.parse(data[i].tags));
      }

      function foo(array) {
        let a = [],
          b = [],
          arr = [...array],
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

      for (let i = 0; i < len2; i++) {
        final_array = final_array.concat({
          name: tags_founded[i],
          count: ocurrence_founded[i],
        });
      }

      if (err) return res.json(err);
      return res.json(final_array);
    });
  })
);

router.get(
  "/saxophone/search/:searchTerm",
  handler((req, res) => {
    const { searchTerm } = req.params;
    const sql = `SELECT * FROM music_store.saxophone2 WHERE name REGEXP '${searchTerm}'`;
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/saxophone/tag/:tag",
  handler((req, res) => {
    const { tag } = req.params;
    const sql = `SELECT * FROM music_store.saxophone2 WHERE tags REGEXP'${tag}'`;
    connection.query(sql, async (err, data) => {
      console.log("SAXO:" + data);
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

router.get(
  "/saxophone/:saxId",
  handler((req, res) => {
    const { saxId } = req.params;
    const sql = `SELECT * FROM music_store.saxophone2 WHERE id='${saxId}'`;
    connection.query(sql, async (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  })
);

export default router;
