module.exports = {
  login: (req, res) => {
    let { username, password } = req.body;

    req.app
      .get("db")
      .find_user([username, password])
      .then(() => {
        res.status(200).send("Success");
      })
      .catch(err => {
        res.status(500).send(err);
        console.log("Login Fail");
      });
  },
  register: (req, res) => {
    let { username, password } = req.body;
    req.app
      .get("db")
      .create_user([username, password])
      .then(() => {
        res.status(200).send("Success");
      })
      .catch(err => {
        res.status(500).send(err);
        console.log("Register Fail");
      });
  },
  getAll: (req, res) => {
    req.app
      .get('db')
      .get_posts()
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log({ err });
      });
  },
  create: (req, res) => {
    let { title, img, content, author_id } = req.body;

    req.app
      .get("db")
      .create_post([title, img, content, author_id])
      .then(() => {
        res.status(200).send();
      })
      .catch(error => {
        console.log({ error });
        res.status(500).send(error);
      });
    },
    delete: (req, res) => {
      let { id } = req.params;
  
      req.app
        .get("db")
        .delete_post([id])
        .then(() => {
          res.status(200).send();
        })
        .catch(err => {
          console.log({ err });
          res.status(500).send(err);
        });
    },
    update: (req, res) => {
      let { title, img, content, author_id } = req.body;
      let { id } = req.session;
  
      req.app
        .get("db")
        .create_post([id, title, img, content, author_id])
        .then(() => {
          res.status(200).send();
        })
        .catch(error => {
          console.log({ error });
          res.status(500).send(error);
        });
      },
};
