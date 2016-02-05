'use strict';

// var test = (function() {
//   var contents = 'this is working'

//   return {
//     init: function() {
//       console.log(contents);
//     }
//   };

// })();

// Module pattern

// var test = (function() {

//   // this object is used to store private variables and methods across multiple instantiations
//     var settings = null,

//         col = 1,

//         container = null,

//         blocks = null,

//         numberOfBlocks = 0,

//         loadingBlocks = false,

//         imageLoadTimer = null,

//         bwbp = [];

//   function VerticalBlocks() {

//     this.init = function myMethod() {
//       alert( 'my method' );
//     };

//     this.myOtherMethod = function myOtherMethod() {
//       alert( 'my other method' );
//     };

//   }

//   return VerticalBlocks;

// })();