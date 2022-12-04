(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[22],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Click below to install and then load this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2NvbnRlbnQtZWVhY2ExY2MuanM/ZGZhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsc0JBQXNCLG9CQUFvQixrUUFBa1Esc0JBQXNCLG9CQUFvQiwwVEFBMFQscUJBQXFCLHNCQUFzQiw2Q0FBNkM7QUFDenhCLEdBQUc7QUFDSCxpREFBaUQsc0JBQXNCLG9CQUFvQixxTUFBcU0scUJBQXFCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVNQUF1TSxxQkFBcUIsc0JBQXNCO0FBQzFtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIGN1cnJlbnRXYWxsZXQgPSBoZWxwZXJzLmN1cnJlbnRXYWxsZXQsXG4gICAgICBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG5cbiAgaWYgKGN1cnJlbnRXYWxsZXQpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgV2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHlvdSBhbHJlYWR5IGhhdmVcXG4gICAgPGI+XCIuY29uY2F0KGN1cnJlbnRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0YWxsZWQuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gdXNlXFxuICAgIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0ZWFkLCB0aGVuIGNsaWNrIGJlbG93IHRvIGluc3RhbGwuXFxuICAgIDwvcD5cXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgPGI+VGlwOjwvYj5cXG4gICAgSWYgeW91IGFscmVhZHkgaGF2ZSBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIiBpbnN0YWxsZWQsIGNoZWNrIHlvdXJcXG4gICAgYnJvd3NlciBleHRlbnNpb24gc2V0dGluZ3MgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgaXQgZW5hYmxlZFxcbiAgICBhbmQgdGhhdCB5b3UgaGF2ZSBkaXNhYmxlZCBhbnkgb3RoZXIgYnJvd3NlciBleHRlbnNpb24gd2FsbGV0cy5cXG4gICAgPHNwYW5cXG4gICAgICBjbGFzcz1cXFwiYm4tb25ib2FyZC1jbGlja2FibGVcXFwiXFxuICAgICAgc3R5bGU9XFxcImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiXFxuICAgICAgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcXCI+XFxuICAgICAgVGhlbiByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLiBPbmNlIHlvdSBoYXZlIGl0IGluc3RhbGxlZCwgZ28gYWhlYWQgYW5kXFxuICAgIDxzcGFuXFxuICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fT5cXG4gICAgICByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQgPT09ICdPcGVyYScgPyAnPGJyPjxicj48aT5IaW50OiBJZiB5b3UgYWxyZWFkeSBoYXZlIE9wZXJhIGluc3RhbGxlZCwgbWFrZSBzdXJlIHRoYXQgeW91ciB3ZWIzIHdhbGxldCBpcyA8YSBzdHlsZT1cImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcIiBjbGFzcz1cImJuLW9uYm9hcmQtY2xpY2thYmxlXCIgaHJlZj1cImh0dHBzOi8vaGVscC5vcGVyYS5jb20vZW4vdG91Y2gvY3J5cHRvLXdhbGxldC9cIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZW5hYmxlZDwvYT48L2k+JyA6ICcnLCBcIlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfVxufTtcblxudmFyIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuICByZXR1cm4gXCJcXG4gIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIGluc3RhbGwgYW5kIHRoZW4gbG9hZCB0aGlzIERhcHAgd2l0aCA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4uXFxuICA8L3A+XFxuICBcIik7XG59O1xuXG5leHBvcnQgeyBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSBhcyBlLCBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSBhcyBtIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\n");

/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/opera-e0292bed.js":
/*!*************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/opera-e0292bed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ \"./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar img = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABtlBMVEVHcEyyDxH8SEj7GSvmGyv/SUn9IDDqFyf/Gy31JzL/Giz+Giy+FRmwChPmJS3cISnyFiqzCBX+S0u4BRerBg7/Gi3/TU39JzO4DhjkNTe0DxP+SUnHFSKvBRT/S0uvCBKuBBKpABWnABTnFCT4GCr+SkvSGSTdECH9SEjVFSTTGSHhNDX/Skr+Giz6Giv5RUWyCBakAwr5GSqtART/SkrKCRz+GSy7DhfaDiHvFynoFCTtFCjxFijSEiPNFyHmEiX+Gyr2Fyr0QkLwP0D0Q0PFGyP/S0qjBQTiLTX/Giy5CBq3CRr/Gy2yDQ/QJyf8GizYKyvLCx7jEybABRvqOjrYDyHaDyLzQEHsFSjLJSXPJibVKSnaMDCrARX/Gi3/TEz+Skr/Gy3/Gy78Giz+Giz/S0v0FyngESPqOTrvFSjhMzSmBgb2Q0T5R0i7FhaxCAvNIyP4GSvBBxq3ExPTDR/AGRnXDiHGChuqCgrrFCfeMDDyQEDUKSruPT6xDw/PCx/oEybJCh3cDyLtFSfHICDYLS3mNzfRJiahAwPwOjrGGh7kEyW1Axe7BRnEHx/NFiTVHyutAhXkSSDHAAAAX3RSTlMADS2/CBtPA/wRruDnKCNXO0q1zd33+UaAkpGlND3cw+tukSnO8c/zYsMemj7Xin0doTL4wtSdsv6w1PTf5J2RePb1vNpomn/obPL+ZWHx77T+1uqgZLDibLPi+YSq5l1x/o4AAAKMSURBVHheddNld+JgEIbhARJCcEuhQEupu7ts3dfdE9Sl6u6y/o8XJkkX+i7X5/s8k5wAFGPNE6qvHKfTLnZTUBLj6NdpAgF/TiDAtbV3l+jUKn++wiy4GokEOa0ZSEatP1dhthpdyyZvbpLZ7YZ2lpjTyVnwLFfJsrYaKPKYk7u4vmt+vsue3EmiHXtFQcYsaqROM/xEATmUxXu0g7JVFua+U3NyN9QJEoXrSGI3gKRGJ3datuCMa10MM14FIEorP19bMxSgBjLrKOMUj6s1fhGnhiIG/WYG6fE4pZIHtQwUc95togsX5DjkQY0DHmjW/0QX+vw79suDtRTx8R+tXKCVWQBWFwihQDsQTCui6w8AZk0omBcKqoFgfHqNDj6yMOEPotAzIxCo+ssD9MkDqpAY+ttYID3fu0R7JtCtikK1DJBaEnso8RkmpTCoAhKUxxLoqgUmI6IS4e0VipXDaETy39Ovb2PotgOGInEUGWWBNL1/iPbV8D5yjuIjNUBQzKT20ZQSukfOd1HcBATlVAqlZ1ighndPUHwcCI1CGgluABjf/YZOXhIPyVh5AfGNAGBuiEqI28o6PpzHV+Y3mLfRMxRtUjwYnMt1GHYA4OTgFhp8w0Ch1vtBWvp5Dm6grTFPYUn3SoNljSBqrt84RhtNxn8l7ZY7NwUST9+LU3Rcb6IxZdhWq3S3zErDPUvftuh0rNyhpGlla0cldjxf1quEAhbbmuTXwrR7zlrJ8/mKD9dZizpgPAOvfojWfsdSaUEIhwUhnXrXQvxBOp22pe+i5buDROzwMJZYaJpVAKnCZavq+SNZXl7Se50GIOF93xebPR/3VNm9XT7MSqSUweKrrq6e91V0MlDkLyDwITNcRd/tAAAAAElFTkSuQmCC\";\nvar img$1 = \"data:image/png;base64,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\";\n\nfunction opera(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg;\n  return {\n    name: label || 'Opera',\n    iconSrc: iconSrc || img,\n    iconSrcSet: iconSrc || img$1,\n    svg: svg,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, createModernProviderInterface, provider;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;\n                provider = window.ethereum || window.web3 && window.web3.currentProvider;\n                return _context.abrupt(\"return\", {\n                  provider: provider,\n                  \"interface\": provider && getProviderName(provider) === undefined ? createModernProviderInterface(provider) : null\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: 'https://www.opera.com/',\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"],\n    desktop: true,\n    mobile: true,\n    preferred: preferred,\n    osExclusions: ['iOS']\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (opera);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL29wZXJhLWUwMjkyYmVkLmpzP2Q0OTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLDRFQUE0RSxNQUFNLDBCQUEwQix3QkFBd0IsRUFBRSxnQkFBZ0IsZUFBZSxRQUFRLEVBQUUsaUJBQWlCLGdCQUFnQixFQUFFLE9BQU8sNENBQTRDLEVBQUU7O0FBRXZRLGdDQUFnQyxxQkFBcUIsbUNBQW1DLGdEQUFnRCxnQ0FBZ0Msd0JBQXdCLHdFQUF3RSxFQUFFLHVCQUF1Qix1RUFBdUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEdBQUc7O0FBRTlUO0FBQ3JFLDBCQUEwQjtBQUMxQiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ibmMtb25ib2FyZC9kaXN0L2VzbS9vcGVyYS1lMDI5MmJlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IGUgYXMgZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UgfSBmcm9tICcuL2NvbnRlbnQtZWVhY2ExY2MuanMnO1xudmFyIGltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FNQUFBQzdJRWhmQUFBQnRsQk1WRVZIY0V5eUR4SDhTRWo3R1N2bUd5di9TVW45SUREcUZ5Zi9HeTMxSnpML0dpeitHaXkrRlJtd0NoUG1KUzNjSVNueUZpcXpDQlgrUzB1NEJSZXJCZzcvR2kzL1RVMzlKek80RGhqa05UZTBEeFArU1VuSEZTS3ZCUlQvUzB1dkNCS3VCQktwQUJXbkFCVG5GQ1Q0R0NyK1NrdlNHU1RkRUNIOVNFalZGU1RUR1NIaE5EWC9Ta3IrR2l6NkdpdjVSVVd5Q0Jha0F3cjVHU3F0QVJUL1NrcktDUnorR1N5N0RoZmFEaUh2Rnlub0ZDVHRGQ2p4RmlqU0VpUE5GeUhtRWlYK0d5cjJGeXIwUWtMd1AwRDBRMFBGR3lQL1MwcWpCUVRpTFRYL0dpeTVDQnEzQ1JyL0d5MnlEUS9RSnlmOEdpellLeXZMQ3g3akV5YkFCUnZxT2pyWUR5SGFEeUx6UUVIc0ZTakxKU1hQSmliVktTbmFNRENyQVJYL0dpMy9URXorU2tyL0d5My9HeTc4R2l6K0dpei9TMHYwRnluZ0VTUHFPVHJ2RlNqaE16U21CZ2IyUTBUNVIwaTdGaGF4Q0F2Tkl5UDRHU3ZCQnhxM0V4UFREUi9BR1JuWERpSEdDaHVxQ2dyckZDZmVNRER5UUVEVUtTcnVQVDZ4RHcvUEN4L29FeWJKQ2gzY0R5THRGU2ZISUNEWUxTM21OemZSSmlhaEF3UHdPanJHR2g3a0V5VzFBeGU3QlJuRUh4L05GaVRWSHl1dEFoWGtTU0RIQUFBQVgzUlNUbE1BRFMyL0NCdFBBL3dScnVEbktDTlhPMHExemQzMytVYUFrcEdsTkQzY3crdHVrU25POGMvellzTWVtajdYaW4wZG9UTDR3dFNkc3Y2dzFQVGY1SjJSZVBiMXZOcG9tbi9vYlBMK1pXSHg3N1QrMXVxZ1pMRGliTFBpK1lTcTVsMXgvbzRBQUFLTVNVUkJWSGhlZGRObGQrSmdFSWJoQVJKQ2NFdWhRRXVwdTd0czNkZmRFOVNsNnU2eS9vOFhKa2tYK2k3WDUvczhrNXdBRkdQTkU2cXZIS2ZUTG5aVFVCTGo2TmRwQWdGL1RpREF0YlYzbCtqVUtuKyt3aXk0R29rRU9hMFpTRWF0UDFkaHRocGR5eVp2YnBMWjdZWjJscGpUeVZud0xGZkpzcllhS1BLWWs3dTR2bXQrdnN1ZTNFbWlIWHRGUWNZc2FxUk9NL3hFQVRtVXhYdTBnN0pWRnVhK1UzTnlOOVFKRW9YclNHSTNnS1JHSjNkYXR1Q01hMTBNTTE0RklFb3JQMTliTXhTZ0JqTHJLT01VajZzMWZoR25oaUlHL1dZRzZmRTRwWklIdFF3VWM5NXRvZ3NYNURqa1FZMERIbWpXLzBRWCt2dzc5c3VEdFJUeDhSK3RYS0NWV1FCV0Z3aWhRRHNRVEN1aTZ3OEFaazBvbUJjS3FvRmdmSHFORGo2eU1PRVBvdEF6SXhDbytzc0Q5TWtEcXBBWSt0dFlJRDNmdTBSN0p0Q3Rpa0sxREpCYUVuc284UmttcFRDb0FoS1V4eExvcWdVbUk2SVM0ZTBWaXBYRGFFVHkzOU92YjJQb3RnT0dJbkVVR1dXQk5MMS9pUGJWOEQ1eWp1SWpOVUJRektUMjBaUVN1a2ZPZDFIY0JBVGxWQXFsWjFpZ2huZFBVSHdjQ0kxQ0dnbHVBQmpmL1laT1hoSVB5Vmg1QWZHTkFHQnVpRXFJMjhvNlBwekhWK1kzbUxmUk14UnRVandZbk10MUdIWUE0T1RnRmhwOHcwQ2gxdnRCV3ZwNURtNmdyVEZQWVVuM1NvTmxqU0JxcnQ4NFJodE54bjhsN1pZN053VVNUOStMVTNSY2I2SXhaZGhXcTNTM3pFckRQVXZmdHVoMHJOeWhwR2xsYTBjbGRqeGYxcXVFQWhiYm11VFh3clI3emxySjgvbUtEOWRaaXpwZ1BBT3Zmb2pXZnNkU2FVRUlod1VoblhyWFF2eEJPcDIycGUraTVidURST3p3TUpaWWFKcFZBS25DWmF2cStTTlpYbDdTZTUwR0lPRjkzeGViUFIvM1ZObTlYVDdNU3FTVXdlS3JycTZlOTFWME1sRGtMeUR3SVROY1JkL3RBQUFBQUVsRlRrU3VRbUNDXCI7XG52YXIgaW1nJDEgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRkFBQUFCUUNBTUFBQUM1endLZkFBQUNCRkJNVkVWSGNFenFMREg3TVR2Q0VCM1NIQ1gwSUM2MkNCTGhFeGpUSWllOURobnpHeXV4Q3hXcUNRdjNPVDN5SUMybkJRci9HaXovR2l6L0dpek1HU0w2R0NyNE1UbW5BeFAvUzB2K0dpeitHaXkxQ2hYZUpTMy9NanY4R1N1c0JCTCtHaXorU1VtNUR4YitTVW12QnhPdENCTGVNamUyRHhUL1MwdkVFUnovUzB2L0dpejZHU3YrR1N6c0dpakVEaHpORHhxekJoVDZSa2FwQXhEL1MwcjhHU3orU2tyL1MwditHaXlvQkJEL1Nrci9TMHZYRGlEak5UWGxHU2ovUzByS0hTRDBRMFBOSGltcUFoSzdEaGZmR0NYVUR5RC9TMHZqRVNUUkR5RGtFU1QvR1N6K1MwdmNMekRVS1N2S0lDUElGeVR2UFQvVUVCdjVSa2FuQXhLbUJBMy9URXoyRnltaEF3VE5IQ0hVRlNMSUlTSHJPanExRFErdUNncmVFQ1BWRHg3cUZDYThDUlh3RlNqNUdTcmVMVEgyUjBmMEdDbTNGQlRzRkNqc1BEei9HeTMvUzB2OEdpeitHeTM0R0N2L0d5Nm5Cd2YvVEV6MUZ5cmdFU1BJQ1J6ekZ5bndGaWo2R1N2a0VpWEFDQnVyQ2dyQUdocnZGU2ZSRENETUN4N3lRVUhSSnlmbkV5YmxOemZaRHlMVURTRGJNRER1UFQyekJCamhORFRNSkNUcU9qcjNSRVRJSVNHeEVCQzdHQmlwQUJTdUFSYThCaG1oQkFPdURBejZSa2EzQmhqWkt5dXdBaGZxRkNlakJRYTJFaEwrU2tyZEVDUENIQnpFQ1J2dEZTZmVNREc1QlJpMEVSSDdTRWpFSHgrNEZSWFVLU3JXS3l5ZkFRR2FBQURxTnpmQUV5Sy9VZzh3QUFBQWFuUlNUbE1BRHlFc0J4VVhBUVFNV0NPSEcwMzR4L3Z4UVM4M04vdlcrRzU1UTZYeWJLWjdiN0pYL3QrVjAvRzllZVJsVC82WFpkVXRsODdtaCtiRCtQVFJqWCtJN2Y3SHlLUzIyT25teExEaTJmVzQvcGIrdlVtb1dQWCt5ZTN0M3V2NjN0YTUrdURONlA3dTcrdjRPcjdCandBQUJiQkpSRUZVZU5xZDJJZFRFMWtjd1BIZkpydlozVlJJZ1pCQVNPZ2w5Q3BJUjVBbTFiTjNPZTlDQ1FFcHdpbUtCZXNwaHFNam5xRGkrVS9lZ29OaGYyOUpIbjdDTUF5VGZQZjM4dllORXlBc25sSEZKeFpuMmIzbXVEaXpONnExVEd2bFdQaGxxdmpzTEcrMGI1OWZldXg5TTlzVGNxd00vQUpHbTJDUDlrc1Z4Ty8zbTdQS2JIQk1YR0tVT1ZRam1qNXZRcnh3ck55dGFMOWlhYytRZjQrWlBpbG9zM3grcGRyZ3hLT043anhKZC9mWXlxamZYR2FseXRsYTR4UnlRNk5qSDRJajUzYS8vYkM3T3IzV1BlSE41bmlJUUV5MEsyekU0RlplY0hYMzIrNWgzODZOTEZRbVdNT3ZtemVVS1l3M05KRTMvVjdSNnRvMUl4dXVaOHRTV094NFh2Q2NTVEt5U25vL2N0a2pIdDJ6UmltTTkraUdxVHc1WDYvWDl4VzZUQ01razE0OGNqc1Vlb01iYVgwcE9wRVZCSUhWeE9qclRkTTRPQjBxRXZQNUNORVg4bVA0MEZOQTR5bThNbzBjVlZSWXIzLzRWSzhndXlnUE9yMHJHSlFIZzFmMExCQzRWbks5Y1kwNklMQ084cURrVGZBUWwwTUFoQzN6a2IwcURaQjRTRWw3ZzZYRjhPaFpXck9mNkJVem9FZ3Fma0xCdFdSMGJTdDVQcUpsUFZTOHZQWkpadTJ6WHBBdE9JSGNrQ2dWSEluWGYxNUQ3dVJHV0xEWEdQWlBRL0puck9IUW9sVlo1SUt6SVN4MTJ0L0lUR2luK2NSb2NzRUdDSWNIejh5TVBMalo4UE1lTTlqSkhkWkNCTHFNelJuRXc4TVBTZ055RUFIdjJVRzl6UXdON09PaXlBR3pBU0tQdUxNcHM3UGpnSDFhTXpHZ1hRV1I4RUxORHZMNmpBZ1NRZUVlTEFZS2xvdXZrWXNXa0tqcy9pRTVuemtlS0RCbmNQQkZEUThBeGpnZkR0bzVvTUI3WGlBUHp6TUFmTFovQ1BFWEMxUkJTd2NPWGxRRE1LMWtNQWVvNk01L2VZamtBcWk4dmtHNUliTU5hUEJpNHhMcUxkVUkwbHM0aVBpa1kwZFhkQzU5a1Z1U2JwekVRU0tZd0FBZDdWZXNuWU5pSXVndkU0Q09wZVBwa2x5SEdySW1NVjhpVUZMZi92Z1VzWUNkQ0E3bUFDVlZPeEhVZ25jWW1aelVBaVZEKy9PUGNzOXo0RGNpT0dvRVN0ekp1ZWVJRXdkSHBTL3FJSFB5UDlTYms0S2p5UEQ0Y1lKemlCTitIeVZvZ1E3UEVjR1hUcmc1anRBSHdYRHAyVXVrQUc2Tlk4TTV0Qk9xeUtBUkVzWW5rT0ZzSHVqWWFwOGhmOW9nK3k5c3NwR2xuTkE0aTNxemx3eGczTUpHcjNOQUorblZyTnlySGdhc2YrRGd4RTByVUdHN0ZuR3dpd1d1Wld0RmJtdkxTTG5KUFl1dmtBSWUyS3FKRlZ5czRpbjNCQVczYTIwQXZIYmxFYkxTd2dDTmd1MUZ1ZlVTQXdCWW00bGlzeFVvc083MWJjVE5BZ0J6ZldVS2N3S0ZvcloxSkxNQTlqaFJiV3hxcW9XRGlQaWsyQUc1UUlrSzlxaXZUbzNKVFRWVEhHZnVSQUFIMHdYWXcxYU5iY2lOalRXS0VRYzhtNG1EcGJhRDdiOUtGSnN0RVFmc0lRYzhPTEtDYytNeHNuRktFK25ZVlFSUXI2bm81L1RxRnFKWW1STmhpMHZ3Z0xIVkxCd1FjaW9mUDBHdWhWMDA0NDROa0ZzY29qa2xCWkZ3aSthVGlCM0pMSkNkVjh2cEovZVJ5cHFqZHpxK2FRQnpNK2hEY09WOTdMUlRQS3AzZ2xqd2lTTDB3WWpMdi84QU8rMWthSHVsWndWQTFPY1ZpbFVHSUxCblMyS0pON0JhQkVKdXhvTzcySVV1Rzc2eUlhbUo2TVdtRzRERTVtYmczb2U3RjA1V0YvRVF3aFc0U3dkd3J5SmRCVXBFcWZnQnVkdDV1NmM2M3NEdS85K0dLVXB5dDBrSEJJbVY5WER4SHZiZ2EyMVRUM3AxVWtGU3VydWt0SUlZTDFEaFZ2RVFnbGJkY0k5VU45ZWZXZHJXVnBwWk1TRGxjSysyUzlaREJGMytqWVZEL3BVZUN3djNPbFA3QTFLS0ZKaHROeklRbHNhUkpuV3doYzdVMmUyQUpKU1NmbDZjN1RoallTRUMwWko4WStFZjB2ZUhxYlA5NjRFRDIvMHZQOWFsZVRRQ1JDUm9IQTN6aXI1MzFuMTVtcnJuYTEzZDk0VTcrUmFSQnhxczJsTW92WDZaOEc1NWVYNWVtbmF2N2twT2tjYWp3L09pMmxQdmtwTHZGQzNQdnl1WGNpd2NBeS9xSE1tRmI2Vlh2MFdrWDducTgzdFJqbXBLVFV5S3ZyN2NKTys1Q3ZzY3ZUb0c1V2lqTEtPVG9uMzFoZVV1azhsVlhwaWM3K2hWYTBTV0I0UitUSUVWTlRxMU9tYWZXcWVMWFBzZmNHeHZ2aGxFc280QUFBQUFTVVZPUks1Q1lJST1cIjtcblxuZnVuY3Rpb24gb3BlcmEob3B0aW9ucykge1xuICB2YXIgcHJlZmVycmVkID0gb3B0aW9ucy5wcmVmZXJyZWQsXG4gICAgICBsYWJlbCA9IG9wdGlvbnMubGFiZWwsXG4gICAgICBpY29uU3JjID0gb3B0aW9ucy5pY29uU3JjLFxuICAgICAgc3ZnID0gb3B0aW9ucy5zdmc7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbGFiZWwgfHwgJ09wZXJhJyxcbiAgICBpY29uU3JjOiBpY29uU3JjIHx8IGltZyxcbiAgICBpY29uU3JjU2V0OiBpY29uU3JjIHx8IGltZyQxLFxuICAgIHN2Zzogc3ZnLFxuICAgIHdhbGxldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF93YWxsZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoaGVscGVycykge1xuICAgICAgICB2YXIgZ2V0UHJvdmlkZXJOYW1lLCBjcmVhdGVNb2Rlcm5Qcm92aWRlckludGVyZmFjZSwgcHJvdmlkZXI7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnZXRQcm92aWRlck5hbWUgPSBoZWxwZXJzLmdldFByb3ZpZGVyTmFtZSwgY3JlYXRlTW9kZXJuUHJvdmlkZXJJbnRlcmZhY2UgPSBoZWxwZXJzLmNyZWF0ZU1vZGVyblByb3ZpZGVySW50ZXJmYWNlO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gd2luZG93LmV0aGVyZXVtIHx8IHdpbmRvdy53ZWIzICYmIHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICAgIFwiaW50ZXJmYWNlXCI6IHByb3ZpZGVyICYmIGdldFByb3ZpZGVyTmFtZShwcm92aWRlcikgPT09IHVuZGVmaW5lZCA/IGNyZWF0ZU1vZGVyblByb3ZpZGVySW50ZXJmYWNlKHByb3ZpZGVyKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHdhbGxldChfeCkge1xuICAgICAgICByZXR1cm4gX3dhbGxldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2FsbGV0O1xuICAgIH0oKSxcbiAgICB0eXBlOiAnaW5qZWN0ZWQnLFxuICAgIGxpbms6ICdodHRwczovL3d3dy5vcGVyYS5jb20vJyxcbiAgICBpbnN0YWxsTWVzc2FnZTogZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UsXG4gICAgZGVza3RvcDogdHJ1ZSxcbiAgICBtb2JpbGU6IHRydWUsXG4gICAgcHJlZmVycmVkOiBwcmVmZXJyZWQsXG4gICAgb3NFeGNsdXNpb25zOiBbJ2lPUyddXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wZXJhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/opera-e0292bed.js\n");

/***/ })

}]);