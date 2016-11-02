console.log('Hello from main.js');

var hello = require('./functions');
var $ = require('jquery');

$(function () {
    console.log('document ready!');

    $('.clicker').click(function () {
        alert('Clicked!');
    });
});

hello('world');
alert('ready');

require('./some');