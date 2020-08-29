const tailwindcss = require("tailwindcss");
const plugins = [];
plugins.push(tailwindcss);
plugins.push(tailwindcss("./tailwind.config.js"));

module.exports = { plugins };
