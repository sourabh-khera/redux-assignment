/**
 * Created by sourabh on 6/4/17.
 */

require("./datasource");
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser());

require("./route")(app);


app.listen(3200, function(err, data) {
    console.log("server started");
});