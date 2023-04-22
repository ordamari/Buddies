"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-oauth/google */ \"@react-oauth/google\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GOOGLE_AUTHENTICATE = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n  mutation GoogleAuthenticate($token: String!) {\n    googleAuthenticate(googleTokenInput: { token: $token }) {\n      refreshTokenExpires\n      accessTokenExpires\n    }\n  }\n`;\nfunction Home({ googleClientId  }) {\n    const [googleAuthenticate, { data , loading , error  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(GOOGLE_AUTHENTICATE);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleOAuthProvider, {\n            clientId: googleClientId,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n                onSuccess: (response)=>{\n                    googleAuthenticate({\n                        variables: {\n                            token: response.credential\n                        }\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\My Projects\\\\web\\\\buddies\\\\apps\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\nasync function getStaticProps() {\n    return {\n        props: {\n            googleClientId: \"73514050938-sa84tp0ia4is584ms7qv83s98pu36s2i.apps.googleusercontent.com\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNyQjtBQU1sRCxNQUFNSSxzQkFBc0JGLCtDQUFHLENBQUM7Ozs7Ozs7QUFPaEMsQ0FBQztBQUVjLFNBQVNHLEtBQUssRUFBRUMsZUFBYyxFQUFnQixFQUFFO0lBQzdELE1BQU0sQ0FBQ0Msb0JBQW9CLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUUsQ0FBQyxHQUNsRFAsMkRBQVdBLENBQUNDO0lBRWQsSUFBSUssU0FBUyxxQkFBTyw4REFBQ0U7a0JBQUU7Ozs7OztJQUN2QixJQUFJRCxPQUFPLHFCQUFPLDhEQUFDQzs7WUFBRTtZQUFRRCxNQUFNRSxPQUFPOzs7Ozs7O0lBRTFDQyxRQUFRQyxHQUFHLENBQUNOO0lBRVoscUJBQ0U7a0JBQ0UsNEVBQUNQLG9FQUFtQkE7WUFBQ2MsVUFBVVQ7c0JBQzdCLDRFQUFDTiw0REFBV0E7Z0JBQ1ZnQixXQUFXLENBQUNDLFdBQWE7b0JBQ3ZCVixtQkFBbUI7d0JBQUVXLFdBQVc7NEJBQUVDLE9BQU9GLFNBQVNHLFVBQVU7d0JBQUM7b0JBQUU7Z0JBQ2pFOzs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0FBRU0sZUFBZUMsaUJBQWlCO0lBQ3JDLE9BQU87UUFDTEMsT0FBTztZQUNMaEIsZ0JBQWdCaUIseUVBQXdDO1FBQzFEO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlTG9naW4sIEdvb2dsZU9BdXRoUHJvdmlkZXIgfSBmcm9tICdAcmVhY3Qtb2F1dGgvZ29vZ2xlJztcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbnR5cGUgUHJpdmF0ZVByb3BzID0ge1xuICBnb29nbGVDbGllbnRJZDogc3RyaW5nO1xufTtcblxuY29uc3QgR09PR0xFX0FVVEhFTlRJQ0FURSA9IGdxbGBcbiAgbXV0YXRpb24gR29vZ2xlQXV0aGVudGljYXRlKCR0b2tlbjogU3RyaW5nISkge1xuICAgIGdvb2dsZUF1dGhlbnRpY2F0ZShnb29nbGVUb2tlbklucHV0OiB7IHRva2VuOiAkdG9rZW4gfSkge1xuICAgICAgcmVmcmVzaFRva2VuRXhwaXJlc1xuICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZ29vZ2xlQ2xpZW50SWQgfTogUHJpdmF0ZVByb3BzKSB7XG4gIGNvbnN0IFtnb29nbGVBdXRoZW50aWNhdGUsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPVxuICAgIHVzZU11dGF0aW9uKEdPT0dMRV9BVVRIRU5USUNBVEUpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHb29nbGVPQXV0aFByb3ZpZGVyIGNsaWVudElkPXtnb29nbGVDbGllbnRJZH0+XG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIG9uU3VjY2Vzcz17KHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBnb29nbGVBdXRoZW50aWNhdGUoeyB2YXJpYWJsZXM6IHsgdG9rZW46IHJlc3BvbnNlLmNyZWRlbnRpYWwgfSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Hb29nbGVPQXV0aFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdvb2dsZUNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX0lELFxuICAgIH0gYXMgUHJpdmF0ZVByb3BzLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkdvb2dsZUxvZ2luIiwiR29vZ2xlT0F1dGhQcm92aWRlciIsImdxbCIsInVzZU11dGF0aW9uIiwiR09PR0xFX0FVVEhFTlRJQ0FURSIsIkhvbWUiLCJnb29nbGVDbGllbnRJZCIsImdvb2dsZUF1dGhlbnRpY2F0ZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJwIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRJZCIsIm9uU3VjY2VzcyIsInJlc3BvbnNlIiwidmFyaWFibGVzIiwidG9rZW4iLCJjcmVkZW50aWFsIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@react-oauth/google":
/*!**************************************!*\
  !*** external "@react-oauth/google" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@react-oauth/google");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();