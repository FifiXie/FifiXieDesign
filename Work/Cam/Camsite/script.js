// var unirestT = require('unirest');


// unirestT.get("https://webcamstravel.p.rapidapi.com/webcams/list/country=IT?lang=en&show=webcams%3Aimage%2Clocation")
// .header("X-RapidAPI-Host", "webcamstravel.p.rapidapi.com")
// .header("X-RapidAPI-Key", "60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35")
// .end(function (result) {
//    console.log(result.status, result.headers);
//    for (var i = 0 ; i < 10; i++) {
//    	console.log(result.body.result.webcams[i].image.current.preview);
//    	};
// });


// var unirest = require('unirest');

// unirest.get("https://webcamstravel.p.rapidapi.com/webcams/list/country=fr?lang=en&show=webcams%3Aimage%2Clocation")
//   .header("X-RapidAPI-Key", "60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35")
//   .end(function (result) {
//     console.log(result.status, result.headers, result.body);
//   });

	//console.log(geocoder);

	//const isoCountries = {
		// 'AF' : 'Afghanistan',
		// 'AX' : 'Aland Islands',
		// 'AL' : 'Albania',
		// 'DZ' : 'Algeria',
		// 'AS' : 'American Samoa',
		// 'AD' : 'Andorra',
		// 'AO' : 'Angola',
		// 'AI' : 'Anguilla',
		// 'AQ' : 'Antarctica',
		// 'AG' : 'Antigua And Barbuda',
		// 'AR' : 'Argentina',
		// 'AM' : 'Armenia',
		// 'AW' : 'Aruba',
		// 'AU' : 'Australia',
		// 'AT' : 'Austria',
		// 'AZ' : 'Azerbaijan',
		// 'BS' : 'Bahamas',
		// 'BH' : 'Bahrain',
		// 'BD' : 'Bangladesh',
		// 'BB' : 'Barbados',
		// 'BY' : 'Belarus',
		// 'BE' : 'Belgium',
		// 'BZ' : 'Belize',
		// 'BJ' : 'Benin',
		// 'BM' : 'Bermuda',
		// 'BT' : 'Bhutan',
		// 'BO' : 'Bolivia',
		// 'BA' : 'Bosnia And Herzegovina',
		// 'BW' : 'Botswana',
		// 'BV' : 'Bouvet Island',
		// 'BR' : 'Brazil',
		// 'IO' : 'British Indian Ocean Territory',
		// 'BN' : 'Brunei Darussalam',
		// 'BG' : 'Bulgaria',
		// 'BF' : 'Burkina Faso',
		// 'BI' : 'Burundi',
		// 'KH' : 'Cambodia',
		// 'CM' : 'Cameroon',
		// 'CA' : 'Canada',
		// 'CV' : 'Cape Verde',
		// 'KY' : 'Cayman Islands',
		// 'CF' : 'Central African Republic',
		// 'TD' : 'Chad',
		// 'CL' : 'Chile',
		// 'CN' : 'China',
		// 'CX' : 'Christmas Island',
		// 'CC' : 'Cocos (Keeling) Islands',
		// 'CO' : 'Colombia',
		// 'KM' : 'Comoros',
		// 'CG' : 'Congo',
		// 'CD' : 'Congo, Democratic Republic',
		// 'CK' : 'Cook Islands',
		// 'CR' : 'Costa Rica',
		// 'CI' : 'Cote D\'Ivoire',
		// 'HR' : 'Croatia',
		// 'CU' : 'Cuba',
		// 'CY' : 'Cyprus',
		// 'CZ' : 'Czech Republic',
		// 'DK' : 'Denmark',
		// 'DJ' : 'Djibouti',
		// 'DM' : 'Dominica',
		// 'DO' : 'Dominican Republic',
		// 'EC' : 'Ecuador',
		// 'EG' : 'Egypt',
		// 'SV' : 'El Salvador',
		// 'GQ' : 'Equatorial Guinea',
		// 'ER' : 'Eritrea',
		// 'EE' : 'Estonia',
		// 'ET' : 'Ethiopia',
		// 'FK' : 'Falkland Islands (Malvinas)',
		// 'FO' : 'Faroe Islands',
		// 'FJ' : 'Fiji',
		// 'FI' : 'Finland',
		// 'FR' : 'France',
		// 'GF' : 'French Guiana',
		// 'PF' : 'French Polynesia',
		// 'TF' : 'French Southern Territories',
		// 'GA' : 'Gabon',
		// 'GM' : 'Gambia',
		// 'GE' : 'Georgia',
		// 'DE' : 'Germany',
		// 'GH' : 'Ghana',
		// 'GI' : 'Gibraltar',
		// 'GR' : 'Greece',
		// 'GL' : 'Greenland',
		// 'GD' : 'Grenada',
		// 'GP' : 'Guadeloupe',
		// 'GU' : 'Guam',
		// 'GT' : 'Guatemala',
		// 'GG' : 'Guernsey',
		// 'GN' : 'Guinea',
		// 'GW' : 'Guinea-Bissau',
		// 'GY' : 'Guyana',
		// 'HT' : 'Haiti',
		// 'HM' : 'Heard Island & Mcdonald Islands',
		// 'VA' : 'Holy See (Vatican City State)',
		// 'HN' : 'Honduras',
		// 'HK' : 'Hong Kong',
		// 'HU' : 'Hungary',
		// 'IS' : 'Iceland',
		// 'IN' : 'India',
		// 'ID' : 'Indonesia',
		// 'IR' : 'Iran, Islamic Republic Of',
		// 'IQ' : 'Iraq',
		// 'IE' : 'Ireland',
		// 'IM' : 'Isle Of Man',
		// 'IL' : 'Israel',
		// 'IT' : 'Italy',
		// 'JM' : 'Jamaica',
		// 'JP' : 'Japan',
		// 'JE' : 'Jersey',
		// 'JO' : 'Jordan',
		// 'KZ' : 'Kazakhstan',
		// 'KE' : 'Kenya',
		// 'KI' : 'Kiribati',
		// 'KR' : 'Korea',
		// 'KW' : 'Kuwait',
		// 'KG' : 'Kyrgyzstan',
		// 'LA' : 'Lao People\'s Democratic Republic',
		// 'LV' : 'Latvia',
		// 'LB' : 'Lebanon',
		// 'LS' : 'Lesotho',
		// 'LR' : 'Liberia',
		// 'LY' : 'Libyan Arab Jamahiriya',
		// 'LI' : 'Liechtenstein',
		// 'LT' : 'Lithuania',
		// 'LU' : 'Luxembourg',
		// 'MO' : 'Macao',
		// 'MK' : 'Macedonia',
		// 'MG' : 'Madagascar',
		// 'MW' : 'Malawi',
		// 'MY' : 'Malaysia',
		// 'MV' : 'Maldives',
		// 'ML' : 'Mali',
		// 'MT' : 'Malta',
		// 'MH' : 'Marshall Islands',
		// 'MQ' : 'Martinique',
		// 'MR' : 'Mauritania',
		// 'MU' : 'Mauritius',
		// 'YT' : 'Mayotte',
		// 'MX' : 'Mexico',
		// 'FM' : 'Micronesia, Federated States Of',
		// 'MD' : 'Moldova',
		// 'MC' : 'Monaco',
		// 'MN' : 'Mongolia',
		// 'ME' : 'Montenegro',
		// 'MS' : 'Montserrat',
		// 'MA' : 'Morocco',
		// 'MZ' : 'Mozambique',
		// 'MM' : 'Myanmar',
		// 'NA' : 'Namibia',
		// 'NR' : 'Nauru',
		// 'NP' : 'Nepal',
		// 'NL' : 'Netherlands',
		// 'AN' : 'Netherlands Antilles',
		// 'NC' : 'New Caledonia',
		// 'NZ' : 'New Zealand',
		// 'NI' : 'Nicaragua',
		// 'NE' : 'Niger',
		// 'NG' : 'Nigeria',
		// 'NU' : 'Niue',
		// 'NF' : 'Norfolk Island',
		// 'MP' : 'Northern Mariana Islands',
		// 'NO' : 'Norway',
		// 'OM' : 'Oman',
		// 'PK' : 'Pakistan',
		// 'PW' : 'Palau',
		// 'PS' : 'Palestinian Territory, Occupied',
		// 'PA' : 'Panama',
		// 'PG' : 'Papua New Guinea',
		// 'PY' : 'Paraguay',
		// 'PE' : 'Peru',
		// 'PH' : 'Philippines',
		// 'PN' : 'Pitcairn',
		// 'PL' : 'Poland',
		// 'PT' : 'Portugal',
		// 'PR' : 'Puerto Rico',
		// 'QA' : 'Qatar',
		// 'RE' : 'Reunion',
		// 'RO' : 'Romania',
		// 'RU' : 'Russian Federation',
		// 'RW' : 'Rwanda',
		// 'BL' : 'Saint Barthelemy',
		// 'SH' : 'Saint Helena',
		// 'KN' : 'Saint Kitts And Nevis',
		// 'LC' : 'Saint Lucia',
		// 'MF' : 'Saint Martin',
		// 'PM' : 'Saint Pierre And Miquelon',
		// 'VC' : 'Saint Vincent And Grenadines',
		// 'WS' : 'Samoa',
		// 'SM' : 'San Marino',
		// 'ST' : 'Sao Tome And Principe',
		// 'SA' : 'Saudi Arabia',
		// 'SN' : 'Senegal',
		// 'RS' : 'Serbia',
		// 'SC' : 'Seychelles',
		// 'SL' : 'Sierra Leone',
		// 'SG' : 'Singapore',
		// 'SK' : 'Slovakia',
		// 'SI' : 'Slovenia',
		// 'SB' : 'Solomon Islands',
		// 'SO' : 'Somalia',
		// 'ZA' : 'South Africa',
		// 'GS' : 'South Georgia And Sandwich Isl.',
		// 'ES' : 'Spain',
		// 'LK' : 'Sri Lanka',
		// 'SD' : 'Sudan',
		// 'SR' : 'Suriname',
		// 'SJ' : 'Svalbard And Jan Mayen',
		// 'SZ' : 'Swaziland',
		// 'SE' : 'Sweden',
		// 'CH' : 'Switzerland',
		// 'SY' : 'Syrian Arab Republic',
		// 'TW' : 'Taiwan',
		// 'TJ' : 'Tajikistan',
		// 'TZ' : 'Tanzania',
		// 'TH' : 'Thailand',
		// 'TL' : 'Timor-Leste',
		// 'TG' : 'Togo',
		// 'TK' : 'Tokelau',
		// 'TO' : 'Tonga',
		// 'TT' : 'Trinidad And Tobago',
		// 'TN' : 'Tunisia',
		// 'TR' : 'Turkey',
		// 'TM' : 'Turkmenistan',
		// 'TC' : 'Turks And Caicos Islands',
		// 'TV' : 'Tuvalu',
		// 'UG' : 'Uganda',
		// 'UA' : 'Ukraine',
		// 'AE' : 'United Arab Emirates',
		// 'GB' : 'United Kingdom',
		// 'US' : 'United States',
		// 'UM' : 'United States Outlying Islands',
		// 'UY' : 'Uruguay',
		// 'UZ' : 'Uzbekistan',
		// 'VU' : 'Vanuatu',
		// 'VE' : 'Venezuela',
		// 'VN' : 'Viet Nam',
		// 'VG' : 'Virgin Islands, British',
		// 'VI' : 'Virgin Islands, U.S.',
		// 'WF' : 'Wallis And Futuna',
		// 'EH' : 'Western Sahara',
		// 'YE' : 'Yemen',
		// 'ZM' : 'Zambia',
		// 'ZW' : 'Zimbabwe'
	//};

