"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"../../node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-oauth/google */ \"../../node_modules/.pnpm/@react-oauth+google@0.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@react-oauth/google/dist/index.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"../../node_modules/.pnpm/@apollo+client@3.7.12_gdcq4dv6opitr3wbfwyjmanyra/node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation GoogleAuthenticate($token: String!) {\\n    googleAuthenticate(googleTokenInput: { token: $token }) {\\n      refreshTokenExpires\\n      accessTokenExpires\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst GOOGLE_AUTHENTICATICATE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar __N_SSG = true;\nfunction Home(param) {\n    let { googleClientId  } = param;\n    _s();\n    const [googleAuthenticate, { data , loading , error  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(GOOGLE_AUTHENTICATICATE);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 21\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_2__.GoogleOAuthProvider, {\n            clientId: googleClientId,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                onSuccess: (response)=>{\n                    fetch(\"http://localhost:3000/authentication/google\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            token: response.credential\n                        })\n                    }).then((response)=>response.json()).then((data)=>console.log(data));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"+6XJtML+XJhEzSof9wS+pYczeTA=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDckI7QUFNbEQsTUFBTUksMEJBQTBCRixtREFBR0E7O0FBU3BCLFNBQVNHLEtBQUssS0FBZ0MsRUFBRTtRQUFsQyxFQUFFQyxlQUFjLEVBQWdCLEdBQWhDOztJQUMzQixNQUFNLENBQUNDLG9CQUFvQixFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFLENBQUMsR0FBR1AsMkRBQVdBLENBQ2hFQztJQUdGLElBQUlLLFNBQVMscUJBQU8sOERBQUNFO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0M7O1lBQUU7WUFBUUQsTUFBTUUsT0FBTzs7Ozs7OztJQUUxQ0MsUUFBUUMsR0FBRyxDQUFDTjtJQUVaLHFCQUNFO2tCQUNFLDRFQUFDUCxvRUFBbUJBO1lBQUNjLFVBQVVUO3NCQUM3Qiw0RUFBQ04sNERBQVdBO2dCQUNWZ0IsV0FBVyxDQUFDQyxXQUFhO29CQUN2QkMsTUFBTSwrQ0FBK0M7d0JBQ25EQyxRQUFRO3dCQUNSQyxTQUFTOzRCQUNQLGdCQUFnQjt3QkFDbEI7d0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzs0QkFDbkJDLE9BQU9QLFNBQVNRLFVBQVU7d0JBQzVCO29CQUNGLEdBQ0dDLElBQUksQ0FBQyxDQUFDVCxXQUFhQSxTQUFTVSxJQUFJLElBQ2hDRCxJQUFJLENBQUMsQ0FBQ2xCLE9BQVNLLFFBQVFDLEdBQUcsQ0FBQ047Z0JBQ2hDOzs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0dBL0J1Qkg7O1FBQ2lDRix1REFBV0E7OztLQUQ1Q0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUxvZ2luLCBHb29nbGVPQXV0aFByb3ZpZGVyIH0gZnJvbSAnQHJlYWN0LW9hdXRoL2dvb2dsZSc7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG50eXBlIFByaXZhdGVQcm9wcyA9IHtcbiAgZ29vZ2xlQ2xpZW50SWQ6IHN0cmluZztcbn07XG5cbmNvbnN0IEdPT0dMRV9BVVRIRU5USUNBVElDQVRFID0gZ3FsYFxuICBtdXRhdGlvbiBHb29nbGVBdXRoZW50aWNhdGUoJHRva2VuOiBTdHJpbmchKSB7XG4gICAgZ29vZ2xlQXV0aGVudGljYXRlKGdvb2dsZVRva2VuSW5wdXQ6IHsgdG9rZW46ICR0b2tlbiB9KSB7XG4gICAgICByZWZyZXNoVG9rZW5FeHBpcmVzXG4gICAgICBhY2Nlc3NUb2tlbkV4cGlyZXNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBnb29nbGVDbGllbnRJZCB9OiBQcml2YXRlUHJvcHMpIHtcbiAgY29uc3QgW2dvb2dsZUF1dGhlbnRpY2F0ZSwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxuICAgIEdPT0dMRV9BVVRIRU5USUNBVElDQVRFLFxuICApO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHb29nbGVPQXV0aFByb3ZpZGVyIGNsaWVudElkPXtnb29nbGVDbGllbnRJZH0+XG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIG9uU3VjY2Vzcz17KHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGhlbnRpY2F0aW9uL2dvb2dsZScsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlLmNyZWRlbnRpYWwsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvR29vZ2xlT0F1dGhQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBnb29nbGVDbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCxcbiAgICB9IGFzIFByaXZhdGVQcm9wcyxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbiIsIkdvb2dsZU9BdXRoUHJvdmlkZXIiLCJncWwiLCJ1c2VNdXRhdGlvbiIsIkdPT0dMRV9BVVRIRU5USUNBVElDQVRFIiwiSG9tZSIsImdvb2dsZUNsaWVudElkIiwiZ29vZ2xlQXV0aGVudGljYXRlIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInAiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImNsaWVudElkIiwib25TdWNjZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiY3JlZGVudGlhbCIsInRoZW4iLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});