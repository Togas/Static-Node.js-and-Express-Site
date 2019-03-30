// Calls express and the Router() function and renders the index pug file.

const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/", (req, res) => {

	res.render("index", {projects});
});

module.exports = router;
