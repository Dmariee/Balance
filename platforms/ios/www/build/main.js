webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        this.plannedEvents = navParams.get("plannedEvents");
    }
    // Change value of display section; causes divs to be hidden when display section is
    // not referenced.
    AssistantPage.prototype.getNextDisplay = function (displaySection) {
        switch (displaySection) {
            case "planEvent":
                this.displaySection = displaySection;
                break;
            case "lookupEvent":
                this.displaySection = displaySection;
        }
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
        var availableTimes = [];
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
        // Holding values of allocated times of dates.
        var eventSplit;
        var eventStart;
        var eventEnd;
        // Loop through all busy times to find an unoccupied slot.
        for (var i = 0; i < this.busyTimes.length; i++) {
            eventSplit = this.busyTimes[i].split("split_here");
            eventStart = __WEBPACK_IMPORTED_MODULE_2_moment__(eventSplit[0]);
            eventStart.subtract(eventStart.seconds(), "s");
            eventEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(eventSplit[1]);
            eventEnd.subtract(eventEnd.seconds(), "s");
            // Event starts before range head.
            if (eventStart.isBefore(lowerBound)) {
                // Event ends before range start.
                if (eventEnd.isBefore(lowerBound)) {
                    console.log("Event starts before and ends before our bounds.", eventStart.format(), eventEnd.format());
                    continue;
                }
                else {
                    // Event ends between given range.
                    if (eventEnd.isBefore(upperBound)) {
                        var availableHours = upperBound.diff(eventEnd, "h");
                        var availableMinutes = upperBound.diff(eventEnd, "m");
                        // Calculate free time from event end until upperbound.
                        // If there is not enough time event cannot be planned in that slot.
                        if (plannedHours > availableHours) {
                            console.log("Not long enough duration for planning event.", eventEnd.format(), upperBound.format());
                            break;
                        }
                        if (plannedHours == availableHours) {
                            if (plannedMinutes > availableMinutes) {
                                console.log("Not long enough duration for planning event.", eventEnd.format(), upperBound.format());
                                break;
                            }
                            lowerBound = eventEnd;
                            console.log("Lower bound changed", lowerBound);
                            continue;
                        }
                        lowerBound = eventEnd;
                        console.log("Lower bound changed", lowerBound);
                        continue;
                    }
                    else {
                        console.log("Event is allocated for this time.");
                        break;
                    }
                }
            }
        }
    };
    AssistantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssistantPage');
    };
    AssistantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assistant',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/'<!--\n  Generated template for the AssistantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Your Personal Assistant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="displaySection == \'base\'">\n		<h1> How may I help you? </h1>\n		<ion-item>\n			<ion-select #C (ionChange)="getNextDisplay(C.value)">\n				<ion-option value="planEvent" >Plan an event</ion-option>\n				<ion-option value="lookupEvent">Look for an event</ion-option>>\n			</ion-select>\n		</ion-item>\n	</div>\n	<div *ngIf="displaySection == \'planEvent\'">\n		<h1> Tell me more </h1>\n		<form (ngSubmit)="findAvailableTimes()">\n			<ion-list>\n				<ion-item>\n					<ion-label floating> Range Start </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.lowerBound" name="planning.lowerBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Range End </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.upperBound" name="planning.upperBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Event Duration </ion-label>\n					<ion-datetime pickerFormat="HH:mm" [(ngModel)]="planning.duration" name="planning.duration" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<button ion-button type="submit" full round>Save Details</button>\n				</ion-item>\n			</ion-list>\n		</form>\n	</div>\n	<div *ngIf="displaySection == \'lookupEvent\'">\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AssistantPage);
    return AssistantPage;
}());

//# sourceMappingURL=assistant.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/friend/friend.html"*/'<!--\n  Generated template for the FriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Friends</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/friend/friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(283);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ExplorePage.prototype, "mapElement", void 0);
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/explore/explore.html"*/'<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Explore \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  \n\n<div #map id="map"></div> \n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/explore/explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_template__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assistant_assistant__ = __webpack_require__(104);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<button ion-button icon-only (click)="addSingleEvent()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="callAssistant()">\n              <ion-icon name="pulse"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="addEvent()">\n            	<ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">  \n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/template/template.html"*/'<!--\n  Generated template for the TemplatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>{{priority}}</p>\n<p>{{description}}</p>\n<p>{{location}}</p>\n<p>{{startTime}}</p>\n<p>{{endTime}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/template/template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TemplatePage);
    return TemplatePage;
}());

