// server.js
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

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
