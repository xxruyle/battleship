/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\n    margin: 0; \n    height: 100%; \n}\n\n.game-container {\n    display: flex; \n    justify-content: space-between;\n    gap: 10px; \n    margin: 50px; \n\n\n}\n\n#board {\n    background-color: rebeccapurple;\n    height: 500px; \n    width: 500px; \n\n    display: flex;\n\n    flex-wrap: wrap;\n\n\n}\n\n.square {\n    border: 1px solid black; \n    height: 50px; \n    width: 50px; \n\n    box-sizing: border-box;\n\n}\n\n[class=\"square\"]:hover {\n    background-color: rgb(150, 68, 233);    \n}\n\n.highlight {\n    background-color: rgb(150, 68, 233);  \n}\n\n\n#ship { \n    height: 50px; \n\n    border: 1.2px dotted white;\n\n}\n\n\n.ship-container {\n    display: flex;\n    gap: 20px; \n}\n\n.carrier-ship, .carrier-preview {\n    background-color: blue;\n    /* width: 250px;  */\n}\n\n.battle-ship, .battle-preview{\n    background-color: brown;\n    /* width: 200px; */ \n}\n\n.cruiser-ship, .cruiser-preview{\n    background-color: cadetblue;\n    /* width: 150px;  */\n}\n\n.submarine-ship, .submarine-preview {\n    background-color: yellow;\n    /* width: 150px;  */\n}\n\n\n.destroyer-ship, .destroyer-preview { \n    background-color: red;\n    /* width: 100px; */ \n}\n\n.carrier-preview {\n    width: 250px; \n}\n\n.battle-preview {\n    width: 200px; \n}\n\n.cruiser-preview {\n    width: 150px; \n}\n\n.submarine-preview {\n    width: 150px; \n}\n\n.destroyer-preview {\n    width: 100px; \n}\n\n.missle {\n    border-radius: 10px;\n    background-color: red   ;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\nconst GameBoard = (boardNode) => {\n    let possibleShips = ['carrier-ship', 'battle-ship', 'cruiser-ship', 'submarine-ship', 'destroyer-ship'];\n\n\n    const initBoard = () => {\n        for (let i = 0; i < 100; i++)  {\n            const squareNode = document.createElement('div');\n            squareNode.classList.add('square');\n            squareNode.id = i; \n\n            boardNode.appendChild(squareNode);\n        }\n    }\n\n    const placeRandom = (game) => {\n        while (game.getCurrentPointer() < 5) \n        {\n            let randomCoord = Math.floor(Math.random() * 100);\n\n            let randomRotate = Math.random(); \n\n            if (randomRotate < 0.5) {\n                game.getEnemyShip().rotate();\n            }\n\n            let placeResult = place(randomCoord, game.getEnemyShip());\n\n            if (placeResult) {\n                game.incrementEnemyShipPointer();\n            }\n\n        }\n    }\n\n    const containsShipClass = (classArray) => {\n        for (let i = 0; i < possibleShips.length; i++) {\n            if (classArray.includes(possibleShips[i])) {\n                return false \n            }\n        }\n\n        return true\n    }\n\n    \n    const isValidPlacement = (coordinate, ship) => {\n        // checks to see if the coordinate placement is valid \n        if (coordinate < 0) {\n            return false; \n        }\n\n        if (ship.isOnBoard()) {\n            return false; \n        }\n\n\n        if (ship.getRotation() === 0) { // horizontal\n            const horizontalCeiling = Math.ceil((coordinate + 1) / 10) * 10 ;\n            return coordinate + ship.length - 1 < horizontalCeiling; \n        } else { // vertical \n            const coordinateString = String(coordinate);\n            let column; \n            coordinateString.length === 2 ? column = coordinateString[1] : column = coordinateString;  \n            const verticalCeiling = Number(`9${column}`) ;\n            console.log(coordinate + ship.length * 10);\n\n            return coordinate + (ship.length - 1) * 10 <= verticalCeiling; \n\n\n        }\n    }\n\n\n    const isEmptySquares = (coordinate, ship) => { // the ship placement has empty squares \n        let coord = coordinate; \n\n\n        for (let i = 0; i < ship.length; i++)\n        {\n            let locationNode = boardNode.querySelector(`[id='${coord}']`);\n            if (containsShipClass(Array.from(locationNode.classList))) {\n\n                if (ship.getRotation() === 0) { // horizontal\n\n\n                    coord += 1; \n                } else { // vertical \n                    coord += 10; \n                }\n            } else {\n\n                return false; \n            }\n\n        }\n\n        return true; \n    \n\n    }\n\n\n\n\n    const place = (coordinate, ship) => {   \n        let coord = coordinate; \n        if (!isValidPlacement(coordinate, ship) || (!isEmptySquares(coordinate, ship)))\n        {\n            console.log(\"Not a valid placement!\");\n            return false; \n        } else {\n            ship.place(); // make is placed true \n            for (let i = 0; i < ship.length; i++)\n            {\n    \n                \n                let locationNode = boardNode.querySelector(`[id='${coord}']`);\n                locationNode.classList.add(ship.name);\n\n                if (ship.getRotation() === 0) { // horizontal\n                    coord += 1; \n                } else { // vertical \n                    coord += 10; \n                }\n            }\n        }\n\n        clearHighlights();\n        return true; // returns true if placement was successful\n    }   \n\n\n    const showShipPreview = (id, currentShip) => {\n        if (isValidPlacement(id, currentShip) && (isEmptySquares(id, currentShip))) {\n            for (let i = 0; i < ship.length; i++)\n            {\n    \n                \n                let locationNode = boardNode.querySelector(`[id='${id}']`);\n                locationNode.classList.add('highlight');\n\n                if (currentShip.getRotation() === 0) { // horizontal\n                    id += 1; \n                } else { // vertical \n                    id += 10; \n                }\n            }\n        }   \n    }\n\n\n    const clearHighlights = () => {\n        const board = document.querySelector('#board');\n\n        const squares = board.querySelectorAll('.square');\n\n        squares.forEach((square) => {\n            if (Array.from(square.classList).includes('highlight'))\n            {\n                square.classList.remove('highlight');\n            }\n        })\n    }\n\n    const highlightHover = (currentShip) => {\n        const board = document.querySelector('#board');\n\n        board.addEventListener('mouseover', () => {\n            const squares = document.querySelectorAll('.square');\n\n\n/*             squares.forEach((square) => {\n                if (Array.from(square.classList).includes('highlight'))\n                {\n                    square.classList.remove('highlight');\n                }\n            }) */\n\n            squares.forEach((square) => {\n                square.addEventListener('mouseover', () => {\n\n\n                    showShipPreview(Number(square.id), currentShip)\n\n                })\n\n\n/*                 if (Array.from(e.target.classList).includes('highlight')) {\n                } */\n            })\n        }) \n    }\n\n\n\n    return {initBoard, placeRandom, place, highlightHover}\n}\n\n\n\n//# sourceURL=webpack://battleship-project/./src/gameboard.js?");