//function getCountryName (countryName) {

	// country name
	// YOU HAVE THE KEY, NEED TO GET VALUE

	// this is no longer useful bc its opposite what u want to do
    // if (isoCountries.hasOwnProperty(countryName)) {
    //     return isoCountries[countryCode];
    // } else {
    //     return countryCode;
    // }
   // var countryCode = 'something';
    //console.log(countryCode);
//}

// function getKeyByValue(object, value) {
// 	return Object.keys(object).find(key => object[key] === value);
// }

// console.log(getKeyByValue(isoCountries,"Yemen"));

//var endpointCord;
// var country = 'IT';

// var endpointCountry = 'https://webcamstravel.p.rapidapi.com/webcams/list/country='+ country +'?lang=en&show=webcams%3Aimage%2Clocation';

// //const endpointCountry = 'https://webcamstravel.p.rapidapi.com/webcams/list/country=IT?lang=en&show=webcams%3Aimage%2Clocation';

// 		// fetch(url, { config object })
// 		// function foo() { return 2 }
// 		const promise_Country = fetch(endpointCountry, {
// 			headers: {
// 				'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
// 				'X-RapidAPI-Key': '60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35'
// 			} 
// 		})

// 		promise_Country.then((response) => response.json())
// 		.then(serializedResponse => {
// 			console.log(serializedResponse.result.webcams[0].image.current.preview)
// 		})
// 		.catch(e => {
// 			console.error('NO WE MESSED UP. ', e);
// 		})



