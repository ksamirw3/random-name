/**
 * RandomNameController
 *
 * @description :: Server-side logic for managing randomnames
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
           
           console.log('gender: ', req.param("gender"));
           
           var query = {};
           
           if(req.param("gender") && req.param("gender") !=''){
               query = {gender: req.param("gender")}
           }
           
           
       RandomName.find(query).exec(function(err, names) {
           return res.json(names[Math.floor(Math.random()*names.length)]);
       });

    },

    create: function (req, res) {

        if (req.method == "POST")
        {
            var random_name = require('node-random-name');
            
            var param = req.param("RandomName");
            
            
            var genders = ['male', 'female'];
            
            if(!param['gender'] || param['gender'] == ''){
                param['gender'] = genders[Math.floor(Math.random()*genders.length)];
            }
            
            if(!param['name'] || param['name'] == ''){
                param['name'] = random_name({ first: true, gender: param['gender']});
            }
            
            console.log(param['name']);
            
            
            RandomName.create(req.param("RandomName")).exec(function(err,model){
	     
	      
	      // Error handling
		if (err) {
		//  return console.log(err);

		console.log(err);
//		    res.send("Name exist");

                // change name to another one
                param['name'] = random_name({ first: true, gender: param['gender']});
                
                RandomName.create(req.param("RandomName")).exec(function(err,model){
                    
                return res.json(model);
                
                });
                

		// The User was created successfully!
		}else {  
                    return res.json(model);
		}
	     
	     
	  });

        }

    },
    

   update: function (req, res) {
    
         var id=req.param("id",null);
	
         RandomName.findOne(id).exec(function(err, model) {
	   
	        // res.send(model);
		  // return;

	        if(req.method=="POST"&&req.param("RandomName",null)!=null)
		  {
		      
		       var param = req.param("RandomName");
            
            
                        var genders = ['male', 'female'];

                        if(!param['gender'] || param['gender'] == ''){
                            param['gender'] = genders[Math.floor(Math.random()*genders.length)];
                        }

                        if(!param['name'] || param['name'] == ''){
                            param['name'] = random_name({ first: true, gender: param['gender']});
                        }
			
		  
		     model.name=param.name;
		     model.gender=param.gender;
		     
		     model.save(function(err){
		      
			
			// Error handling
			  if (err) {
			      res.send("Error");
                              
			  }else {
                              
			      return res.json(model);
			    
			  }
		      
		      
		    });
		  
		  }
		  
	      

	});
      
       
  },
  
};

