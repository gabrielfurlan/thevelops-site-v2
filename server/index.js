import express from "express";
import path from "path";

import languages from "../languages";

const app = express();
const port = process.env.PORT || 8080;

app.use("/", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
	const language = request.query.lang || "en-us";
	if(!languages[language]) return response.redirect("/"); 	
	response.render("index", { ...languages[language], language });
});

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});