var express = require('express');
var app = express();

app.set('port',process.env.PORT || 2000);

app.get('/', function(request,response){

    response.send('<h1>Min superfede webside</h1>');

});


var server = app.listen(app.get('port'), function(){
    console.log('listening on Port ' + app.get('port'));
}
)
