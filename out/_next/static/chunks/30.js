(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[30],{

/***/ "./node_modules/bnc-onboard/dist/esm/authereum-42ff9003.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/authereum-42ff9003.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-dd8224fc.js */ \"./node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bnc-onboard/node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ \"./node_modules/bnc-sdk/dist/esm/index.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar img = \"data:image/png;base64,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\";\n\nfunction authereum(options) {\n  var networkId = options.networkId,\n      preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg,\n      otherOptions = _objectWithoutProperties(options, [\"networkId\", \"preferred\", \"label\", \"iconSrc\", \"svg\"]);\n\n  return {\n    name: label || 'Authereum',\n    svg: svg,\n    iconSrc: iconSrc || img,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var _yield$import, Authereum, instance, provider;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! authereum */ \"./node_modules/authereum/dist/index.js\", 7));\n\n              case 2:\n                _yield$import = _context2.sent;\n                Authereum = _yield$import[\"default\"];\n                instance = new Authereum(_objectSpread({\n                  networkName: Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"n\"])(networkId),\n                  blockedPopupRedirect: false\n                }, otherOptions));\n                provider = instance.getProvider();\n                return _context2.abrupt(\"return\", {\n                  provider: provider,\n                  instance: instance,\n                  \"interface\": {\n                    name: 'Authereum',\n                    connect: function connect() {\n                      return provider.enable();\n                    },\n                    disconnect: function disconnect() {\n                      instance.destroy();\n                    },\n                    address: {\n                      get: function get() {\n                        return instance.getAccountAddress();\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return Promise.resolve(networkId);\n                      }\n                    },\n                    balance: {\n                      get: function () {\n                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                          var loggedIn;\n                          return regeneratorRuntime.wrap(function _callee$(_context) {\n                            while (1) {\n                              switch (_context.prev = _context.next) {\n                                case 0:\n                                  _context.next = 2;\n                                  return instance.isAuthenticated();\n\n                                case 2:\n                                  loggedIn = _context.sent;\n                                  return _context.abrupt(\"return\", loggedIn && instance.getBalance());\n\n                                case 4:\n                                case \"end\":\n                                  return _context.stop();\n                              }\n                            }\n                          }, _callee);\n                        }));\n\n                        function get() {\n                          return _get.apply(this, arguments);\n                        }\n\n                        return get;\n                      }()\n                    },\n                    dashboard: function dashboard() {\n                      return Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"o\"])(\"https://\".concat(networkId !== 1 ? \"\".concat(Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"n\"])(networkId), \".\") : '', \"authereum.com/\"));\n                    }\n                  }\n                });\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function wallet() {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'sdk',\n    desktop: true,\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authereum);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2F1dGhlcmV1bS00MmZmOTAwMy5qcz8zYzg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUEwQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsZ0VBQWdFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUVuVixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8saURBQWlELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRXBoQiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00sNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFblkscURBQXFELCtCQUErQiw4REFBOEQsWUFBWSxvQ0FBb0MsNkRBQTZELFlBQVksNkJBQTZCLE9BQU8sMkJBQTJCLDBDQUEwQyx3RUFBd0UsMkJBQTJCLEVBQUUsRUFBRSxlQUFlOztBQUUxZSwwREFBMEQsK0JBQStCLGlCQUFpQixzQ0FBc0MsWUFBWSxZQUFZLHVCQUF1QixPQUFPLHFCQUFxQiwwQ0FBMEMsMkJBQTJCLEVBQUUsZUFBZTs7QUFFNVE7QUFDbUM7QUFDbEQ7QUFDTDtBQUNEO0FBQ2hCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2SUFBbUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFXO0FBQzFDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQSw2QkFBNkIsOERBQVEsK0NBQStDLDhEQUFXO0FBQy9GO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2F1dGhlcmV1bS00MmZmOTAwMy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBuIGFzIG5ldHdvcmtOYW1lLCBvIGFzIG9wZW5MaW5rIH0gZnJvbSAnLi9vbmJvYXJkLWRkODIyNGZjLmpzJztcbmltcG9ydCAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCAnYm5jLXNkayc7XG5pbXBvcnQgJ2Jvd3Nlcic7XG52YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQXhDQVlBQUFIZklOdW9BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQVZscFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU5DNHdJajRLSUNBZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0FnSUNBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajR4UEM5MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLVE1JbldRQUFFQjlKUkVGVVdBbTFXUXRzWFdVZC8zL24zRmZiZFdPUGJnTkJBY0hNYkNCWVlJNXR2YmRzdExkZE4wUlRKYUJpUkkxbVFBaStFRVFxWmpBVU5HR0VHQlFTSTJwWUZaQjI2MXJaMW5iTEhycXFzRTJEeWtORVlBOEhXeC8zOXQ1enp1ZnY5ei9uM0xYVE1XUGlsOXllNzN6bi8vM2ZyKytyU0RSc0xwZmcxTGEwcEkzTk4vUks3WnhXS1I3eHBCUzBtZDZ0R3h3Rm5OOXBSUXltL2k5dFI0Y2p0am43c0czS2ZsRzMxdGNuK1RTS3E5bzdWM3l6VnhLSmxFUjcrRkZzUHJ0ZWtvbDJ5Y3hJNjRJdVJsdVBMN1EwTHJaWE5weC9mQ0dmL1FyUjJPWUdxOCsyWlpZc0pXUkZZMkI2QjQza3N3OEJPeGFzekJOanhLNjR3b3JuRlVuZEVkZjVsT25lWXJBZ2dLN0Njd1BGZ0FCTGZabDZwRW9LYzhZVklLWm84N2xQeEhOUWJWd2hTYWRieXVVU1VDMDJHL3YzUUJBcnBqb2pHYjhvWThVeFNialZqaGovWnVDK0hUVFNDZ1IyUVdTdkJLTWo4bGFwU2haZFVVdm1RbTJTUGlTSFRDcUMyVFI0SVQ1MlNqcDRTem82c0RFYXRnMml4UE44OWhVcWdhKzJKZEo4YzhPSVNxT0x6VXZIb1pmTFpPcXNmVEo4Y0xzVXpWSmdMRWt5YWVTTnQxTVZRQVdtNHVkT0s0bnY4L1czWnRQQVpaeFVobTJmbitLTGJjMWRwRS80Q2R6akxwMkhycUJHK1NkQXBxaXhMODI2c21mUWw1Szl4UFJ0SFZKZVhjZ2JCRCtsMUNuVHV5MHRvelpwT2pvQ0tYdkE0ZSt5N2UydU9EVVpxTXdBeVhXcUh0c2hqdW52OSt6S1pWWmNONlI0N01BdHBxY0hBb2Fqb2tkOUxaWEZiTnhLQVhmaWQ2OWlEZUVpaGI5ZTc2cGJKT2tsOE9QRG84dngzY2l4QTEwUkhBRnRJR2VzOUdGR1R6Mml1ZUUxTXpSVUJ0emQ0amd0OE81TTZGT3AxRlFWd3Bobm90MnpsTmZESTJ0TkR3VEoyTCtJNzMwcklhV3htYllsWjJYS2VEVURCaFJTVWlxVlFxellHdGlacG0rd3d6RzlPNDlBVDhla1VEVW1VMmZmSkFubkFsVVhZS0RIb3BTY0dUR2Yrb1FsZnFVZVRJQzJLOTZGZVVVMUJKaHM2OWJHaGJEemRzTENQOVdzQkRycDBBZy80YXRScTNSSXdIVTRSWnY0d1lPSTUzTlVvUnUyR0hXWWtWazNRS2g3UUdXNkl0bTFaUTBjK3phc0lXVE0vWERKMjlXeTRKREpaZ00yTDRPSjAyQ3ZES092RmFsZUl6MDlKYW12VDhpc0ducmJiY3FJTVM1Y3RNS0ViUUlEeHQ0cnFjUUN4R1lneG5Ib0VreGxaWEIyaC9RT1prelB3RGNyUGxOWHN3N2Z2b1NmQyswZ1MxZ29icGsxa1VTbXI3OWJGalYrd0hSdHBpTXlieHlQVllKTEI3WmlxRy9sRzdxeGNnTmVnY284TGtmTERBR1FMdE1hR3FJS2ZNS2Z5VTdiUWMxaERCL2NodG1WUUEweDVQdnlvWUhyNWN3elN3WTZEWkY2b3Q1RjJQNytTVGlRaDQwYWhOOWdjd3N2ZXdyS1JzUmF4SlY3aHlSSHZ5Mzl1UlNJZERJN0s5SVVzalhpejY1Y2Jta003bzBIc0pzSHNCaytZci9CUmRNN2NMVWszU29ndTFZU3d3OUxhVlpHcXFVQVpsZEkyajdLYUZLZFVmMmw4bmZvQlREc0toQmdFaDVXUjRRTHZ3eUVzd0c2QytXbHlYUjIrbG9yRW9rYVNmbHZSMG1JOUlvUTR3blpOUGdaYkF4VTF5T3YxaURiSGtVRWl1bmViRUw1RncyK0Z5YW5FWlpLNForZWhtYmRJY2M4Kyt4UnhOR1g0RXJBWlV0QVZrQnkvVFJmOEJNNWR2QWZFcVFQMHJwRXB0enJod2wvd08zcmVKMEJpbWxvZERYODdtRnlvbHhEUE5PNXY2UUdLYUVtcEpJcGtEaE5wcjlSNERyUnFNZ1Q4RldtUUF6T25QdkJJZktWT1FEamZVNWMwd1B4dVpHbG9Db21WTm1FeVVrUkVraEZyNjJGV2dxanlDMDB4L2ZCOGEwVEVaeDBEdm1kU3FKbmdtL0ozcWRJSWE1dHp1VjFqbklQenErMXJVdmVGeU5pOFlybmZNYUt0SGJWNGxvcEpiNkh0YytxRWF6SnljRmpPNWp4N0tybFZzckJlVEpsNXQraHk1Szk2a3FybHZlODU2R0tHK0ZxMjRoTWpZSWkrd3dLNjByRU1qUVRqR0c5bXRGQUIyYXJJc0VZWXRuZVJlWEF3bWxtSjltWnZRMS8xOEJ4bUF4ZEdBY3B1UHc2ckgwVjdHMVdxbE1tVUZDTWVSNmZzNHFNYnl3c1NYY05OaVZCUG1WYkdyT0lHcVRsZ1h2RThXY0E0aEg4RXVKcHNad0Zob0NRdFMyVlV1K0h3aGVKcmRrTkJCeG9HNVkrQUdMa2dzYXpVRVYvSmRUZUxJeklwb0ZibU02QWFEMitRMFJEYkJ5aG4zSVdweTVnQ0NTVnBrWFJPQ0ZKRUtubmxXR1VUOUVRMUszQzZLWW9RRENQRUpJQlJhc1QraGQwKzNPNENybERVK1JzZ1o0SmtrUTIvM0dsTkhIbGhCRWhuTHpLcUVBR3Z3YXJhU29jWWwwcFh2QWMzc2VoQWg4dXRVWU5Obm1idmsxQ0NQYVFrNkc3ZkVNL3hLT21pMEN3VGtYc0hiZ0kzTEZ2ZE1WTjNFN1ZFUFpFbkpNUWFyNmo1RzRpcXh0VHlReTR1MW1HaHRTTVFMNEI2eDZ5ZGhFcStRa1plRWVFV3JueURiOERkOVFkRzRXN2xEc1lpTndnZnR2QUpXdFFCcjVhNlNJbklvMDRuRUFvbWJ3WUFHbHNRQ29ZdUZzanBUbGJVSFd3Qnl0N2FHK2xCQzdIb2N1N05TZGFXeEdkam8zdmxmZFFpNnlDbnY5NTI5UlVZNWN2bjRiUEdZb284OXM5Y0htVHBpMTRMd1R1VVFNYWM2NXlhZVZsQjA0WlZySjg3bXhkOUx3K1dEaUphUGloNmVzYkZiZUVlTFUrUldRYnBNbkE4MitDNkFiNlpRY0c1ek9VS29PbzJraUxQZzFLamVCaWp4U2Q1bENQdVd0ZzM2ZUJ1QVpONnVHb0JCU3hhVDA0dko0NFVNenVSRGQwanh3NWNwckNNR3VqUGh2NzRkeHBVakp2VVhTTllRUy82WWhhaythR1Y3RjNObjUwRndpWjFFMDZqLzRnY3Y2QjZWU29iYnYwRHJTcThyRDRFaFpQQjVkbFpCUjhESWVtcWVJNFhVYkRSUFZ0ek5Xb2dkMHlQcDZVYWFrODFQRmtUSWllNExENWdSam5ZaEU5bzAxRCtUdUlUdGQvOVdzRHNZbXNISVhlNVdnYm41YXFLbGVtWmQ2TkV2RWt2cUdSOXI0VyszRElJZDFoZFByWkNOVVhZRjNVRURrTUltZkVOUU5FM3BDVTl6NlpXeXlhUjVCdzg5bDJLR1o5V0YrY3ZURGdKVUNzbytJdjl2Tkk1YTlXdjEvYzVITndhSjV5VXV6R2xUS2I4TGp5NVJzZWdoRlhZemVTaHV5R2lwWkV1Q1lqNUpzV0pVNXEzUUliWGttbVVuTEpabGU2NmwxMThIejJkNGlaQlVDRU91TGNaM3I3d3phUGU2SlI0VEJlcUhEVTJzaTZBYVE0WWZweW5nVGVYd0FEenRGSDJxQlZwc3p1VTZlT041NE1JZGMxYnZHQTlRL2dkU3FzbXdGblpVa25rekx1enBGcDA5NW1zWXB3VEhwTXlqYnhGN0N0d1EzRHpJRW5iQVhxY1hTcFNXMlNYUGZveVpERiswLzVSRlRjVGlDcTQxVEFGUjFTVE1ubDFJRXJoU2hFa2tHY3dKSm81NHhrb2NPTGtiMzN3VlV1VUNLUjlYV2VwNHJNTHhEanF6V2pMK3dwTStyUWl5OUFhT0NvR3pBdG9naWF6V2hyTnZJWXpIM3hVSWJyNnF4MGRnWVZMVlUrTmwwK1c1eGtGdStyOEZzT041eXJrUmJXZjZwMEZNRXlCZjFBRnhoWXBhZUwvZnR4YUVZcnVYSmx0WlNPL2dudzc0WUFDQjMvUjRENVhFeFFZVnFXMXFISjJBL204TFNqd0ZlanNPd1VTY1BhRjdIV0M1Z3VjUW83VE0vdVkzaG5LVy9ZSlRWVkMyVzB3SGVtQVVySnRJc2tIMllFNUdnUG9DOGoyQjVCSk45UFFMWlYyaWsyTmFIdkxmNEJVWDA2Tk1UOUhySkNHbzBKRTkzSEZaYWRPV09OcVRwUnZoL01OS2t3ckNVc2lqeWtCN2FnSlIzOUNlaTR5QllpWTRVSDBSTEpVU0FqbnZHd1pRMWVnUXMraGxEWUtpUG0rUlBNclQ2alZhdHpxR1JicjNpUEJNVTl5RmhzYW9nRThRaGpsc3BGWEJ0OERKbDdHZ0k5cjh4QlFsbXlaRmoyNy84Q05VcUNITkR5RkxqUXhXQ3VDWFJ2QU9NUTFPTCtxRVJhb3hPakJQbE82ZjhFa2o4Z1UrZnVVd1JFSEEwbFJKOWp2OWlHYTZEQSt5TStUMlNPcnNCZlJzcElMRzZpR1FHaGZrYWZZajJheEJ4eDE5V1ZaTnpzaENCM2dybnRrZFZnc1hCTVpEQmEwcElxTXIvVHc0bkxqNTJWSHpXQjArZm85R1g1TTFpcGhvbW9EV3JPaHdWNEpPUVdPSlZKYVNmam1ucG84a1V0bE1ReFVXQyt6cC92VGJCU1JSa0ExZkVmR0l3L1RYN1M0YlVpNTdPWGFrUXFyUWs0SEFlSFgrZHNyRndyNlRUeDBwZGRCQUJQME9kS1hjM2Y3SW9sMDhsOXpDeStuM0w4Vnd6cUJTT2RQTDkwR1RUMEcvZ2J6VWhwZmRXWU1UNE1PTTlzM1BJM1JPL1BZZDVyNEM1eHk0c0FRUEFZQkpIdnZHaWJHczVSRjJsdngwbjExT01kR1ZScGNiZWpUV1UrZXpWNjhXZEJMTWFLZXdsb1Rld3hPUFg1WnRQV0Y3U0Y1bTFweitBVHVPWlpnZS9FangrNnNpQkFkVFRUOGZzVEJMMFF2bGo2YnpSNUFvTlV6UEVSYWE2SXE2VHJRT3pKU0hQazBFT2V4SkVsZUJPYW1ZK3JwSmVWR0JNc08yUUt0V2x3by9oMnNXTERKUW1lTGdTQnY5bzA5anlISG1FUk5TbXZkMFc1N0RqZGliTVRHSnp3aWVja0V1TmxzT3M4amx3VlJ4WTZiekRuQjM4WFd6VWZlZkUxMjc2b1NvazE1MWJqbWpVSHB5OHlmWUR4SGRENlBBMGtEWjRvMDVGUjE5bkJXMWh0YUhqemZKS0JEMllrQ3F3d3dBS3BWZGorL3RDV2pxRGYwT0JpQTRNekdjd2FCQy9KMURubm1kN2VJNndpcG5ObkFlbmtxeWpZNjZEVkhwempQZ2dtUjVSeG1CN01uQW5ORGF1L1lnTDhEQnc4N09sS0s3Njh0VGFrcll2OFk4WUl0YjJTNlRRN1dOeHZScElTeGpxUG9NdG5xNUVCVXR6dDJQMHczM3ZWaDJqS3JxNHhMZjRKOXo1dHFsaUJqTmxwVnpUV0srT0UyZGovcG5pcHM0RGpOWHhqbFVvaUJiMGlxZUdma1lUNk9vSUhzMHZDc3FmUmo5ZGdCeHIvOGsrUitZOUFNempFZXdXVXFjc2szL0JKM2JRSXB1dmQraHhLVDV0a0dKUjJENkowQVpGcXFhTXA4N25ia0Z6WGFNNWpQclNvQXBvRGNkRWJhaEkrak1EaExVM1JnQW43RWhqRXJaMjd4SFFOamVuUkp1VHlWbGhncGdUK0dBNFFTVmhwTjRJTjEyRWsxdEp3SGJMKzQyQVFEVEJ1dVZ5Y0NyeGdNWDBJQ0ZCekVYRzhJRmk0c0N3MFIzdTd3NHFBZlY5RGo3c1dHbWFaWXhsU2ZIZ3llU012NHRVNkYxSEl1T2ZGZW1Wb2JtWDZhczdkS0NsM0hSVEYzSWtnd2o3WFhHQTI5Ty9ESFdoMFRaVFBmaDI1NjU3SW5DN204RFh2QmtqeG1Qb1MvU3hpZ0dSNVNPYTVGa2dMWUF1VmZkS2duNUZaWHBGQ0c5S0E5bXhiVEl1UWxXWWpuM3NJR2xzZE1tZVRvT3ZneXFYSjlBMzhtdkNoSnFpbFRRUDNncm5yb1hvbVVHZ1FSMXJIZlJUcFlKOGNTb2Vwb0tXbGtseHhNcjBETU45RFd4d3pGMGM1NmZQVVFCYXh6MXl0ekhXQVZXb2Ria01BR1o0eER5VndGREFoYzhiQWgzQjM2Y2xGeWh3ckYrQXBwUTdtTWMzdzJsM1kzNFBSODhCQTJJZXo4Uy83ZjVCMEltK2UyWHlBcHBGaFhEWGlZQThFQVh6dEtwaGxQZnc0cGRIcCszOUZlc21ibmkwdjZtM1hvVHJOQ05wc3RPUStoRWpmQU9GbklIWFJwQVorejJQM1UxRFNSOGpNUkUxWEdGUXUrVEZtRkZHSVExay9HSjJDSnhFNW1DUC80YVJpM1kvd1gybHgweXFIRGhrbHZqSTNTOFpUQlo2cVl5RTBQeEp2Uys3TDBPRjNvK1kwRkR4a2JLKzRQdTZ1dHI4Vm16M21oVSttbVVralJpaEJCbTM5SVA4TGRTWmszQThwa1JySUhOM0w3OWFMNjExYjE2b1o2T2k4NDZ2UEhaRyt2a0pjdTZXMmxyZEh6K2oxWnhDc0RmZWpWcEl4WTU2VStxVzhwcjlRcWs5bmh5M3hsZWhFaHY1Tmd4TS9jcTdFZUNQSGVYUERPalNpTjhKWCtVb3QwRHhKT1BodVNUbHRwcXYvTUQ4d0IwSlQzY2dHYzlXWENVZnpjd1R5UlJ3d2Y4QXBUN3VzSkp5ZmJKeVN3WGlqaFpOTEI2cytkTmphK0ZIa3FTZTBxb1IraEJ0Q21qK0FKbEJyWFNlaHJzQjhrVXhRODYvaDdyWFZiQnpjcTVvZUd2S0lKOGI5VHM5L00vSEpnSGs2cXlDMW1XNllCbm5QbkEzZHZBQ3QwamVoWmNzSXhZa2E3VlVLeDNSY2FNcElrQVRzV2JqUy9ETngwNFVxZUxqdy94eWF2Q01DS0hjUDg5b1kvMjlpanJ3cHBxdFJITC84RDg5L0FYNGI4SnR1L0JrRkFBQUFBRWxGVGtTdVFtQ0NcIjtcblxuZnVuY3Rpb24gYXV0aGVyZXVtKG9wdGlvbnMpIHtcbiAgdmFyIG5ldHdvcmtJZCA9IG9wdGlvbnMubmV0d29ya0lkLFxuICAgICAgcHJlZmVycmVkID0gb3B0aW9ucy5wcmVmZXJyZWQsXG4gICAgICBsYWJlbCA9IG9wdGlvbnMubGFiZWwsXG4gICAgICBpY29uU3JjID0gb3B0aW9ucy5pY29uU3JjLFxuICAgICAgc3ZnID0gb3B0aW9ucy5zdmcsXG4gICAgICBvdGhlck9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wibmV0d29ya0lkXCIsIFwicHJlZmVycmVkXCIsIFwibGFiZWxcIiwgXCJpY29uU3JjXCIsIFwic3ZnXCJdKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGxhYmVsIHx8ICdBdXRoZXJldW0nLFxuICAgIHN2Zzogc3ZnLFxuICAgIGljb25TcmM6IGljb25TcmMgfHwgaW1nLFxuICAgIHdhbGxldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF93YWxsZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCkge1xuICAgICAgICB2YXIgX3lpZWxkJGltcG9ydCwgQXV0aGVyZXVtLCBpbnN0YW5jZSwgcHJvdmlkZXI7XG5cbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgnYXV0aGVyZXVtJyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF95aWVsZCRpbXBvcnQgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgICBBdXRoZXJldW0gPSBfeWllbGQkaW1wb3J0W1wiZGVmYXVsdFwiXTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBBdXRoZXJldW0oX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgICAgICBuZXR3b3JrTmFtZTogbmV0d29ya05hbWUobmV0d29ya0lkKSxcbiAgICAgICAgICAgICAgICAgIGJsb2NrZWRQb3B1cFJlZGlyZWN0OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIG90aGVyT3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gaW5zdGFuY2UuZ2V0UHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBdXRoZXJldW0nLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXRBY2NvdW50QWRkcmVzcygpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXR3b3JrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9nZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2dnZWRJbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5pc0F1dGhlbnRpY2F0ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW4gPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgbG9nZ2VkSW4gJiYgaW5zdGFuY2UuZ2V0QmFsYW5jZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldDtcbiAgICAgICAgICAgICAgICAgICAgICB9KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkOiBmdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5MaW5rKFwiaHR0cHM6Ly9cIi5jb25jYXQobmV0d29ya0lkICE9PSAxID8gXCJcIi5jb25jYXQobmV0d29ya05hbWUobmV0d29ya0lkKSwgXCIuXCIpIDogJycsIFwiYXV0aGVyZXVtLmNvbS9cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMik7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHdhbGxldCgpIHtcbiAgICAgICAgcmV0dXJuIF93YWxsZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdhbGxldDtcbiAgICB9KCksXG4gICAgdHlwZTogJ3NkaycsXG4gICAgZGVza3RvcDogdHJ1ZSxcbiAgICBtb2JpbGU6IHRydWUsXG4gICAgcHJlZmVycmVkOiBwcmVmZXJyZWRcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aGVyZXVtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/authereum-42ff9003.js\n");

/***/ })

}]);