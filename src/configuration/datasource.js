/**
 * Created by sourabh on 6/4/17.
 */

var mongoose=require("mongoose");

mongoose.connect('mongodb://sourabhkhera.com/demo');

(function(){

    mongoose.connection.on('open',function (err,data) {

         console.log('connected successfully-----');

    });
    mongoose.connection.on('error',function (err,data) {

        console.log('not connected-----');

    });

})();