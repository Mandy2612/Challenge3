//Date
var today = new Date();

var maanden = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
document.getElementById('date').innerHTML = maanden[today.getMonth()];


var dagenWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById('date').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()];
// End date

//Time
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
//End time

//Weather
function getAPIdata() {
  var city="The Hague";

  var apiKey= '9f7ba05c7d8da1a9afbab654ff09ab2a';
  // construct request
  var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&lang=en';
  // get current weather
  fetch(request)  
  
  // parse response to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // do something with response
  .then(function(response) {
    // show full JSON object
    console.log(response);
    var weatherBox = document.getElementById('weather');
    //weatherBox.innerHTML = response;
    //weatherBox.innerHTML = response.weather[0].description;
    //weatherBox.innerHTML = response.main.temp;
    document.getElementById('cloudImg').src="animated/" + response.weather[0].icon + '.svg';

    var degC = Math.floor(response.main.temp - 273.15);

    // var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = degC + '&#176;C <br>';

    var description = document.getElementById('description');
    description.innerHTML = response.weather[0].description;
  });
}

// init data stream
getAPIdata();


function getAPIdata2() {
	var city="London";

	var apiKey= '9f7ba05c7d8da1a9afbab654ff09ab2a';
	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&lang=eng';
	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBox2 = document.getElementById('weather2');
		//weatherBox.innerHTML = response;
		//weatherBox.innerHTML = response.weather[0].description;
		//weatherBox.innerHTML = response.main.temp;
		document.getElementById('cloudImg2').src="animated/" + response.weather[0].icon + '.svg';


		var degC2 = Math.floor(response.main.temp - 273.15);
		// var weatherBox = document.getElementById('weather');
		weatherBox2.innerHTML = degC2 + '&#176;C <br>' + response.weather[0].description;
	});
}

// init data stream
getAPIdata2();

function getAPIdata3() {
	var city="Berlin";

	var apiKey= '9f7ba05c7d8da1a9afbab654ff09ab2a';
	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&lang=eng';
	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBox3 = document.getElementById('weather3');
		//weatherBox.innerHTML = response;
		//weatherBox.innerHTML = response.weather[0].description;
		//weatherBox.innerHTML = response.main.temp;
		document.getElementById('cloudImg3').src="animated/" + response.weather[0].icon + '.svg';


		var degC3 = Math.floor(response.main.temp - 273.15);
		// var weatherBox = document.getElementById('weather');
		weatherBox3.innerHTML = degC3 + '&#176;C <br>' + response.weather[0].description;
	});
}

// init data stream
getAPIdata3();


function getAPIdata4() {
	var city="Paris";

	var apiKey= '9f7ba05c7d8da1a9afbab654ff09ab2a';
	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&lang=eng';
	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBox4 = document.getElementById('weather4');
		//weatherBox.innerHTML = response;
		//weatherBox.innerHTML = response.weather[0].description;
		//weatherBox.innerHTML = response.main.temp;
		document.getElementById('cloudImg4').src="animated/" + response.weather[0].icon + '.svg';


		var degC4 = Math.floor(response.main.temp - 273.15);
		// var weatherBox = document.getElementById('weather');
		weatherBox4.innerHTML = degC4 + '&#176;C <br>' + response.weather[0].description;
	});
}

// init data stream
getAPIdata4();






//map



mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZHkyNjEyIiwiYSI6ImNrbWtsN3czMTEyMHoyd2s1enk1MGpua2sifQ.r0EyBB7Z2WxupnzAjxxe1Q';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center:  [4.31703, 52.0729],
zoom: 13.5
});
 
// create the popup
var popup1 = new mapboxgl.Popup().setHTML('<h3 id="title">The Hague University of Applied Sciences</h3><p id="popup">The Hague University of Applied Sciences is a university of applied sciences with its campuses located in and around The Hague in the Randstad metropolitan region.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.32403, 52.0671])
.setPopup(popup1) // sets a popup on this marker
.addTo(map);

// create the popup
var popup2 = new mapboxgl.Popup().setHTML('<h3 id="title">Het Strijkijzer</h3><p id="popup">Het Strijkijzer is a residential and office skyscraper in The Hague, Netherlands. It is the citys third tallest building.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker2';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.3241, 52.0714])
.setPopup(popup2) // sets a popup on this marker
.addTo(map);

// create the popup
var popup3 = new mapboxgl.Popup().setHTML('<h3 id="title">Den Haag HS railway station</h3><p id="popup">Den Haag Holland Spoor, is the oldest train station in The Hague, South Holland, Netherlands.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker3';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.321, 52.0700])
.setPopup(popup3) // sets a popup on this marker
.addTo(map);


// create the popup
var popup4 = new mapboxgl.Popup().setHTML('<h3 id="title">The Hague city centre</h3><p id="popup">The Hague city centre, perfect for a day of shopping.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker4';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.3082, 52.0752])
.setPopup(popup4) // sets a popup on this marker
.addTo(map);

// create the popup
var popup5 = new mapboxgl.Popup().setHTML('<h3 id="title">Binnenhof</h3><p id="popup">The Binnenhof is a meeting place of both houses of the States General of the Netherlands, as well as the Ministry of General Affairs and the office of the Prime Minister of the Netherlands.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker5';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.3133, 52.0796])
.setPopup(popup5) // sets a popup on this marker
.addTo(map);

// create the popup
var popup6 = new mapboxgl.Popup().setHTML('<h3 id="title">House of Representatives of the Netherlands</h3><p id="popup">The House of Representatives is the lower house of the bicameral parliament of the Netherlands, the States General, the other one being the Senate.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker6';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.3143, 52.0788])
.setPopup(popup6) // sets a popup on this marker
.addTo(map);

// create the popup
var popup7 = new mapboxgl.Popup().setHTML('<h3 id="title">The Hague Municipality</h3><p id="popup">The Hague City Hall is the city hall of The Hague, Netherlands.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker7';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.3169, 52.0780])
.setPopup(popup7) // sets a popup on this marker
.addTo(map);


map.addControl(new mapboxgl.NavigationControl()); 