// var endpointCord = "https://webcamstravel.p.rapidapi.com/webcams/list/nearby=42.293615006066915,-71.01176025390157,20?lang=en&show=webcams%3Aimage%2Clocation"

//var endpointCord
// const promise_Cord = fetch(endpointCord, {
// 	headers: {
// 		'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
// 		'X-RapidAPI-Key': '60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35'
// 	} 
// })

// const promise_Cord = fetch(endpointCord, {
// 	headers: {
// 		'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
// 		'X-RapidAPI-Key': '60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35'
// 	} 
// })

// promise_Cord.then((response) => response.json())
// .then(serializedResponse => {
// 	console.log(serializedResponse.result.webcams[0].image.current.preview)
// })
// .catch(e => {
// 	console.error('NO WE MESSED UP. ', e);
// })



var coordinatePair = 
{
	"lat" : null,
	"lng" : null
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlmaXgiLCJhIjoiY2p1eWl5cmU0MHlwbzQzcGZrZnd1NWRncyJ9.N-rUt556XFXb-vT7Jc42Lg';
const map = new mapboxgl.Map({
  	container: 'map',
	style: 'mapbox://styles/fifix/cjvfs44b6nes71frvigo5mvrm',
	center: [-73.939281, 40.739757],
	zoom: 10.0
});

var geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


map.on('click', function (e) {
    //document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        //JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        //JSON.stringify(e.lngLat);
        console.log(e.lngLat.lng);
        console.log(e.lngLat.lat);

        coordinatePair.lng = e.lngLat.lng
        coordinatePair.lat = e.lngLat.lat

        endpointCord = 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby='+ coordinatePair.lat +','+ coordinatePair.lng + ',20?lang=en&show=webcams%3Aimage%2Clocation'

        console.log('endpointCord', endpointCord)

        fetch(endpointCord, {
        	headers: {
        		'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
        		'X-RapidAPI-Key': '60ad27fd18mshc46ccd54ff2f1f4p115c32jsnb79ae9fb8c35'
        	} 
        }).then((response) => response.json())
        .then(serializedResponse => {

        	for (var i = 0 ; i < 10; i++) {
        	var post = serializedResponse.result.webcams[i].image.current.preview;
        	//console.log('worked: ', post);

        	var img = document.createElement("img");
 
			img.src = post;
			console.log('worked: ', post);
			var src = document.getElementById("pics");
 
			src.appendChild(img);

        

      //   	 function insert(){
      //       var src = document.getElementById("pics");
      //       var img = document.createElement("img");
      //       img.src = post;

      //       var img = new Image();   // Create new img element
		    // img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';


      //   	}

      //   	insert();

        }

        	document.getElementById('info').innerHTML = ('Total Live Landscape Webcams: ' + serializedResponse.result.total)
        })
        .catch(e => {

        	console.error('NO WE MESSED UP. ', e);
        })

        // clearBox();

});


function clearBox()
{
    document.getElementById('pics').innerHTML = "";
    document.getElementById('info').innerHTML = "";
}