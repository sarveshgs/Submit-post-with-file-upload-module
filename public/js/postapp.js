var app = angular.module('postApp',['ui.select2']);
//client side controller to handle user problem submission
app.controller('problemController' , function($scope,$http,$window){
	
	console.log('Running');
	 //code to handle tags
	 $scope.select2Options = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['Technology', 'Music', 'Health', 'Laptop']  // Can be empty list.
    };
//function called when user clicks on submit 
   $scope.savePost = function() {
          
        
		//client side variable to collect the data from the view page
		var Data = {
            'title': $scope.post.title,
            'description': $scope.post.description,
			'quantity': $scope.post.quantity,
			'tags':  $scope.post.tags,
			'email':'abc@gmail.com'
		};
		var data2 = $scope.post;
		console.log(Data);

       //http method description
        $http({
            method: 'post',
            url: '/problem',
            data: Data,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).success(function (data) {
			console.log('success  '+angular.toJson(data));
			alert(data.message);
        });


    };
	
	
});//code ends here

/* .directive('ngUpdateHidden',function() {
    return function(scope, el, attr) {
        var model = attr['ngModel'];
        scope.$watch(model, function(nv) {
            el.val(nv);
        });

    };
}); */