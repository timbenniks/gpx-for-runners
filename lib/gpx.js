(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("gpx", [], factory);
	else if(typeof exports === 'object')
		exports["gpx"] = factory();
	else
		root["gpx"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * GPX parser class
	 * @class GPX
	 */
	
	var GPX = function () {
	
	  /**
	   * GPX constructor.
	   * @param {string} gpxContent - The xml string of the GPX file.
	   * @constructs GPX
	   */
	
	  function GPX(gpxContent) {
	    _classCallCheck(this, GPX);
	
	    /**
	     * The xml string of the GPX file.
	     * @member GPX#gpxContent
	     */
	    this.gpxContent = gpxContent;
	
	    /**
	     * The parsed gpxContent into DOM.
	     * @member GPX#xmlDoc
	     */
	    this.xmlDoc = new DOMParser().parseFromString(this.gpxContent, 'application/xml');
	
	    /**
	     * Object of all waypoints in the gpx DOM.
	     * @member GPX#waypoints
	     */
	    this.waypoints = this.xmlDoc.querySelectorAll('trkpt');
	
	    if (this.waypoints.length === 0) {
	      throw new Error('This file has no trackpointns (trkpt)');
	    }
	  }
	
	  /**
	   * Returns the duration of the run.
	   * @return {object} start, end, totalMS, total
	   */
	
	  _createClass(GPX, [{
	    key: 'duration',
	    value: function duration() {
	      var start = new Date(this.waypoints[0].querySelector('time').textContent),
	          end = new Date(this.waypoints[this.waypoints.length - 1].querySelector('time').textContent),
	          timeDiff = Math.abs(end.getTime() - start.getTime()),
	          total = this.millisecondsToTime(timeDiff);
	
	      return {
	        start: start,
	        end: end,
	        totalMS: timeDiff,
	        total: total
	      };
	    }
	
	    /**
	     * Returns humanized time for miliseconds.
	     * @param {string} duration - Duration in milliseconds
	     * @return {string} time
	     */
	
	  }, {
	    key: 'millisecondsToTime',
	    value: function millisecondsToTime(duration) {
	      var seconds = parseInt(duration / 1000 % 60, 10),
	          minutes = parseInt(duration / (1000 * 60) % 60, 10),
	          hours = parseInt(duration / (1000 * 60 * 60) % 24, 10),
	          days = parseInt(duration / (1000 * 60 * 60 * 24), 10),
	          hoursDays = parseInt(days * 24, 10);
	
	      hours += hoursDays;
	      hours = hours < 10 ? '0' + hours : hours;
	      minutes = minutes < 10 ? '0' + minutes : minutes;
	      seconds = seconds < 10 ? '0' + seconds : seconds;
	      return hours === '00' ? minutes + ':' + seconds : hours + ':' + minutes + ':' + seconds;
	    }
	
	    /**
	     * Returns pace of the run.
	     * @param {number} duration - Duration in milliseconds.
	     * @param {number} distance - Distance in kilometers.
	     * @return {object} minutes, seconds
	     */
	
	  }, {
	    key: 'pace',
	    value: function pace() {
	      var duration = arguments.length <= 0 || arguments[0] === undefined ? this.duration().totalMS : arguments[0];
	      var distance = arguments.length <= 1 || arguments[1] === undefined ? this.distance() : arguments[1];
	
	      var minutes = new Date(duration / distance).getUTCMinutes(),
	          seconds = new Date(duration / distance).getUTCSeconds();
	
	      return {
	        minutes: minutes < 10 ? '0' + minutes : minutes,
	        seconds: seconds < 10 ? '0' + seconds : seconds
	      };
	    }
	
	    /**
	     * Returns elevation of the run
	     * @return {object} elevation, max, min, loss, gain
	     */
	
	  }, {
	    key: 'elevation',
	    value: function elevation() {
	      var elevationObject = [],
	          gain = 0,
	          loss = 0;
	
	      for (var i = 0; i < this.waypoints.length - 1; i++) {
	        var diff = parseFloat(this.waypoints[i + 1].querySelector('ele').textContent) - parseFloat(this.waypoints[i].querySelector('ele').textContent);
	
	        if (diff < 0) {
	          loss += diff;
	        }
	
	        if (diff > 0) {
	          gain += diff;
	        }
	
	        elevationObject.push(parseFloat(this.waypoints[i].querySelector('ele').textContent));
	      }
	
	      return {
	        elevation: elevationObject,
	        max: Math.max.apply(null, elevationObject),
	        min: Math.min.apply(null, elevationObject),
	        loss: loss,
	        gain: gain
	      };
	    }
	
	    /**
	     * Returns distance of the run
	     * @return {number} distance in kilometers.
	     */
	
	  }, {
	    key: 'distance',
	    value: function distance() {
	      var distanceInKm = 0;
	
	      for (var i = 0; i < this.waypoints.length - 1; i++) {
	        distanceInKm += this.calcDistanceBetweenPoints(this.waypoints[i], this.waypoints[i + 1]);
	      }
	
	      return distanceInKm;
	    }
	
	    /**
	     * Returns distance betwene points
	     * @param {node} wp1 - DOM node from gpx content
	     * @param {node} wp2 - DOM node from gpx content
	     * @return {number} distance
	     */
	
	  }, {
	    key: 'calcDistanceBetweenPoints',
	    value: function calcDistanceBetweenPoints(wp1, wp2) {
	      var point1 = {
	        lat: parseFloat(wp1.getAttribute('lat')) * (Math.PI / 180),
	        lon: parseFloat(wp1.getAttribute('lon')) * (Math.PI / 180),
	        alt: parseFloat(wp1.querySelector('ele').textContent) / 1000
	      },
	          point2 = {
	        lat: parseFloat(wp2.getAttribute('lat')) * (Math.PI / 180),
	        lon: parseFloat(wp2.getAttribute('lon')) * (Math.PI / 180),
	        alt: parseFloat(wp2.querySelector('ele').textContent) / 1000
	      },
	          dp = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((point1.lat - point2.lat) / 2), 2) + Math.cos(point1.lat) * Math.cos(point2.lat) * Math.pow(Math.sin((point1.lon - point2.lon) / 2), 2))),
	          d = dp * 6366,
	          h = Math.sqrt(Math.pow(d, 2) + Math.pow(point2.alt - point1.alt, 2));
	
	      return h;
	    }
	  }]);
	
	  return GPX;
	}();
	
	exports.default = GPX;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=gpx.js.map