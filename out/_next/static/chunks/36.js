(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[36],{

/***/ "./node_modules/bnc-onboard/dist/esm/network-50c7c44c.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/network-50c7c44c.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-dd8224fc.js */ \"./node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bnc-onboard/node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ \"./node_modules/bnc-sdk/dist/esm/index.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nfunction network() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var heading = options.heading,\n      description = options.description,\n      icon = options.icon,\n      html = options.html,\n      button = options.button;\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(stateAndHelpers) {\n      var network, appNetworkId, walletSelect, exit, stateSyncStatus, stateStore;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              network = stateAndHelpers.network, appNetworkId = stateAndHelpers.appNetworkId, walletSelect = stateAndHelpers.walletSelect, exit = stateAndHelpers.exit, stateSyncStatus = stateAndHelpers.stateSyncStatus, stateStore = stateAndHelpers.stateStore;\n\n              if (!(network === null)) {\n                _context.next = 5;\n                break;\n              }\n\n              if (!stateSyncStatus.network) {\n                _context.next = 5;\n                break;\n              }\n\n              _context.next = 5;\n              return new Promise(function (resolve) {\n                stateSyncStatus.network && stateSyncStatus.network.then(resolve);\n                setTimeout(function () {\n                  if (network === null) {\n                    // if prom isn't resolving after 500ms, then stop waiting\n                    resolve();\n                  }\n                }, 500);\n              });\n\n            case 5:\n              if (!(stateStore.network.get() != appNetworkId)) {\n                _context.next = 7;\n                break;\n              }\n\n              return _context.abrupt(\"return\", {\n                heading: heading || 'You Must Change Networks',\n                description: description || \"We've detected that you need to switch your wallet's network from <b>\".concat(Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"n\"])(network), \"</b> to <b>\").concat(Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"n\"])(appNetworkId), \" network</b> for this Dapp. <br><br> <i style=\\\"font-size: inherit; font-family: inherit;\\\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>\"),\n                eventCode: 'networkFail',\n                button: button || {\n                  onclick: function onclick() {\n                    exit();\n                    walletSelect();\n                  },\n                  text: 'Switch Wallet'\n                },\n                html: html,\n                icon: icon || _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"]\n              });\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (network);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL25ldHdvcmstNTBjN2M0NGMuanM/ZmRlZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFBNEUsTUFBTSwwQkFBMEIsd0JBQXdCLEVBQUUsZ0JBQWdCLGVBQWUsUUFBUSxFQUFFLGlCQUFpQixnQkFBZ0IsRUFBRSxPQUFPLDRDQUE0QyxFQUFFOztBQUV2USxnQ0FBZ0MscUJBQXFCLG1DQUFtQyxnREFBZ0QsZ0NBQWdDLHdCQUF3Qix3RUFBd0UsRUFBRSx1QkFBdUIsdUVBQXVFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHOztBQUU5VjtBQUNzQztBQUNyRDtBQUNMO0FBQ0Q7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkhBQTJILDhEQUFXLGlDQUFpQyw4REFBVyxvRkFBb0Ysc0JBQXNCO0FBQzVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSw4QkFBOEIsc0RBQVc7QUFDekMsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHNFQUFPIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL25ldHdvcmstNTBjN2M0NGMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBuIGFzIG5ldHdvcmtOYW1lLCBiIGFzIG5ldHdvcmtJY29uIH0gZnJvbSAnLi9vbmJvYXJkLWRkODIyNGZjLmpzJztcbmltcG9ydCAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCAnYm5jLXNkayc7XG5pbXBvcnQgJ2Jvd3Nlcic7XG5cbmZ1bmN0aW9uIG5ldHdvcmsoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGhlYWRpbmcgPSBvcHRpb25zLmhlYWRpbmcsXG4gICAgICBkZXNjcmlwdGlvbiA9IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBpY29uID0gb3B0aW9ucy5pY29uLFxuICAgICAgaHRtbCA9IG9wdGlvbnMuaHRtbCxcbiAgICAgIGJ1dHRvbiA9IG9wdGlvbnMuYnV0dG9uO1xuICByZXR1cm4gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzdGF0ZUFuZEhlbHBlcnMpIHtcbiAgICAgIHZhciBuZXR3b3JrLCBhcHBOZXR3b3JrSWQsIHdhbGxldFNlbGVjdCwgZXhpdCwgc3RhdGVTeW5jU3RhdHVzLCBzdGF0ZVN0b3JlO1xuICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBuZXR3b3JrID0gc3RhdGVBbmRIZWxwZXJzLm5ldHdvcmssIGFwcE5ldHdvcmtJZCA9IHN0YXRlQW5kSGVscGVycy5hcHBOZXR3b3JrSWQsIHdhbGxldFNlbGVjdCA9IHN0YXRlQW5kSGVscGVycy53YWxsZXRTZWxlY3QsIGV4aXQgPSBzdGF0ZUFuZEhlbHBlcnMuZXhpdCwgc3RhdGVTeW5jU3RhdHVzID0gc3RhdGVBbmRIZWxwZXJzLnN0YXRlU3luY1N0YXR1cywgc3RhdGVTdG9yZSA9IHN0YXRlQW5kSGVscGVycy5zdGF0ZVN0b3JlO1xuXG4gICAgICAgICAgICAgIGlmICghKG5ldHdvcmsgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXN0YXRlU3luY1N0YXR1cy5uZXR3b3JrKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVTeW5jU3RhdHVzLm5ldHdvcmsgJiYgc3RhdGVTeW5jU3RhdHVzLm5ldHdvcmsudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHByb20gaXNuJ3QgcmVzb2x2aW5nIGFmdGVyIDUwMG1zLCB0aGVuIHN0b3Agd2FpdGluZ1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgaWYgKCEoc3RhdGVTdG9yZS5uZXR3b3JrLmdldCgpICE9IGFwcE5ldHdvcmtJZCkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgIGhlYWRpbmc6IGhlYWRpbmcgfHwgJ1lvdSBNdXN0IENoYW5nZSBOZXR3b3JrcycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8IFwiV2UndmUgZGV0ZWN0ZWQgdGhhdCB5b3UgbmVlZCB0byBzd2l0Y2ggeW91ciB3YWxsZXQncyBuZXR3b3JrIGZyb20gPGI+XCIuY29uY2F0KG5ldHdvcmtOYW1lKG5ldHdvcmspLCBcIjwvYj4gdG8gPGI+XCIpLmNvbmNhdChuZXR3b3JrTmFtZShhcHBOZXR3b3JrSWQpLCBcIiBuZXR3b3JrPC9iPiBmb3IgdGhpcyBEYXBwLiA8YnI+PGJyPiA8aSBzdHlsZT1cXFwiZm9udC1zaXplOiBpbmhlcml0OyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiPipTb21lIHdhbGxldHMgbWF5IG5vdCBzdXBwb3J0IGNoYW5naW5nIG5ldHdvcmtzLiBJZiB5b3UgY2FuIG5vdCBjaGFuZ2UgbmV0d29ya3MgaW4geW91ciB3YWxsZXQgeW91IG1heSBjb25zaWRlciBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgd2FsbGV0LjwvaT5cIiksXG4gICAgICAgICAgICAgICAgZXZlbnRDb2RlOiAnbmV0d29ya0ZhaWwnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uIHx8IHtcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0U2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGV4dDogJ1N3aXRjaCBXYWxsZXQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgICAgIGljb246IGljb24gfHwgbmV0d29ya0ljb25cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUpO1xuICAgIH0pKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXR3b3JrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/network-50c7c44c.js\n");

/***/ })

}]);