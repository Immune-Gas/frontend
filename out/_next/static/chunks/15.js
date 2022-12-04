(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Click below to install and then load this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2NvbnRlbnQtZWVhY2ExY2MuanM/ZGZhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsc0JBQXNCLG9CQUFvQixrUUFBa1Esc0JBQXNCLG9CQUFvQiwwVEFBMFQscUJBQXFCLHNCQUFzQiw2Q0FBNkM7QUFDenhCLEdBQUc7QUFDSCxpREFBaUQsc0JBQXNCLG9CQUFvQixxTUFBcU0scUJBQXFCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVNQUF1TSxxQkFBcUIsc0JBQXNCO0FBQzFtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIGN1cnJlbnRXYWxsZXQgPSBoZWxwZXJzLmN1cnJlbnRXYWxsZXQsXG4gICAgICBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG5cbiAgaWYgKGN1cnJlbnRXYWxsZXQpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgV2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHlvdSBhbHJlYWR5IGhhdmVcXG4gICAgPGI+XCIuY29uY2F0KGN1cnJlbnRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0YWxsZWQuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gdXNlXFxuICAgIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0ZWFkLCB0aGVuIGNsaWNrIGJlbG93IHRvIGluc3RhbGwuXFxuICAgIDwvcD5cXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgPGI+VGlwOjwvYj5cXG4gICAgSWYgeW91IGFscmVhZHkgaGF2ZSBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIiBpbnN0YWxsZWQsIGNoZWNrIHlvdXJcXG4gICAgYnJvd3NlciBleHRlbnNpb24gc2V0dGluZ3MgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgaXQgZW5hYmxlZFxcbiAgICBhbmQgdGhhdCB5b3UgaGF2ZSBkaXNhYmxlZCBhbnkgb3RoZXIgYnJvd3NlciBleHRlbnNpb24gd2FsbGV0cy5cXG4gICAgPHNwYW5cXG4gICAgICBjbGFzcz1cXFwiYm4tb25ib2FyZC1jbGlja2FibGVcXFwiXFxuICAgICAgc3R5bGU9XFxcImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiXFxuICAgICAgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcXCI+XFxuICAgICAgVGhlbiByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLiBPbmNlIHlvdSBoYXZlIGl0IGluc3RhbGxlZCwgZ28gYWhlYWQgYW5kXFxuICAgIDxzcGFuXFxuICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fT5cXG4gICAgICByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQgPT09ICdPcGVyYScgPyAnPGJyPjxicj48aT5IaW50OiBJZiB5b3UgYWxyZWFkeSBoYXZlIE9wZXJhIGluc3RhbGxlZCwgbWFrZSBzdXJlIHRoYXQgeW91ciB3ZWIzIHdhbGxldCBpcyA8YSBzdHlsZT1cImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcIiBjbGFzcz1cImJuLW9uYm9hcmQtY2xpY2thYmxlXCIgaHJlZj1cImh0dHBzOi8vaGVscC5vcGVyYS5jb20vZW4vdG91Y2gvY3J5cHRvLXdhbGxldC9cIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZW5hYmxlZDwvYT48L2k+JyA6ICcnLCBcIlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfVxufTtcblxudmFyIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuICByZXR1cm4gXCJcXG4gIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIGluc3RhbGwgYW5kIHRoZW4gbG9hZCB0aGlzIERhcHAgd2l0aCA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4uXFxuICA8L3A+XFxuICBcIik7XG59O1xuXG5leHBvcnQgeyBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSBhcyBlLCBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSBhcyBtIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\n");

/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/huobiwallet-de4cb171.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/huobiwallet-de4cb171.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ \"./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar huobiwalletIcon = \"\\n    <svg id=\\\"\\u56FE\\u5C42_1\\\" data-name=\\\"\\u56FE\\u5C42 1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"0 0 1024 1024\\\">\\n        <defs>\\n            <style>.cls-1{fill:#2d65f8;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#173fff;}.cls-3{fill:#fcfcff;}.cls-4{fill:#fff;}</style>\\n        </defs>\\n        <title>huobi wallet icon</title>\\n        <path class=\\\"cls-1\\\" d=\\\"M292.28,0H552Q742.79,27,858.24,122.88T1024,392V731.72c0,101.63-10.58,138.48-30.45,175.64a207.13,207.13,0,0,1-86.19,86.19c-37.16,19.87-74,30.45-175.64,30.45H292.28c-101.63,0-138.48-10.58-175.64-30.45a207.13,207.13,0,0,1-86.19-86.19C10.58,870.2,0,833.35,0,731.72V292.28C0,190.65,10.58,153.8,30.45,116.64a207.13,207.13,0,0,1,86.19-86.19C153.8,10.58,190.65,0,292.28,0Z\\\"/>\\n        <path class=\\\"cls-2\\\" d=\\\"M993.55,116.64a207.13,207.13,0,0,0-86.19-86.19C870.21,10.58,833.35,0,731.72,0H552Q742.79,27,858.24,122.88T1024,392V292.28C1024,190.65,1013.42,153.8,993.55,116.64Z\\\"/>\\n        <path class=\\\"cls-3\\\" d=\\\"M591.8,382.71c0-97.43-48-181.13-84.48-208.41,0,0-2.78-1.53-2.59,2.3-3,188-100.19,239-153.65,307.63-123.27,158.45-8.6,332.23,108.14,364.18,65.35,18-15.06-31.95-25.4-136.86C421.21,584.73,591.8,487.81,591.8,382.71Z\\\"/>\\n        <path class=\\\"cls-4\\\" d=\\\"M643.64,445.69c-.78-.51-1.81-.9-2.53.32-2.07,23.74-26.56,74.42-57.67,121C478.07,725,538.08,801.1,571.91,842.18c19.44,23.74,0,0,49-24.25,60.52-36.26,99.8-98.95,105.62-168.62A242.5,242.5,0,0,0,643.64,445.69Z\\\"/>\\n    </svg>\";\n\nfunction huobiwallet(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      svg = options.svg,\n      rpcUrl = options.rpcUrl;\n  return {\n    name: label || 'Huobi Wallet',\n    svg: svg || huobiwalletIcon,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {\n        var getProviderName, getAddress, getNetwork, getBalance, huobiwalletProvider, isHuobiWallet, createProvider, provider, warned;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;\n                huobiwalletProvider = window.ethereum || window.web3 && window.web3.currentProvider;\n                isHuobiWallet = getProviderName(huobiwalletProvider) === 'huobiwallet';\n\n                if (!(isHuobiWallet && rpcUrl)) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                _context2.next = 6;\n                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./providerEngine-538cf498.js */ \"./node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js\"));\n\n              case 6:\n                createProvider = _context2.sent[\"default\"];\n\n              case 7:\n                provider = createProvider ? createProvider({\n                  rpcUrl: rpcUrl\n                }) : null;\n                warned = false;\n                return _context2.abrupt(\"return\", {\n                  provider: huobiwalletProvider,\n                  \"interface\": isHuobiWallet ? {\n                    address: {\n                      get: function get() {\n                        return getAddress(huobiwalletProvider);\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return getNetwork(huobiwalletProvider);\n                      }\n                    },\n                    balance: {\n                      get: function () {\n                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                          var address;\n                          return regeneratorRuntime.wrap(function _callee$(_context) {\n                            while (1) {\n                              switch (_context.prev = _context.next) {\n                                case 0:\n                                  if (provider) {\n                                    _context.next = 3;\n                                    break;\n                                  }\n\n                                  if (!warned) {\n                                    console.warn('The Huobi Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a \"rpcUrl\" to the Huobi Wallet initialization object to get the balance.');\n                                    warned = true;\n                                  }\n\n                                  return _context.abrupt(\"return\", null);\n\n                                case 3:\n                                  _context.next = 5;\n                                  return getAddress(huobiwalletProvider);\n\n                                case 5:\n                                  address = _context.sent;\n                                  return _context.abrupt(\"return\", getBalance(provider, address));\n\n                                case 7:\n                                case \"end\":\n                                  return _context.stop();\n                              }\n                            }\n                          }, _callee);\n                        }));\n\n                        function get() {\n                          return _get.apply(this, arguments);\n                        }\n\n                        return get;\n                      }()\n                    },\n                    name: getProviderName(huobiwalletProvider)\n                  } : null\n                });\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: 'https://www.huobiwallet.com',\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[\"m\"],\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (huobiwallet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2h1b2Jpd2FsbGV0LWRlNGNiMTcxLmpzPzhiYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLDRFQUE0RSxNQUFNLDBCQUEwQix3QkFBd0IsRUFBRSxnQkFBZ0IsZUFBZSxRQUFRLEVBQUUsaUJBQWlCLGdCQUFnQixFQUFFLE9BQU8sNENBQTRDLEVBQUU7O0FBRXZRLGdDQUFnQyxxQkFBcUIsbUNBQW1DLGdEQUFnRCxnQ0FBZ0Msd0JBQXdCLHdFQUF3RSxFQUFFLHVCQUF1Qix1RUFBdUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEdBQUc7O0FBRTNUO0FBQ3hFLDJOQUEyTixjQUFjLGNBQWMsbUJBQW1CLE9BQU8sY0FBYyxPQUFPLGNBQWMsT0FBTyxXQUFXOztBQUV0VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsbUxBQXNDOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLHNEQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ibmMtb25ib2FyZC9kaXN0L2VzbS9odW9iaXdhbGxldC1kZTRjYjE3MS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IG0gYXMgbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UgfSBmcm9tICcuL2NvbnRlbnQtZWVhY2ExY2MuanMnO1xudmFyIGh1b2Jpd2FsbGV0SWNvbiA9IFwiXFxuICAgIDxzdmcgaWQ9XFxcIlxcdTU2RkVcXHU1QzQyXzFcXFwiIGRhdGEtbmFtZT1cXFwiXFx1NTZGRVxcdTVDNDIgMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPlxcbiAgICAgICAgPGRlZnM+XFxuICAgICAgICAgICAgPHN0eWxlPi5jbHMtMXtmaWxsOiMyZDY1Zjg7fS5jbHMtMSwuY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMntmaWxsOiMxNzNmZmY7fS5jbHMtM3tmaWxsOiNmY2ZjZmY7fS5jbHMtNHtmaWxsOiNmZmY7fTwvc3R5bGU+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8dGl0bGU+aHVvYmkgd2FsbGV0IGljb248L3RpdGxlPlxcbiAgICAgICAgPHBhdGggY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjkyLjI4LDBINTUyUTc0Mi43OSwyNyw4NTguMjQsMTIyLjg4VDEwMjQsMzkyVjczMS43MmMwLDEwMS42My0xMC41OCwxMzguNDgtMzAuNDUsMTc1LjY0YTIwNy4xMywyMDcuMTMsMCwwLDEtODYuMTksODYuMTljLTM3LjE2LDE5Ljg3LTc0LDMwLjQ1LTE3NS42NCwzMC40NUgyOTIuMjhjLTEwMS42MywwLTEzOC40OC0xMC41OC0xNzUuNjQtMzAuNDVhMjA3LjEzLDIwNy4xMywwLDAsMS04Ni4xOS04Ni4xOUMxMC41OCw4NzAuMiwwLDgzMy4zNSwwLDczMS43MlYyOTIuMjhDMCwxOTAuNjUsMTAuNTgsMTUzLjgsMzAuNDUsMTE2LjY0YTIwNy4xMywyMDcuMTMsMCwwLDEsODYuMTktODYuMTlDMTUzLjgsMTAuNTgsMTkwLjY1LDAsMjkyLjI4LDBaXFxcIi8+XFxuICAgICAgICA8cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk05OTMuNTUsMTE2LjY0YTIwNy4xMywyMDcuMTMsMCwwLDAtODYuMTktODYuMTlDODcwLjIxLDEwLjU4LDgzMy4zNSwwLDczMS43MiwwSDU1MlE3NDIuNzksMjcsODU4LjI0LDEyMi44OFQxMDI0LDM5MlYyOTIuMjhDMTAyNCwxOTAuNjUsMTAxMy40MiwxNTMuOCw5OTMuNTUsMTE2LjY0WlxcXCIvPlxcbiAgICAgICAgPHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNNTkxLjgsMzgyLjcxYzAtOTcuNDMtNDgtMTgxLjEzLTg0LjQ4LTIwOC40MSwwLDAtMi43OC0xLjUzLTIuNTksMi4zLTMsMTg4LTEwMC4xOSwyMzktMTUzLjY1LDMwNy42My0xMjMuMjcsMTU4LjQ1LTguNiwzMzIuMjMsMTA4LjE0LDM2NC4xOCw2NS4zNSwxOC0xNS4wNi0zMS45NS0yNS40LTEzNi44NkM0MjEuMjEsNTg0LjczLDU5MS44LDQ4Ny44MSw1OTEuOCwzODIuNzFaXFxcIi8+XFxuICAgICAgICA8cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk02NDMuNjQsNDQ1LjY5Yy0uNzgtLjUxLTEuODEtLjktMi41My4zMi0yLjA3LDIzLjc0LTI2LjU2LDc0LjQyLTU3LjY3LDEyMUM0NzguMDcsNzI1LDUzOC4wOCw4MDEuMSw1NzEuOTEsODQyLjE4YzE5LjQ0LDIzLjc0LDAsMCw0OS0yNC4yNSw2MC41Mi0zNi4yNiw5OS44LTk4Ljk1LDEwNS42Mi0xNjguNjJBMjQyLjUsMjQyLjUsMCwwLDAsNjQzLjY0LDQ0NS42OVpcXFwiLz5cXG4gICAgPC9zdmc+XCI7XG5cbmZ1bmN0aW9uIGh1b2Jpd2FsbGV0KG9wdGlvbnMpIHtcbiAgdmFyIHByZWZlcnJlZCA9IG9wdGlvbnMucHJlZmVycmVkLFxuICAgICAgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgc3ZnID0gb3B0aW9ucy5zdmcsXG4gICAgICBycGNVcmwgPSBvcHRpb25zLnJwY1VybDtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBsYWJlbCB8fCAnSHVvYmkgV2FsbGV0JyxcbiAgICBzdmc6IHN2ZyB8fCBodW9iaXdhbGxldEljb24sXG4gICAgd2FsbGV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3dhbGxldCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoaGVscGVycykge1xuICAgICAgICB2YXIgZ2V0UHJvdmlkZXJOYW1lLCBnZXRBZGRyZXNzLCBnZXROZXR3b3JrLCBnZXRCYWxhbmNlLCBodW9iaXdhbGxldFByb3ZpZGVyLCBpc0h1b2JpV2FsbGV0LCBjcmVhdGVQcm92aWRlciwgcHJvdmlkZXIsIHdhcm5lZDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnZXRQcm92aWRlck5hbWUgPSBoZWxwZXJzLmdldFByb3ZpZGVyTmFtZSwgZ2V0QWRkcmVzcyA9IGhlbHBlcnMuZ2V0QWRkcmVzcywgZ2V0TmV0d29yayA9IGhlbHBlcnMuZ2V0TmV0d29yaywgZ2V0QmFsYW5jZSA9IGhlbHBlcnMuZ2V0QmFsYW5jZTtcbiAgICAgICAgICAgICAgICBodW9iaXdhbGxldFByb3ZpZGVyID0gd2luZG93LmV0aGVyZXVtIHx8IHdpbmRvdy53ZWIzICYmIHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbiAgICAgICAgICAgICAgICBpc0h1b2JpV2FsbGV0ID0gZ2V0UHJvdmlkZXJOYW1lKGh1b2Jpd2FsbGV0UHJvdmlkZXIpID09PSAnaHVvYml3YWxsZXQnO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoaXNIdW9iaVdhbGxldCAmJiBycGNVcmwpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgnLi9wcm92aWRlckVuZ2luZS01MzhjZjQ5OC5qcycpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm92aWRlciA9IF9jb250ZXh0Mi5zZW50W1wiZGVmYXVsdFwiXTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBjcmVhdGVQcm92aWRlciA/IGNyZWF0ZVByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgIHJwY1VybDogcnBjVXJsXG4gICAgICAgICAgICAgICAgfSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHdhcm5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBodW9iaXdhbGxldFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgXCJpbnRlcmZhY2VcIjogaXNIdW9iaVdhbGxldCA/IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEFkZHJlc3MoaHVvYml3YWxsZXRQcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TmV0d29yayhodW9iaXdhbGxldFByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZ2V0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgSHVvYmkgV2FsbGV0IHByb3ZpZGVyIGRvZXMgbm90IGFsbG93IHJwYyBjYWxscyBwcmV2ZW50aW5nIE9uYm9hcmQuanMgZnJvbSBnZXR0aW5nIHRoZSBiYWxhbmNlLiBZb3UgY2FuIHBhc3MgaW4gYSBcInJwY1VybFwiIHRvIHRoZSBIdW9iaSBXYWxsZXQgaW5pdGlhbGl6YXRpb24gb2JqZWN0IHRvIGdldCB0aGUgYmFsYW5jZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEFkZHJlc3MoaHVvYml3YWxsZXRQcm92aWRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgZ2V0QmFsYW5jZShwcm92aWRlciwgYWRkcmVzcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgIH0oKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBnZXRQcm92aWRlck5hbWUoaHVvYml3YWxsZXRQcm92aWRlcilcbiAgICAgICAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiB3YWxsZXQoX3gpIHtcbiAgICAgICAgcmV0dXJuIF93YWxsZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdhbGxldDtcbiAgICB9KCksXG4gICAgdHlwZTogJ2luamVjdGVkJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuaHVvYml3YWxsZXQuY29tJyxcbiAgICBpbnN0YWxsTWVzc2FnZTogbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UsXG4gICAgbW9iaWxlOiB0cnVlLFxuICAgIHByZWZlcnJlZDogcHJlZmVycmVkXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGh1b2Jpd2FsbGV0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/huobiwallet-de4cb171.js\n");

/***/ })

}]);