import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

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

server.post("/cart", (req, res) => {
  const newCartItem = req.body;
  const cart = router.db.get("cart").push(newCartItem).write();
  res.jsonp(cart);
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
