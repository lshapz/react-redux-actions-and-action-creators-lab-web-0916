/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _actions = __webpack_require__(2);

	var app = "I don't do much.";
	console.log(app);
	var addMovieAction = (0, _actions.addMovie)();
	var deleteMovieAction = (0, _actions.deleteMovie)();
	var updateUsernameAction = (0, _actions.updateUsername)();
	var resetUsernameAction = (0, _actions.resetUsername)();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addMovie = addMovie;
	exports.deleteMovie = deleteMovie;
	exports.updateUsername = updateUsername;
	exports.resetUsername = resetUsername;
	// define your actions here!

	function addMovie(movie) {
	  return {
	    type: 'ADD_MOVIE',
	    movie: movie
	  };
	}

	function deleteMovie(movie) {
	  return {
	    type: 'DELETE_MOVIE',
	    movie: movie
	  };
	}

	function updateUsername(username) {
	  return {
	    type: 'UPDATE_USERNAME',
	    username: username
	  };
	}

	function resetUsername(username) {
	  return {
	    type: 'RESET_USERNAME',
	    username: 'default'
	  };
	}

/***/ }
/******/ ]);