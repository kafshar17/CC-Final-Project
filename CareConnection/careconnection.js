function initMap()
{
	var myLatLng = {lat: 37.594735, lng:-121.713326};
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {center: myLatLng, zoom: 9} );
	
	var marker = new google.maps.Marker({position: {lat: 37.253268, lng: -121.951318}, icon: "school.png", map: map, title: 'Workshop'});
	var contentString = "Writing Your Cancer Journey: An Expressive Writing Workshop, The Radiation Therapy Experience";
	var infowindow = new google.maps.InfoWindow({content: contentString});
	marker.addListener('click', function() {infowindow.open(map, marker);});
	
	var marker2 = new google.maps.Marker({position: {lat: 37.739482, lng:-122.466928}, icon: "cosmetic.png", map: map, title: 'Cosmetics'});
	var contentString2 = "Free Wigs provided by The American Cancer Society.";
	var infowindow2 = new google.maps.InfoWindow({content: contentString2});
	marker2.addListener('click', function() {infowindow2.open(map, marker2);});
	
	//transportation
	var marker3 = new google.maps.Marker({position: {lat: 37.553354, lng:-121.978441}, icon: "transportation.png", map: map, title: 'Transportation'});
	var contentString3 = "Drivers For Survivors";
	var infowindow3 = new google.maps.InfoWindow({content: contentString3});
	marker3.addListener('click', function() {infowindow3.open(map, marker3);});
	
	var marker4 = new google.maps.Marker({position: {lat: 37.233892, lng:-121.964605}, icon: "fitness.png", map: map, title: 'Fitness'});
	var contentString4 = "Yoga Basics for Survivors; Gentile Pilates";
	var infowindow4 = new google.maps.InfoWindow({content: contentString4});
	marker4.addListener('click', function() {infowindow4.open(map, marker4);});
	
	var marker5 = new google.maps.Marker({position: {lat: 37.431380, lng:-122.125470}, icon: "fitness.png", map: map, title: 'Fitness'});
	var contentString5 = "Exercise for health.";
	var infowindow5 = new google.maps.InfoWindow({content: contentString5});
	marker5.addListener('click', function() {infowindow5.open(map, marker5);});  
	
	//stanford hospital arts/music
	var marker6 = new google.maps.Marker({position: {lat: 37.433245, lng:-122.175563}, icon: "musicNote.gif", map: map, title: 'Art and Music'});
	var contentString6 = "Concerts in the Cancer Center Lobby; Art in the ITA";
	var infowindow6 = new google.maps.InfoWindow({content: contentString6});
	marker6.addListener('click', function() {infowindow6.open(map, marker6);});
	
	//stanford hospital workshops
	var marker7 = new google.maps.Marker({position: {lat: 37.435925, lng:-122.176377}, icon: "school.png", map: map, title: 'Workshop'});
	var contentString7 = "The Stanford Letter Project; Cancer Clinical Trials and the Future of Care: What You Should Know; Caregivers Workshop; Healty Toolkit Internet 101; Lymphedema- What You Need To Know";
	var infowindow7 = new google.maps.InfoWindow({content: contentString7});
	marker7.addListener('click', function() {infowindow7.open(map, marker7);});
	
	var marker8 = new google.maps.Marker({position: {lat: 37.485742, lng:-122.202977}, icon: "school.png", map: map, title: 'Workshop'});
	var contentString8 = "Managing and Understanding Your Cancer Treatment";
	var infowindow8 = new google.maps.InfoWindow({content: contentString8});
	marker8.addListener('click', function() {infowindow8.open(map, marker8);});
	
	var marker9 = new google.maps.Marker({position: {lat: 37.946342, lng:-122.532794}, icon: "cosmetic.png", map: map, title: 'Cosmetic'});
	var contentString9 = "Spa Treatments and Mentoring for Cancer Patients";
	var infowindow9 = new google.maps.InfoWindow({content: contentString9});
	marker9.addListener('click', function() {infowindow9.open(map, marker9);});
	
	var marker10 = new google.maps.Marker({position: {lat: 37.759608, lng:-122.435153}, icon: "fitness.png", map: map, title: 'Fitness'});
	var contentString10 = "Living through cancer with exercise";
	var infowindow10 = new google.maps.InfoWindow({content: contentString10});
	marker10.addListener('click', function() {infowindow10.open(map, marker10);});
	
	//stanford hospital spiritual
	var marker11 = new google.maps.Marker({position: {lat: 37.441432, lng:-122.168625}, icon: "spiritual.png", map: map, title: 'Fitness'});
	var contentString11 = "Lucile Packard Spiritual Care; Mindfulness Meditation; Healing Touch";
	var infowindow11 = new google.maps.InfoWindow({content: contentString11});
	marker11.addListener('click', function() {infowindow11.open(map, marker11);});
	
	var marker12 = new google.maps.Marker({position: {lat: 37.258372, lng:-121.918866}, icon: "sg.png", map: map, title: 'Support Group'});
	var contentString12 = "Blood Cancer Family Support Group";
	var infowindow12 = new google.maps.InfoWindow({content: contentString12});
	marker12.addListener('click', function() {infowindow12.open(map, marker12);});
	
	//stanford hospital support group
	var marker13 = new google.maps.Marker({position: {lat: 37.441619, lng:-122.169396}, icon: "sg.png", map: map, title: 'Support Group'});
	var contentString13 = "GI Cancer Supprt Group; Gynecological Cancer Support Group; Head and Neck Cancer Support Group; Leukemia and Lymphoma Support Group; Lung Cancer Support Group; Myeoprolifeative Neoplasms(MPN) Supprt Group; Singing for Your Soul; Myelodysplastic Syndromes(MDS) Support Group; Meningioma Support Group";
	var infowindow13 = new google.maps.InfoWindow({content: contentString13});
	marker13.addListener('click', function() {infowindow13.open(map, marker13);});
	
	var marker14 = new google.maps.Marker({position: {lat: 38.014679, lng:-122.540086}, icon: "food.png", map: map, title: 'Food'});
	var contentString14 = "Ceres Community Project";
	var infowindow14 = new google.maps.InfoWindow({content: contentString14});
	marker14.addListener('click', function() {infowindow14.open(map, marker14);});
	
	var marker15 = new google.maps.Marker({position: {lat: 37.783822, lng:-122.419095}, icon: "food.png", map: map, title: 'Food'});
	var contentString15 = "Project Open Hand San Francisco";
	var infowindow15 = new google.maps.InfoWindow({content: contentString15});
	marker15.addListener('click', function() {infowindow15.open(map, marker15);});
	
	var marker16 = new google.maps.Marker({position: {lat: 37.809364, lng:-122.273136}, icon: "food.png", map: map, title: 'Food'});
	var contentString16 = "Project Open Hand Oakland";
	var infowindow16 = new google.maps.InfoWindow({content: contentString16});
	marker16.addListener('click', function() {infowindow16.open(map, marker16);});
	
	var marker17 = new google.maps.Marker({position: {lat: 37.256016, lng:-121.966391}, icon: "fitness.png", map: map, title: 'Fitness'});
	var contentString17 = "Tai Chi";
	var infowindow17 = new google.maps.InfoWindow({content: contentString17});
	marker17.addListener('click', function() {infowindow17.open(map, marker17);});
	
	//stanford hospital fitness
	var marker18 = new google.maps.Marker({position: {lat: 37.436074, lng:-122.175035}, icon: "fitness.png", map: map, title: 'Spiritual'});
	var contentString18 = "Yoga Basics for Survivors";
	var infowindow18 = new google.maps.InfoWindow({content: contentString18});
	marker18.addListener('click', function() {infowindow18.open(map, marker18);});
	
	//stanford hospital cosmetic
	var marker19 = new google.maps.Marker({position: {lat: 37.437925, lng:-122.176377}, icon: "cosmetic.png", map: map, title: 'Cosmetic'});
	var contentString19 = "HERs Breast Cancer Foundation; Look Good... Feel Better; Wig Bank";
	var infowindow19 = new google.maps.InfoWindow({content: contentString19});
	marker19.addListener('click', function() {infowindow19.open(map, marker19);});

	var marker20 = new google.maps.Marker({position: {lat: 37.805843, lng:-122.266803}, icon: "transportation.png", map: map, title: 'transportation'});
	var contentString20 = "Road To Recoverey";
	var infowindow20 = new google.maps.InfoWindow({content: contentString20});
	marker20.addListener('click', function() {infowindow20.open(map, marker20);});


	var markers = [];
	
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'; 
	var icons = {
	cosmetics: {name: 'Cosmetics', icon: iconBase + 'salon.png'},
	spiritual: {name: 'Spiritual', icon: iconBase + 'sunny.png'},
	sg: {name: 'Support Group', icon: iconBase + 'mountains.png'},
	school: {name: 'Classes and Workshops', icon: iconBase + 'schools.png'},
	arts: {name: 'Arts', icon: iconBase + 'arts.png'},
	fitness: {name: 'Fitness', icon: iconBase + 'play.png'},
	food: {name: 'Food', icon: iconBase + 'dining.png'},
	transportation: {name: 'Transportation', icon: iconBase + 'cabs.png'}
	};

	var legend = document.getElementById('legend');
	var div = document.createElement('div');
	for (var key in icons) {
		var type = icons[key];
		var name = type.name;
		var icon = type.icon;
		div.innerHTML += '<img src="' + icon + '"> ' + name;
		legend.appendChild(div);
	}

	<!-- map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend); -->
}