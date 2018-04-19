webpackJsonp([9],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = primary>\n    <ion-title>{{catTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list no-lines>\n  <ion-card *ngFor="let event of eventRef | async">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://hw-avy.datpiff.com/5/DJ927.gif">\n      </ion-avatar>\n      <h2>{{event.eventName}}</h2>\n      <p>{{event.date}}</p>\n      <p>{{event.location}}</p>\n\n    <ion-buttons item-end>\n      <button ion-button icon-left clear (click)="presentActionSheet()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n   </ion-buttons>\n\n   </ion-item>\n\n\n\n    <img src="{{event.coverURL}}">\n\n    <ion-card-content>\n      {{event.description}}\n    </ion-card-content>\n    \n  </ion-card> \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 137:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assistant',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/'<!--\n  Generated template for the AssistantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> Your Personal Assistant </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="displaySection == \'base\'">\n		<h1> How may I help you? </h1>\n		<ion-item>\n			<ion-select #Base (ionChange)="getNextDisplay(Base.value)">\n				<ion-option value="planEvent" >Plan an event</ion-option>\n				<ion-option value="lookupEvent">Look for an event</ion-option>>\n			</ion-select>\n		</ion-item>\n	</div>\n	<div *ngIf="displaySection == \'planEvent\'">\n		<h1> Tell me more </h1>\n		<form (ngSubmit)="getNextDisplay(\'giveSuggestion\')">\n			<ion-list>\n				<ion-item>\n					<ion-label floating> Range Start </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.lowerBound" name="planning.lowerBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Range End </ion-label>\n					<ion-datetime pickerFormat="MMM DD YY hh:mm a" [(ngModel)]="planning.upperBound" name="planning.upperBound" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<ion-label floating> Event Duration </ion-label>\n					<ion-datetime pickerFormat="HH:mm" [(ngModel)]="planning.duration" name="planning.duration" ></ion-datetime>\n				</ion-item>\n				<ion-item>\n					<button ion-button type="submit" full round>Save Details</button>\n				</ion-item>\n			</ion-list>\n		</form>\n	</div>\n	<div *ngIf="displaySection == \'giveSuggestion\'">\n		<h1> Here\'s what I think </h1>\n		<h2 style="text-align: center; color: dodgerblue;"> {{suggestionComment}} </h2>\n		<ion-list>\n			<button ion-item *ngFor="let suggestion of suggestions" (click)="addSuggestion($event)">\n				{{suggestion}}\n			</button>\n		</ion-list>\n	</div>\n	<div *ngIf="displaySection == \'lookupEvent\'">\n		<h1> What\'s the mood? </h1>\n		<ion-item>\n        <ion-label floating> Event Category </ion-label>\n        <ion-select [(ngModel)]="eventTagSearch" name="eventTagSearch" (ionChange)="showEventTag()">\n          <ion-option value="Social" > Social </ion-option>\n          <ion-option value="Academic"> Academic </ion-option>\n        </ion-select>\n      </ion-item>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/assistant/assistant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AssistantPage);
    return AssistantPage;
}());

//# sourceMappingURL=assistant.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_upload__ = __webpack_require__(139);
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
    function EventsPage(alertCtrl, navCtrl, navParams, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    EventsPage.prototype.addEvent_2 = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__upload_upload__["a" /* UploadPage */]);
        modal.present();
    };
    EventsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Your event has been posted!',
            buttons: ['OK']
        });
        alert.present();
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = primary>\n    <ion-title>Events</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col col-6 col-md-4 col-xl-3 *ngFor="let category of categories">\n\n    \n    <img src="{{category.image}}" (click)="buttonClick(category.pageID)">\n    \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(103);
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
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(database, alertCtrl, navCtrl, navParams) {
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newEvent = {};
    }
    UploadPage.prototype.addEvent = function (newEvent) {
        var fireList = this.database.list(newEvent.category);
        fireList.push({
            eventName: this.newEvent.eventName,
            eventHost: this.newEvent.eventHost,
            date: this.newEvent.date,
            location: this.newEvent.location,
            coverURL: this.newEvent.coverURL,
            description: this.newEvent.description,
            category: this.newEvent.category,
            tags: this.newEvent.tags
        });
        this.eventPosted();
    };
    UploadPage.prototype.eventPosted = function () {
        this.showAlert();
        this.navCtrl.pop();
    };
    UploadPage.prototype.dismissModal = function () {
        this.navCtrl.pop();
    };
    UploadPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Your event has been posted!',
            buttons: ['OK']
        });
        alert.present();
    };
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/upload/upload.html"*/'<!--\n  Generated template for the UploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar padding>\n    <ion-title>Add Event</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismissModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	<ion-list>\n	<ion-item>\n		<ion-label>Event Name:</ion-label>\n		<ion-input type="text" [(ngModel)]="newEvent.eventName"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Event Host:</ion-label>\n		<ion-input type="text" [(ngModel)]="newEvent.eventHost"></ion-input>\n	</ion-item>\n\n	<ion-item class = "date-time">\n		<ion-label>Date:</ion-label>\n		<ion-datetime displayFormat = "MMM DD, YYYY hh:mm A" pickerFormat="MMM DD, YYYY hh:mm A" [(ngModel)]="newEvent.date"></ion-datetime>\n\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Location:</ion-label>\n		<ion-input type="text" [(ngModel)]="newEvent.location"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Cover URL:</ion-label>\n		<ion-input type="text" [(ngModel)]="newEvent.coverURL"></ion-input>\n	</ion-item>\n\n	<ion-item>\n    	<ion-label>Category:</ion-label>\n    		<ion-select [(ngModel)]="newEvent.category">\n      			<ion-option value="Arts">Arts</ion-option>\n      			<ion-option value="College">College</ion-option>\n      			<ion-option value="Education">Education</ion-option>\n      			<ion-option value="Music">Music</ion-option>\n      			<ion-option value="Nightlife">Nightlife</ion-option>\n      			<ion-option value="Sports">Sports</ion-option>\n      			<ion-option value="Volunteering">Volunteering</ion-option>\n      			<ion-option value="Festivals">Festivals</ion-option>\n      			<ion-option value="Family">Family</ion-option>\n      			<ion-option value="Eats">Eats</ion-option>\n      			<ion-option value="Comedy">Comedy</ion-option>\n    		</ion-select>\n  	</ion-item>\n\n	<ion-item>\n\n		<ion-label>Description:</ion-label>\n		\n		<ion-textarea rows="5" [(ngModel)]="newEvent.description"></ion-textarea> \n\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Tags:</ion-label>\n		<ion-textarea rows="3" [(ngModel)]="newEvent.tags"></ion-textarea>  \n	</ion-item>\n\n	<button ion-button full (click)="addEvent_2(newEvent)">Upload Event</button>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(365);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 141:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleEventPage; });
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
 * Generated class for the ScheduleEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduleEventPage = (function () {
    function ScheduleEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {
            title: "",
            description: "",
            location: "",
            startTime: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            endTime: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            priority: "",
        };
        this.eventHolder = [];
        this.plannedEvents = {};
        this.eventHolder = navParams.get("eventHolder");
        this.plannedEvents = navParams.get("plannedEvents");
    }
    ScheduleEventPage.prototype.goBack = function () {
        this.navParams.get("parentPage").updateCalendar(this.eventHolder);
        this.navCtrl.pop();
    };
    ScheduleEventPage.prototype.saveEvent = function () {
        var inputDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.event.startTime).format("MM/DD/YYYY");
        var inputFiller = this.event.startTime + "split_here" + this.event.endTime;
        var inputHolder = new Array();
        this.eventHolder.push({
            title: this.event.title,
            description: this.event.description,
            location: this.event.location,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            priority: this.event.priority,
        });
        this.navParams.get("parentPage").updateCalendar(this.eventHolder);
        if (!(inputDate in this.plannedEvents)) {
            inputHolder.push(inputFiller);
            this.plannedEvents[inputDate] = inputHolder;
        }
        else {
            inputHolder = this.plannedEvents[inputDate];
            inputHolder.push(inputFiller);
            inputHolder.sort();
            this.plannedEvents[inputDate] = inputHolder;
        }
        this.navCtrl.pop();
    };
    ScheduleEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduleEventPage');
    };
    ScheduleEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-event',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/schedule-event/schedule-event.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-buttons left>\n        <button ion-button (click)="goBack()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title> Add An Event </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="saveEvent()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating> Title </ion-label>\n        <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Description </ion-label>\n        <ion-input type="text" [(ngModel)]="event.description" name="event.description"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Location </ion-label>\n        <ion-input type="text" [(ngModel)]="event.location" name="event.location"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Start Date </ion-label>\n        <ion-datetime displayFormat="MMMM DD YYYY hh:mm a" pickerFormat="MMM DD YY hh mm a" [(ngModel)]="event.startTime" name="event.startTime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> End Date </ion-label>\n        <ion-datetime displayFormat="MMMM DD YYYY hh:mm a" pickerFormat="MMM DD YY hh mm a" [(ngModel)]="event.endTime" name="event.endTime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Priority </ion-label>\n        <ion-select [(ngModel)]="event.priority" name="event.priority">\n          <ion-option value="High" > High </ion-option>\n          <ion-option value="Medium"> Medium </ion-option>\n          <ion-option value="Low"> Low </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round> Save Event </button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/schedule-event/schedule-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ScheduleEventPage);
    return ScheduleEventPage;
}());

