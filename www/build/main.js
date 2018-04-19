webpackJsonp([7],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(actionSheetCtrl, database, navCtrl, navParams) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.database = database;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventRef = this.database.list(this.navParams.get('ID')).valueChanges();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        this.catTitle = this.navParams.get('ID');
    };
    CategoryPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Save',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Share',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Report',
                    role: 'destructive',
                    handler: function () {
                        console.log('Report clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = primary>\n    <ion-title>{{catTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list no-lines>\n  <ion-card *ngFor="let event of eventRef | async">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://hw-avy.datpiff.com/5/DJ927.gif">\n      </ion-avatar>\n      <h2>{{event.eventName}}</h2>\n      <p>{{event.date}}</p>\n      <p>{{event.location}}</p>\n\n    <ion-buttons item-end>\n      <button ion-button icon-left clear (click)="presentActionSheet()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n   </ion-buttons>\n\n   </ion-item>\n\n\n\n    <img src="{{event.coverURL}}">\n\n    <ion-card-content>\n      {{event.description}}\n    </ion-card-content>\n    \n  </ion-card> \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object])
    ], CategoryPage);
    return CategoryPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssistantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssistantPage = (function () {
    function AssistantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Which div section to display on screen.
        this.displaySection = 'base';
        // Details about when you would like to try to plan holding an event.
        this.planning = {
            lowerBound: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            upperBound: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            // Set to 00:00 *DO NOT CHANGE*
            duration: "2018-01-01T00:00:00-04:00",
        };
        // All events on calendar between set range of dates.
        this.plannedEvents = [];
        // Times you are available; make suggestions based on this set.
        this.availableTimes = [];
        // Times you have events already allocated to; only override if planned event has
        // higher priorty and conflicts in scheduling.
        this.busyTimes = [];
        // Finds events based on tag input.
        this.eventTagSearch = "";
        // Top suggested choices.
        this.suggestions = [];
        this.suggestionComment = "I suggest the following slot(s):";
        this.plannedEvents = navParams.get("plannedEvents");
    }
    // Change value of display section; causes divs to be hidden when display section is
    // not referenced.
    AssistantPage.prototype.getNextDisplay = function (displaySection) {
        switch (displaySection) {
            case "planEvent":
                this.displaySection = displaySection;
                break;
            case "giveSuggestion":
                this.giveSuggestion();
                this.displaySection = displaySection;
                break;
            case "lookupEvent":
                this.displaySection = displaySection;
                break;
        }
    };
    // Give suggestions based on available times.
    AssistantPage.prototype.giveSuggestion = function () {
        this.findAvailableTimes();
        var plannedHours = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.duration).hours() + 1;
        if (plannedHours == 24) {
            plannedHours = 0;
        }
        var plannedMinutes = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.duration).minutes();
        switch (this.availableTimes.length) {
            // No available times.
            case 0:
                this.suggestionComment = "There are no available times in given slot.";
                this.suggestions.push("Return home");
                return;
            default:
                for (var i = 0; i < this.availableTimes.length; i++) {
                    var eventStart = __WEBPACK_IMPORTED_MODULE_2_moment__((this.availableTimes[i].split("split_here"))[0]);
                    var eventEnd = __WEBPACK_IMPORTED_MODULE_2_moment__((this.availableTimes[i].split("split_here"))[0]);
                    eventEnd = eventEnd.add({ hours: plannedHours, minutes: plannedMinutes });
                    this.suggestions.push(eventStart.format("MMMM DD hh:mm a") + " - " + eventEnd.format("MMMM DD hh:mm a"));
                }
        }
    };
    AssistantPage.prototype.addSuggestion = function (event) {
        console.log(event);
    };
    AssistantPage.prototype.showEventTag = function () {
        console.log(this.eventTagSearch);
    };
    // Finds busy times within the range of planning variable.
    AssistantPage.prototype.findBusyTimes = function () {
        // Head of range for avaible start time.
        var lowerBound_TextType = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.lowerBound).format("MM/DD/YYYY");
        var lowerBound_DateType = __WEBPACK_IMPORTED_MODULE_2_moment__(lowerBound_TextType, "MM/DD/YYYY");
        // Tail of range for avaible start time.
        var upperBound_TextType = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.upperBound).format("MM/DD/YYYY");
        var upperBound_DateType = __WEBPACK_IMPORTED_MODULE_2_moment__(upperBound_TextType, "MM/DD/YYYY");
        // Calculates difference in days between head and tail of provided start times.
        var daysBetween = upperBound_DateType.diff(lowerBound_DateType, 'd');
        // Holds incremented day titles.
        var daysBetweenHolder = lowerBound_DateType;
        var busyTimes = [];
        for (daysBetween; daysBetween >= 0; daysBetween--) {
            if (this.plannedEvents[daysBetweenHolder.format("MM/DD/YYYY")] != undefined) {
                busyTimes = busyTimes.concat(this.plannedEvents[daysBetweenHolder.format("MM/DD/YYYY")]);
            }
            daysBetweenHolder.add(1, 'd');
        }
        busyTimes.sort();
        this.busyTimes = busyTimes;
    };
    //Finds avaible times within the range of planning variable.
    AssistantPage.prototype.findAvailableTimes = function () {
        this.findBusyTimes();
        // Head of range for avaible start time.
        var lowerBound = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.lowerBound);
        lowerBound.subtract(lowerBound.seconds(), "s");
        // Tail of range for avaible start time.
        var upperBound = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.upperBound);
        upperBound.subtract(upperBound.seconds(), "s");
        // Pulling the planned duration of the event from the given user input.
        var plannedHours = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.duration).hours() + 1;
        // Handle weird return value when input for hours is 00.
        if (plannedHours == 24) {
            plannedHours = 0;
        }
        var plannedMinutes = __WEBPACK_IMPORTED_MODULE_2_moment__(this.planning.duration).minutes();
        // If there are no busy times you are free to plan within given range.
        if (this.busyTimes.length == 0) {
            this.availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
            return;
        }
        // Find available times driver.
        var availableTimes = this.recurseDays(this.busyTimes, lowerBound, upperBound, plannedHours, plannedMinutes, 0);
        this.availableTimes = availableTimes;
    };
    AssistantPage.prototype.recurseDays = function (busyTimes, lowerBound, upperBound, plannedHours, plannedMinutes, index) {
        var availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
        // Holding values of allocated times for dates.
        var eventSplit;
        var eventStart;
        var eventEnd;
        var availableHours;
        var availableMinutes;
        // Loop through all busy times to find an unoccupied slot.
        for (index; index < busyTimes.length; index++) {
            eventSplit = this.busyTimes[index].split("split_here");
            eventStart = __WEBPACK_IMPORTED_MODULE_2_moment__(eventSplit[0]);
            eventStart.subtract(eventStart.seconds(), "s");
            eventEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(eventSplit[1]);
            eventEnd.subtract(eventEnd.seconds(), "s");
            // Event starts before range head.
            if (eventStart.isBefore(lowerBound)) {
                // Event ends before range start.
                if (eventEnd.isBefore(lowerBound)) {
                    continue;
                }
                // Event ends between given range.
                if (eventEnd.isBefore(upperBound)) {
                    availableHours = upperBound.diff(eventEnd, "h");
                    availableMinutes = upperBound.diff(eventEnd, "m");
                    // Calculate free time from event end until upper bound.
                    // If there is not enough time event cannot be planned in that slot.
                    if (plannedHours > availableHours) {
                        return new Array;
                    }
                    if (plannedHours == availableHours) {
                        if (plannedMinutes > availableMinutes) {
                            return new Array;
                        }
                        lowerBound = eventEnd;
                        availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
                        continue;
                    }
                    lowerBound = eventEnd;
                    availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
                    continue;
                }
                // There is an event during this time.
                return new Array;
            }
            else {
                // Event happens after given range.
                if (eventStart.isAfter(upperBound)) {
                    return new Array;
                }
                // Event starts between the range and ends after.
                if (eventEnd.isAfter(upperBound)) {
                    availableHours = eventStart.diff(lowerBound, "h");
                    availableMinutes = eventStart.diff(lowerBound, "m");
                    if (plannedHours > availableHours) {
                        return new Array;
                    }
                    if (plannedHours == availableHours) {
                        if (plannedMinutes > availableMinutes) {
                            return new Array;
                        }
                        upperBound = eventStart;
                        availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
                        continue;
                    }
                    // plannedhours < availableHours.
                    upperBound = eventStart;
                    availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
                    continue;
                }
                // Event is in between given range.
                var split_1 = [];
                var split_2 = [];
                // Sanity checks for split ranges.
                if ((plannedHours < eventStart.diff(lowerBound, "h")) ||
                    ((plannedHours == eventStart.diff(lowerBound, "h")) && (plannedMinutes <= eventStart.diff(lowerBound, "m")))) {
                    split_1 = this.recurseDays(busyTimes, lowerBound, eventStart, plannedHours, plannedMinutes, index + 1);
                }
                if ((plannedHours < upperBound.diff(eventEnd, "h")) ||
                    ((plannedHours == upperBound.diff(eventEnd, "h")) && (plannedMinutes <= upperBound.diff(eventEnd, "m")))) {
                    split_2 = this.recurseDays(busyTimes, eventEnd, upperBound, plannedHours, plannedMinutes, index + 1);
                }
                availableTimes = split_1.concat(split_2);
                availableTimes.sort();
            }
        }
        return availableTimes;
    };
    AssistantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssistantPage');
    };
    AssistantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-assistant',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/'<!--\n  Generated template for the AssistantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> Your Personal Assistant </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="displaySection == \'base\'">\n		<h1> How may I help you? </h1>\n		<ion-item>\n			<ion-select #Base (ionChange)="getNextDisplay(Base.value)">\n				<ion-option value="planEvent" >Plan an event</ion-option>\n				<ion-option value="lookupEvent">Look for an event</ion-option>>\n			</ion-select>\n		</ion-item>\n	</div>\n	<div *ngIf="displaySection == \'planEvent\'">\n		<h1> Tell me more </h1>\n		<form (ngSubmit)="getNextDisplay(\'giveSuggestion\')">\n			<ion-list>\n				<ion-item>\n					<ion-label floating> Range Start </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.lowerBound" name="planning.lowerBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Range End </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.upperBound" name="planning.upperBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Event Duration </ion-label>\n					<ion-datetime pickerFormat="HH:mm" [(ngModel)]="planning.duration" name="planning.duration" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<button ion-button type="submit" full round>Save Details</button>\n				</ion-item>\n			</ion-list>\n		</form>\n	</div>\n	<div *ngIf="displaySection == \'giveSuggestion\'">\n		<h1> Here\'s what I think </h1>\n		<h2 style="text-align: center; color: dodgerblue;"> {{suggestionComment}} </h2>\n		<ion-list>\n			<button ion-item *ngFor="let suggestion of suggestions" (click)="addSuggestion($event)">\n				{{suggestion}}\n			</button>\n		</ion-list>\n	</div>\n	<div *ngIf="displaySection == \'lookupEvent\'">\n		<h1> What\'s the mood? </h1>\n		<ion-item>\n        <ion-label floating> Event Category </ion-label>\n        <ion-select [(ngModel)]="eventTagSearch" name="eventTagSearch" (ionChange)="showEventTag()">\n          <ion-option value="Social" > Social </ion-option>\n          <ion-option value="Academic"> Academic </ion-option>\n        </ion-select>\n      </ion-item>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AssistantPage);
    return AssistantPage;
}());

