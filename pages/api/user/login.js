import models from "../../../db/models";

export default function handler(req, res) {
  if (req.method === "post") {
    let { username, password } = req.body;
    models.User.findOne({
      where: {
        username,
        password,
      },
    })
      .then(() => {
        res.status(200).send("login");
      })
      .catch(() => {
        res.status(401).send("fail");
      });
  } else {
    res.status(401).send("fail");
  }
}
