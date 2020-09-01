"use strict";



function distance( lat1,  lon1,  lat2,  lon2, unit) {
 var theta = lon1 - lon2;
 var dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
 dist = Math.acos(dist);
 dist = rad2deg(dist);
 dist = dist * 60 * 1.1515;
 if (unit == 'K') {
   dist = dist * 1.609344;
 } else if (unit == 'N') {
   dist = dist * 0.8684;
   }
 return (dist);
}

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  This function converts decimal degrees to radians             :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function deg2rad( deg) {
 return (deg * Math.PI / 180.0);
}

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  This function converts radians to decimal degrees             :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function rad2deg( rad) {
 return (rad * 180.0 / Math.PI);
}

/*System.out.println(distance(32.9697, -96.80322, 29.46786, -98.53506, 'M') + " Miles\n");
System.out.println(distance(32.9697, -96.80322, 29.46786, -98.53506, 'K') + " Kilometers\n");
System.out.println(distance(32.9697, -96.80322, 29.46786, -98.53506, 'N') + " Nautical Miles\n");*/

var xx = distance(6.292842, 80.164797,6.299497, 80.156833,'K')*1000;

console.log(xx);

const citymap = {
  chicago: {
    center: {
      lat: 6.292842,  
      lng: 80.164797
    },
    population: 500
  },
  newyork: {
    center: {
      lat: 6.292842,  
      lng: 80.164797
    },
    population: 250 //distance(6.289834,80.161943,6.284257, 80.156364,'M')
  },
  sss: {
    center: {
      lat: 6.292842,  
      lng: 80.164797
    },
    population: 750//distance(6.289834,80.161943,6.284257, 80.156364,'M')
  } 
};

function initMap() {

  let url = "http://maps.google.com/mapfiles/ms/icons/";
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
       lat: 6.289834, 
      lng: 80.161943
    },
    mapTypeId: "terrain"
  }); // Construct the circle for each value in citymap.

  var locations = [
    ['Elpitiya Primary College',  6.292842, 80.164797,"red"],
    ['Kudagala K.V.', 6.274769, 80.169472,"green"],
    ['Shasanachandra vidyalaya',6.252597,80.162961,"blue"],
    ['Rathanasiri Rajakeeya college',6.299497, 80.156833,"red"],
    ['Pituwala K.V.', 6.263189, 80.183331,"green"],
    ['Rathanasiri Rajakeeya college', 6.299497, 80.156833,"red"],
    ['St.Theresa Girls school', 6.276122, 80.141550,"green"],
    ['Delpona Girimananda K.V.', 6.337842, 80.19117,"red"],
    ['Metiviliya Sri Medananda K.V', 6.348944, 80.209564,"red"],
    ['Ihala Omaththa K.V.',  6.329036, 80.176758,"red"],
    ['Omatta K.V.',  6.347364, 80.167908,"red"],
    ['Aviththawa Nalanda K.V.',  6.349422, 80.151122,"red"],
    ['Walambagala K.V.',  6.286328, 80.187733,"green"],
    ['Thalagaspe K.V',  6.303614, 80.205722,"red"],
    ['Amugoda Sudharaka K.V',  6.321133, 80.216864,"red"],
    ['Igala Thalawa K.V',  6.283800, 80.133114,"green"],
    ['Igalkanda Tamil K.V.',  6.288633, 80.147292,"red"],
    ['Ambana K.V',  6.242719, 80.217308,"green"],
    ['Eramulla K.V.',  6.226331, 80.183667,"red"],
    ['Diyakithulkanda K.V',  6.248794, 80.243428,"green"],
    ['Wathurawila K.V',  6.228294, 80.229600,"green"],
    ['Nawadagala Maha Vidyalaya',  6.310447, 80.144611,"red"],
    ['Ganegoda Vidyalaya',  6.313408, 80.163417,"red"],
    ['Amugoda Vidyalaya',  6.321642, 80.218600,"red"],
    ['Indipalegoda Vidyalaya',  6.337583, 80.223944,"green"],
    ['Anurudhdhagama K.V',  6.271014, 80.134256,"red"],
    ['Kiripedda K.V',  6.261497, 80.126828,"green"],
    ['Bandula Senadeera K.V',  6.265547, 80.113383,"red"],
    ['Yakkatuwa K.V',  6.247475, 80.126372,"green"],
    ['Ethkandura Seewali Vidyalaya',  6.236439, 80.155042,"red"],
    ['Divithura Sri Dhammathilaka Vidyalaya',  6.219711, 80.169894,"green"],
    ['Thanabaddegama K.v',  6.237847, 80.166911,"red"],
    ['Kaluwalagoda K.V',  6.314025, 80.111194,"red"],
    ['Thalgahawatta K.V',  6.287997, 80.111750,"green"],
    ['Hipankanda Vidyalaya',  6.335328, 80.120989,"red"],
    ['Igala Saranankara K.V',  6.282514, 80.156872,"red"],
    ['Pinikahana Siriniwasa K.V',  6.219206, 80.198919,"red"],
    ['Bogaha K.V',  6.302544, 80.171633,"red"]
   ];
  
  var marker, count;
  for (count = 0; count < locations.length; count++) {
    let arrurl = url + locations[count][3] + "-dot.png";
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      //label: locations[count][0],
      label: {text: locations[count][0], color: "red",fontSize: "16px"},
      title: locations[count][0],
      icon: {
        url: arrurl
      }
    }); 
  }

  // Note: We scale the area of the circle based on the population.
	var x = 2;
  for (const city in citymap) {
    // Add the circle for this city to the map.
		x = x + 1;
    var y = '#fcba0';
    const cityCircle = new google.maps.Circle({
      strokeColor: "#ff0400",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      fillColor: y.concat(x.toString()),
      fillOpacity: 0.05,
      map,
      center: citymap[city].center,
      radius: citymap[city].population
    }
    );
    console.log("xx",citymap[city].population);
  }

  google.maps.event.addListener(map, 'click', function(event) {
    alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
    $('#Latitude').val(event.latLng.lat());
    $('#longitude').val(event.latLng.lng());

    var lat =  event.latLng.lat();   
    var lon =  event.latLng.lng();  

    var xx = distance(6.292842, 80.164797,lat, lon,'K')*1000;
    console.log("lon>>>>>>",xx);

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lon),
      map: map,
      label: {text: "Home", color: "blue",fontSize: "16px"},
      icon: {
        url:  url + "blue-dot.png"
      }
    }); 
   
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: y.concat(x.toString()),
      fillOpacity: 0.05,
      map,
      center: {
        lat: lat,   
       lng: lon
     },
      radius: xx
    }
    );
  });
 
  
 
}

