var angularApp=angular.module('angularexamples',[]);

angularApp.controller('listctrl',function($scope){

	$scope.viewContact=function(){

	$scope.records = [ 		{no:'', name: 'Name', village: 'City', state: 'State', country: 'Country' },
							{no:'01', name: 'Karthi', village: 'Pungampalli', state: 'Tamilnadu', country: 'India' },
						 	{ no:'02', name: 'Sungeetha', village: 'Sathyamangalam', state: 'Tamilnadu', country: 'India' },
						  	{no:'03', name: 'Kutty', village: 'Cochin', state: 'Tamilnadu', country: 'India' },
						   	{no:'04', name: 'Ramu', village: 'Chennai', state: 'Tamilnadu', country: 'India' }, ]


	}

});