/**
 * Created by sourabh on 6/4/17.
 */


var controller = require("./../api/users/user.controller")

module.exports = (app) => {

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }

    app.use(allowCrossDomain)
    app.post("/user", controller.createUser);
    app.get("/user", controller.findUser);
    app.put("/user", controller.updateUser);
    app.delete("/user", controller.deleteuser);
}