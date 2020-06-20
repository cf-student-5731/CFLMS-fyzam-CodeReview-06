var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var generateRandomDate = function () {
        var start = new Date(2015, 0, 1);
        var end = new Date();
        var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date;
    };
    var randomDate = generateRandomDate();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    // DEFINE CLASSES----------------------------------------
    var location = /** @class */ (function () {
        function location(pName, pCity, pZipCode, pAddress, pImage, pCreationDate) {
            this.name = '';
            this.city = '';
            this.zipCode = 0;
            this.address = '';
            this.image = '';
            this.creationDate = '';
            this.name = pName;
            this.city = pCity;
            this.zipCode = pZipCode;
            this.address = pAddress;
            this.image = pImage;
            this.creationDate = pCreationDate;
        }
        ;
        location.prototype.displayHeading = function () {
            return "\n\t\t\t\t<span style=\"position: relative;\"><a style=\"position: absolute; top: -120px;\" id=\"navPlaces\"></a></span>\n\t\t\t\t<div class=\"col-10 text-center chapterHeading d-flex justify-content-between mb-2\">\n\t\t\t\t\t<a class= \"h5 nav-link text-decoration-none toplink\" href=\"#\">top</a>\n\t\t\t\t\t<div class =\"h2\"style=\"line-height: 3rem\">PLACES</div>\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<button style=\"line-height: 2rem\" type=\"button\" class=\"dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortPlacesAsc\">Ascending</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortPlacesDesc\">Descending</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        };
        location.prototype.display = function () {
            return "\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5\">\n\t\t\t\t\t<p><h4>" + this.name + "!</h4></p>\n\t\t\t\t\t<p class=\"addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.zipCode + " " + this.city + ", " + this.address + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\">Created: " + Intl.DateTimeFormat('en-US', options).format(this.creationDate) + "</p>\n\t\t\t\t\t<img class= \"imgsize d-none d-md-block\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\">\t\n\t\t\t\t</div>\n\t\t\t";
        };
        ;
        return location;
    }());
    ;
    var restaurant = /** @class */ (function (_super) {
        __extends(restaurant, _super);
        function restaurant(pName, pCity, pZipCode, pAddress, pImage, pCreationDate, pTelNum, pType, pWebAddress) {
            var _this = _super.call(this, pName, pCity, pZipCode, pAddress, pImage, pCreationDate) || this;
            _this.telNum = '';
            _this.type = '';
            _this.webAddress = '';
            _this.telNum = pTelNum;
            _this.type = pType;
            _this.webAddress = pWebAddress;
            return _this;
        }
        ;
        restaurant.prototype.displayHeading = function () {
            return "\n\t\t\t\t<span style=\"position: relative;\"><a style=\"position: absolute; top: -120px;\" id=\"navRestaurants\"></a></span>\n\t\t\t\t<div class=\"col-10 text-center chapterHeading d-flex justify-content-between mb-2\">\n\t\t\t\t\t<a class=\"h5 nav-link text-decoration-none toplink\" href=\"#\">top</a>\n\t\t\t\t\t<div class =\"h2\" style=\"line-height: 3rem\">RESTAURANTS</div>\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<button  style=\"line-height: 2rem\" type=\"button\" class=\"dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortRestaurantsAsc\">Ascending</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortRestaurantsDesc\">Descending</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        };
        restaurant.prototype.display = function () {
            return "\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5\">\n\t\t\t\t\t<p><h4>" + this.name + "!</h4></p>\n\t\t\t\t\t<p class=\"addressWrapper h5\">" + this.type + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.zipCode + " " + this.city + ", " + this.address + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\"> Tel.: " + this.telNum + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\"><a href=\"" + this.webAddress + "\" target=\"_blank\">" + this.webAddress + "</a></p>\n\t\t\t\t\t<p class=\"addressWrapper\">Created: " + Intl.DateTimeFormat('en-US', options).format(this.creationDate) + "</p>\n\t\t\t\t\t<img class= \"imgsize d-none d-md-block\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\">\t\n\t\t\t\t</div>\n\t\t\t";
        };
        ;
        return restaurant;
    }(location));
    ;
    var event = /** @class */ (function (_super) {
        __extends(event, _super);
        function event(pName, pCity, pZipCode, pAddress, pImage, pCreationDate, pEventDate, pEventTime, pEventPrice) {
            var _this = _super.call(this, pName, pCity, pZipCode, pAddress, pImage, pCreationDate) || this;
            _this.eventDate = '';
            _this.eventTime = '';
            _this.eventPrice = '';
            _this.eventDate = pEventDate;
            _this.eventTime = pEventTime;
            _this.eventPrice = pEventPrice;
            return _this;
        }
        ;
        event.prototype.displayHeading = function () {
            return "\n\t\t\t<span style=\"position: relative;\"><a style=\"position: absolute; top: -120px;\" id=\"navEvents\"></a></span>\n\t\t\t\t<div class=\"col-10 text-center chapterHeading d-flex justify-content-between mb-2\">\n\t\t\t\t\t<a class= \"h5 nav-link text-decoration-none toplink\" href=\"#\">top</a>\n\t\t\t\t\t<div class =\"h2\" style=\"line-height: 3rem\">EVENTS</div>\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<button style=\"line-height: 2rem\" type=\"button\" class=\" dropdown btn btn-lg btn-transparent dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortEventsAsc\">Ascending</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item dropdownItemStyle sortEventsDesc\">Descending</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        };
        event.prototype.display = function () {
            return "\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3 text-left itemWrapper mb-5\">\n\t\t\t\t\t<p><h4>" + this.name + "!</h4></p>\n\t\t\t\t\t<p class=\"addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.zipCode + " " + this.city + ", " + this.address + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\">" + this.eventDate + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\">" + this.eventTime + ", " + this.eventPrice + "</p>\n\t\t\t\t\t<p class=\"addressWrapper\">Created: " + Intl.DateTimeFormat('en-US', options).format(this.creationDate) + "</p>\n\t\t\t\t\t<img class= \"imgsize d-none d-md-block\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\">\t\n\t\t\t\t</div>\n\t\t\t";
        };
        ;
        return event;
    }(location));
    ;
    // CREATE CONTENT----------------------------------------
    var places = new Array();
    // (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string)
    places.push(new location('Stephansdom', 'Wien', 1010, 'Stephansplatz 3', './img/stephansdom.jpg', generateRandomDate()));
    places.push(new location('Donauinsel', 'Wien', 1200, 'Donauinsel', './img/donauinsel.jpg', generateRandomDate()));
    places.push(new location('Neusiedler See', 'Burgenland', 7100, 'Neusiedl am See', './img/neusiedlersee.jpg', generateRandomDate()));
    places.push(new location('Riesenrad', 'Wien', 1020, 'Prater', './img/riesenrad.jpg', generateRandomDate()));
    var restaurants = new Array();
    // (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pTelNum: string, pType: string, pWebAddress: string)
    restaurants.push(new restaurant('Plachutta Wien', 'Wien', 1010, 'Wollzeile 38', './img/plachutta.jpg', generateRandomDate(), '+43 1 877 70 87 0', 'Österreichische Küche', 'http://www.plachutta.at'));
    restaurants.push(new restaurant('Steirereck', 'Wien', 1030, 'Am Heumarkt 2A', './img/steirereck.jpg', generateRandomDate(), '+43 1 713 31 68', 'Wiener Küche', 'https://www.steirereck.at'));
    restaurants.push(new restaurant('Schweizerhaus', 'Wien', 1020, 'Prater 116', './img/schweizerhaus.jpg', generateRandomDate(), '+43 1 7280152 0', 'Wiener Küche', 'https://schweizerhaus.at/'));
    restaurants.push(new restaurant('Lucky Wock', 'Wien', 1210, 'Wagramer Strasse 189b', './img/luckywock.jpg', generateRandomDate(), '+43256 89 80', 'Asiatische Küche', 'https://www.luckywok.at/'));
    var events = new Array();
    // (pName: string, pCity: string, pZipCode: number, pAddress: string, pImage: string, pEventDate: string, pEventTime: string, pEventPrice: string)
    events.push(new event('Wiener Weihnachtstraum', 'Wien', 1010, 'Rathausplatz', './img/christkindlmarkt.jpg', generateRandomDate(), 'November-Dezember', '16:00-23:00', 'Eintritt frei'));
    events.push(new event('FM4 Frequency Festival', 'Niederösterreich', 3100, 'St Pölten', './img/frequency.jpg', generateRandomDate(), '20-22. August', '09:00-04:00', '120€'));
    events.push(new event('Opernball', 'Wien', 1010, 'Opernring 2', './img/opernball.jpg', generateRandomDate(), '21.02.2021', '18:00-04:00', '1.200€'));
    events.push(new event('Neujahrskonzert', 'Wien', 1010, 'Schottenring 7-9', './img/neujahrskonzert.jpeg', generateRandomDate(), '01.01.2021', '09:00-13:00', '2.500€'));
    // CREATE NAVBAR----------------------------------------
    var createNavbar = function (domHook) {
        $(domHook).append("\n\t\t<nav class=\"navbar navbar-expand-md navbar-light bg-light sticky-top\">\n\t\t\t<a class=\"navbar-brand\" href=\"./index.html\">Home</a>\n\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\t\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#navPlaces\">Places<span class=\"sr-only\">(current)</span></a>\n\t\t\t\t\t</li>\t\t\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#navRestaurants\">Restaurants<span class=\"sr-only\">(current)</span></a>\n\t\t\t\t\t</li>\t\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#navEvents\">Events<span class=\"sr-only\">(current)</span></a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\n");
    };
    // FUNCTIONS----------------------------------------
    var createCarousel = function (domHook) {
        $(domHook).append("\n\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-interval=\"4000\" data-ride=\"carousel\" data-pause=\"false\">\n\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t  </ol>\n\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"./img/banner_vienna.jpg\" alt=\"Vienna\">\n\t\t\t\t\t\t<div class=\"carousel-caption d-none d-sm-block\">\n\t\t\t\t\t\t\t<div class =\"carouselCapture\">\n\t\t\t\t\t\t\t\t<h5>Visit awesome Places in Austria</h5>\n\t\t\t\t\t\t\t\t<p>Vienna</p>\n\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"./img/banner_restaurant.jpg\" alt=\"Restaurant\">\n\t\t\t\t\t\t<div class=\"carousel-caption d-none d-sm-block\">\n\t\t\t\t\t\t\t<div class =\"carouselCapture\">\n\t\t\t\t\t\t\t\t<h5>Visit awesome Restaurants</h5>\n\t\t\t\t\t\t\t\t<p>in Vienna</p>\n\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"./img/banner_mountain.jpg\" alt=\"Mountain\">\n\t\t\t\t\t\t<div class=\"carousel-caption d-none d-sm-block\">\n\t\t\t\t\t\t<div class =\"carouselCapture\">\t\n\t\t\t\t\t\t\t\t<h5>Visit awesome Destinations</h5>\n\t\t\t\t\t\t\t\t<p>in Austria</p>\n\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t</a>\n\t\t\t  \t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t  \t</a>\n\t\t\t</div>\n\t\t");
    };
    var createJumbotron = function (domHook) {
        $(domHook).append("\n\t\t\t<div class=\"jumbotron jumbotron-fluid text-center jumboWrapper\">\n\t\t\t\t<div class=\"container jumboWrapper\">\n\t\t\t\t\t<img src=\"./img/banner_deewan.jpg\" alt=\"Deewan\">\n\t\t\t\t\t<h1 class=\"display-4\">Der Wiener Deewan</h1>\n\t\t\t\t\t<p class=\"lead\">Good food good mood, eat what you want pay as you wish.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    var createMainFrame = function (domHook) {
        $(domHook).append("\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"row d-flex justify-content-center\" id=\"placesHook\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row d-flex justify-content-center\" id=\"restaurantsHook\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row d-flex justify-content-center\" id=\"eventsHook\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    var createFooter = function (domHook) {
        $(domHook).append("\n\t\t\t<div class=\"footer col-12 text-center d-flex justify-content-center align-items-center\">\n\t\t\t<p>&copy; fyzam</p>\n\t\t\t</div>\n\t\t");
    };
    var addContent = function (section) {
        var addSection = '';
        var htmlHook = '';
        switch (section) {
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
        }
        ;
        for (var j in addSection) {
            if (j == '0') {
                $(htmlHook).append(addSection[j].displayHeading());
            }
            ;
            $(htmlHook).append(addSection[j].display());
        }
        ;
    };
    var addSortEvents = function (section) {
        var addSortEventAsc = '';
        var addSortEventDesc = '';
        switch (section) {
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
        }
        ;
        $(addSortEventAsc).on({
            'click': function (evt) {
                sorter(section, 'asc');
            }
        });
        $(addSortEventDesc).on({
            'click': function (evt) {
                sorter(section, 'desc');
            }
        });
    };
    // SOTER----------------------------------------	
    var sorter = function (section, direction) {
        var sortSection = '';
        var sortHook = '';
        switch (section) {
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
        var compare = 0;
        if (direction == 'asc') {
            compare = function (a, b) {
                if (a.creationDate > b.creationDate)
                    return 1;
                if (a.creationDate < b.creationDate)
                    return -1;
                return 0;
            };
        }
        else {
            compare = function (a, b) {
                if (a.creationDate < b.creationDate)
                    return 1;
                if (a.creationDate > b.creationDate)
                    return -1;
                return 0;
            };
        }
        ;
        sortSection.sort(compare);
        $(sortHook).empty();
        for (var j in sortSection) {
            if (j == '0') {
                $(sortHook).append(sortSection[j].displayHeading());
            }
            ;
            $(sortHook).append(sortSection[j].display());
            addSortEvents(section);
        }
        ;
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
