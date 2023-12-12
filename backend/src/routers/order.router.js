import { Router } from "express";
import handler from "express-async-handler";
import auth from "../middleware/auth.mid.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";
import { OrderStatus } from "../constants/orderStatus.js";

const router = Router();
import connection from "../db.js";
router.use(auth);

router.post(
  "/create",
  handler(async (req, res) => {
    const { order, name, email, phoneNumber, address } = req.body;
    // console.log(order);
    // console.log("antes:" + order.items.length);
    if (order.items.lenght <= 0) {
      // console.log("ŝon huevvadas");
      res.status(BAD_REQUEST).send("Card Is Empty");
    }
    // var order_new = "";

    delete_order_new(OrderStatus.NEW, req.user.id, function (result0) {
      // console.log(order);
      // order_new = result0;
      // console.log(order_new);
      // if (order_new){
      // delete_order_new(OrderStatus.NEW, req.user.id, function (result0) {
      //
      //
      // })
      // }

      const newOrder = {
        user_id: req.user.id,
        status: OrderStatus.NEW,
        name,
        address,
        phoneNumber,
        email: email.toLowerCase(),
        order,
      };
      // res.send("ok");

      // var resultado = "";
      create_order(newOrder, function (result) {
        res.send("ok");
      });
    });
  })
);

router.put(
  "/pay",
  handler(async (req, res) => {
    var order = "";
    await get_order_new(OrderStatus.NEW, req.user.id, function (result) {
      order = result;
      if (!order) {
        res.status(BAD_REQUEST).send("Order Not Found");
        return;
      }
      console.log("la orden encontrada");
      console.log(order[0].id);

      const id_to_change = order[0].id;
      var result2 = "";
      confirm_order(OrderStatus.CONFIRMED, id_to_change, function (result1) {
        result2 = result1;
        console.log("despues del cambio");
        console.log(id_to_change);
        res.send(order);
      });
    });
  })
);

router.get(
  "/track/:orderId",
  handler(async (req, res) => {
    const { orderId } = req.params;
    var result_user = "";
    // console.log(req.user.id);
    await get_user(req.user.id, function (result) {
      result_user = result;
      if (!result_user[0].isAdmin) {
        var result_order_double_id = "";
        get_order_by_double_id(orderId, req.user.id, function (result) {
          result_order_double_id = result;
          return res.send(result_order_double_id);
        });
      } else {
        var result_order_one_id = "";
        get_order_by_single_id(orderId, function (result) {
          result_order_one_id = result;
          return res.send(result_order_one_id);
        });
      }
      // return res.send(result_user);
    });
  })
);
router.get(
  "/newOrderForCurrentUser",
  handler(async (req, res) => {
    var result1 = "";
    // console.log("el user" + req.user.id);
    await get_order_new(OrderStatus.NEW, req.user.id, function (result) {
      result1 = result;
      if (result1) res.send(result1);
      else res.status(BAD_REQUEST).send();
    });
  })
);

router.get("/allstatus", (req, res) => {
  const allStatus = Object.values(OrderStatus);
  res.send(allStatus);
});

router.get(
  "/:status?",
  handler(async (req, res) => {
    const status = req.params.status;
    var result_user = "";
    await get_user(req.user.id, function (result) {
      result_user = result;
      // const filter = {};
      // if (!result_user.isAdmin) filter.user = result_user.id;
      // if (status) filter.status = status;
      console.log(result_user[0].isAdmin);
      if (result_user[0].isAdmin == "False") {
        console.log("no es admin");
        var result_order_status_id = "";
        // get_order_status_id;
        get_order_new(status, req.user.id, function (result) {
          result_order_status_id = result;
          // console.log(result_order_status_id);
          return res.send(result_order_status_id);
        });
      } else {
        var result_order_status = "";
        get_order_status(status, function (result) {
          result_order_status = result;
          return res.send(result_order_status);
        });
      }
    });
  })
);

