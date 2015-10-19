/* 
Flags
========================================================================== */

var countryFlag = {}
countryFlag.isolist = {
	"AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "Åland Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BL": "Saint Barthélemy",
    "BM": "Bermuda",
    "BN": "Brunei Darussalam",
    "BO": "Bolivia, Plurinational State of",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos (Keeling) Islands",
    "CD": "Congo, the Democratic Republic of the",
    "CF": "Central African Republic",
    "CG": "Congo",
    "CH": "Switzerland",
    "CI": "Côte d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Curaçao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands (Malvinas)",
    "FM": "Micronesia, Federated States of",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GF": "French Guiana",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GP": "Guadeloupe",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran, Islamic Republic of",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "Korea, Democratic People's Republic of",
    "KR": "Korea, Republic of",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Lao People's Democratic Republic",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova, Republic of",
    "ME": "Montenegro",
    "MF": "Saint Martin (French part)",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "Macedonia, the former Yugoslav Republic of",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MP": "Northern Mariana Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PS": "Palestinian Territory, Occupied",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "SI": "Slovenia",
    "SJ": "Svalbard and Jan Mayen",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten (Dutch part)",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan, Province of China",
    "TZ": "Tanzania, United Republic of",
    "UA": "Ukraine",
    "UG": "Uganda",
    "UM": "United States Minor Outlying Islands",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Holy See (Vatican City State)",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela, Bolivarian Republic of",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "VN": "Viet Nam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna",
    "WS": "Samoa",
    "YE": "Yemen",
    "YT": "Mayotte",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
}

countryFlag.isoNum = function(res){
	$.each( countryFlag.isolist, function( key, value ) {
		if(key === res){
		var pngCheck = key.toLowerCase()
		// console.log(pngCheck);
		var flagImage = $('.iso').html('<img src= Resources/flags/' +pngCheck+ '.png alt= Flag of ' +value+ '/>')
	}
	});
};

/* 
Weather
========================================================================== */

var weatherWidget = {};
weatherWidget.apiKey = 'd29a3444678ebd70';
// FUNCTION 3a
weatherWidget.getConditions = function(cityName){
	var apiUrl = 'http://api.wunderground.com/api/'+weatherWidget.apiKey+'/conditions/q/Canada/' + cityName + '.json';
		$.ajax({
			url: apiUrl,
			method: 'GET',
			dataType: 'jsonp'
			}).then(function(res){
				weatherWidget.displayConditions(res.current_observation, cityName);
				
				// now that we have the data
				// we want to pss it to our displayConditions method

	});
};
// FUNCTION 4a
weatherWidget.displayConditions = function(weatherInfo, city) {
	console.log("In displayConditions", weatherInfo);
	// now we need to grab the elements on the page
	// and set the text inside of them to be
	// the appropriate value
	// $('.weather_image').css('background-image', weatherInfo.icon_url);
	if(weatherInfo === undefined){
		alert(city +' is not a city');
	}
	else{
	$('div.weather_string').text(weatherInfo.weather);
	$('span.temp_c').text(weatherInfo.temp_c);
	$('h2.city_name').text(weatherInfo.display_location.city);
	$('p.date_time').text(weatherInfo.observation_time);
	photosApp.init(weatherInfo.display_location.city);
	countryFlag.isoNum(weatherInfo.display_location.country_iso3166);
	};
};

// FUNCTION 3b
// setting up listener for the file
weatherWidget.formSubmit = function(){
	$('.search_form').on('submit', function(e){
		e.preventDefault(); //Prevents default action like form refresh
		var	cityName = $('input#search_input').val();
		$('input#search_input').val(''); //Clearing the search area
		// console.log(cityName);
		weatherWidget.getConditions(cityName)
	});
};

// FUNCTION 2
weatherWidget.init = function(){
	// get current weather conditions for Toronto
	weatherWidget.getConditions('Toronto');
	// When we get it , put it on the page
	weatherWidget.formSubmit();

};

/* 
Flickr
========================================================================== */

// photoApp object that is empty
var photosApp = {};
photosApp.textFromWeather = 'clouds';

// adding an api key to the photoApp object
photosApp.apiKey = '95b8f19045563070b82f0d9017104093';

// FUNCTION 5
// flickrs mandatory callback (photoApp accepted here 2)
photosApp.displayPhotos = function(res){
	// console.log('in dp', res);
	$.each(res.photos.photo, function(i, value) {
		var image = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '_h.jpg';
		// console.log(value.id);
		// console.log(image);
		$('.weatherImg').css('background', "url("+image+")") ;		
	});
};

// Initializations
// FUNCTION 4b
photosApp.init = function(searchFlickr){
	$.ajax({
		url: 'https://api.flickr.com/services/rest/',
		dataType: 'jsonp',
		method: 'GET',
		data: {
			api_key: photosApp.apiKey,
			format: 'json',
			method: 'flickr.photos.search',
			text: searchFlickr +" sky",
			content_type: 1
		}
	});
};

// flickrs mandatory callback (photoApp passed here 1)
// FUNCTION 4c
function jsonFlickrApi(res){
	photosApp.displayPhotos(res);
};

/* 
Document Ready
========================================================================== */

// FUNCTION 1
$(function() {
	// calling the init method that is within the photoApp object
	weatherWidget.init();

});
