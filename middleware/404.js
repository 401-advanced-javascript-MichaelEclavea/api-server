'use strict';


function object404(req, res, next){
    res.status(404).send('You ran into an error 404');
}



module.exports = object404;