function delete_order_new(status, id, callback) {
  const sql = `DELETE FROM music_store.orders 
    WHERE user_id='${id}' AND status='${status}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    // console.log(data);
    return callback(data[0]);
  });
}

async function get_order_new(status, id, callback) {
  if (status) {
    console.log("estamos en status new");
    const sql1 = `SELECT * FROM music_store.orders 
    WHERE user_id='${id}' AND status='${status}'`;
    connection.query(sql1, async (err, data) => {
      if (err) throw err;
      return callback(data);
    });
  } else {
    console.log("estamos en no status new");
    const sql2 = `SELECT * FROM music_store.orders 
    WHERE user_id='${id}'`;
    connection.query(sql2, async (err, data) => {
      if (err) throw err;
      return callback(data);
    });
  }
}

async function get_order_by_double_id(id_order, id_user, callback) {
  const sql = `SELECT * FROM music_store.orders 
    WHERE id='${id_order}' AND user_id='${id_user}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    // console.log(data[0]);
    return callback(data);
  });
}

async function get_order_by_single_id(id_order, callback) {
  const sql = `SELECT * FROM music_store.orders 
    WHERE id='${id_order}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    // console.log(data[0]);
    return callback(data);
  });
}

async function get_order_status(status, callback) {
  // console.log(status);
  if (status) {
    console.log("estamos en status");
    const sql1 = `SELECT * FROM music_store.orders 
    WHERE status='${status}'`;
    connection.query(sql1, async (err, data) => {
      if (err) throw err;
      // console.log(data[0]);
      return callback(data);
    });
  } else {
    console.log("estamos en no status");
    const sql2 = `SELECT * FROM music_store.orders`;
    connection.query(sql2, async (err, data) => {
      if (err) throw err;
      // console.log(data[0]);
      return callback(data);
    });
  }
}

async function get_user(id, callback) {
  const sql = `SELECT * FROM music_store.users2 WHERE id='${id}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    return callback(data);
  });
}

async function confirm_order(status, id_order, callback) {
  const sql = `UPDATE music_store.orders SET status='${status}'WHERE id='${id_order}'`;
  connection.query(sql, async (err, data) => {
    if (err) throw err;
    // console.log(data[0]);
    return callback(data);
  });
}
function create_order(newO, callback) {
  // console.log(newO.order.items);
  // const opt1 = JSON.parse(newO.order.items);
  // const opt2 = JSON.stringify(opt1.response);
  // const jso = {
  //   items: opt2,
  //   totalPrice: newO.order.totalPrice,
  //   totalCount: newO.order.totalCount,
  // };
  // const jso2 = JSON.stringify(jso);
  // const sql = `INSERT INTO music_store.orders(user_id, status, name, address, phone, email, order)
  // VALUES('${newO.user_id}','${newO.status}','${newO.name}','${newO.address}','${

  // const op1 = JSON.stringify(newO.order.items);
  // const vector = [newO.order.items[0], newO.order.items[1]];
  // console.log(vector);
  // const vector1 = JSON.stringify(vector);
  // console.log(vector1);
  // const bef = newO.order.items[0];
  // console.log("antes:");
  // console.log(bef);
  // delete bef.acc.tags;
  // console.log("despues:");
  // console.log(bef);
  //
  // const bef2 = newO.order.items[1];
  // delete bef2.acc.tags;
  //
  // const vector = [bef, bef2];
  // const vector1 = JSON.stringify(vector);

  const vector_items = newO.order;
  // console.log("antes");
  // console.log(vector_items.items);

  for (let i = 0; i < vector_items.items.length; i++) {
    // console.log(i);
    delete vector_items.items[i].acc.tags;
  }
  //
  // console.log("despues");
  // console.log(vector_items.items);

  const vector_str_items = JSON.stringify(vector_items);

  const sql = `INSERT INTO music_store.orders(user_id, status, name, address, phone, email, ord)
  VALUES ('${newO.user_id}','${newO.status}','${newO.name}','${newO.address}','${newO.phoneNumber}','${newO.email}','${vector_str_items}')`;

  connection.query(sql, async (err, data) => {
    if (err) throw err;
    return callback(data[0]);
  });
  // return "ok";
}

export default router;
