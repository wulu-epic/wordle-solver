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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wotd\": \"Home_wotd__s7FA2\",\n\t\"container\": \"Home_container__bCOhY\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JkbGUtc2VydmVybGVzcy1hcGkvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid290ZFwiOiBcIkhvbWVfd290ZF9fczdGQTJcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Home = ()=>{\n    const { 0: wordOfTheDay , 1: setWordOfTheDay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWordOfTheDay = async ()=>{\n            try {\n                const response = await fetch(\"/api/wordle\");\n                if (!response.ok) {\n                    throw new Error(`HTTP error! status: ${response.status}`);\n                }\n                const data = await response.json();\n                setWordOfTheDay(data.wotd);\n            } catch (error) {\n                console.error(\"Error fetching word of the day:\", error);\n            }\n        };\n        fetchWordOfTheDay();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Today's Word of the Day:\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().wotd),\n                    children: wordOfTheDay.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n            lineNumber: 28,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n        lineNumber: 27,\n        columnNumber: 4\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEM7QUFFSDtBQUUzQyxLQUFLLENBQUNHLElBQUksT0FBbUIsQ0FBQztJQUM3QixLQUFLLE1BQUVDLFlBQVksTUFBRUMsZUFBZSxNQUFJSiwrQ0FBUSxDQUFTLENBQUU7SUFFM0RDLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ0ksaUJBQWlCLGFBQWUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFhO2dCQUMxQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssRUFBRSxvQkFBb0IsRUFBRUgsUUFBUSxDQUFDSSxNQUFNO2dCQUNyRCxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJO2dCQUNoQ1IsZUFBZSxDQUFDTyxJQUFJLENBQUNFLElBQUk7WUFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQWlDLGtDQUFFQSxLQUFLO1lBQ3hELENBQUM7UUFDQSxDQUFDO1FBRURULGlCQUFpQjtJQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFcsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQiwwRUFBZ0I7OEZBQ2hDb0IsQ0FBRTs7Z0JBQUMsQ0FDc0I7Z0JBQUMsQ0FBRzs0RkFDM0JDLENBQUk7b0JBQUNILFNBQVMsRUFBRWxCLHFFQUFXOzhCQUFHSSxZQUFZLENBQUNrQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RCxDQUFDO0FBRUQsaUVBQWVuQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JkbGUtc2VydmVybGVzcy1hcGkvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRXb3JkT2ZUaGVEYXksIGdldFJhbmRvbVdvcmQsIGdldF9jdXJyZW50X3dvcmQsIGN1cnJlbnRfcmFuZG9tX3dvcmQgfSBmcm9tIFwiLi4vd29yZC11dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3dvcmRPZlRoZURheSwgc2V0V29yZE9mVGhlRGF5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHQgIGNvbnN0IGZldGNoV29yZE9mVGhlRGF5ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdCAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvd29yZGxlXCIpO1xyXG5cdFx0ICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuXHRcdCAgfVxyXG5cdFx0ICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0ICBzZXRXb3JkT2ZUaGVEYXkoZGF0YS53b3RkKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3b3JkIG9mIHRoZSBkYXk6XCIsIGVycm9yKTtcclxuXHRcdH1cclxuXHQgIH07XHJcbiAgXHJcblx0ICBmZXRjaFdvcmRPZlRoZURheSgpO1xyXG5cdH0sIFtdKTtcclxuICBcclxuXHRyZXR1cm4gKFxyXG5cdCAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0PGgxPlxyXG5cdFx0ICBUb2RheSdzIFdvcmQgb2YgdGhlIERheTp7XCIgXCJ9XHJcblx0XHQgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLndvdGR9Pnt3b3JkT2ZUaGVEYXkudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcblx0XHQ8L2gxPlxyXG5cdCAgPC9kaXY+XHJcblx0KTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsIndvcmRPZlRoZURheSIsInNldFdvcmRPZlRoZURheSIsImZldGNoV29yZE9mVGhlRGF5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsIndvdGQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsInNwYW4iLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();