'use strict';


function object500(req, res, next){
    res.status(500).send('You ran into an error 500');
}



module.exports = object500;