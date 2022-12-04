(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[17],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Click below to install and then load this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2NvbnRlbnQtZWVhY2ExY2MuanM/ZGZhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsc0JBQXNCLG9CQUFvQixrUUFBa1Esc0JBQXNCLG9CQUFvQiwwVEFBMFQscUJBQXFCLHNCQUFzQiw2Q0FBNkM7QUFDenhCLEdBQUc7QUFDSCxpREFBaUQsc0JBQXNCLG9CQUFvQixxTUFBcU0scUJBQXFCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVNQUF1TSxxQkFBcUIsc0JBQXNCO0FBQzFtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIGN1cnJlbnRXYWxsZXQgPSBoZWxwZXJzLmN1cnJlbnRXYWxsZXQsXG4gICAgICBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG5cbiAgaWYgKGN1cnJlbnRXYWxsZXQpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgV2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHlvdSBhbHJlYWR5IGhhdmVcXG4gICAgPGI+XCIuY29uY2F0KGN1cnJlbnRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0YWxsZWQuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gdXNlXFxuICAgIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0ZWFkLCB0aGVuIGNsaWNrIGJlbG93IHRvIGluc3RhbGwuXFxuICAgIDwvcD5cXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgPGI+VGlwOjwvYj5cXG4gICAgSWYgeW91IGFscmVhZHkgaGF2ZSBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIiBpbnN0YWxsZWQsIGNoZWNrIHlvdXJcXG4gICAgYnJvd3NlciBleHRlbnNpb24gc2V0dGluZ3MgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgaXQgZW5hYmxlZFxcbiAgICBhbmQgdGhhdCB5b3UgaGF2ZSBkaXNhYmxlZCBhbnkgb3RoZXIgYnJvd3NlciBleHRlbnNpb24gd2FsbGV0cy5cXG4gICAgPHNwYW5cXG4gICAgICBjbGFzcz1cXFwiYm4tb25ib2FyZC1jbGlja2FibGVcXFwiXFxuICAgICAgc3R5bGU9XFxcImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiXFxuICAgICAgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcXCI+XFxuICAgICAgVGhlbiByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLiBPbmNlIHlvdSBoYXZlIGl0IGluc3RhbGxlZCwgZ28gYWhlYWQgYW5kXFxuICAgIDxzcGFuXFxuICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fT5cXG4gICAgICByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQgPT09ICdPcGVyYScgPyAnPGJyPjxicj48aT5IaW50OiBJZiB5b3UgYWxyZWFkeSBoYXZlIE9wZXJhIGluc3RhbGxlZCwgbWFrZSBzdXJlIHRoYXQgeW91ciB3ZWIzIHdhbGxldCBpcyA8YSBzdHlsZT1cImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcIiBjbGFzcz1cImJuLW9uYm9hcmQtY2xpY2thYmxlXCIgaHJlZj1cImh0dHBzOi8vaGVscC5vcGVyYS5jb20vZW4vdG91Y2gvY3J5cHRvLXdhbGxldC9cIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZW5hYmxlZDwvYT48L2k+JyA6ICcnLCBcIlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfVxufTtcblxudmFyIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuICByZXR1cm4gXCJcXG4gIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIGluc3RhbGwgYW5kIHRoZW4gbG9hZCB0aGlzIERhcHAgd2l0aCA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4uXFxuICA8L3A+XFxuICBcIik7XG59O1xuXG5leHBvcnQgeyBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSBhcyBlLCBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSBhcyBtIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\n");

/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/imtoken-e77894c1.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/imtoken-e77894c1.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ \"./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar imTokenIcon = \"\\n\\t<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"0 0 93 93\\\">\\n\\t\\t<defs>\\n\\t\\t\\t\\t<linearGradient id=\\\"a\\\" x1=\\\"97.185%\\\" x2=\\\"-.038%\\\" y1=\\\"3.105%\\\" y2=\\\"99.699%\\\">\\n\\t\\t\\t\\t\\t\\t<stop offset=\\\"0%\\\" stop-color=\\\"#11C4D1\\\"/>\\n\\t\\t\\t\\t\\t\\t<stop offset=\\\"100%\\\" stop-color=\\\"#0062AD\\\"/>\\n\\t\\t\\t\\t</linearGradient>\\n\\t\\t</defs>\\n\\t\\t<g fill=\\\"none\\\" fill-rule=\\\"nonzero\\\">\\n\\t\\t\\t\\t<path fill=\\\"url(#a)\\\" d=\\\"M92.755 63.804s0 9.64-1.028 13.78c-1.028 4.187-2.985 7.06-5.09 9.202-2.154 2.142-4.993 4.09-9.3 5.112-4.356 1.023-13.754.974-13.754.974H29.417s-9.642 0-13.803-1.022c-4.16-1.071-7.097-2.97-9.25-5.113-2.155-2.142-4.112-4.966-5.091-9.3-1.028-4.333-.98-13.682-.98-13.682V29.671s0-9.64 1.029-13.78c1.027-4.187 2.985-7.06 5.09-9.202 2.154-2.142 4.993-4.09 9.3-5.113C20.068.554 29.466.603 29.466.603h34.166s9.642 0 13.803 1.022c4.16 1.071 7.097 2.97 9.25 5.113 2.154 2.142 4.112 4.966 5.091 9.3.98 4.333.98 13.682.98 13.682v34.084z\\\"/>\\n\\t\\t\\t\\t<path fill=\\\"#FFF\\\" d=\\\"M78.267 28.795c1.909 26.244-15.614 38.71-31.326 40.073-14.587 1.265-28.292-7.304-29.467-20.597-.979-10.955 6.07-15.678 11.6-16.117 5.679-.486 10.427 3.263 10.867 7.84.392 4.382-2.447 6.427-4.454 6.573-1.566.146-3.524-.78-3.72-2.727-.147-1.704.538-1.899.342-3.7-.293-3.214-3.181-3.555-4.747-3.409-1.91.146-5.385 2.338-4.944 7.694.49 5.404 5.874 9.69 12.922 9.056 7.636-.682 12.971-6.378 13.363-14.412 0-.439.098-.828.293-1.218.098-.146.147-.292.294-.438.196-.292.392-.536.636-.779l.686-.682c3.328-3.019 15.37-10.225 26.676-7.985.098 0 .196.049.245.097.44 0 .685.341.734.73\\\"/>\\n\\t\\t</g>\\n\\t</svg>\\n\";\n\nfunction imtoken(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg,\n      rpcUrl = options.rpcUrl;\n  return {\n    name: label || 'imToken',\n    iconSrc: iconSrc,\n    svg: svg || imTokenIcon,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, getBalance, imTokenProvider, isImToken, createProvider, provider, warned;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, getBalance = helpers.getBalance;\n                imTokenProvider = window.ethereum;\n                isImToken = getProviderName(imTokenProvider) === 'imToken';\n\n                if (!(isImToken && rpcUrl)) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 6;\n                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./providerEngine-538cf498.js */ \"./node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js\"));\n\n              case 6:\n                createProvider = _context.sent[\"default\"];\n\n              case 7:\n                provider = createProvider ? createProvider({\n                  rpcUrl: rpcUrl\n                }) : null;\n                warned = false;\n                return _context.abrupt(\"return\", {\n                  provider: imTokenProvider,\n                  \"interface\": isImToken ? {\n                    address: {\n                      get: function get() {\n                        return Promise.resolve(imTokenProvider.selectedAddress);\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return Promise.resolve(Number(imTokenProvider.networkVersion));\n                      }\n                    },\n                    balance: {\n                      get: function get() {\n                        if (!provider) {\n                          if (!warned) {\n                            console.warn('The imToken provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a \"rpcUrl\" to the imToken wallet initialization object to get the balance.');\n                            warned = true;\n                          }\n\n                          return Promise.resolve(null);\n                        }\n\n                        return getBalance(provider, imTokenProvider.selectedAddress);\n                      }\n                    },\n                    name: getProviderName(imTokenProvider),\n                    connect: function connect() {\n                      return imTokenProvider.enable();\n                    }\n                  } : null\n                });\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: \"imtokenv2://navigate?screen=DappView&url=\".concat(window.location.href),\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[\"m\"],\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imtoken);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2ltdG9rZW4tZTc3ODk0YzEuanM/M2IyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFM1Q7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixtTEFBc0M7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLHNEQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ibmMtb25ib2FyZC9kaXN0L2VzbS9pbXRva2VuLWU3Nzg5NGMxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0IHsgbSBhcyBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSB9IGZyb20gJy4vY29udGVudC1lZWFjYTFjYy5qcyc7XG52YXIgaW1Ub2tlbkljb24gPSBcIlxcblxcdDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCA5MyA5M1xcXCI+XFxuXFx0XFx0PGRlZnM+XFxuXFx0XFx0XFx0XFx0PGxpbmVhckdyYWRpZW50IGlkPVxcXCJhXFxcIiB4MT1cXFwiOTcuMTg1JVxcXCIgeDI9XFxcIi0uMDM4JVxcXCIgeTE9XFxcIjMuMTA1JVxcXCIgeTI9XFxcIjk5LjY5OSVcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxzdG9wIG9mZnNldD1cXFwiMCVcXFwiIHN0b3AtY29sb3I9XFxcIiMxMUM0RDFcXFwiLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3RvcCBvZmZzZXQ9XFxcIjEwMCVcXFwiIHN0b3AtY29sb3I9XFxcIiMwMDYyQURcXFwiLz5cXG5cXHRcXHRcXHRcXHQ8L2xpbmVhckdyYWRpZW50PlxcblxcdFxcdDwvZGVmcz5cXG5cXHRcXHQ8ZyBmaWxsPVxcXCJub25lXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiPlxcblxcdFxcdFxcdFxcdDxwYXRoIGZpbGw9XFxcInVybCgjYSlcXFwiIGQ9XFxcIk05Mi43NTUgNjMuODA0czAgOS42NC0xLjAyOCAxMy43OGMtMS4wMjggNC4xODctMi45ODUgNy4wNi01LjA5IDkuMjAyLTIuMTU0IDIuMTQyLTQuOTkzIDQuMDktOS4zIDUuMTEyLTQuMzU2IDEuMDIzLTEzLjc1NC45NzQtMTMuNzU0Ljk3NEgyOS40MTdzLTkuNjQyIDAtMTMuODAzLTEuMDIyYy00LjE2LTEuMDcxLTcuMDk3LTIuOTctOS4yNS01LjExMy0yLjE1NS0yLjE0Mi00LjExMi00Ljk2Ni01LjA5MS05LjMtMS4wMjgtNC4zMzMtLjk4LTEzLjY4Mi0uOTgtMTMuNjgyVjI5LjY3MXMwLTkuNjQgMS4wMjktMTMuNzhjMS4wMjctNC4xODcgMi45ODUtNy4wNiA1LjA5LTkuMjAyIDIuMTU0LTIuMTQyIDQuOTkzLTQuMDkgOS4zLTUuMTEzQzIwLjA2OC41NTQgMjkuNDY2LjYwMyAyOS40NjYuNjAzaDM0LjE2NnM5LjY0MiAwIDEzLjgwMyAxLjAyMmM0LjE2IDEuMDcxIDcuMDk3IDIuOTcgOS4yNSA1LjExMyAyLjE1NCAyLjE0MiA0LjExMiA0Ljk2NiA1LjA5MSA5LjMuOTggNC4zMzMuOTggMTMuNjgyLjk4IDEzLjY4MnYzNC4wODR6XFxcIi8+XFxuXFx0XFx0XFx0XFx0PHBhdGggZmlsbD1cXFwiI0ZGRlxcXCIgZD1cXFwiTTc4LjI2NyAyOC43OTVjMS45MDkgMjYuMjQ0LTE1LjYxNCAzOC43MS0zMS4zMjYgNDAuMDczLTE0LjU4NyAxLjI2NS0yOC4yOTItNy4zMDQtMjkuNDY3LTIwLjU5Ny0uOTc5LTEwLjk1NSA2LjA3LTE1LjY3OCAxMS42LTE2LjExNyA1LjY3OS0uNDg2IDEwLjQyNyAzLjI2MyAxMC44NjcgNy44NC4zOTIgNC4zODItMi40NDcgNi40MjctNC40NTQgNi41NzMtMS41NjYuMTQ2LTMuNTI0LS43OC0zLjcyLTIuNzI3LS4xNDctMS43MDQuNTM4LTEuODk5LjM0Mi0zLjctLjI5My0zLjIxNC0zLjE4MS0zLjU1NS00Ljc0Ny0zLjQwOS0xLjkxLjE0Ni01LjM4NSAyLjMzOC00Ljk0NCA3LjY5NC40OSA1LjQwNCA1Ljg3NCA5LjY5IDEyLjkyMiA5LjA1NiA3LjYzNi0uNjgyIDEyLjk3MS02LjM3OCAxMy4zNjMtMTQuNDEyIDAtLjQzOS4wOTgtLjgyOC4yOTMtMS4yMTguMDk4LS4xNDYuMTQ3LS4yOTIuMjk0LS40MzguMTk2LS4yOTIuMzkyLS41MzYuNjM2LS43NzlsLjY4Ni0uNjgyYzMuMzI4LTMuMDE5IDE1LjM3LTEwLjIyNSAyNi42NzYtNy45ODUuMDk4IDAgLjE5Ni4wNDkuMjQ1LjA5Ny40NCAwIC42ODUuMzQxLjczNC43M1xcXCIvPlxcblxcdFxcdDwvZz5cXG5cXHQ8L3N2Zz5cXG5cIjtcblxuZnVuY3Rpb24gaW10b2tlbihvcHRpb25zKSB7XG4gIHZhciBwcmVmZXJyZWQgPSBvcHRpb25zLnByZWZlcnJlZCxcbiAgICAgIGxhYmVsID0gb3B0aW9ucy5sYWJlbCxcbiAgICAgIGljb25TcmMgPSBvcHRpb25zLmljb25TcmMsXG4gICAgICBzdmcgPSBvcHRpb25zLnN2ZyxcbiAgICAgIHJwY1VybCA9IG9wdGlvbnMucnBjVXJsO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGxhYmVsIHx8ICdpbVRva2VuJyxcbiAgICBpY29uU3JjOiBpY29uU3JjLFxuICAgIHN2Zzogc3ZnIHx8IGltVG9rZW5JY29uLFxuICAgIHdhbGxldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF93YWxsZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoaGVscGVycykge1xuICAgICAgICB2YXIgZ2V0UHJvdmlkZXJOYW1lLCBnZXRCYWxhbmNlLCBpbVRva2VuUHJvdmlkZXIsIGlzSW1Ub2tlbiwgY3JlYXRlUHJvdmlkZXIsIHByb3ZpZGVyLCB3YXJuZWQ7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnZXRQcm92aWRlck5hbWUgPSBoZWxwZXJzLmdldFByb3ZpZGVyTmFtZSwgZ2V0QmFsYW5jZSA9IGhlbHBlcnMuZ2V0QmFsYW5jZTtcbiAgICAgICAgICAgICAgICBpbVRva2VuUHJvdmlkZXIgPSB3aW5kb3cuZXRoZXJldW07XG4gICAgICAgICAgICAgICAgaXNJbVRva2VuID0gZ2V0UHJvdmlkZXJOYW1lKGltVG9rZW5Qcm92aWRlcikgPT09ICdpbVRva2VuJztcblxuICAgICAgICAgICAgICAgIGlmICghKGlzSW1Ub2tlbiAmJiBycGNVcmwpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiBpbXBvcnQoJy4vcHJvdmlkZXJFbmdpbmUtNTM4Y2Y0OTguanMnKTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvdmlkZXIgPSBfY29udGV4dC5zZW50W1wiZGVmYXVsdFwiXTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBjcmVhdGVQcm92aWRlciA/IGNyZWF0ZVByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgIHJwY1VybDogcnBjVXJsXG4gICAgICAgICAgICAgICAgfSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHdhcm5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IGltVG9rZW5Qcm92aWRlcixcbiAgICAgICAgICAgICAgICAgIFwiaW50ZXJmYWNlXCI6IGlzSW1Ub2tlbiA/IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbVRva2VuUHJvdmlkZXIuc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTnVtYmVyKGltVG9rZW5Qcm92aWRlci5uZXR3b3JrVmVyc2lvbikpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGltVG9rZW4gcHJvdmlkZXIgZG9lcyBub3QgYWxsb3cgcnBjIGNhbGxzIHByZXZlbnRpbmcgT25ib2FyZC5qcyBmcm9tIGdldHRpbmcgdGhlIGJhbGFuY2UuIFlvdSBjYW4gcGFzcyBpbiBhIFwicnBjVXJsXCIgdG8gdGhlIGltVG9rZW4gd2FsbGV0IGluaXRpYWxpemF0aW9uIG9iamVjdCB0byBnZXQgdGhlIGJhbGFuY2UuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRCYWxhbmNlKHByb3ZpZGVyLCBpbVRva2VuUHJvdmlkZXIuc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGdldFByb3ZpZGVyTmFtZShpbVRva2VuUHJvdmlkZXIpLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbVRva2VuUHJvdmlkZXIuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gd2FsbGV0KF94KSB7XG4gICAgICAgIHJldHVybiBfd2FsbGV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3YWxsZXQ7XG4gICAgfSgpLFxuICAgIHR5cGU6ICdpbmplY3RlZCcsXG4gICAgbGluazogXCJpbXRva2VudjI6Ly9uYXZpZ2F0ZT9zY3JlZW49RGFwcFZpZXcmdXJsPVwiLmNvbmNhdCh3aW5kb3cubG9jYXRpb24uaHJlZiksXG4gICAgaW5zdGFsbE1lc3NhZ2U6IG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlLFxuICAgIG1vYmlsZTogdHJ1ZSxcbiAgICBwcmVmZXJyZWQ6IHByZWZlcnJlZFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbXRva2VuOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/imtoken-e77894c1.js\n");

/***/ })

}]);