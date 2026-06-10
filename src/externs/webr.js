/**
 * @fileoverview Externs for WebR and numpy-ts.
 * @externs
 */

// WebR global and constructor
var WebR = function(opts) {};
WebR.prototype.init = function() {};
WebR.prototype.evalR = function(code) {};

// WebR evaluation results
var WebRResult = function() {};
WebRResult.prototype.toJs = function() {};

// numpy-ts Array properties
var NDArray = function() {};
NDArray.prototype.size;
NDArray.prototype.shape;
NDArray.prototype.data;
NDArray.prototype.toArray = function() {};
NDArray.prototype.slice = function(start, end) {};
NDArray.prototype.ravel = function() {};
NDArray.prototype.item = function(idx) {};
NDArray.prototype.reshape = function(shape) {};
NDArray.prototype.add = function(other) {};

// General custom functions on object/prototype used in libs
var toArray = function() {};
var ravel = function() {};
var item = function() {};
var size;
var shape;
var data;