//# sourceMappingURL=template.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assistant/assistant.module": [
		416,
		5
	],
	"../pages/events/events.module": [
		417,
		4
	],
	"../pages/explore/explore.module": [
		419,
		3
	],
	"../pages/friend/friend.module": [
		418,
		2
	],
	"../pages/task/task.module": [
		420,
		1
	],
	"../pages/template/template.module": [
		421,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_friend__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explore_explore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/home/home.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Task" tabIcon="menu"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Friend" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Events" tabIcon = "apps"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Map" tabIcon="locate"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_task_task__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_events_events__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_template__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__ = __webpack_require__(104);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/assistant/assistant.module#AssistantPageModule', name: 'AssistantPage', segment: 'assistant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend/friend.module#FriendPageModule', name: 'FriendPage', segment: 'friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template/template.module#TemplatePageModule', name: 'TemplatePage', segment: 'template', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 160,
	"./af.js": 160,
	"./ar": 161,
	"./ar-dz": 162,
	"./ar-dz.js": 162,
	"./ar-kw": 163,
	"./ar-kw.js": 163,
	"./ar-ly": 164,
	"./ar-ly.js": 164,
	"./ar-ma": 165,
	"./ar-ma.js": 165,
	"./ar-sa": 166,
	"./ar-sa.js": 166,
	"./ar-tn": 167,
	"./ar-tn.js": 167,
	"./ar.js": 161,
	"./az": 168,
	"./az.js": 168,
	"./be": 169,
	"./be.js": 169,
	"./bg": 170,
	"./bg.js": 170,
	"./bm": 171,
	"./bm.js": 171,
	"./bn": 172,
	"./bn.js": 172,
	"./bo": 173,
	"./bo.js": 173,
	"./br": 174,
	"./br.js": 174,
	"./bs": 175,
	"./bs.js": 175,
	"./ca": 176,
	"./ca.js": 176,
	"./cs": 177,
	"./cs.js": 177,
	"./cv": 178,
	"./cv.js": 178,
	"./cy": 179,
	"./cy.js": 179,
	"./da": 180,
	"./da.js": 180,
	"./de": 181,
	"./de-at": 182,
	"./de-at.js": 182,
	"./de-ch": 183,
	"./de-ch.js": 183,
	"./de.js": 181,
	"./dv": 184,
	"./dv.js": 184,
	"./el": 185,
	"./el.js": 185,
	"./en-au": 186,
	"./en-au.js": 186,
	"./en-ca": 187,
	"./en-ca.js": 187,
	"./en-gb": 188,
	"./en-gb.js": 188,
	"./en-ie": 189,
	"./en-ie.js": 189,
	"./en-il": 190,
	"./en-il.js": 190,
	"./en-nz": 191,
	"./en-nz.js": 191,
	"./eo": 192,
	"./eo.js": 192,
	"./es": 193,
	"./es-do": 194,
	"./es-do.js": 194,
	"./es-us": 195,
	"./es-us.js": 195,
	"./es.js": 193,
	"./et": 196,
	"./et.js": 196,
	"./eu": 197,
	"./eu.js": 197,
	"./fa": 198,
	"./fa.js": 198,
	"./fi": 199,
	"./fi.js": 199,
	"./fo": 200,
	"./fo.js": 200,
	"./fr": 201,
	"./fr-ca": 202,
	"./fr-ca.js": 202,
	"./fr-ch": 203,
	"./fr-ch.js": 203,
	"./fr.js": 201,
	"./fy": 204,
	"./fy.js": 204,
	"./gd": 205,
	"./gd.js": 205,
	"./gl": 206,
	"./gl.js": 206,
	"./gom-latn": 207,
	"./gom-latn.js": 207,
	"./gu": 208,
	"./gu.js": 208,
	"./he": 209,
	"./he.js": 209,
	"./hi": 210,
	"./hi.js": 210,
	"./hr": 211,
	"./hr.js": 211,
	"./hu": 212,
	"./hu.js": 212,
	"./hy-am": 213,
	"./hy-am.js": 213,
	"./id": 214,
	"./id.js": 214,
	"./is": 215,
	"./is.js": 215,
	"./it": 216,
	"./it.js": 216,
	"./ja": 217,
	"./ja.js": 217,
	"./jv": 218,
	"./jv.js": 218,
	"./ka": 219,
	"./ka.js": 219,
	"./kk": 220,
	"./kk.js": 220,
	"./km": 221,
	"./km.js": 221,
	"./kn": 222,
	"./kn.js": 222,
	"./ko": 223,
	"./ko.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mn": 233,
	"./mn.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 235,
	"./ms-my": 236,
	"./ms-my.js": 236,
	"./ms.js": 235,
	"./mt": 237,
	"./mt.js": 237,
	"./my": 238,
	"./my.js": 238,
	"./nb": 239,
	"./nb.js": 239,
	"./ne": 240,
	"./ne.js": 240,
	"./nl": 241,
	"./nl-be": 242,
	"./nl-be.js": 242,
	"./nl.js": 241,
	"./nn": 243,
	"./nn.js": 243,
	"./pa-in": 244,
	"./pa-in.js": 244,
	"./pl": 245,
	"./pl.js": 245,
	"./pt": 246,
	"./pt-br": 247,
	"./pt-br.js": 247,
	"./pt.js": 246,
	"./ro": 248,
	"./ro.js": 248,
	"./ru": 249,
	"./ru.js": 249,
	"./sd": 250,
	"./sd.js": 250,
	"./se": 251,
	"./se.js": 251,
	"./si": 252,
	"./si.js": 252,
	"./sk": 253,
	"./sk.js": 253,
	"./sl": 254,
	"./sl.js": 254,
	"./sq": 255,
	"./sq.js": 255,
	"./sr": 256,
	"./sr-cyrl": 257,
	"./sr-cyrl.js": 257,
	"./sr.js": 256,
	"./ss": 258,
	"./ss.js": 258,
	"./sv": 259,
	"./sv.js": 259,
	"./sw": 260,
	"./sw.js": 260,
	"./ta": 261,
	"./ta.js": 261,
	"./te": 262,
	"./te.js": 262,
	"./tet": 263,
	"./tet.js": 263,
	"./tg": 264,
	"./tg.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 270,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 270,
	"./ug-cn": 272,
	"./ug-cn.js": 272,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
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
webpackContext.id = 378;

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(326);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = primary>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col col-6 col-md-4 col-xl-3 *ngFor="let category of categories">\n\n    \n    <img src="{{category.image}}" (click)="buttonClick(category.pageID)">\n    \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map