
var url ='http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}
//making the log function exportable
module.exports = log;
//this is done after creating a new branch from github
