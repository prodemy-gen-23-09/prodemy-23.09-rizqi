import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.options("*", cors());

server.get("/product", (req, res) => {
  const products = router.db.get("products").value();
  res.jsonp(products);
});

server.get("/transactions", (req, res) => {
  const transactions = router.db.get("transaction").value();
  res.jsonp(transactions);
});

server.get("/users", (req, res) => {
  const users = router.db.get("users").value();
  res.jsonp(users);
});

server.get("/cart", (req, res) => {
  const cart = router.db.get("cart").value();
  res.jsonp(cart);
});

//'Redirect has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header'
server.post("/cart", (req, res) => {
  const newCartItem = req.body;
  const existingCartItem = router.db
    .get("cart")
    .find({ userId: newCartItem.userId })
    .value();

  if (existingCartItem) {
    const updatedCart = router.db
      .get("cart")
      .find({ userId: newCartItem.userId })
      .assign(newCartItem)
      .write();
    res.json(updatedCart);
  } else {
    const cart = router.db.get("cart").push(newCartItem).write();
    res.json(cart);
  }
});

server.get("/checkout", (req, res) => {
  const checkout = router.db.get("checkout").value();
  res.jsonp(checkout);
});

server.use((req, res, next) => {
  if (req.method === "DELETE" && req.query.userId) {
    const userId = parseInt(req.query.userId, 10);
    const resource = router.db.get("checkout").remove({ userId }).write();
    res.jsonp(resource);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
