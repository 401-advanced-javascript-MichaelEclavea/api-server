'use strict';

const schema = require('./products-schema.js');

class Products {
    constructor(schema){
        this.schema = schema;
    }
    read(id) {
        if (id) {
          return this.schema.find({ _id: id });
        } else {
          return this.schema.find({});
        }
      }
    
      create(object) {
        const newCategory = new this.schema(object);
        return newCategory.save();
      }
    
      update(id) {
        return this.schema.updateOne({_id: id})
      }
    
      delete(id) {
        this.schema.deleteOne({_id: id}, function (err){})
      }
    }

    module.exports = Products;