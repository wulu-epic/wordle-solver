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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Home = ()=>{\n    const { 0: wordOfTheDay , 1: setWordOfTheDay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWordOfTheDay = async ()=>{\n            try {\n                const response = await fetch(\"/api/wordle\");\n                if (!response.ok) {\n                    throw new Error(`HTTP error! status: ${response.status}`);\n                }\n                const data = await response.json();\n                setWordOfTheDay(data.wotd);\n            } catch (error) {\n                console.error(\"Error fetching word of the day:\", error);\n            }\n        };\n        fetchWordOfTheDay();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Today's Word of the Day:\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().wotd),\n                    children: wordOfTheDay.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Martin\\\\Documents\\\\Python Projects\\\\main-projects\\\\wordle_fun\\\\wordle_api\\\\Wordle-API\\\\pages\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 4\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEM7QUFDSDtBQUUzQyxLQUFLLENBQUNHLElBQUksT0FBbUIsQ0FBQztJQUM3QixLQUFLLE1BQUVDLFlBQVksTUFBRUMsZUFBZSxNQUFJSiwrQ0FBUSxDQUFTLENBQUU7SUFFM0RDLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ0ksaUJBQWlCLGFBQWUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFhO2dCQUMxQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssRUFBRSxvQkFBb0IsRUFBRUgsUUFBUSxDQUFDSSxNQUFNO2dCQUNyRCxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJO2dCQUNoQ1IsZUFBZSxDQUFDTyxJQUFJLENBQUNFLElBQUk7WUFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQWlDLGtDQUFFQSxLQUFLO1lBQ3hELENBQUM7UUFDQSxDQUFDO1FBRURULGlCQUFpQjtJQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFcsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQiwwRUFBZ0I7OEZBQ2hDb0IsQ0FBRTs7Z0JBQUMsQ0FDc0I7Z0JBQUMsQ0FBRzs0RkFDM0JDLENBQUk7b0JBQUNILFNBQVMsRUFBRWxCLHFFQUFXOzhCQUFHSSxZQUFZLENBQUNrQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RCxDQUFDO0FBRUQsaUVBQWVuQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JkbGUtc2VydmVybGVzcy1hcGkvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCBbd29yZE9mVGhlRGF5LCBzZXRXb3JkT2ZUaGVEYXldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdCAgY29uc3QgZmV0Y2hXb3JkT2ZUaGVEYXkgPSBhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0ICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS93b3JkbGVcIik7XHJcblx0XHQgIGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG5cdFx0ICB9XHJcblx0XHQgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHQgIHNldFdvcmRPZlRoZURheShkYXRhLndvdGQpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHdvcmQgb2YgdGhlIGRheTpcIiwgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdCAgfTtcclxuICBcclxuXHQgIGZldGNoV29yZE9mVGhlRGF5KCk7XHJcblx0fSwgW10pO1xyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0ICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHQ8aDE+XHJcblx0XHQgIFRvZGF5J3MgV29yZCBvZiB0aGUgRGF5OntcIiBcIn1cclxuXHRcdCAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMud290ZH0+e3dvcmRPZlRoZURheS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuXHRcdDwvaDE+XHJcblx0ICA8L2Rpdj5cclxuXHQpO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwid29yZE9mVGhlRGF5Iiwic2V0V29yZE9mVGhlRGF5IiwiZmV0Y2hXb3JkT2ZUaGVEYXkiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwid290ZCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwic3BhbiIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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