//# sourceMappingURL=schedule-event.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_event_schedule_event__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_template__ = __webpack_require__(144);
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
    TaskPage.prototype.scheduleEvent = function () {
        this.eventSource = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_event_schedule_event__["a" /* ScheduleEventPage */], {
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
            selector: 'page-task',template:/*ion-inline-start:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<button ion-button icon-only (click)="addSingleEvent()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="callAssistant()">\n              <ion-icon name="pulse"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="scheduleEvent()">\n            	<ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">  \n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/davidhill/Desktop/Balance/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 144:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TemplatePage);
    return TemplatePage;
}());

//# sourceMappingURL=template.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assistant/assistant.module": [
		581,
		8
	],
	"../pages/category/category.module": [
		580,
		7
	],
	"../pages/events/events.module": [
		582,
		6
	],
	"../pages/explore/explore.module": [
		583,
		5
	],
	"../pages/friend/friend.module": [
		584,
		4
	],
	"../pages/schedule-event/schedule-event.module": [
		585,
		3
	],
	"../pages/task/task.module": [
		586,
		2
	],
	"../pages/template/template.module": [
		587,
		1
	],
	"../pages/upload/upload.module": [
		588,
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_friend__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explore_explore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events__ = __webpack_require__(138);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_task_task__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_events_events__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_template__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_category_category__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_upload_upload__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_schedule_event_schedule_event__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environment__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(103);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_event_schedule_event__["a" /* ScheduleEventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_upload_upload__["a" /* UploadPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assistant/assistant.module#AssistantPageModule', name: 'AssistantPage', segment: 'assistant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend/friend.module#FriendPageModule', name: 'FriendPage', segment: 'friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-event/schedule-event.module#ScheduleEventPageModule', name: 'ScheduleEventPage', segment: 'schedule-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template/template.module#TemplatePageModule', name: 'TemplatePage', segment: 'template', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_event_schedule_event__["a" /* ScheduleEventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_template__["a" /* TemplatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_assistant_assistant__["a" /* AssistantPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_upload_upload__["a" /* UploadPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 242,
	"./af.js": 242,
	"./ar": 243,
	"./ar-dz": 244,
	"./ar-dz.js": 244,
	"./ar-kw": 245,
	"./ar-kw.js": 245,
	"./ar-ly": 246,
	"./ar-ly.js": 246,
	"./ar-ma": 247,
	"./ar-ma.js": 247,
	"./ar-sa": 248,
	"./ar-sa.js": 248,
	"./ar-tn": 249,
	"./ar-tn.js": 249,
	"./ar.js": 243,
	"./az": 250,
	"./az.js": 250,
	"./be": 251,
	"./be.js": 251,
	"./bg": 252,
	"./bg.js": 252,
	"./bm": 253,
	"./bm.js": 253,
	"./bn": 254,
	"./bn.js": 254,
	"./bo": 255,
	"./bo.js": 255,
	"./br": 256,
	"./br.js": 256,
	"./bs": 257,
	"./bs.js": 257,
	"./ca": 258,
	"./ca.js": 258,
	"./cs": 259,
	"./cs.js": 259,
	"./cv": 260,
	"./cv.js": 260,
	"./cy": 261,
	"./cy.js": 261,
	"./da": 262,
	"./da.js": 262,
	"./de": 263,
	"./de-at": 264,
	"./de-at.js": 264,
	"./de-ch": 265,
	"./de-ch.js": 265,
	"./de.js": 263,
	"./dv": 266,
	"./dv.js": 266,
	"./el": 267,
	"./el.js": 267,
	"./en-au": 268,
	"./en-au.js": 268,
	"./en-ca": 269,
	"./en-ca.js": 269,
	"./en-gb": 270,
	"./en-gb.js": 270,
	"./en-ie": 271,
	"./en-ie.js": 271,
	"./en-il": 272,
	"./en-il.js": 272,
	"./en-nz": 273,
	"./en-nz.js": 273,
	"./eo": 274,
	"./eo.js": 274,
	"./es": 275,
	"./es-do": 276,
	"./es-do.js": 276,
	"./es-us": 277,
	"./es-us.js": 277,
	"./es.js": 275,
	"./et": 278,
	"./et.js": 278,
	"./eu": 279,
	"./eu.js": 279,
	"./fa": 280,
	"./fa.js": 280,
	"./fi": 281,
	"./fi.js": 281,
	"./fo": 282,
	"./fo.js": 282,
	"./fr": 283,
	"./fr-ca": 284,
	"./fr-ca.js": 284,
	"./fr-ch": 285,
	"./fr-ch.js": 285,
	"./fr.js": 283,
	"./fy": 286,
	"./fy.js": 286,
	"./gd": 287,
	"./gd.js": 287,
	"./gl": 288,
	"./gl.js": 288,
	"./gom-latn": 289,
	"./gom-latn.js": 289,
	"./gu": 290,
	"./gu.js": 290,
	"./he": 291,
	"./he.js": 291,
	"./hi": 292,
	"./hi.js": 292,
	"./hr": 293,
	"./hr.js": 293,
	"./hu": 294,
	"./hu.js": 294,
	"./hy-am": 295,
	"./hy-am.js": 295,
	"./id": 296,
	"./id.js": 296,
	"./is": 297,
	"./is.js": 297,
	"./it": 298,
	"./it.js": 298,
	"./ja": 299,
	"./ja.js": 299,
	"./jv": 300,
	"./jv.js": 300,
	"./ka": 301,
	"./ka.js": 301,
	"./kk": 302,
	"./kk.js": 302,
	"./km": 303,
	"./km.js": 303,
	"./kn": 304,
	"./kn.js": 304,
	"./ko": 305,
	"./ko.js": 305,
	"./ky": 306,
	"./ky.js": 306,
	"./lb": 307,
	"./lb.js": 307,
	"./lo": 308,
	"./lo.js": 308,
	"./lt": 309,
	"./lt.js": 309,
	"./lv": 310,
	"./lv.js": 310,
	"./me": 311,
	"./me.js": 311,
	"./mi": 312,
	"./mi.js": 312,
	"./mk": 313,
	"./mk.js": 313,
	"./ml": 314,
	"./ml.js": 314,
	"./mn": 315,
	"./mn.js": 315,
	"./mr": 316,
	"./mr.js": 316,
	"./ms": 317,
	"./ms-my": 318,
	"./ms-my.js": 318,
	"./ms.js": 317,
	"./mt": 319,
	"./mt.js": 319,
	"./my": 320,
	"./my.js": 320,
	"./nb": 321,
	"./nb.js": 321,
	"./ne": 322,
	"./ne.js": 322,
	"./nl": 323,
	"./nl-be": 324,
	"./nl-be.js": 324,
	"./nl.js": 323,
	"./nn": 325,
	"./nn.js": 325,
	"./pa-in": 326,
	"./pa-in.js": 326,
	"./pl": 327,
	"./pl.js": 327,
	"./pt": 328,
	"./pt-br": 329,
	"./pt-br.js": 329,
	"./pt.js": 328,
	"./ro": 330,
	"./ro.js": 330,
	"./ru": 331,
	"./ru.js": 331,
	"./sd": 332,
	"./sd.js": 332,
	"./se": 333,
	"./se.js": 333,
	"./si": 334,
	"./si.js": 334,
	"./sk": 335,
	"./sk.js": 335,
	"./sl": 336,
	"./sl.js": 336,
	"./sq": 337,
	"./sq.js": 337,
	"./sr": 338,
	"./sr-cyrl": 339,
	"./sr-cyrl.js": 339,
	"./sr.js": 338,
	"./ss": 340,
	"./ss.js": 340,
	"./sv": 341,
	"./sv.js": 341,
	"./sw": 342,
	"./sw.js": 342,
	"./ta": 343,
	"./ta.js": 343,
	"./te": 344,
	"./te.js": 344,
	"./tet": 345,
	"./tet.js": 345,
	"./tg": 346,
	"./tg.js": 346,
	"./th": 347,
	"./th.js": 347,
	"./tl-ph": 348,
	"./tl-ph.js": 348,
	"./tlh": 349,
	"./tlh.js": 349,
	"./tr": 350,
	"./tr.js": 350,
	"./tzl": 351,
	"./tzl.js": 351,
	"./tzm": 352,
	"./tzm-latn": 353,
	"./tzm-latn.js": 353,
	"./tzm.js": 352,
	"./ug-cn": 354,
	"./ug-cn.js": 354,
	"./uk": 355,
	"./uk.js": 355,
	"./ur": 356,
	"./ur.js": 356,
	"./uz": 357,
	"./uz-latn": 358,
	"./uz-latn.js": 358,
	"./uz.js": 357,
	"./vi": 359,
	"./vi.js": 359,
	"./x-pseudo": 360,
	"./x-pseudo.js": 360,
	"./yo": 361,
	"./yo.js": 361,
	"./zh-cn": 362,
	"./zh-cn.js": 362,
	"./zh-hk": 363,
	"./zh-hk.js": 363,
	"./zh-tw": 364,
	"./zh-tw.js": 364
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
webpackContext.id = 541;

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(408);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 579:
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

/***/ })

},[409]);
//# sourceMappingURL=main.js.map