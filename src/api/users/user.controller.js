/**
 * Created by sourabh on 6/4/17.
 */


var userservice = require("./user.service");
exports.createUser = function(req, res) {

    var userData = req.body;
    console.log("userDat in controller-----", userData);
    userservice.createUser(userData, res);
}

exports.findUser = function(req, res) {
    console.log(req.query);
    var name = req.query;
    console.log("userName in controller-----", name);
    userservice.findUser(res);

}
exports.updateUser = function(req, res) {
    var updateData = req.body;
    userservice.updateUser(updateData, res)
}
exports.deleteuser = function(req, res) {

    var id = req.body;
    userservice.deleteuser(id, res);

}