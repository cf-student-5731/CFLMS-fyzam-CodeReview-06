$(document).ready(function () {

	let generateRandomDate = () => {	
		let start = new Date(2015, 0, 1)
		let end = new Date()
		let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		return date;
	};
	let randomDate = generateRandomDate();
	let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

	// DEFINE CLASSES----------------------------------------
	class location{
		public name: string = '';
		public city: string = '';
		public zipCode: number = 0;
		public address: string = '';
		public image: string = '';
		public creationDate: any = '';
		

		constructor(pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pCreationDate: any){
			this.name = pName;
			this.city = pCity;
			this.zipCode = pZipCode;
			this.address = pAddress;
			this.image = pImage;
			this.creationDate = pCreationDate;
		};

		displayHeading(){
			return`
				<span style="position: relative;"><a style="position: absolute; top: -120px;" id="navPlaces"></a></span>
				<div class="col-10 text-center chapterHeading d-flex justify-content-between mb-2">
					<a class= "h5 nav-link text-decoration-none toplink" href="#">top</a>
					<div class ="h2"style="line-height: 3rem">PLACES</div>
					<div class="dropdown">
						<button style="line-height: 2rem" type="button" class="dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Sort
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item dropdownItemStyle sortPlacesAsc">Ascending</a>
							<a class="dropdown-item dropdownItemStyle sortPlacesDesc">Descending</a>
						</div>
					</div>
				</div>
			`;
		}

		display(){			
			return `
				<div class="col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5">
					<p><h4>${this.name}!</h4></p>
					<p class="addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.zipCode} ${this.city}, ${this.address}</p>
					<p class="addressWrapper">Created: ${Intl.DateTimeFormat('en-US', options).format(this.creationDate)}</p>
					<img class= "imgsize d-none d-md-block" src="${this.image}" alt="Image of ${this.name}">	
				</div>
			`;			
		};
	};

	class restaurant extends location{
		public telNum: string = '';
		public type: string = '';
		public webAddress: string = '';

		constructor(pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pCreationDate: any, pTelNum: string, pType: string, pWebAddress: string){
		super(pName, pCity, pZipCode, pAddress, pImage, pCreationDate);
			this.telNum = pTelNum;
			this.type = pType;
			this.webAddress = pWebAddress;	
		};

		displayHeading(){
			return`
				<span style="position: relative;"><a style="position: absolute; top: -120px;" id="navRestaurants"></a></span>
				<div class="col-10 text-center chapterHeading d-flex justify-content-between mb-2">
					<a class="h5 nav-link text-decoration-none toplink" href="#">top</a>
					<div class ="h2" style="line-height: 3rem">RESTAURANTS</div>
					<div class="dropdown">
						<button  style="line-height: 2rem" type="button" class="dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Sort
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item dropdownItemStyle sortRestaurantsAsc">Ascending</a>
							<a class="dropdown-item dropdownItemStyle sortRestaurantsDesc">Descending</a>
						</div>
					</div>
				</div>
			`;
		}
				
		display(){			
			return `
				<div class="col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5">
					<p><h4>${this.name}!</h4></p>
					<p class="addressWrapper h5">${this.type}</p>
					<p class="addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.zipCode} ${this.city}, ${this.address}</p>
					<p class="addressWrapper"> Tel.: ${this.telNum}</p>
					<p class="addressWrapper"><a href="${this.webAddress}" target="_blank">${this.webAddress}</a></p>
					<p class="addressWrapper">Created: ${Intl.DateTimeFormat('en-US', options).format(this.creationDate)}</p>
					<img class= "imgsize d-none d-md-block" src="${this.image}" alt="Image of ${this.name}">	
				</div>
			`;			
		};
	};

	class event extends location{
		public eventDate: string = '';
		public eventTime: string = '';
		public eventPrice: string = '';
	
		constructor(pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pCreationDate: any, pEventDate: string, pEventTime: string, pEventPrice: string){
			super(pName, pCity, pZipCode, pAddress, pImage, pCreationDate);
			this.eventDate = pEventDate;
			this.eventTime = pEventTime;
			this.eventPrice = pEventPrice; 
		};

		displayHeading(){
			return`
			<span style="position: relative;"><a style="position: absolute; top: -120px;" id="navEvents"></a></span>
				<div class="col-10 text-center chapterHeading d-flex justify-content-between mb-2">
					<a class= "h5 nav-link text-decoration-none toplink" href="#">top</a>
					<div class ="h2" style="line-height: 3rem">EVENTS</div>
					<div class="dropdown">
						<button style="line-height: 2rem" type="button" class=" dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Sort
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item dropdownItemStyle sortEventsAsc">Ascending</a>
							<a class="dropdown-item dropdownItemStyle sortEventsDesc">Descending</a>
						</div>
					</div>
				</div>
			`;
		}

		display(){			
			return `
				<div class="col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5">
					<p><h4>${this.name}!</h4></p>
					<p class="addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.zipCode} ${this.city}, ${this.address}</p>
					<p class="addressWrapper">${this.eventDate}</p>
					<p class="addressWrapper">${this.eventTime}, ${this.eventPrice}</p>
					<p class="addressWrapper">Created: ${Intl.DateTimeFormat('en-US', options).format(this.creationDate)}</p>
					<img class= "imgsize d-none d-md-block" src="${this.image}" alt="Image of ${this.name}">	
				</div>
			`;			
		};
	};

// CREATE CONTENT----------------------------------------
	let places: any = new Array();
	// (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string)
	places.push(new location('Stephansdom', 'Wien', 1010, 'Stephansplatz 3', './img/stephansdom.jpg', generateRandomDate()));
	places.push(new location('Donauinsel', 'Wien', 1200, 'Donauinsel', './img/donauinsel.jpg', generateRandomDate()));
	places.push(new location('Neusiedler See', 'Burgenland', 7100, 'Neusiedl am See', './img/neusiedlersee.jpg', generateRandomDate()));
	places.push(new location('Riesenrad', 'Wien', 1020, 'Prater', './img/riesenrad.jpg', generateRandomDate()));


	let restaurants: any = new Array();
	// (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pTelNum: string, pType: string, pWebAddress: string)
	restaurants.push(new restaurant('Plachutta Wien', 'Wien', 1010, 'Wollzeile 38', './img/plachutta.jpg', generateRandomDate(), '+43 1 877 70 87 0', 'Österreichische Küche', 'http://www.plachutta.at'));
	restaurants.push(new restaurant('Steirereck', 'Wien', 1030, 'Am Heumarkt 2A', './img/steirereck.jpg', generateRandomDate(), '+43 1 713 31 68', 'Wiener Küche', 'https://www.steirereck.at'));
	restaurants.push(new restaurant('Schweizerhaus', 'Wien', 1020, 'Prater 116', './img/schweizerhaus.jpg', generateRandomDate(), '+43 1 7280152 0', 'Wiener Küche', 'https://schweizerhaus.at/'));
	restaurants.push(new restaurant('Lucky Wock', 'Wien', 1210, 'Wagramer Strasse 189b', './img/luckywock.jpg', generateRandomDate(), '+43256 89 80', 'Asiatische Küche', 'https://www.luckywok.at/'));



	let events: any = new Array();
	// (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pEventDate: string, pEventTime: string, pEventPrice: string)
	events.push(new event('Wiener Weihnachtstraum', 'Wien', 1010, 'Rathausplatz', './img/christkindlmarkt.jpg', generateRandomDate(), 'November-Dezember', '16:00-23:00', 'Eintritt frei'));
	events.push(new event('FM4 Frequency Festival', 'Niederösterreich', 3100, 'St Pölten', './img/frequency.jpg', generateRandomDate(), '20-22. August', '09:00-04:00', '120€'));
	events.push(new event('Opernball', 'Wien', 1010, 'Opernring 2', './img/opernball.jpg', generateRandomDate(), '21.02.2021', '18:00-04:00', '1.200€'));
	events.push(new event('Neujahrskonzert', 'Wien', 1010, 'Schottenring 7-9', './img/neujahrskonzert.jpeg', generateRandomDate(), '01.01.2021', '09:00-13:00', '2.500€'));


// CREATE NAVBAR----------------------------------------
let createNavbar = (domHook) => {
	$(domHook).append(`
		<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
			<a class="navbar-brand" href="./index.html">Home</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
	
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="#navPlaces">Places<span class="sr-only">(current)</span></a>
					</li>		
					<li class="nav-item">
						<a class="nav-link" href="#navRestaurants">Restaurants<span class="sr-only">(current)</span></a>
					</li>	
					<li class="nav-item">
						<a class="nav-link" href="#navEvents">Events<span class="sr-only">(current)</span></a>
					</li>


				</ul>
			</div>
		</nav>

`);
};

// FUNCTIONS----------------------------------------

	let createCarousel = (domHook) => {
		$(domHook).append(`
			<div id="carouselExampleIndicators" class="carousel slide" data-interval="4000" data-ride="carousel" data-pause="false">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				  </ol>
				  <div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100" src="./img/banner_vienna.jpg" alt="Vienna">
						<div class="carousel-caption d-none d-sm-block">
							<div class ="carouselCapture">
								<h5>Visit awesome Places in Austria</h5>
								<p>Vienna</p>
							</div>
  						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="./img/banner_restaurant.jpg" alt="Restaurant">
						<div class="carousel-caption d-none d-sm-block">
							<div class ="carouselCapture">
								<h5>Visit awesome Restaurants</h5>
								<p>in Vienna</p>
							</div>
  						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="./img/banner_mountain.jpg" alt="Mountain">
						<div class="carousel-caption d-none d-sm-block">
						<div class ="carouselCapture">	
								<h5>Visit awesome Destinations</h5>
								<p>in Austria</p>
							</div>
  						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
			  	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
			  	</a>
			</div>
		`);
	};

	let createJumbotron = (domHook) => {
		$(domHook).append(`
			<div class="jumbotron jumbotron-fluid text-center jumboWrapper">
				<div class="container jumboWrapper">
					<img src="./img/banner_deewan.jpg" alt="Deewan">
					<h1 class="display-4">Der Wiener Deewan</h1>
					<p class="lead">Good food good mood, eat what you want pay as you wish.</p>
				</div>
			</div>
		`);
	};


	let createMainFrame = (domHook) => {
		$(domHook).append(`
			<div class="container-fluid">
				<div class="row d-flex justify-content-center" id="placesHook">
				</div>
				<div class="row d-flex justify-content-center" id="restaurantsHook">
				</div>
				<div class="row d-flex justify-content-center" id="eventsHook">
				</div>
			</div>
		`);
	};

	let createFooter = (domHook) => {
		$(domHook).append(`
			<div class="footer col-12 text-center d-flex justify-content-center align-items-center">
			<p>&copy; fyzam</p>
			</div>
		`);
	};


	let addContent = (section) => {
		let addSection: any = '';
		let htmlHook: string = '';
		switch(section){
			case 'places':
				addSection = places;
				htmlHook = '#placesHook';
				break;
	
			case 'restaurants':
				addSection = restaurants;
				htmlHook = '#restaurantsHook';
				break;
	
			case 'events':
				addSection = events;
				htmlHook = '#eventsHook';
				break;
			default: '';
		};	
	
		for (let j in addSection) {
			if(j == '0'){
				$(htmlHook).append(addSection[j].displayHeading());};
			$(htmlHook).append(addSection[j].display());
		};
	};
		
	let addSortEvents = (section) =>{
		let addSortEventAsc: any = '';
		let addSortEventDesc: any = '';
		switch(section){
			case 'places':
				addSortEventAsc = '.sortPlacesAsc';
				addSortEventDesc = '.sortPlacesDesc';
				break;
	
			case 'restaurants':
				addSortEventAsc = '.sortRestaurantsAsc';
				addSortEventDesc = '.sortRestaurantsDesc';
				break;
	
			case 'events':
				addSortEventAsc = '.sortEventsAsc';
				addSortEventDesc = '.sortEventsDesc';
				break;
			default: '';
		};

		$(addSortEventAsc).on({
			'click': (evt: EventTarget): void => {
				sorter(section, 'asc');
			}
		});
	
		$(addSortEventDesc).on({
			'click': (evt: EventTarget): void => {
				sorter(section, 'desc');
			}
		});
	};


	
// SOTER----------------------------------------	
	let sorter = (section, direction) =>{
		let sortSection: any = '';
		let sortHook: any = '';
		switch(section){
			case 'places':
				sortSection = places.slice(0);
				sortHook = '#placesHook';
				break;

			case 'restaurants':
				sortSection = restaurants.slice(0);
				sortHook = '#restaurantsHook';
				break;

			case 'events':
				sortSection = events.slice(0);
				sortHook = '#eventsHook';
				break;
			default: '';
		}	
		
		let compare: any = 0;
		if(direction == 'asc'){
			compare = (a, b) => {
				if (a.creationDate > b.creationDate)
					return 1;
				if (a.creationDate < b.creationDate)
					return -1;
				return 0;
			};	
		}
		else{
			compare = (a, b) => {
			if (a.creationDate < b.creationDate)
				return 1;
			if (a.creationDate > b.creationDate)
				return -1;
			return 0;
			};
		};
		
		
		sortSection.sort(compare);
		$(sortHook).empty();
		for (let j in sortSection) {
			if(j == '0'){
				$(sortHook).append(sortSection[j].displayHeading());};
			$(sortHook).append(sortSection[j].display());
			addSortEvents(section);
		};
	};

// MAIN----------------------------------------
createNavbar('body');
createCarousel('body');
createJumbotron('body');
createMainFrame('body');

addContent('places');
addContent('restaurants');
addContent('events');

addSortEvents('places');
addSortEvents('restaurants');
addSortEvents('events');

createFooter('body');


});