require("dotenv").config();
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();

  // server.get("/", (req, res) => {
  //   return app.render(req, res, "/");
  // });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    console.log("listening to" + process.env.PORT);
  });
});
