var express = require('express');

var router = express.Router();

router.post('/', function(request, response, next) {
    var a=parseInt(request.body.a);
    var b=parseInt(request.body.b);
    console.log("a: "+a+" b: "+b+" Operation: "+request.body.operation);
    switch(request.body.operation) {
        case 'Add':
            var answer = a + b;
            response.send(""+answer);
            break;
        case 'Mult':
            var answer = a * b;
            response.send(""+ answer);
            break;
        case 'Div':
            var answer = a / b;
            response.send(""+ answer);
            break;
        case 'Sub':
            var answer = a - b;
            response.send(""+ answer);
            break; 
        default:
            response.send("default");
    }
});

module.exports = router;