/***/ }),

/***/ "./src/gamemanager.js":
/*!****************************!*\
  !*** ./src/gamemanager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameManager: () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst GameManager = (board, enemyBoard) => { \n    let canPlace = true; \n\n\n    let carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('carrier-ship', 5);\n    let battle = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('battle-ship', 4);\n    let cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('cruiser-ship', 3);\n    let submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('submarine-ship', 3);\n    let destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('destroyer-ship', 2);\n\n    let enemy_carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('carrier-ship', 5);\n    let enemy_battle = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('battle-ship', 4);\n    let enemy_cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('cruiser-ship', 3);\n    let enemy_submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('submarine-ship', 3);\n    let enemy_destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)('destroyer-ship', 2);\n\n\n    let shipDic = {\n        0: carrier, \n        1: battle, \n        2: cruiser, \n        3: submarine, \n        4: destroyer \n    };\n\n    let enemyShipDic = {\n        0: enemy_carrier, \n        1: enemy_battle, \n        2: enemy_cruiser, \n        3: enemy_submarine, \n        4: enemy_destroyer \n    }\n\n\n    let shipPointer = 0 \n    let currentShip = shipDic[shipPointer]; \n\n    let enemyShipPointer = 0; \n    let currentEnemyShip = enemyShipDic[enemyShipPointer];\n\n    const incrementShipPointer = () => {\n        if (shipPointer < 5) {\n            shipPointer += 1; \n            currentShip = shipDic[shipPointer];\n        } else { \n            canPlace = false; \n        }\n    }\n\n    const incrementEnemyShipPointer = () => {\n        if (enemyShipPointer < 5) {\n            enemyShipPointer += 1; \n            currentEnemyShip = enemyShipDic[enemyShipPointer];\n        } \n    }\n\n\n\n    const detectRotate = () => {\n        let rotateBtn = document.querySelector('.rotate');\n\n        rotateBtn.addEventListener('click', () => {\n            currentShip.rotate();\n        })\n    }\n\n\n    const detectPlacement = () => {\n        let boardNode = document.querySelector('.board-player'); \n\n        boardNode.addEventListener('click', (event) => {\n            if (canPlace) {\n                let placeResult = board.place(Number(event.target.id), currentShip);\n\n                if (placeResult) {\n                    incrementShipPointer();\n                }\n            }\n\n        })\n    }\n\n    const placeRandom = () => {\n        while (getCurrentEnemyPointer() < 5) \n        {\n            let randomCoord = Math.floor(Math.random() * 100);\n\n            let randomRotate = Math.random(); \n\n            if (randomRotate < 0.5) {\n                getEnemyShip().rotate();\n            }\n\n            let placeResult = enemyBoard.place(randomCoord, getEnemyShip());\n\n            if (placeResult) {\n                incrementEnemyShipPointer();\n            }\n\n        }\n    }\n\n\n\n    const getCurrentShip = () => {\n        return currentShip; \n    }\n\n    const getCurrentPointer = () => {\n        return shipPointer;\n    }\n\n    const getEnemyShip = () => {\n        return currentEnemyShip; \n    }\n\n    const getCurrentEnemyPointer = () => {\n        return enemyShipPointer;\n    }\n\n\n\n\n    return {placeRandom, detectRotate, incrementShipPointer, incrementEnemyShipPointer, detectPlacement, getCurrentShip, shipPointer, getCurrentPointer, getEnemyShip, getCurrentEnemyPointer \n    };\n    \n}\n\n\n\n//# sourceURL=webpack://battleship-project/./src/gamemanager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gamemanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamemanager */ \"./src/gamemanager.js\");\n\n\n\n\n\n\nfunction main() {\n    let playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard)(document.querySelector('.board-player'));\n    let enemyBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard)(document.querySelector('.board-enemy'));\n\n    playerBoard.initBoard();\n    enemyBoard.initBoard();\n\n\n\n    let game = (0,_gamemanager__WEBPACK_IMPORTED_MODULE_3__.GameManager)(playerBoard, enemyBoard);\n    game.placeRandom()\n    game.detectRotate();\n    game.detectPlacement(playerBoard);\n\n\n    // playerBoard.highlightHover(game.getCurrentShip());\n\n\n}\n\nmain();\n\n\n\n\n//# sourceURL=webpack://battleship-project/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (name, length) => {\n    let numHits = 0; \n    let isSunk = false; \n    let isPlaced = false; \n    let rotation = 0; \n\n\n    const hit = () => {\n        numHits += 1; \n    }\n\n    const getShipNode = (type) => {\n        const shipNode = document.createElement('div');\n        shipNode.id = 'ship';\n        shipNode.classList.add(type);\n        shipNode.draggable = true; \n\n        return shipNode; \n    }\n\n    const sink = () => {\n        isSunk = true; \n    }\n\n\n    const isOnBoard = () => {\n        return isPlaced; \n    }\n\n    const place = () => {\n        isPlaced = true; \n    }\n\n    const rotate = () => {\n        rotation === 0 ? rotation = 90 : rotation = 0; \n    }\n\n    const getRotation = () => {\n        return rotation; \n    }\n\n    return {\n        name, isOnBoard, place, length, hit, numHits, sink, isSunk, getShipNode, rotate, getRotation\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship-project/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;