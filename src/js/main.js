import $ from 'jquery';

var apiData = $.ajax({
  url: 'http://api.randomuser.me/?results=12&inc=name,location,email,phone,id,picture&noinfo',
  dataType: 'json',
  success: function(data){
  console.log(data);
  }
});

apiData.then(function(apiData){
	console.log(apiData.results);
	var dataArray = apiData.results;

	dataArray.forEach(function(object){
		
	})
	
});