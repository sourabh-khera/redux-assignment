/**
 * Created by sourabh on 6/4/17.
 */

var userService = require("./user.model");
exports.createUser = function(userData, res) {

    userService.create(userData, function(err, data) {

        if (err) {
            res.send({ message: "error while creating user", error: err });
        } else {

            res.send({ message: "user created", user:data })
        }
    })
}

exports.findUser = function(res) {

    userService.find(function(err, data) {
        if (err) {
            res.send({ message: "error in finding ----", error: err });
        } else {
            res.send(data)
        }

    })

}

exports.updateUser = function(updateUser, res) {
    console.log("--------updating malik",updateUser)
    userService.update({_id:updateUser._id}, {userName:updateUser.userName, email:updateUser.email},{upsert:true}, function(err, data) {
        if (err) {
            res.send({ message: "error in updating ----", error: err });
        } else {
            userService.find( (err,updateData) => {
                res.send(updateData)
            })
        }


    })
}

exports.deleteuser = function(id, res) {
    console.log("id:",id)
    userService.remove(id, function(err, data) {

        if (err) {
            res.send({ message: "error in removing----", error: err });
        } else {
            userService.find( (err,updateData) => {
                res.send(updateData)
            })
        }
    })
}