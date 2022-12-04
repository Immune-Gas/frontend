(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[16],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Click below to install and then load this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2NvbnRlbnQtZWVhY2ExY2MuanM/ZGZhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsc0JBQXNCLG9CQUFvQixrUUFBa1Esc0JBQXNCLG9CQUFvQiwwVEFBMFQscUJBQXFCLHNCQUFzQiw2Q0FBNkM7QUFDenhCLEdBQUc7QUFDSCxpREFBaUQsc0JBQXNCLG9CQUFvQixxTUFBcU0scUJBQXFCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVNQUF1TSxxQkFBcUIsc0JBQXNCO0FBQzFtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIGN1cnJlbnRXYWxsZXQgPSBoZWxwZXJzLmN1cnJlbnRXYWxsZXQsXG4gICAgICBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG5cbiAgaWYgKGN1cnJlbnRXYWxsZXQpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgV2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHlvdSBhbHJlYWR5IGhhdmVcXG4gICAgPGI+XCIuY29uY2F0KGN1cnJlbnRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0YWxsZWQuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gdXNlXFxuICAgIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0ZWFkLCB0aGVuIGNsaWNrIGJlbG93IHRvIGluc3RhbGwuXFxuICAgIDwvcD5cXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgPGI+VGlwOjwvYj5cXG4gICAgSWYgeW91IGFscmVhZHkgaGF2ZSBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIiBpbnN0YWxsZWQsIGNoZWNrIHlvdXJcXG4gICAgYnJvd3NlciBleHRlbnNpb24gc2V0dGluZ3MgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgaXQgZW5hYmxlZFxcbiAgICBhbmQgdGhhdCB5b3UgaGF2ZSBkaXNhYmxlZCBhbnkgb3RoZXIgYnJvd3NlciBleHRlbnNpb24gd2FsbGV0cy5cXG4gICAgPHNwYW5cXG4gICAgICBjbGFzcz1cXFwiYm4tb25ib2FyZC1jbGlja2FibGVcXFwiXFxuICAgICAgc3R5bGU9XFxcImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiXFxuICAgICAgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcXCI+XFxuICAgICAgVGhlbiByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLiBPbmNlIHlvdSBoYXZlIGl0IGluc3RhbGxlZCwgZ28gYWhlYWQgYW5kXFxuICAgIDxzcGFuXFxuICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fT5cXG4gICAgICByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQgPT09ICdPcGVyYScgPyAnPGJyPjxicj48aT5IaW50OiBJZiB5b3UgYWxyZWFkeSBoYXZlIE9wZXJhIGluc3RhbGxlZCwgbWFrZSBzdXJlIHRoYXQgeW91ciB3ZWIzIHdhbGxldCBpcyA8YSBzdHlsZT1cImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcIiBjbGFzcz1cImJuLW9uYm9hcmQtY2xpY2thYmxlXCIgaHJlZj1cImh0dHBzOi8vaGVscC5vcGVyYS5jb20vZW4vdG91Y2gvY3J5cHRvLXdhbGxldC9cIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZW5hYmxlZDwvYT48L2k+JyA6ICcnLCBcIlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfVxufTtcblxudmFyIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuICByZXR1cm4gXCJcXG4gIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIGluc3RhbGwgYW5kIHRoZW4gbG9hZCB0aGlzIERhcHAgd2l0aCA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4uXFxuICA8L3A+XFxuICBcIik7XG59O1xuXG5leHBvcnQgeyBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSBhcyBlLCBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSBhcyBtIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\n");

/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/hyperpay-9669d353.js":
/*!****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/hyperpay-9669d353.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ \"./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar img = \"data:image/png;base64,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\";\nvar img$1 = \"data:image/png;base64,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\";\n\nfunction hyperpay(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg;\n  return {\n    name: label || 'HyperPay',\n    iconSrc: iconSrc || img,\n    iconSrcSet: iconSrc || img$1,\n    svg: svg,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, createModernProviderInterface, provider;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;\n                provider = window.ethereum || window.web3 && window.web3.currentProvider;\n                return _context.abrupt(\"return\", {\n                  provider: provider,\n                  \"interface\": provider && getProviderName(provider) === 'HyperPay' ? createModernProviderInterface(provider) : null\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: 'https://www.hyperpay.me/',\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[\"m\"],\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hyperpay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2h5cGVycGF5LTk2NjlkMzUzLmpzPzA3ZjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLDRFQUE0RSxNQUFNLDBCQUEwQix3QkFBd0IsRUFBRSxnQkFBZ0IsZUFBZSxRQUFRLEVBQUUsaUJBQWlCLGdCQUFnQixFQUFFLE9BQU8sNENBQTRDLEVBQUU7O0FBRXZRLGdDQUFnQyxxQkFBcUIsbUNBQW1DLGdEQUFnRCxnQ0FBZ0Msd0JBQXdCLHdFQUF3RSxFQUFFLHVCQUF1Qix1RUFBdUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEdBQUc7O0FBRTNUO0FBQ3hFLDBCQUEwQjtBQUMxQiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2h5cGVycGF5LTk2NjlkMzUzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0IHsgbSBhcyBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSB9IGZyb20gJy4vY29udGVudC1lZWFjYTFjYy5qcyc7XG52YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQW9DQVlBQUFINytZajdBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFLS0FEQUFRQUFBQUJBQUFBS0FBQUFBQjY1bWFzQUFBR0UwbEVRVlJZQ2IxWVM0eVVSUkN1bWgxMkZWZ2VPNFBJUWp3SU1XZ2tIdHhFWTJLaWtaTUJEVDdqaWRzL2lKSW9HRFJSWUI4eEhoQ04wUkIyVDJpQ3dSZHFFRzhHRTAyOGdJblJSSHpzVFJaWDV4OVhsMGRtblozMnErNi8vNy8veHp4ZDdXUzNxK3ZWMWRYVlZUVS9rUjFlK1JpVi9OMnlaSTN6eXNyU1pNNkIrbmFBT0FlZU9ZTWtPa081M0NhYUtONUlmYlJLa0puaWdTU21Vbm5XTHBnOHYwNmtqSVJnbVI3TUI0aHpXcWNnWVVsT1p1cmoyL1RzbFgrU0dadzhURlgxSnpnMEhoSWM2VXJxTml6NEQ2R0p3a2pjVEVpR2RBRThmeFIyN0JPUXRjbUtsc29pSEV5ZmtLSXRzcVVZS1BnY2pSZjdRd1lCdEZaZXJuR09QNk90U3VVSG9PV0RtRkFvS0Z1N3c1dFpUMVQ3Rk5ncDdIUzNTektNQ3A0c2lVY3pSbkJBdytqWWtzR3E3UTVQcFJsYzkrd29yNlU2L1dJRWVjeGNqVmxkaGl1KzErQ3c2cVU2bDR3SEJLUDJ1WXlMZ2RrSXY1NmtLYjlLUFl1T2FhSGdYOFRZQjkvSjMzaHhxNTVWcldpZExieDV1T0lpL0xkVUJ3SHgzOEQxR3RpSjNWemY2clpQYmJaMlR4dllGRXpUOWtCR1k1d29VWE1BSngxT29tTnJNYm1uc0lZTzgwVVhIeWxzZG91dVJDYk03eUcySHhGU2NPWTJMTXBVbEVEQ0pZZ0lIWUEvSjBoQm1LZXdjY1N1MlZWVXJmN21JaVhFZmdEaUJoZVpndTFsZU9Yem9BMXFlb1J6N3RuRXd4VGl3VkhJeCtHUHgxSktCVEZSWEJ2RGU1VW5DSUh0anRaeFl5MHBWZTRsVlQvbENxZGc1dStNd3AxcUtkWDhNQTJtR050RFNDeGVHNFdOQ0huK3U0aS9oOXVUZDdpV0ZCYlRxM3hGTUhHRkRnOHl5eGdwOVlLTENtRWNqYmozSGpyU0g3dGhvVGRXS0ZSZGN0UldRRU80dUNuTVozQ1ArMmxpeGFTUXMwWmFvZmh6M3IrZ00wR1dSSWd6bVQ5Y0JrQmNZVHR2T0thQkZZMFA5QkJqVGluczlrSkUwWGdoWjVVYUN4c1ZDN3R0eXhrV1RrQXBoc2x6V1pXbnBSS1hBZlZHdTB0dU9UTTgrQlIyM09LS3hHRHphbzREbDZxYjhmcGpwZkowRXgwdW1oSmpjVmx6eWE4Z1ZsZEdwUHdHZEFzWm8wWW5rSVVNZ2VrOEtzMW12ZkQ4bzNoSjIyMjZSNDl5SDlaZlJCcHFvMUdaaXJBQ2JRei9tRTVya21SMFVTYmphWFcxbm9tK0RXWTdEV1ZiYU1reUs5cU1vbms3N2FnVU5acjVHL3R1S1FjTDQ5bHJUVnFoVFZldTBrWndmZjZ0R0lucGJGcmhMbjlaeURRL1VBK3IybDdWVDFjcUptNnI2bm53N0EzNVFvQlBvb0lqY3loMWM0aVRkaTRjZjd3STBHU2NHZit2RU4wSUdDKzhnaWVETk5Sb0xGdjVVaU5TQ2k5MUdzTWN3U3YvQ25oMWlxa1RSTDdRTCs0eFlZUFUzWWxzbWhlcExPZ2dvamlVTk43VjBGM0RpQlUxUjdZcm1UczVQbHA0dktJVHJuaGFvVkIzekY1RGF1NnoyTzI3VXNSalNCNzdZNmhna2Ewd2kxTndzbEY5N2tsYzViYkdtelVRMXVGSkgxS3U5NDJzNHRaQXFrWFJFeW1UekE4RCtuZFJsYlpnR3J2dlRGNUJraTNiZzVLY0xsWGVSS0xwdklkSTd0RFdHb0czWkdCN21NTWNtU2lxTFZJcXpTWC84djlubkd3TVI4aWVRWld6cHNnY2VkQzBjOUlXTC9SVnV2dTFBMDlUdnJEQjVnVmpvSDVsMWNuV3ZWRTcraGVBUjlJcTk2Mlh4MlNxaVU0QmlSL1hXZnN3UDRXVzZMVXNVa2U0WGY0Nm1sTkg0WkRzT3FGLzZDTXRFVzJTcG1ZM1VzYWhsaHN3bzNVb3JHdkpsMlNRQjFlckxLTFhDK25xVnZLZndkNEhreUxobW5tUGZKbzRqWlBjRlNLN0F6NUNuN010SmxyeTkyUHpFUWMzUzRPRkZUVE1VWStoODJwMTJ1R0pnMHlmeXlzZWltTzdXT1g0U0V6cThabnJFOFlKK1Z6TU9NR28rZXRrYWpLRzJ2a04ranV1ZHJWdHhac282NHcwakk5YUZ5cGY0eUMzTkJIOFVUeUluMFJOUm82ZlcxRGpQTFVJY1grUXBpcTFGc2FKVVdmZ3dRYWZCWnJZSEpINFN4VDVPNk0xSUsreW5GaEpBNTh1QWpIR2RoYjVEVG56WXhMZFJEZURhVFFseHZUc3doZ25IYzZLeWFpU2RQcmJrL2tyeE9ZZE1RUGx5OXVVTDAzMFZURjh4NHZveDNKa29DalJuUXUvaitjVngzZThRYmNDK0JuTDZpRzN3MGtib2oraVZkN1JCYnpiZmJxU1EwY3pQdkJvOGtHbURiVEtqYUhTNVI3NDd6eXFQMDJNd0xEUnBHSFdqTVlHV2c2WmRhZFQyUVAzb3pTMVViTmQyU1FzallEaWx5ay9jTWgyTEVrV2Q5MmVnYTZFaFNVOThmejllTEczb21rYmhPR0RlaGE2ZkhLU3orbDY1ck9rZWo1dTl1bkpxc3lhL3dGK0d3NmhHRmZHS3dBQUFBQkpSVTVFcmtKZ2dnPT1cIjtcbnZhciBpbWckMSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGQUFBQUJRQ0FZQUFBSDVGc0k3QUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBVUtBREFBUUFBQUFCQUFBQVVBQUFBQUF4NEV4UEFBQU4wRWxFUVZSNEFlVmRmWXdrUlJWLzFmdHhzdXNlN013cTNDSnlYdmdLS21DVVJDRWlFZy8rTUJ3cXhvQXhpSjZaMlR0YzhKRHYrSUZvL0VQQlV3KzUzWTFDVUJQUkNPaEJUQVNDSHNZTEVRMEtpS0NJZ0xLQ1RNL3U3ZDRldDEvVC9sNzMxSFIxZDNWWFQwL1AzTjVSeVd4VnZYcnYxYXZYOWZHcTZuV3ZvSEFvMit2Sm9YdUplbzZraWRVVldTeGtna29WcDVGV0U4TGFSdU9GU3ozRU9DUkpJT2o4YnBsMjQ0a2h2d1lHbEN0L2hCanZ4TzlPaTByMjJRM2tVdVZ1aUhDM215OVZKbWw4NkYyeWpEbmVJek9JUCtTbVI2cGxxdFhXS0hBQ0lscEhDNjhBZURGTkROMnVGSTZqNm10UnJSdWlqV0U1eTlVU09iVnhoWWdzRHgwcWtJRTFFRUpDVGNKdlpibnlFVzZkeEcvRVlVMDBDa3IyWTFTMjcydms2d21mWTV6UzZ4eWpqUW16NHJ3cm84cEpsV2ZMN2dMTkxkb3VuUkRQZXEyV1hPUlQ0ZnplcFZ1WWsxdmtPT3VDaVB4aytLbDR0ZXlXOUJ6N25VSlNlNldlc2hXeFJLUWZNb0dDNE5JSmExTVRyZmFxb2dnWENhK0w1Q3RjRm5DOHhUbUU1dXk5S2tpYkRyYkxSUWt5RExkQnkwVURGT0xmTkY1OE01ZDRETk5LcE9FVkFFSGllQ1ZxbWhNZ2xwbFFxN3JSa3g4blJ6T1RxSWlTZWJsNk84YlNSUzR2Q1pPTTYzRTN4dEpMU0w4dEFJOUJ4anoxU2VEeEx6YkVOMW1TcU14VnFXVjVLUGFmY2dya0VHMDBpOHI5UWNXUzhPUFBFcnA2VDVBajFaY3d6S2hzL3hNUGExMFkzTWhqbkVHblk0MThQUkhQVUdLV3F0dElPQmNpTzR2NEpob2J1bGtXNldJOXcxTGxSU0FQNndnYU1FdGNUbVBGclkxOFBSRmtlTDNUUzVQMmZCZ3BNYS8yQWlENkRFZnROOUc4aysyaEtFejlwNXlWR1l1dmREbVBvUUpJYkY1U1lkbitGeGRqNkRsWUZMMVZJWUN2TkNNQTUweTVlaTdHOUk0QTNISFdjajQ2anpQVXNxNm1zY0kzT0prWVNwVTlLTzl2NEFocmc1NGgwUzhhU0p5WUdQcXdtNy9LR2FCcGUwYU9DaGNXVXBlL1RMbWxqVCtleGRISTFoUE1qTVBJMUZvYUczek9UWWYreERIMDBRUjl6MTAwR1ZLcmVmQVlabHdZWlpqME1JZ0Mxb3phWGJ5YW9INlphRG9PNmM2akYyNlgyWTJ1c3pxV29aUll5eUJFMVYvc3M3RDhIUm9DKzlrZUVWd2EvQko5YXF0NE5hcERGWFhSZVFKNlVpSHhhZlJCTHZRbmh6Uk5pbWZuV21sQmhwekx5bFRxR1N5Q1Qxa3BZUDdtSUtZRG93WUVmcE5WNmxGbkZjM2IrMVJRSkIxVHVaNWhoRm9CdUxOVDlmdEV6cWNWcURrcHhBd21uUTIwZlhDbkdkbkhTQ2RncWZKTGtMaTl3aWZOSTJVZFRST0ZGNUk0eFF2WXlwS1ZWS091VElnbk1WN2ZxaTJLQUxNc3pCRW1XUUZpRjAwVVQxZXBneHBzMjZOVXEweVJWZ2FNTDJBYTJ5Z0Y3OXhRVmhWZlI5dkV2RGUxbHV3ZllGUW1HMjVlemZzd3J4eVNpeEJsK3dVc09rZkY4dkttcFlRZGo0NXl2R2pCQU5mc1puVElLV0RxUGx1TExoNkR4Vlc1R1p1ZVM3VGx6UUNWZnRNZ0N5OGx3OFV1dWw3VXpZNDZWaGluUWV3bHNKU0lDMEt3NXJOQy9DeENwS3M0TEZ5RUtBcmdQamlMWHpGYXBFQ0dpNnZROGdVRllrN3FOQnFtMm15ZlJrdkpQUVo5Q2x1aXBDQ3c1MjFXdUNSK3NxeGtUME80Mzh0c1hPeE5NN3JIRVVjUmh1czBWYTdzUmI5dWZiUUw4VzNQbk9ucU9qTmNiNnE4cnUreE1aR0hjQ3pBZUhHTFAxR1AyRnVvNW53cmxXQVNTYXM5Yk1ycSt5aUpsaW11OC9ZRlpDNlhUQjFOaTh2UFpXS1lHeEVibWNWQnlTNG9vSVNXN2I5Q0N5ZktiTWZpL3A0aWJUMjBxdGFuRjFCaWxHeU1NdWMwbVcxYnJCRk0xcFVzb01UaW1EZjhlZlF0eVpPM1JlTUY5Y2hlbGdUaTlBSUd5SkJ4RHhtY3IwSERKNFdMZ25tczNZSytRMzJGNndnYnYyQ1pPWmRkUU9aZG1oa2lhK0VDY2dSdkI0N0Y5RElNWVdZUlQySUozWWxGWUFlbWl2dk5Zc1JqTkMvZ3BxbjM0WmhoQng3MzZuaTJ1aEp4S3g3cFo1cTFodElMbUdXZTFNbEowRzUvOFppMGo5c3NZUHZteGgwd2ZzL1R0OEdISmd0WXJuNFhwMjJqUG5vYlVnWkxLVjdBVGs3V3E4UlJ0SzM0SDEzejlRS2E5Z3M2VHEzQ1lvVDByQm1WT2E4ZVNac1pGVGZQTkI5Rjg1NDhGSUlDOGdWbko1YTJrQkNOck9Za1B5aWc3dmExUWQyaGhIZDQwS2pNNzRONXI3V05LaklrY0xncTUwbFBnM3grbDZjaGtFR21BTW1jL1l6TWV5Y0xDOVVuSlNBeEZ1SkdySzFYSnVMRUZXNnFua1RMdFF1eDFGMEZaUVM3VnBSbUdEaDhTNGMvSE5KdW1oVFZSM2syQWRtOCsxUmFXdnhETWdYVzdvbmlSc3MxbTVJeC9kSU01cEpQcktSdU9mUVJuTGErWFlGb2t0NEpyZ1ZWd3FaTEZkakZJNzh3Vm5nQ3pPWk1ET1B1bTZKMGZBcnFPSCtQRmdBaVlLR01EMFhQZDlSem4rSGlJVGdBQ0I2a2oxUStTelh5UFZIQ3pJVTQyeHNrNFFKZDN0dEV4VzJrcm91UWxPeDcwYUFQTnVDVFZiNmJEUjZ4MUN4Yys5WGlCU1RuUE5Ob2F2QlBUUFQxQksrMVhHUkZPQzlmaVBBWUhtUlhndmpnaURQeUVUQzBWYVJTTlRvQUJQMHBJc25rN0xvSVRBVUlHazcvaUZYQ2NKcmRkTlRnT0J1d0x3bUdzZUtwb2V0RDlOM0ZqUkU4bGNxaGdUU0RaQTZXNyt0VnV0elNwdmxYaU9mTWo5Z1NYOHhOSUpWUnVmb0pOUnVUL29kWlFJM0hRd3l6OUdEZUdUcTFIeGtKc0cxRkgrUkQ4ZnFTWjZSb0VhRTB0NGJFdmtkb2VSbStmU2xDcmZjT2Rsdllpdm5xY3luUU5TamlEcXlYN0x6aWh6eHZxbkFFWjdsSEVqNzdKbE05WDRrUVRFNWRGb0ZsQWZEdEtJSWxEY01zUE9CZytsU0VUamhYUjJCWkFIeDFpK0FORW5aUXlpczRUbkE1eThxM2ZxL3NDYWp4bmpMekZYZWFjVEppc0w5VVBTaDdFbzNQanNUcWRLeWNmZnZ6b0h1WWlQUGgvUjV3QzY4RVgwQUdLb2ZYQ2s3bmt1eW9IWElSQ0FySW92QjU4ZjRJcmx0QTRkSncxWDRmVkVzMnpSeFB5d3ZSS1VURnlUT3R1TmlHMlVZMXlCamJWei9kT1UzQ1Q2SHUveHNXanZONkRhcVlKWHNLYS9WaEtpaTNOUHo5c1plNUs0bWZXVUNtMXJrTkpuRTFsY0hPZzliZVlrTGo4blFDU2s3bDZnak1wTzB5MjNRTTkzcnFMWnpJemhKcGFac1RVSEpsTi9HOTFhL0RYSWRoWURMVnhHTTR3dmhDbWtzYnlWNk5zd21vY21nbTdUWnM2Z05vMUZsbzNGa2d4ZWJLMUVCVEJhNlR4K1BvQ3craVF6eElmWU1QdEdRQW1hb0xsYmRQZ1h5aXR6RDFLU2pvU3RqRDYwTDFkaWJMWFo3RU42bDM4TFptdW4wend1V3JRSjZNeU1ITmlyTzJHU0U2aHN1VEc0bExzdzVYblp5dEs5Qjk3MG13NDFkN2xocWQxTG5BWUZjS1o2TnBHVE5WbFUyQnJrUFkwajFRV3Z0ZEJVd3R5S1VjeGtwLzk3bGhYNGswckp0VElKdUl0Y1g3TVVUalhmN1MxTHBTY2Rna3RYcld1NVptU2huVEtaQjczTjZsMzBGeGNZZS9LYXM3UU5CNDQ5SFgvZDQwUFZKdjY2dnQ1T3QyZmsveXRhSThianUzbGR2TWJUZUUrQjdvT2xIVS9uemdMUTZHRmpkZHpJY1k0dVR3UGwyeTBmZEFOa2RjNzd3RGJXV1Z6Y296WmgzVW5vKzd5b3dxc0d4Zkhua2ZMVTk1RGxSZS9JNGUrMXlGUW5BSXQ3clpEVEUvS0xPaGQyUjlCZktGeXZMeWIvTnR0RGdINTR6MzVjc3pBN2RMWm82RDI4RTEySC9qUnN2cHljQWhTTUt1M1BWemMwK0IzdW5GUzFoOW12UlREUElONXNRRFVONzZJR3dGNUVabjMwQUw4L0Q0Z3BObzFzRFhObjJGSS9qUXdwc0QzYU9mUEpVSHlTenJxcXp5dFpWdTI4QXIyTDRkaHlPc0wyZXVoenNhNnd3Qk45aHczYVhGLzZGcis4TTVNK2M2b1JBL3dZbmt4MXRsazVxK3ZQdFlFclVqcWFmMlRKeG5wSlpYMmY0cFJ0M0h0R1ZHSUIrajlieVIzMkVhUlhjMkdveEdmbmtnQ0hFWEZIKytrZFZsZXc2bmZmTVBvL0ZydGJnQ1IxampSZk1JU09XU3BhM0JBMW8wQ2s4bzEyazhBYXVqUldQRzJrYW16NkpYOS9GOHZUWVcxOEVaNU9ZOVI4U1dOd3BXLzYyUnpKS29DZmdaQ1RvbUMyM3VOSHo0YWZMeUwyRUZkWmI0eGVIa0lQQ20zbEsvbll5RTB0cWVQaU5PRWdKMGh4NW8rUEpHRW9OOHk4eVhMZFkwWHJNZ3MwZVJzQzZtQ2JGb0ZLKzIxTnB4SEhUSExpZ1ZESWY5YzkxcWJHRXpDT0o1akthdjBwckNiZkJKcktXaUxObVBZdkU4SlJXdURra0ltNy84TTRteTFoUW94Szh3L0h5L1JWMWxLdzNtK282M29EeHVEM1RYaldQdGg1REE3VmdMUVloODNIWmFFQ0UxNmVhcFUrQzV2Uk9qTG9kTmc5akpibTZZbEoyb3EyNWFpUVQ5R04rMllkL2lsUnV1Y1BwcHh2NFMycnFGbHBaYjM4ckpsc0pQMERPZVMvWmZvTVNUSkx6SitOMjBTcnpZSkkySHZ0aTdRR01ETU9KVEJEWkx1dXBmTDRoRFg4WXN1TngxSE5IeTZXalBHVERSemtUY0ZZZmVHaHdYOGhQRms5RURFZmhtM3NITGd0bkN3L2hhVlRaS3Njak9kV2JicjJ5L2g1YjI3YUtsTk5Xb1NCbmxTbE1ONnd6QjJ3dDc3bU8zcHFITEVlZGwzTSthbGNjVk9zNDFPZGFiQXl2M1pVL2NTa29GY3NwNysvTlpUbllrQ091R1ZQV1ViYjdJMnBBS3R4Tklyc0dQTjJYcndUK1I1ZytKc09jUHY2SGEvdkFLUGtsbU5weGRPWnhyMnk5TzZob21YUjBwSDEzeEZjZzgyRzJLWCs5MVhTQlNNMjBlMGFJYlVJZDVnaHFwSEFrVEM0ZWdLeUN3VGxnM0lkZXkrQ09zbGZLRm94V2dPNGdRK3pwMnNBZXF3dkw3Mit3QytWb1BySU9FZDluamU2QlVuUHQ2UmZVM1dBcGIyM2hMZmdkTURIK1o0Y0w3c2E5ZVNCTFpyRUJKelo5Nlc2QmRNQ2tPVHI4WTJVNzJqK21sMDlLZWJLZFhvS3pBVStTdm9VaGVzUStld1A0d3ZYUk9Xc1hKaGpldlFFbkpRL3UvVXplMi9UTVZzcjUyeGZ4NnhackJLMHhETmE3NjdBcFVPWG9mSStGN2xaVmo4S3J5UmRQWXRscWpjZjR1VWZSNFNENEtWUGw3ZDh5Yk1NUS9EL0N3V3JRZjA1T3dPMi9DWGU3MnZCM1E4MWRnV0V2OEpZVE4wMmZnRE80aW1FVWZoV0p6T0ljTFY2TGsrZExib1o5VGwvVkR1dVd3aDFJWjdBcDVzOG4yS3pCSklyNlRGb3Z2Z0lsMEF0Q094L0hUOFlnUGg2SUhFQTlBRVJ6ejdmVXMvdkpucGpoK0dZZkFUeVBHVHp3RlQ0MUgxWC8rQVhoSHcvOEJrQ0ZIRThXZjgva0FBQUFBU1VWT1JLNUNZSUk9XCI7XG5cbmZ1bmN0aW9uIGh5cGVycGF5KG9wdGlvbnMpIHtcbiAgdmFyIHByZWZlcnJlZCA9IG9wdGlvbnMucHJlZmVycmVkLFxuICAgICAgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgaWNvblNyYyA9IG9wdGlvbnMuaWNvblNyYyxcbiAgICAgIHN2ZyA9IG9wdGlvbnMuc3ZnO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGxhYmVsIHx8ICdIeXBlclBheScsXG4gICAgaWNvblNyYzogaWNvblNyYyB8fCBpbWcsXG4gICAgaWNvblNyY1NldDogaWNvblNyYyB8fCBpbWckMSxcbiAgICBzdmc6IHN2ZyxcbiAgICB3YWxsZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfd2FsbGV0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGhlbHBlcnMpIHtcbiAgICAgICAgdmFyIGdldFByb3ZpZGVyTmFtZSwgY3JlYXRlTW9kZXJuUHJvdmlkZXJJbnRlcmZhY2UsIHByb3ZpZGVyO1xuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZ2V0UHJvdmlkZXJOYW1lID0gaGVscGVycy5nZXRQcm92aWRlck5hbWUsIGNyZWF0ZU1vZGVyblByb3ZpZGVySW50ZXJmYWNlID0gaGVscGVycy5jcmVhdGVNb2Rlcm5Qcm92aWRlckludGVyZmFjZTtcbiAgICAgICAgICAgICAgICBwcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bSB8fCB3aW5kb3cud2ViMyAmJiB3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiOiBwcm92aWRlciAmJiBnZXRQcm92aWRlck5hbWUocHJvdmlkZXIpID09PSAnSHlwZXJQYXknID8gY3JlYXRlTW9kZXJuUHJvdmlkZXJJbnRlcmZhY2UocHJvdmlkZXIpIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gd2FsbGV0KF94KSB7XG4gICAgICAgIHJldHVybiBfd2FsbGV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3YWxsZXQ7XG4gICAgfSgpLFxuICAgIHR5cGU6ICdpbmplY3RlZCcsXG4gICAgbGluazogJ2h0dHBzOi8vd3d3Lmh5cGVycGF5Lm1lLycsXG4gICAgaW5zdGFsbE1lc3NhZ2U6IG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlLFxuICAgIG1vYmlsZTogdHJ1ZSxcbiAgICBwcmVmZXJyZWQ6IHByZWZlcnJlZFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBoeXBlcnBheTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/hyperpay-9669d353.js\n");

/***/ })

}]);