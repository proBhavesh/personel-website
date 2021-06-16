const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
	baseUrl: "bhavesh.pro",
	pagesDirectory: path.resolve(__dirname, "../pages"),
	targetDirectory: path.resolve(__dirname, "../../public"),
});
