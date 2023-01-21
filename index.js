const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");
const Client = new MongoClient(process.env.DB_URL);

app.use(
  bodyParser.json(),
  cors({
    origin: "*",
    credentials: true,
  })
);
app.post("/add-product", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let user = await Db.collection(process.env.DB_COLLECTION_ONE).insertMany(
      req.body
    );
    if (user) {
      res.json({
        statusCode: 200,
        message: "product added successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    await Client.close();
  }
});
// 1.) Find all the information about each products
app.get("/all", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find()
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});
// 2.)Find the product price which are between 400 to 800
app.get("/between", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ product_price: { $gt: 400, $lt: 800 } })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});
// 3.)Find the product price which are not between 400 to 600
app.get("/between1", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ product_price: { $lt: 600, $gt: 400 } })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});
// 4.)List the four product which are grater than 500 in price
app.get("/gte", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ product_price: { $gt: 500 } })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});

// 6.)Find the product with a row id of 10
app.get("/getId", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ id: "10" })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});

// 8.)Find all products which contain the value of soft in product material
app.get("/soft", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ product_material: "Soft" })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});
// 9.)Find products which contain product color indigo  and product price 492.00
app.get("/color", async (req, res) => {
  await Client.connect();
  try {
    const Db = Client.db(process.env.DB_NAME);
    let products = await Db.collection(process.env.DB_COLLECTION_ONE)
      .find({ product_color: "indigo", product_price: 492 })
      .toArray();

    if (products) {
      res.json({
        statusCode: 200,
        products,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "couldn't connect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "internal server error",
    });
  } finally {
    Client.close();
  }
});

app.listen(PORT, () => {
  console.log("server is running into " + PORT);
});
