var fire = {};

$(document).ready(function(){
	setSizes();



	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.satellite',
	    accessToken: authy.mb
	}).addTo(mymap);

	var marker;

	mymap.on('click',function(e){
		if(marker) {
			mymap.removeLayer(marker);
		}
		marker = new L.marker(e.latlng,{draggable:false});
		mymap.addLayer(marker);
		fire.latlng = e.latlng;
		fire.lat = e.latlng.lat;
		fire.lng = e.latlng.lat;
	})

	//$('.content img').addClass('pure-img');


	$(window).load(function(){
		setSizes()
;	
	});
	
	$(window).resize(function(){
		setSizes();
	
	});

	$(window).scroll(function(){
	
	});


});

function setSizes() {
	var winW = $(window).width();
	var winH = $(window).height();
	
	/*
	var postsW = $(".posts").width();
	var postsH = $(".posts").height();
	var $footer = $(".footer");
	
	if (postsH < winH) {
		
	} else {
		
	}
	*/
}

function renderForms() {
	var defaults = {
	  container: false,
	  formData: false,
	  label: {
	    formRendered: 'Form Rendered',
	    noFormData: 'No form data.',
	    other: 'Other',
	    selectColor: 'Select Color'
	  },
	  render: true,
	  notify: {
	    error: function(message) {
	      return console.error(message);
	    },
	    success: function(message) {
	      return console.log(message);
	    },
	    warning: function(message) {
	      return console.warn(message);
	    }
	  }
	}
}