//# sourceMappingURL=assistant.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExplorePage = (function () {
    function ExplorePage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    ExplorePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    ExplorePage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    ExplorePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ExplorePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ExplorePage.prototype, "mapElement", void 0);
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-explore',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/explore/explore.html"*/'<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Explore \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  \n\n<div #map id="map"></div> \n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/explore/explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendPage = (function () {
    function FriendPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    FriendPage.prototype.initializeItems = function () {
        this.items = [
            'Finn S.',
            'Angel',
            'Miya',
            'Sam',
            'Dmariee',
            'Tariq',
            'Shane',
            'Lee',
            'Jeff',
            'Rodney',
            'Cory',
            'Fred',
            'Lilly',
            'Wade',
            'Lebron',
            'Kobe',
            'Vanessa',
            'Emile',
            'Grace',
            'Tyrone',
            'London',
            'javon',
            'Ivy',
            'Lulu',
            'Trey',
            'Nancy',
            'Brandy',
            'Evan',
            'Quincey',
            'Harold',
            'Indigo',
            'Kym',
            'Oliver',
            'Tel Aiv',
            'Venus',
            'Calvin',
            'Winston'
        ];
    };
    FriendPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
        alert("You do not have permission to view item " + item + "'s schedule.");
    };
    FriendPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    FriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendPage');
    };
    FriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-friend',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/friend/friend.html"*/'<!--\n  Generated template for the FriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Friends</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/friend/friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_template__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assistant_assistant__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = (function () {
    function TaskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.months = ["JANUARY ", "FEBRUARY ", "MARCH ", "APRIL ", "MAY ", "JUNE ", "JULY ", "AUGUST ", "SEPTEMBER ", "OCTOBER ", "NOVEMBER ", "DECEMBER "];
        this.plannedEvents = {};
        this.eventSource = [];
        this.eventHolder = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    TaskPage.prototype.addEvent = function () {
        this.eventSource = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */], {
            "eventHolder": this.eventHolder,
            "plannedEvents": this.plannedEvents,
            "parentPage": this,
        });
    };
    TaskPage.prototype.callAssistant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__assistant_assistant__["a" /* AssistantPage */], {
            "plannedEvents": this.plannedEvents,
        });
    };
    TaskPage.prototype.onCurrentDateChanged = function (event) {
        this.viewTitle = this.months[event.getMonth()] + event.getFullYear();
    };
    ;
    TaskPage.prototype.onEventSelected = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__template_template__["a" /* TemplatePage */], {
            "event": event,
        });
    };
    TaskPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    TaskPage.prototype.updateCalendar = function (data) {
        this.eventSource = data;
    };
    TaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskPage');
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-task',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<button ion-button icon-only (click)="addSingleEvent()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="callAssistant()">\n              <ion-icon name="pulse"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="addEvent()">\n            	<ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">  \n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplatePage = (function () {
    function TemplatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = navParams.get("event");
    }
    TemplatePage.prototype.populateEventFields = function () {
        this.title = this.event.title;
        this.description = this.event.description;
        this.location = this.event.location;
        this.startTime = this.event.startTime;
        this.endTime = this.event.endTime;
    };
    TemplatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplatePage');
        this.populateEventFields();
    };
    TemplatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-template',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/template/template.html"*/'<!--\n  Generated template for the TemplatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>{{priority}}</p>\n<p>{{description}}</p>\n<p>{{location}}</p>\n<p>{{startTime}}</p>\n<p>{{endTime}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/template/template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TemplatePage);
    return TemplatePage;
}());

