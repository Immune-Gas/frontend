(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[40],{

/***/ "./node_modules/bnc-onboard/dist/esm/wallet-connect-bcb05e74.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/wallet-connect-bcb05e74.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-dd8224fc.js */ \"./node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bnc-onboard/node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ \"./node_modules/bnc-sdk/dist/esm/index.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar walletConnectIcon = \"\\n  <svg \\n    height=\\\"25\\\" \\n    viewBox=\\\"0 0 40 25\\\" \\n    width=\\\"40\\\" \\n    xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n  >\\n  <path d=\\\"m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z\\\" \\n        fill=\\\"#3b99fc\\\"/>\\n  </svg>\\n\";\n\nfunction walletConnect(options) {\n  var infuraKey = options.infuraKey,\n      rpc = options.rpc,\n      bridge = options.bridge,\n      preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg,\n      networkId = options.networkId;\n  var pollingInterval = Object(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"g\"])(_onboard_dd8224fc_js__WEBPACK_IMPORTED_MODULE_1__[\"a\"]).blockPollingInterval;\n\n  if (!infuraKey) {\n    if (!rpc || !rpc[networkId]) {\n      throw new Error(\"A \\\"infuraKey\\\" or a \\\"rpc\\\" object with a parameter of \".concat(networkId, \" must be included in the WalletConnect initialization object\"));\n    }\n  }\n\n  return {\n    name: label || 'WalletConnect',\n    svg: svg || walletConnectIcon,\n    iconSrc: iconSrc,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {\n        var createProvider, _yield$import, WalletConnectProvider, resetWalletState, networkName, getBalance, rpcUrl, balanceProvider, provider;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./providerEngine-538cf498.js */ \"./node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js\"));\n\n              case 2:\n                createProvider = _context2.sent[\"default\"];\n                _context2.next = 5;\n                return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! @walletconnect/web3-provider */ \"./node_modules/@walletconnect/web3-provider/dist/cjs/index.js\", 7));\n\n              case 5:\n                _yield$import = _context2.sent;\n                WalletConnectProvider = _yield$import[\"default\"];\n                resetWalletState = helpers.resetWalletState, networkName = helpers.networkName, getBalance = helpers.getBalance;\n                rpcUrl = rpc && rpc[networkId] ? rpc[networkId] : \"https://\".concat(networkName(networkId), \".infura.io/v3/\").concat(infuraKey);\n                balanceProvider = createProvider({\n                  rpcUrl: rpcUrl\n                });\n                provider = new WalletConnectProvider({\n                  infuraId: infuraKey,\n                  rpc: rpc,\n                  bridge: bridge,\n                  pollingInterval: pollingInterval\n                });\n                provider.autoRefreshOnNetworkChange = false;\n                provider.wc.on('disconnect', function () {\n                  resetWalletState({\n                    disconnected: true,\n                    walletName: 'WalletConnect'\n                  });\n                });\n                return _context2.abrupt(\"return\", {\n                  provider: provider,\n                  \"interface\": {\n                    name: 'WalletConnect',\n                    connect: function connect() {\n                      return new Promise(function (resolve, reject) {\n                        provider.enable().then(resolve)[\"catch\"](function () {\n                          return reject({\n                            message: 'This dapp needs access to your account information.'\n                          });\n                        });\n                      });\n                    },\n                    address: {\n                      onChange: function onChange(func) {\n                        provider.send('eth_accounts').then(function (accounts) {\n                          return accounts[0] && func(accounts[0]);\n                        });\n                        provider.on('accountsChanged', function (accounts) {\n                          return func(accounts[0]);\n                        });\n                      }\n                    },\n                    network: {\n                      onChange: function onChange(func) {\n                        provider.send('eth_chainId').then(func);\n                        provider.on('chainChanged', func);\n                      }\n                    },\n                    balance: {\n                      get: function () {\n                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                          return regeneratorRuntime.wrap(function _callee$(_context) {\n                            while (1) {\n                              switch (_context.prev = _context.next) {\n                                case 0:\n                                  if (provider.wc._accounts[0]) {\n                                    _context.next = 2;\n                                    break;\n                                  }\n\n                                  return _context.abrupt(\"return\", null);\n\n                                case 2:\n                                  return _context.abrupt(\"return\", getBalance(balanceProvider, provider.wc._accounts[0]));\n\n                                case 3:\n                                case \"end\":\n                                  return _context.stop();\n                              }\n                            }\n                          }, _callee);\n                        }));\n\n                        function get() {\n                          return _get.apply(this, arguments);\n                        }\n\n                        return get;\n                      }()\n                    },\n                    disconnect: function disconnect() {\n                      provider.wc.killSession();\n                      provider.stop();\n                    }\n                  }\n                });\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'sdk',\n    desktop: true,\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (walletConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL3dhbGxldC1jb25uZWN0LWJjYjA1ZTc0LmpzP2ZlZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFOVY7QUFDa0M7QUFDakQ7QUFDTDtBQUNEO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBZSxDQUFDLHNEQUFHOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUxBQXNDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUxBQXNDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDRFQUFhIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL3dhbGxldC1jb25uZWN0LWJjYjA1ZTc0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IHsgZyBhcyBnZXRfc3RvcmVfdmFsdWUsIGEgYXMgYXBwIH0gZnJvbSAnLi9vbmJvYXJkLWRkODIyNGZjLmpzJztcbmltcG9ydCAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCAnYm5jLXNkayc7XG5pbXBvcnQgJ2Jvd3Nlcic7XG52YXIgd2FsbGV0Q29ubmVjdEljb24gPSBcIlxcbiAgPHN2ZyBcXG4gICAgaGVpZ2h0PVxcXCIyNVxcXCIgXFxuICAgIHZpZXdCb3g9XFxcIjAgMCA0MCAyNVxcXCIgXFxuICAgIHdpZHRoPVxcXCI0MFxcXCIgXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXG4gID5cXG4gIDxwYXRoIGQ9XFxcIm04LjE5MTgwNTcyIDQuODM0MTY4MTZjNi41MjE0OTY1OC02LjM4NTA4ODg0IDE3LjA5NDkzMTU4LTYuMzg1MDg4ODQgMjMuNjE2NDI3ODggMGwuNzg0ODcyNy43Njg0NTU2NWMuMzI2MDc0OC4zMTkyNTQ0Mi4zMjYwNzQ4LjgzNjg2ODE2IDAgMS4xNTYxMjI3MmwtMi42ODQ4OTI3IDIuNjI4NzMzNzRjLS4xNjMwMzc1LjE1OTYyNzM0LS40MjczNzMzLjE1OTYyNzM0LS41OTA0MTA4IDBsLTEuMDgwMDc3OS0xLjA1NzQ4NjM5Yy00LjU0OTU1ODktNC40NTQzOTc1Ni0xMS45MjU4NTE0LTQuNDU0Mzk3NTYtMTYuNDc1NDEwNSAwbC0xLjE1NjY3NDEgMS4xMzI0ODA2OGMtLjE2MzAzNzYuMTU5NjI3MjEtLjQyNzM3MzUuMTU5NjI3MjEtLjU5MDQxMDggMGwtMi42ODQ4OTI2My0yLjYyODczMzc1Yy0uMzI2MDc0ODMtLjMxOTI1NDU2LS4zMjYwNzQ4My0uODM2ODY4MjkgMC0xLjE1NjEyMjcyem0yOS4xNjkwMzk0OCA1LjQzNjQ5OTM0IDIuMzg5NTU5NiAyLjMzOTU4NjJjLjMyNjA3MzIuMzE5MjUzLjMyNjA3NTEuODM2ODYzNi4wMDAwMDQxIDEuMTU2MTE4N2wtMTAuNzc0Njg5NCAxMC41NDk0ODQ1Yy0uMzI2MDcyNi4zMTkyNTY4LS44NTQ3NDQzLjMxOTI2MDQtMS4xODA4MjE0LjAwMDAwODMtLjAwMDAwMTMtLjAwMDAwMTMtLjAwMDAwMjktLjAwMDAwMjktLjAwMDAwNDItLjAwMDAwNDNsLTcuNjQ3MjE5MS03LjQ4NzI3NjJjLS4wODE1MTg3LS4wNzk4MTM2LS4yMTM2ODY3LS4wNzk4MTM2LS4yOTUyMDUzIDAtLjAwMDAwMDYuMDAwMDAwNS0uMDAwMDAxLjAwMDAwMS0uMDAwMDAxNS4wMDAwMDE0bC03LjY0NzA1NjIgNy40ODcyNzA4Yy0uMzI2MDcxNS4zMTkyNTc2LS44NTQ3NDM0LjMxOTI2My0xLjE4MDgyMTUuMDAwMDExNi0uMDAwMDAxOS0uMDAwMDAxOC0uMDAwMDAzOS0uMDAwMDAzNy0uMDAwMDA1OS0uMDAwMDA1OGwtMTAuNzc0OTg5My0xMC41NDk2MjQ3Yy0uMzI2MDc0NjktLjMxOTI1NDQtLjMyNjA3NDY5LS44MzY4NjgyIDAtMS4xNTYxMjI2bDIuMzg5NTYzOTUtMi4zMzk1ODIzYy4zMjYwNzQ3LS4zMTkyNTQ0Ni44NTQ3NDY1Mi0uMzE5MjU0NDYgMS4xODA4MjEzNiAwbDcuNjQ3MzMwMjkgNy40ODczODA5Yy4wODE1MTg4LjA3OTgxMzYuMjEzNjg2Ni4wNzk4MTM2LjI5NTIwNTQgMCAuMDAwMDAxMi0uMDAwMDAxMi4wMDAwMDIzLS4wMDAwMDIzLjAwMDAwMzUtLjAwMDAwMzJsNy42NDY5NDcxLTcuNDg3Mzc3N2MuMzI2MDY3My0uMzE5MjYxODEuODU0NzM5Mi0uMzE5MjczNzggMS4xODA4MjE0LS4wMDAwMjY3LjAwMDAwNDYuMDAwMDA0NS4wMDAwMDkxLjAwMDAwOS4wMDAwMTM1LjAwMDAxMzVsNy42NDczMjAzIDcuNDg3MzkwOWMuMDgxNTE4Ni4wNzk4MTM1LjIxMzY4NjYuMDc5ODEzNS4yOTUyMDUzIDBsNy42NDcxOTY3LTcuNDg3MjQzM2MuMzI2MDc0OC0uMzE5MjU0NTguODU0NzQ2NS0uMzE5MjU0NTggMS4xODA4MjEzIDB6XFxcIiBcXG4gICAgICAgIGZpbGw9XFxcIiMzYjk5ZmNcXFwiLz5cXG4gIDwvc3ZnPlxcblwiO1xuXG5mdW5jdGlvbiB3YWxsZXRDb25uZWN0KG9wdGlvbnMpIHtcbiAgdmFyIGluZnVyYUtleSA9IG9wdGlvbnMuaW5mdXJhS2V5LFxuICAgICAgcnBjID0gb3B0aW9ucy5ycGMsXG4gICAgICBicmlkZ2UgPSBvcHRpb25zLmJyaWRnZSxcbiAgICAgIHByZWZlcnJlZCA9IG9wdGlvbnMucHJlZmVycmVkLFxuICAgICAgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgaWNvblNyYyA9IG9wdGlvbnMuaWNvblNyYyxcbiAgICAgIHN2ZyA9IG9wdGlvbnMuc3ZnLFxuICAgICAgbmV0d29ya0lkID0gb3B0aW9ucy5uZXR3b3JrSWQ7XG4gIHZhciBwb2xsaW5nSW50ZXJ2YWwgPSBnZXRfc3RvcmVfdmFsdWUoYXBwKS5ibG9ja1BvbGxpbmdJbnRlcnZhbDtcblxuICBpZiAoIWluZnVyYUtleSkge1xuICAgIGlmICghcnBjIHx8ICFycGNbbmV0d29ya0lkXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBcXFwiaW5mdXJhS2V5XFxcIiBvciBhIFxcXCJycGNcXFwiIG9iamVjdCB3aXRoIGEgcGFyYW1ldGVyIG9mIFwiLmNvbmNhdChuZXR3b3JrSWQsIFwiIG11c3QgYmUgaW5jbHVkZWQgaW4gdGhlIFdhbGxldENvbm5lY3QgaW5pdGlhbGl6YXRpb24gb2JqZWN0XCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGxhYmVsIHx8ICdXYWxsZXRDb25uZWN0JyxcbiAgICBzdmc6IHN2ZyB8fCB3YWxsZXRDb25uZWN0SWNvbixcbiAgICBpY29uU3JjOiBpY29uU3JjLFxuICAgIHdhbGxldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF93YWxsZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKGhlbHBlcnMpIHtcbiAgICAgICAgdmFyIGNyZWF0ZVByb3ZpZGVyLCBfeWllbGQkaW1wb3J0LCBXYWxsZXRDb25uZWN0UHJvdmlkZXIsIHJlc2V0V2FsbGV0U3RhdGUsIG5ldHdvcmtOYW1lLCBnZXRCYWxhbmNlLCBycGNVcmwsIGJhbGFuY2VQcm92aWRlciwgcHJvdmlkZXI7XG5cbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgnLi9wcm92aWRlckVuZ2luZS01MzhjZjQ5OC5qcycpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm92aWRlciA9IF9jb250ZXh0Mi5zZW50W1wiZGVmYXVsdFwiXTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgnQHdhbGxldGNvbm5lY3Qvd2ViMy1wcm92aWRlcicpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBfeWllbGQkaW1wb3J0ID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgICAgV2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gX3lpZWxkJGltcG9ydFtcImRlZmF1bHRcIl07XG4gICAgICAgICAgICAgICAgcmVzZXRXYWxsZXRTdGF0ZSA9IGhlbHBlcnMucmVzZXRXYWxsZXRTdGF0ZSwgbmV0d29ya05hbWUgPSBoZWxwZXJzLm5ldHdvcmtOYW1lLCBnZXRCYWxhbmNlID0gaGVscGVycy5nZXRCYWxhbmNlO1xuICAgICAgICAgICAgICAgIHJwY1VybCA9IHJwYyAmJiBycGNbbmV0d29ya0lkXSA/IHJwY1tuZXR3b3JrSWRdIDogXCJodHRwczovL1wiLmNvbmNhdChuZXR3b3JrTmFtZShuZXR3b3JrSWQpLCBcIi5pbmZ1cmEuaW8vdjMvXCIpLmNvbmNhdChpbmZ1cmFLZXkpO1xuICAgICAgICAgICAgICAgIGJhbGFuY2VQcm92aWRlciA9IGNyZWF0ZVByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgIHJwY1VybDogcnBjVXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgV2FsbGV0Q29ubmVjdFByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgIGluZnVyYUlkOiBpbmZ1cmFLZXksXG4gICAgICAgICAgICAgICAgICBycGM6IHJwYyxcbiAgICAgICAgICAgICAgICAgIGJyaWRnZTogYnJpZGdlLFxuICAgICAgICAgICAgICAgICAgcG9sbGluZ0ludGVydmFsOiBwb2xsaW5nSW50ZXJ2YWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm92aWRlci5hdXRvUmVmcmVzaE9uTmV0d29ya0NoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyLndjLm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmVzZXRXYWxsZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0TmFtZTogJ1dhbGxldENvbm5lY3QnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdXYWxsZXRDb25uZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuZW5hYmxlKCkudGhlbihyZXNvbHZlKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgZGFwcCBuZWVkcyBhY2Nlc3MgdG8geW91ciBhY2NvdW50IGluZm9ybWF0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShmdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zZW5kKCdldGhfYWNjb3VudHMnKS50aGVuKGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3VudHNbMF0gJiYgZnVuYyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnNlbmQoJ2V0aF9jaGFpbklkJykudGhlbihmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZ2V0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLndjLl9hY2NvdW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGdldEJhbGFuY2UoYmFsYW5jZVByb3ZpZGVyLCBwcm92aWRlci53Yy5fYWNjb3VudHNbMF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldDtcbiAgICAgICAgICAgICAgICAgICAgICB9KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci53Yy5raWxsU2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gd2FsbGV0KF94KSB7XG4gICAgICAgIHJldHVybiBfd2FsbGV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3YWxsZXQ7XG4gICAgfSgpLFxuICAgIHR5cGU6ICdzZGsnLFxuICAgIGRlc2t0b3A6IHRydWUsXG4gICAgbW9iaWxlOiB0cnVlLFxuICAgIHByZWZlcnJlZDogcHJlZmVycmVkXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhbGxldENvbm5lY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/wallet-connect-bcb05e74.js\n");

/***/ })

}]);