(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[31],{

/***/ "./node_modules/bnc-onboard/dist/esm/balance-2172a9f5.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/balance-2172a9f5.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-dd8224fc.js */ \"./node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bnc-onboard/node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ \"./node_modules/bnc-sdk/dist/esm/index.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nfunction balance() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    minimumBalance: '0'\n  };\n  var minimumBalance = options.minimumBalance,\n      heading = options.heading,\n      description = options.description,\n      icon = options.icon,\n      html = options.html,\n      button = options.button;\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(StateAndHelpers) {\n      var balance, BigNumber, stateSyncStatus, stateStore;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              balance = StateAndHelpers.balance, BigNumber = StateAndHelpers.BigNumber, stateSyncStatus = StateAndHelpers.stateSyncStatus, stateStore = StateAndHelpers.stateStore;\n\n              if (!(balance === null)) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!stateSyncStatus.balance) {\n                _context.next = 10;\n                break;\n              }\n\n              _context.prev = 3;\n              _context.next = 6;\n              return stateSyncStatus.balance;\n\n            case 6:\n              _context.next = 10;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](3);\n\n            case 10:\n              if (!BigNumber(stateStore.balance.get()).lt(BigNumber(minimumBalance))) {\n                _context.next = 12;\n                break;\n              }\n\n              return _context.abrupt(\"return\", {\n                heading: heading || 'Get Some ETH',\n                description: description || \"Your current account has less than the necessary minimum balance of \".concat(BigNumber(minimumBalance).div(BigNumber('1000000000000000000')).toString(10), \" ETH.\"),\n                eventCode: 'nsfFail',\n                icon: icon || _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"],\n                html: html,\n                button: button\n              });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (balance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2JhbGFuY2UtMjE3MmE5ZjUuanM/NTU2YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFBNEUsTUFBTSwwQkFBMEIsd0JBQXdCLEVBQUUsZ0JBQWdCLGVBQWUsUUFBUSxFQUFFLGlCQUFpQixnQkFBZ0IsRUFBRSxPQUFPLDRDQUE0QyxFQUFFOztBQUV2USxnQ0FBZ0MscUJBQXFCLG1DQUFtQyxnREFBZ0QsZ0NBQWdDLHdCQUF3Qix3RUFBd0UsRUFBRSx1QkFBdUIsdUVBQXVFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHOztBQUU5VjtBQUNvQjtBQUNuQztBQUNMO0FBQ0Q7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNEQUFXO0FBQ3pDO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsc0VBQU8iLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vYmFsYW5jZS0yMTcyYTlmNS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCB7IGQgYXMgYmFsYW5jZUljb24gfSBmcm9tICcuL29uYm9hcmQtZGQ4MjI0ZmMuanMnO1xuaW1wb3J0ICdiaWdudW1iZXIuanMnO1xuaW1wb3J0ICdibmMtc2RrJztcbmltcG9ydCAnYm93c2VyJztcblxuZnVuY3Rpb24gYmFsYW5jZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHtcbiAgICBtaW5pbXVtQmFsYW5jZTogJzAnXG4gIH07XG4gIHZhciBtaW5pbXVtQmFsYW5jZSA9IG9wdGlvbnMubWluaW11bUJhbGFuY2UsXG4gICAgICBoZWFkaW5nID0gb3B0aW9ucy5oZWFkaW5nLFxuICAgICAgZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgaWNvbiA9IG9wdGlvbnMuaWNvbixcbiAgICAgIGh0bWwgPSBvcHRpb25zLmh0bWwsXG4gICAgICBidXR0b24gPSBvcHRpb25zLmJ1dHRvbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoU3RhdGVBbmRIZWxwZXJzKSB7XG4gICAgICB2YXIgYmFsYW5jZSwgQmlnTnVtYmVyLCBzdGF0ZVN5bmNTdGF0dXMsIHN0YXRlU3RvcmU7XG4gICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGJhbGFuY2UgPSBTdGF0ZUFuZEhlbHBlcnMuYmFsYW5jZSwgQmlnTnVtYmVyID0gU3RhdGVBbmRIZWxwZXJzLkJpZ051bWJlciwgc3RhdGVTeW5jU3RhdHVzID0gU3RhdGVBbmRIZWxwZXJzLnN0YXRlU3luY1N0YXR1cywgc3RhdGVTdG9yZSA9IFN0YXRlQW5kSGVscGVycy5zdGF0ZVN0b3JlO1xuXG4gICAgICAgICAgICAgIGlmICghKGJhbGFuY2UgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZVN5bmNTdGF0dXMuYmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlU3luY1N0YXR1cy5iYWxhbmNlO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDg7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgzKTtcblxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgaWYgKCFCaWdOdW1iZXIoc3RhdGVTdG9yZS5iYWxhbmNlLmdldCgpKS5sdChCaWdOdW1iZXIobWluaW11bUJhbGFuY2UpKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgIGhlYWRpbmc6IGhlYWRpbmcgfHwgJ0dldCBTb21lIEVUSCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8IFwiWW91ciBjdXJyZW50IGFjY291bnQgaGFzIGxlc3MgdGhhbiB0aGUgbmVjZXNzYXJ5IG1pbmltdW0gYmFsYW5jZSBvZiBcIi5jb25jYXQoQmlnTnVtYmVyKG1pbmltdW1CYWxhbmNlKS5kaXYoQmlnTnVtYmVyKCcxMDAwMDAwMDAwMDAwMDAwMDAwJykpLnRvU3RyaW5nKDEwKSwgXCIgRVRILlwiKSxcbiAgICAgICAgICAgICAgICBldmVudENvZGU6ICduc2ZGYWlsJyxcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uIHx8IGJhbGFuY2VJY29uLFxuICAgICAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBidXR0b25cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzMsIDhdXSk7XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfeCkge1xuICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhbGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/balance-2172a9f5.js\n");

/***/ })

}]);