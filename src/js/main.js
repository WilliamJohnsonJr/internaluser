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
		$(".grid").append(`
			<div class="userContainer">
				<div class="imgContainer ${object.name.last}">
					<img class="gridImg" src="${object.picture.large}">
				</div>
				<div class="nameContainer">
					<span class="name">${object.name.first} ${object.name.last}</span>
				</div>
				<div class="emailContainer">
				${object.email}
				</div>
				<div class="address1Container">
				${object.location.street}
				</div>
				<div class="address2Container">
				${object.location.city}, ${object.location.state}, ${object.location.postcode}
				</div>
				<div class="phoneNumber">
				${object.phone}
				</div>
				<div class="SSN">
				${object.id.value}
				</div>
			</div>
			`)
	})
	
});