$(function() {
var myDate = new Date();
var currentDay = myDate.getDate() + '';
var currentMonth = myDate.getMonth() + 1 + '';
var theDate = currentMonth + '/' + currentDay;
var apiString = 'http://numbersapi.com/' + theDate + '/date?notfound=floor';
$.get(apiString, function(data) {
        $('#number').text(data);
    });
});
