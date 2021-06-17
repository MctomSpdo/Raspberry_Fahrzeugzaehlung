const path = require('path');
const docsVersion = "VERSION";
const base = process.env.NODE_ENV === "development" ? '/docs/master/' : `/docs/${docsVersion}/`;

module.exports = {
  ti