//# sourceMappingURL=template.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assistant/assistant.module": [
		576,
		6
	],
	"../pages/category/category.module": [
		575,
		5
	],
	"../pages/events/events.module": [
		578,
		4
	],
	"../pages/explore/explore.module": [
		577,
		3
	],
	"../pages/friend/friend.module": [
		579,
		2
	],
	"../pages/task/task.module": [
		580,
		1
	],
	"../pages/template/template.module": [
		581,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_friend__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explore_explore__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__task_task__["a" /* TaskPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__friend_friend__["a" /* FriendPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__events_events__["a" /* EventsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__explore_explore__["a" /* ExplorePage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/home/home.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Task" tabIcon="menu"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Friend" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Events" tabIcon = "apps"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Map" tabIcon="locate"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_task_task__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_events_events__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_template__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_category_category__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environment__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assistant/assistant.module#AssistantPageModule', name: 'AssistantPage', segment: 'assistant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend/friend.module#FriendPageModule', name: 'FriendPage', segment: 'friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template/template.module#TemplatePageModule', name: 'TemplatePage', segment: 'template', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_17__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 239,
	"./af.js": 239,
	"./ar": 240,
	"./ar-dz": 241,
	"./ar-dz.js": 241,
	"./ar-kw": 242,
	"./ar-kw.js": 242,
	"./ar-ly": 243,
	"./ar-ly.js": 243,
	"./ar-ma": 244,
	"./ar-ma.js": 244,
	"./ar-sa": 245,
	"./ar-sa.js": 245,
	"./ar-tn": 246,
	"./ar-tn.js": 246,
	"./ar.js": 240,
	"./az": 247,
	"./az.js": 247,
	"./be": 248,
	"./be.js": 248,
	"./bg": 249,
	"./bg.js": 249,
	"./bm": 250,
	"./bm.js": 250,
	"./bn": 251,
	"./bn.js": 251,
	"./bo": 252,
	"./bo.js": 252,
	"./br": 253,
	"./br.js": 253,
	"./bs": 254,
	"./bs.js": 254,
	"./ca": 255,
	"./ca.js": 255,
	"./cs": 256,
	"./cs.js": 256,
	"./cv": 257,
	"./cv.js": 257,
	"./cy": 258,
	"./cy.js": 258,
	"./da": 259,
	"./da.js": 259,
	"./de": 260,
	"./de-at": 261,
	"./de-at.js": 261,
	"./de-ch": 262,
	"./de-ch.js": 262,
	"./de.js": 260,
	"./dv": 263,
	"./dv.js": 263,
	"./el": 264,
	"./el.js": 264,
	"./en-au": 265,
	"./en-au.js": 265,
	"./en-ca": 266,
	"./en-ca.js": 266,
	"./en-gb": 267,
	"./en-gb.js": 267,
	"./en-ie": 268,
	"./en-ie.js": 268,
	"./en-il": 269,
	"./en-il.js": 269,
	"./en-nz": 270,
	"./en-nz.js": 270,
	"./eo": 271,
	"./eo.js": 271,
	"./es": 272,
	"./es-do": 273,
	"./es-do.js": 273,
	"./es-us": 274,
	"./es-us.js": 274,
	"./es.js": 272,
	"./et": 275,
	"./et.js": 275,
	"./eu": 276,
	"./eu.js": 276,
	"./fa": 277,
	"./fa.js": 277,
	"./fi": 278,
	"./fi.js": 278,
	"./fo": 279,
	"./fo.js": 279,
	"./fr": 280,
	"./fr-ca": 281,
	"./fr-ca.js": 281,
	"./fr-ch": 282,
	"./fr-ch.js": 282,
	"./fr.js": 280,
	"./fy": 283,
	"./fy.js": 283,
	"./gd": 284,
	"./gd.js": 284,
	"./gl": 285,
	"./gl.js": 285,
	"./gom-latn": 286,
	"./gom-latn.js": 286,
	"./gu": 287,
	"./gu.js": 287,
	"./he": 288,
	"./he.js": 288,
	"./hi": 289,
	"./hi.js": 289,
	"./hr": 290,
	"./hr.js": 290,
	"./hu": 291,
	"./hu.js": 291,
	"./hy-am": 292,
	"./hy-am.js": 292,
	"./id": 293,
	"./id.js": 293,
	"./is": 294,
	"./is.js": 294,
	"./it": 295,
	"./it.js": 295,
	"./ja": 296,
	"./ja.js": 296,
	"./jv": 297,
	"./jv.js": 297,
	"./ka": 298,
	"./ka.js": 298,
	"./kk": 299,
	"./kk.js": 299,
	"./km": 300,
	"./km.js": 300,
	"./kn": 301,
	"./kn.js": 301,
	"./ko": 302,
	"./ko.js": 302,
	"./ky": 303,
	"./ky.js": 303,
	"./lb": 304,
	"./lb.js": 304,
	"./lo": 305,
	"./lo.js": 305,
	"./lt": 306,
	"./lt.js": 306,
	"./lv": 307,
	"./lv.js": 307,
	"./me": 308,
	"./me.js": 308,
	"./mi": 309,
	"./mi.js": 309,
	"./mk": 310,
	"./mk.js": 310,
	"./ml": 311,
	"./ml.js": 311,
	"./mn": 312,
	"./mn.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./mt": 316,
	"./mt.js": 316,
	"./my": 317,
	"./my.js": 317,
	"./nb": 318,
	"./nb.js": 318,
	"./ne": 319,
	"./ne.js": 319,
	"./nl": 320,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 320,
	"./nn": 322,
	"./nn.js": 322,
	"./pa-in": 323,
	"./pa-in.js": 323,
	"./pl": 324,
	"./pl.js": 324,
	"./pt": 325,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 325,
	"./ro": 327,
	"./ro.js": 327,
	"./ru": 328,
	"./ru.js": 328,
	"./sd": 329,
	"./sd.js": 329,
	"./se": 330,
	"./se.js": 330,
	"./si": 331,
	"./si.js": 331,
	"./sk": 332,
	"./sk.js": 332,
	"./sl": 333,
	"./sl.js": 333,
	"./sq": 334,
	"./sq.js": 334,
	"./sr": 335,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 335,
	"./ss": 337,
	"./ss.js": 337,
	"./sv": 338,
	"./sv.js": 338,
	"./sw": 339,
	"./sw.js": 339,
	"./ta": 340,
	"./ta.js": 340,
	"./te": 341,
	"./te.js": 341,
	"./tet": 342,
	"./tet.js": 342,
	"./tg": 343,
	"./tg.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./ug-cn": 351,
	"./ug-cn.js": 351,
	"./uk": 352,
	"./uk.js": 352,
	"./ur": 353,
	"./ur.js": 353,
	"./uz": 354,
	"./uz-latn": 355,
	"./uz-latn.js": 355,
	"./uz.js": 354,
	"./vi": 356,
	"./vi.js": 356,
	"./x-pseudo": 357,
	"./x-pseudo.js": 357,
	"./yo": 358,
	"./yo.js": 358,
	"./zh-cn": 359,
	"./zh-cn.js": 359,
	"./zh-hk": 360,
	"./zh-hk.js": 360,
	"./zh-tw": 361,
	"./zh-tw.js": 361
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 536;

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyA9tzYjuDOkZ5mmK-2K1-a_cAXmvSRlTFQ",
    authDomain: "unio-app-14930.firebaseapp.com",
    databaseURL: "https://unio-app-14930.firebaseio.com",
    projectId: "unio-app-14930",
    storageBucket: "unio-app-14930.appspot.com",
    messagingSenderId: "1042457264926"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categories = [];
        this.categories = [];
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        this.categories.push({
            image: 'assets/imgs/Unio-Arts.png',
            pageID: 'Arts'
        }, {
            image: 'assets/imgs/Unio College.png',
            pageID: 'College'
        }, {
            image: 'assets/imgs/Unio Education.png',
            pageID: 'Education'
        }, {
            image: 'assets/imgs/Unio Music.png',
            pageID: 'Music'
        }, {
            image: 'assets/imgs/Unio Nightlife.png',
            pageID: 'Nightlife'
        }, {
            image: 'assets/imgs/Unio Sports.png',
            pageID: 'Sports'
        }, {
            image: 'assets/imgs/Unio-Comedy.png',
            pageID: 'Comedy'
        }, {
            image: 'assets/imgs/Unio-Volunteering.png',
            pageID: 'Volunteer'
        }, {
            image: 'assets/imgs/Unio-Festival.png',
            pageID: 'Festival'
        }, {
            image: 'assets/imgs/Unio-Family.png',
            pageID: 'Family'
        }, {
            image: 'assets/imgs/Unio-Eats.png',
            pageID: 'Eats'
        });
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.buttonClick = function (pageID) {
        var data = { ID: pageID };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], data);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = primary>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col col-6 col-md-4 col-xl-3 *ngFor="let category of categories">\n\n    \n    <img src="{{category.image}}" (click)="buttonClick(category.pageID)">\n    \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map