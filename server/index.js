import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 8888;

app.use("/", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
	response.render("index", {});
});

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});