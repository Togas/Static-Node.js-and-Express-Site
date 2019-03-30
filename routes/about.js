// Calls express and the Router() function and renders the about pug file.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("about");
});

module.exports = router;
