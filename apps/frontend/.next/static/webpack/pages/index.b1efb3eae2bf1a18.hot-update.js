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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-oauth/google */ \"../../node_modules/.pnpm/@react-oauth+google@0.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@react-oauth/google/dist/index.esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"../../node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/polyfills/process.js\");\n\n\nvar __N_SSG = true;\nfunction Home(props) {\n    console.log(props);\n    const env = process.env;\n    console.log(env);\n    var _process_env_GOOGLE_CLIENT_ID;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleOAuthProvider, {\n            clientId: (_process_env_GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID) !== null && _process_env_GOOGLE_CLIENT_ID !== void 0 ? _process_env_GOOGLE_CLIENT_ID : \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n                onSuccess: (response)=>{\n                    fetch(\"http://localhost:3000/authentication/google\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            token: response.credential\n                        })\n                    }).then((response)=>response.json()).then((data)=>console.log(data));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7O0FBRXhELFNBQVNFLEtBQUtDLEtBQVUsRUFBRTtJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLE1BQU1DLFFBQVFELEdBQUc7SUFDdkJGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFJdUJDO0lBRm5DLHFCQUNFO2tCQUNFLDRFQUFDTixvRUFBbUJBO1lBQUNPLFVBQVVELENBQUFBLGdDQUFBQSxPQUFPQSxDQUFDRCxHQUFHLENBQUNHLGdCQUFnQixjQUE1QkYsMkNBQUFBLGdDQUFnQyxFQUFFO3NCQUMvRCw0RUFBQ1AsNERBQVdBO2dCQUNWVSxXQUFXLENBQUNDLFdBQWE7b0JBQ3ZCQyxNQUFNLCtDQUErQzt3QkFDbkRDLFFBQVE7d0JBQ1JDLFNBQVM7NEJBQ1AsZ0JBQWdCO3dCQUNsQjt3QkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDOzRCQUNuQkMsT0FBT1AsU0FBU1EsVUFBVTt3QkFDNUI7b0JBQ0YsR0FDR0MsSUFBSSxDQUFDLENBQUNULFdBQWFBLFNBQVNVLElBQUksSUFDaENELElBQUksQ0FBQyxDQUFDRSxPQUFTbEIsUUFBUUMsR0FBRyxDQUFDaUI7Z0JBQ2hDOzs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0tBMUJ1QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVMb2dpbiwgR29vZ2xlT0F1dGhQcm92aWRlciB9IGZyb20gJ0ByZWFjdC1vYXV0aC9nb29nbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBhbnkpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcbiAgY29uc29sZS5sb2coZW52KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R29vZ2xlT0F1dGhQcm92aWRlciBjbGllbnRJZD17cHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCA/PyAnJ30+XG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIG9uU3VjY2Vzcz17KHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGhlbnRpY2F0aW9uL2dvb2dsZScsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlLmNyZWRlbnRpYWwsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvR29vZ2xlT0F1dGhQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBlbnY6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbiIsIkdvb2dsZU9BdXRoUHJvdmlkZXIiLCJIb21lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZW52IiwicHJvY2VzcyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsIm9uU3VjY2VzcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImNyZWRlbnRpYWwiLCJ0aGVuIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});