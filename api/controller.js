'use strict';
var properties = require('../package.json')
var controller = {
    about: function(req,res){
        var aboutInfo = {
        name:properties.name,
        version: properties.version
    }
        res.json(aboutInfo);
    }
};

module.exports = controller;