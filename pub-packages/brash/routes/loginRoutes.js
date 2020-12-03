const express = require('express');
const app = express();
const router = express.Router();

// From C:\Users\sparksb\WebStormProjects\udemy\TwitterCloneNodeSockeIOMongo\033-TwitterClone-userSchema\routes\loginRoutes.js

// app.set("view engine", "pug");
// app.set("views", "views");
//
router.get("/", (req, res, next) => {

  res.status(200).render("login");
})

module.exports = router;
