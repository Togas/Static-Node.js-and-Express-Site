// Calls express and the Router() function and renders the project pug file based on
// the requested id parameter.

const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/:id", (req, res) => {
	console.log(req.params.id);

	const project = projects.filter(projects => projects.id == req.params.id);
	console.log(project.length);
	if (project.length == 0) {
		const err = new Error("Bad Request");
		err.status = 400;
		res.render("error", {
			status: err.status,
			message: err.message,
			stack: err.stack,
			error: {}
		});
	} else {
		res.render("project", project[0]);
	}
});

module.exports = router;
