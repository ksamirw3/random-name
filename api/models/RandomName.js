/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: { 
     name: {
      type: 'STRING',
      required: true
    },    
     gender : {
      type: 'STRING',
    }
    
  },

   beforeCreate: function (values, cb) {
       
       RandomName.findOneByName(values.name).exec(function(err, user) {
        if (user)
            return cb({ValidationError: {name: [{rule: 'taken'}]}});
   
       cb();        
    });

  }

};

