module.exports = function(app,db) {

//Server Side post request function 	
app.post('/problem', function(req,res){
	

        
		//Getting the values into Post variable from the client side controller
		var Post={
            "title": req.body.title,
			"description" : req.body.description,
			"quantity":req.body.quantity,
			"tags" : req.body.tags,
			"email":req.body.email
		};

       
         //inserting the Post data in postData Collection    
         db.postData.insert(Post, function (err, doc) {
            var result={
				Operation:"insert post",
			}            
		   if(!err){
			  result ={				  
				 isDMLSuccessful:true,
                 data:doc,
                 message:'Post inserted successfully'       				 
			  }
			}else{
				 result ={
				 isDMLSuccessful:false,                 
                 message:'Unexpected Error'       				 
			  }
				console.log('not inserted');
			}
			res.json(result);
        });

       
		 
	});
	//code to test the get request
	/* app.get('/problem', function(req,res){
       console.log('recieved req');
       res.send('inside get');  
		 
	}); */

}//code ends here
