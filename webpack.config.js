const path = require("path");
const UglifyJS = require("uglifyjs-webpack-plugin");
const env = process.env.NODE_ENV || "local";

const plugins= [];

if(env == "local") {
	plugins.push(new UglifyJS());
}

module.exports = {
	entry: [
		"./src/index"
	],
	devtool: "cheap-module-source-map",
	output: {
		path: path.join(__dirname, "public/build"),
		filename: "bundle.min.js",
		publicPath: "/public/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ["babel-loader"],
			include: path.join(__dirname, "src")
		}]
	},
	plugins,
	watch: env === "local"
};