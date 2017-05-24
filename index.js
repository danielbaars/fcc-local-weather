var latitude, longitude;

$(document).ready(function(){

	$.getJSON('https://freegeoip.net/json/', function(data) {

		latitude = data.latitude;
		longitude = data.longitude;
		onPositionReady();

	});

});



function onPositionReady() {

	function showPos() {

		$.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b963fa5ee1b5df1a5e5b13e30bb9da05', function(data) {

			var name = data.name;
			var country = data.sys.country;
			var tempC = Math.floor(data.main.temp - 273.15);
			var tempF = Math.floor((( data.main.temp - 273.15) * 9/5) + 32);
			var icon = data.weather[0].icon;

			var html = name + ', ' + country + ' --- ' + tempC + '&#8451;, ' + tempF + '&#8457; <img src="http://openweathermap.org/img/w/' + icon + '.png">';

			$(".weather__city").text(name);
			$(".weather__temperature--celsius").html(tempC + ' &#8451;');
			$(".weather__temperature--fahrenheit").html(tempF + ' &#8457;');
			$(".weather__icon").html('<img src="http://openweathermap.org/img/w/' + icon + '.png">');

		});

	}	

	showPos();

	$(".weather__units").on("click", function(){

		$(".weather__temperature--celsius").toggleClass("hide");
		$(".weather__temperature--fahrenheit").toggleClass("hide");
		$(".weather__units--celsius").toggleClass("hide");
		$(".weather__units--fahrenheit").toggleClass("hide");		
		
	});	

} 















