const express = require("express");
const massive = require("massive");
const app = express();
require("dotenv").config();
const uC = require('./controllers/uC')



const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
app.use(express.json());
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Doing Great Buddy, Terminal Looks Awesome");
  })
  .catch(err => {
    console.log("YOU GOT THIS NO WORRIES!!");
  });
  app.listen(SERVER_PORT || 4000, () =>
  console.log("${SERVER_PORT} Listening for Danger")
);

app.route('/auth/register').post(uC.register);
app.route('/auth/login').post(uC.login);
app.route('/auth/logout').get(uC.logout);
app.get('/auth/user', (req, res) => {
    res.status(200).send(req.session.user)
})
app.put('/auth/user/:id', uC.edit)
// app.post("/api/login", aC.signIn);
// app.post("/api/admin_register", aC.register);
// app.post("/auth/register", aC.register);


// app.get("/api/logout", (req, res) => {
//   req.session.destroy();
//   res.sendStatus(200);
// });