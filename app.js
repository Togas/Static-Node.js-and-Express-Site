const express = require("express");
const { projects } = require("./data.json");
const app = express();
const PORT = 3000; 

// Select PUG as view engine

app.set("view engine", "pug");

// Serves /static and /images

app.use("/static", express.static("public"));
app.use("/images", express.static("images"));

// Calls the routes in /routes

app.use("/", require("./routes/index"));

app.use("/about", require("./routes/about"));

app.use("/project", require("./routes/projects"));

// Catches 404 errors.

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Serves error message using error pug file

app.use((err, req, res, next) => {
    console.log(`Error: ${err.status} - ${err.message}`);
    res.render('error', {
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: {}
    });
})



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
