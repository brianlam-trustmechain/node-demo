const appInsights = require("applicationinsights");
appInsights.setup("725b6ea5-e76e-44bd-b988-b36f799464b0");
appInsights.start();

const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/',  (req, res) => res.send('Hello World!!'));
app.listen (port, () => console.log("Server is running on port " + port));