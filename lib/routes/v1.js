'use strict';

const express = require('express');
const router = express.Router();

const category = require('../models/categories/categories-model.js');
const product = require('../models/products/products-model.js');


function getModel(req, res, next){
    let model = req.params.model;

    switch (model){
        case "category":
            req.model = category;
            next();
            return;
            case "products":
                req.model = product;
                next();
                return;
            default: 
            next('Invalid Model');
            return;
    }
}

    router.param('model', getModel);


  // Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);

// Route Handlers
function handleGetAll(req, res, next) {
    req.model.get()
      .then(results => {
        let count = results.length;
        res.json({ count, results });
      })
      .catch(next);
  }
  
  function handleGetOne(req, res, next) {
    let id = req.params.id;
    req.model.get(id)
      .then(record => res.json(record))
      .catch(next);
  }
  
  function handlePost(req, res, next) {
    req.model.post(req.body)
      .then(result => res.json(result))
      .catch(next);
  }

  
  
  module.exports = router;