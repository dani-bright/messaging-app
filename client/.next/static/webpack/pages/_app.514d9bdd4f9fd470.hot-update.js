"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/AppContext/AppContext.tsx":
/*!********************************************!*\
  !*** ./contexts/AppContext/AppContext.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"AppProvider\": function() { return /* binding */ AppProvider; },\n/* harmony export */   \"AppReducer\": function() { return /* binding */ AppReducer; },\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/user */ \"./api/user.ts\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helpers */ \"./helpers/helpers.ts\");\n/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../schemas */ \"./schemas/index.ts\");\n/* harmony import */ var _EntitiesContext_EntitiesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EntitiesContext/EntitiesContext */ \"./contexts/EntitiesContext/EntitiesContext.tsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ \"./contexts/AppContext/actions.ts\");\n\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nif (true) {\n    // Perform localStorage action\n    var item = localStorage;\n}\nvar initialState = {\n    token: localStorage.getItem(\"token\") || \"\",\n    connected: false,\n    user: null\n};\nvar AppReducer = function(state, action) {\n    switch(action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.SET_TOKEN:\n            {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, state), {\n                    token: action.payload\n                });\n            }\n        case _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.SET_CONNECTED:\n            {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, state), {\n                    connected: action.payload\n                });\n            }\n        case _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.SET_CONTACT:\n            {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, state), {\n                    contact: action.payload\n                });\n            }\n        case _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.RESET_STATE:\n            {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, initialState), {\n                    token: \"\"\n                });\n            }\n        default:\n            return state;\n    }\n};\n_c = AppReducer;\nvar AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createContext({\n    state: initialState,\n    setToken: _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.defaultFunctionParameter,\n    login: _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.defaultFunctionParameter,\n    logout: _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.defaultFunctionParameter,\n    postMessage: Promise.reject,\n    fetchUser: _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.defaultFunctionParameter\n});\nvar useCart = function() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppContext);\n};\n_s(useCart, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar AppProvider = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useReducer(AppReducer, initialState), 2), state = ref[0], dispatch = ref[1];\n    var ref1 = (0,_EntitiesContext_EntitiesContext__WEBPACK_IMPORTED_MODULE_6__.useEntitiesContext)(), addEntities = ref1.addEntities, resetState = ref1.resetState;\n    var setConnected = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function(connected) {\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.SET_CONNECTED,\n            payload: connected\n        });\n    }, []);\n    var setToken = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function(value) {\n        localStorage.setItem(\"token\", value);\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.SET_TOKEN,\n            payload: value\n        });\n    }, []);\n    var login = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n            var loggedUser;\n            return _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_api_user__WEBPACK_IMPORTED_MODULE_3__.postLogin)(email, password);\n                    case 2:\n                        loggedUser = _ctx.sent;\n                        setToken(loggedUser.token);\n                        setConnected(true);\n                        addEntities(_schemas__WEBPACK_IMPORTED_MODULE_5__.user, loggedUser);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(email, password) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var logout = react__WEBPACK_IMPORTED_MODULE_2__.useCallback((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setToken(\"\");\n                    setConnected(false);\n                    localStorage.clear();\n                    dispatch({\n                        type: _actions__WEBPACK_IMPORTED_MODULE_7__.ActionTypes.RESET_STATE\n                    });\n                    resetState();\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        state.token\n    ]);\n    var sendMessage = react__WEBPACK_IMPORTED_MODULE_2__.useCallback((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var fetchUser = react__WEBPACK_IMPORTED_MODULE_2__.useCallback((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_dani_projet_messaging_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // const profile = await getContact(state.token);\n    // addEntities(contact, profile);\n    // dispatch({ type: ActionTypes.SET_CONTACT, payload: profile.id });\n    })), [\n        state.token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppContext.Provider, {\n        value: {\n            state: state,\n            login: login,\n            logout: logout,\n            setToken: setToken,\n            fetchUser: fetchUser,\n            postMessage: sendMessage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/dani/projet/messaging-app/client/contexts/AppContext/AppContext.tsx\",\n        lineNumber: 124,\n        columnNumber: 9\n    }, _this);\n};\n_s1(AppProvider, \"Xn1jZaniSa8am+pDlO+4J2Zqspo=\", false, function() {\n    return [\n        _EntitiesContext_EntitiesContext__WEBPACK_IMPORTED_MODULE_6__.useEntitiesContext\n    ];\n});\n_c1 = AppProvider;\nvar _c, _c1;\n$RefreshReg$(_c, \"AppReducer\");\n$RefreshReg$(_c1, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0L0FwcENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBK0I7QUFDa0I7QUFDTjtBQUMrQjtBQUNyQztBQUNtQztBQUNoQzs7QUFFeEMsSUFBSSxJQUE2QixFQUFFO0lBQ2pDLDhCQUE4QjtJQUM5QixJQUFNTyxJQUFJLEdBQUdDLFlBQVk7Q0FDMUI7QUFzQk0sSUFBTUMsWUFBWSxHQUFtQjtJQUMxQ0MsS0FBSyxFQUFFRixZQUFZLENBQUNHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQzFDQyxTQUFTLEVBQUUsS0FBSztJQUNoQlIsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0FBRUssSUFBTVMsVUFBVSxHQUFHLFNBQ3hCQyxLQUFxQixFQUNyQkMsTUFBNkQsRUFDMUQ7SUFDSCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS1YsMkRBQXFCO1lBQUU7Z0JBQzFCLE9BQU8sd0tBQ0ZRLEtBQUs7b0JBQ1JKLEtBQUssRUFBRUssTUFBTSxDQUFDRyxPQUFPO2tCQUN0QixDQUFDO2FBQ0g7UUFDRCxLQUFLWiwrREFBeUI7WUFBRTtnQkFDOUIsT0FBTyx3S0FDRlEsS0FBSztvQkFDUkYsU0FBUyxFQUFFRyxNQUFNLENBQUNHLE9BQU87a0JBQzFCLENBQUM7YUFDSDtRQUVELEtBQUtaLDZEQUF1QjtZQUFFO2dCQUM1QixPQUFPLHdLQUNGUSxLQUFLO29CQUNSTyxPQUFPLEVBQUVOLE1BQU0sQ0FBQ0csT0FBTztrQkFDeEIsQ0FBQzthQUNIO1FBQ0QsS0FBS1osNkRBQXVCO1lBQUU7Z0JBQzVCLE9BQU8sd0tBQUtHLFlBQVk7b0JBQUVDLEtBQUssRUFBRSxFQUFFO2tCQUFFLENBQUM7YUFDdkM7UUFDRDtZQUNFLE9BQU9JLEtBQUssQ0FBQztLQUNoQjtDQUNGLENBQUM7QUE5QldELEtBQUFBLFVBQVU7QUFnQ2hCLElBQU1VLFVBQVUsaUJBQUd2QixnREFBbUIsQ0FBc0I7SUFDbkVjLEtBQUssRUFBRUwsWUFBWTtJQUNqQmdCLFFBQVEsRUFBRXRCLHNFQUF3QjtJQUNsQ3VCLEtBQUssRUFBRXZCLHNFQUF3QjtJQUMvQndCLE1BQU0sRUFBRXhCLHNFQUF3QjtJQUNoQ3lCLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxNQUFNO0lBQzNCQyxTQUFTLEVBQUU1QixzRUFBd0I7Q0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBTTZCLE9BQU8sR0FBRyxXQUFNL0I7O0lBQUFBLE9BQUFBLGlEQUFVLENBQUNzQixVQUFVLENBQUM7Q0FBQSxDQUFDO0dBQXZDUyxPQUFPO0FBRWIsSUFBTUMsV0FBVyxHQUFJLGdCQUE2QztRQUExQ0MsUUFBUSxTQUFSQSxRQUFROztJQUNuQyxJQUEwQmxDLEdBQTBDLHFGQUExQ0EsNkNBQWdCLENBQUNhLFVBQVUsRUFBRUosWUFBWSxDQUFDLE1BQTdESyxLQUFLLEdBQWNkLEdBQTBDLEdBQXhELEVBQUVvQyxRQUFRLEdBQUlwQyxHQUEwQyxHQUE5QztJQUN4QixJQUFvQ0ssSUFBb0IsR0FBcEJBLG9GQUFrQixFQUFFLEVBQWhEZ0MsV0FBVyxHQUFpQmhDLElBQW9CLENBQWhEZ0MsV0FBVyxFQUFFQyxVQUFVLEdBQUtqQyxJQUFvQixDQUFuQ2lDLFVBQVU7SUFFL0IsSUFBTUMsWUFBWSxHQUFHdkMsOENBQWlCLENBQUMsU0FBQ1ksU0FBa0IsRUFBSztRQUM3RHdCLFFBQVEsQ0FBQztZQUFFcEIsSUFBSSxFQUFFViwrREFBeUI7WUFBRVksT0FBTyxFQUFFTixTQUFTO1NBQUUsQ0FBQyxDQUFDO0tBQ25FLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTWEsUUFBUSxHQUFHekIsOENBQWlCLENBQUMsU0FBQ3lDLEtBQWEsRUFBSztRQUNwRGpDLFlBQVksQ0FBQ2tDLE9BQU8sQ0FBQyxPQUFPLEVBQUVELEtBQUssQ0FBQyxDQUFDO1FBQ3JDTCxRQUFRLENBQUM7WUFBRXBCLElBQUksRUFBRVYsMkRBQXFCO1lBQUVZLE9BQU8sRUFBRXVCLEtBQUs7U0FBRSxDQUFDLENBQUM7S0FDM0QsRUFBRSxFQUFFLENBQUM7SUFHTixJQUFNZixLQUFLLEdBQUcxQiw4Q0FBaUI7bUJBQUMsd1BBQU8yQyxLQUFhLEVBQUVDLFFBQWdCLEVBQUs7Z0JBQ25FQyxVQUFVOzs7OzsrQkFBUzNDLG9EQUFTLENBQUN5QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQzs7d0JBQTdDQyxVQUFVLFlBQW1DO3dCQUNuRHBCLFFBQVEsQ0FBQ29CLFVBQVUsQ0FBQ25DLEtBQUssQ0FBQyxDQUFDO3dCQUNyQjZCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFekJGLFdBQVcsQ0FBQ2pDLDBDQUFJLEVBQUV5QyxVQUFVLENBQUMsQ0FBQzs7Ozs7O1NBQy9CO3dCQU5zQ0YsS0FBYSxFQUFFQyxRQUFnQjs7O1NBTW5FLEVBQUUsQ0FBQztJQUVOLElBQU1qQixNQUFNLEdBQUczQiw4Q0FBaUIsQ0FBQywwUEFBWTs7OztvQkFDM0N5QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2JjLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEIvQixZQUFZLENBQUNzQyxLQUFLLEVBQUUsQ0FBQztvQkFDckJWLFFBQVEsQ0FBQzt3QkFBRXBCLElBQUksRUFBRVYsNkRBQXVCO3FCQUFFLENBQUMsQ0FBQztvQkFDNUNnQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7O0tBQ2QsSUFBRTtRQUFDeEIsS0FBSyxDQUFDSixLQUFLO0tBQUMsQ0FBQztJQUdqQixJQUFNcUMsV0FBVyxHQUFHL0MsOENBQWlCLENBQUMsMFBBQVk7Ozs7Ozs7O0tBRWpELElBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTStCLFNBQVMsR0FBRy9CLDhDQUFpQixDQUFDLDBQQUFZOzs7Ozs7OztJQUM5QyxpREFBaUQ7SUFFakQsaUNBQWlDO0lBQ2pDLG9FQUFvRTtLQUNyRSxJQUFFO1FBQUNjLEtBQUssQ0FBQ0osS0FBSztLQUFDLENBQUM7SUFFZixxQkFDSSw4REFBQ2EsVUFBVSxDQUFDeUIsUUFBUTtRQUFDUCxLQUFLLEVBQUU7WUFDeEIzQixLQUFLLEVBQUxBLEtBQUs7WUFDTFksS0FBSyxFQUFMQSxLQUFLO1lBQ0xDLE1BQU0sRUFBTkEsTUFBTTtZQUNORixRQUFRLEVBQVJBLFFBQVE7WUFDUk0sU0FBUyxFQUFUQSxTQUFTO1lBQ1RILFdBQVcsRUFBQ21CLFdBQVc7U0FDMUI7a0JBQ0FiLFFBQVE7Ozs7O2FBQ2EsQ0FDeEI7Q0FFTCxDQUFDO0lBdkRXRCxXQUFXOztRQUVjNUIsZ0ZBQWtCOzs7QUFGM0M0QixNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL0FwcENvbnRleHQvQXBwQ29udGV4dC50c3g/ZTVhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGQywgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwb3N0TG9naW4gfSBmcm9tICcuLi8uLi9hcGkvdXNlcic7XG5pbXBvcnQgeyBBY3Rpb25zLCBkZWZhdWx0RnVuY3Rpb25QYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gJy4uLy4uL3NjaGVtYXMnO1xuaW1wb3J0IHsgdXNlRW50aXRpZXNDb250ZXh0IH0gZnJvbSAnLi4vRW50aXRpZXNDb250ZXh0L0VudGl0aWVzQ29udGV4dCc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBQZXJmb3JtIGxvY2FsU3RvcmFnZSBhY3Rpb25cbiAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FydFByb3ZpZGVyIHtcbiAgICBzZXRDYXJ0VXVpZCA6IChpZDpzdHJpbmcpID0+IHZvaWQ7XG4gICAgdXVpZD8gOnN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUludGVyZmFjZSB7XG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgdG9rZW46IHN0cmluZztcbiAgdXNlcjogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBDb250ZXh0SW50ZXJmYWNlIHtcbiAgc3RhdGU6IFN0YXRlSW50ZXJmYWNlO1xuICBzZXRUb2tlbjogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxvZ2luOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gdm9pZDtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xuICBmZXRjaFVzZXI6ICgpID0+IHZvaWQ7XG4gIHBvc3RNZXNzYWdlOiAoaWQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGVJbnRlcmZhY2UgPSB7XG4gIHRva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCAnJyxcbiAgY29ubmVjdGVkOiBmYWxzZSxcbiAgdXNlcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBBcHBSZWR1Y2VyID0gKFxuICBzdGF0ZTogU3RhdGVJbnRlcmZhY2UsXG4gIGFjdGlvbjogQWN0aW9uczx0eXBlb2YgQWN0aW9uVHlwZXNba2V5b2YgdHlwZW9mIEFjdGlvblR5cGVzXT4sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZXMuU0VUX1RPS0VOOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBY3Rpb25UeXBlcy5TRVRfQ09OTkVDVEVEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29ubmVjdGVkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuIFxuICAgIGNhc2UgQWN0aW9uVHlwZXMuU0VUX0NPTlRBQ1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250YWN0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQWN0aW9uVHlwZXMuUkVTRVRfU1RBVEU6IHtcbiAgICAgIHJldHVybiB7IC4uLmluaXRpYWxTdGF0ZSwgdG9rZW46ICcnIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxBcHBDb250ZXh0SW50ZXJmYWNlPih7XG5zdGF0ZTogaW5pdGlhbFN0YXRlLFxuICBzZXRUb2tlbjogZGVmYXVsdEZ1bmN0aW9uUGFyYW1ldGVyLFxuICBsb2dpbjogZGVmYXVsdEZ1bmN0aW9uUGFyYW1ldGVyLFxuICBsb2dvdXQ6IGRlZmF1bHRGdW5jdGlvblBhcmFtZXRlcixcbiAgcG9zdE1lc3NhZ2U6IFByb21pc2UucmVqZWN0LFxuICBmZXRjaFVzZXI6IGRlZmF1bHRGdW5jdGlvblBhcmFtZXRlciwgfSk7XG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciAgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKEFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHsgYWRkRW50aXRpZXMsIHJlc2V0U3RhdGUgfSA9IHVzZUVudGl0aWVzQ29udGV4dCgpO1xuXG4gIGNvbnN0IHNldENvbm5lY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChjb25uZWN0ZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLlNFVF9DT05ORUNURUQsIHBheWxvYWQ6IGNvbm5lY3RlZCB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFRva2VuID0gUmVhY3QudXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB2YWx1ZSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfVE9LRU4sIHBheWxvYWQ6IHZhbHVlIH0pO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBsb2dpbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VkVXNlciA9IGF3YWl0IHBvc3RMb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgIHNldFRva2VuKGxvZ2dlZFVzZXIudG9rZW4pO1xuICAgICAgICAgIHNldENvbm5lY3RlZCh0cnVlKTtcblxuICAgIGFkZEVudGl0aWVzKHVzZXIsIGxvZ2dlZFVzZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldFRva2VuKCcnKTtcbiAgICBzZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuUkVTRVRfU1RBVEUgfSk7XG4gICAgcmVzZXRTdGF0ZSgpO1xuICB9LCBbc3RhdGUudG9rZW5dKTtcblxuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuXG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFVzZXIgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldENvbnRhY3Qoc3RhdGUudG9rZW4pO1xuXG4gICAgLy8gYWRkRW50aXRpZXMoY29udGFjdCwgcHJvZmlsZSk7XG4gICAgLy8gZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfQ09OVEFDVCwgcGF5bG9hZDogcHJvZmlsZS5pZCB9KTtcbiAgfSwgW3N0YXRlLnRva2VuXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBsb2dpbixcbiAgICAgICAgICAgIGxvZ291dCxcbiAgICAgICAgICAgIHNldFRva2VuLFxuICAgICAgICAgICAgZmV0Y2hVc2VyLFxuICAgICAgICAgICAgcG9zdE1lc3NhZ2U6c2VuZE1lc3NhZ2UsXG4gICAgICAgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInBvc3RMb2dpbiIsImRlZmF1bHRGdW5jdGlvblBhcmFtZXRlciIsInVzZXIiLCJ1c2VFbnRpdGllc0NvbnRleHQiLCJBY3Rpb25UeXBlcyIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJpbml0aWFsU3RhdGUiLCJ0b2tlbiIsImdldEl0ZW0iLCJjb25uZWN0ZWQiLCJBcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1RPS0VOIiwicGF5bG9hZCIsIlNFVF9DT05ORUNURUQiLCJTRVRfQ09OVEFDVCIsImNvbnRhY3QiLCJSRVNFVF9TVEFURSIsIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic2V0VG9rZW4iLCJsb2dpbiIsImxvZ291dCIsInBvc3RNZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoVXNlciIsInVzZUNhcnQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwiYWRkRW50aXRpZXMiLCJyZXNldFN0YXRlIiwic2V0Q29ubmVjdGVkIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInNldEl0ZW0iLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nZ2VkVXNlciIsImNsZWFyIiwic2VuZE1lc3NhZ2UiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AppContext/AppContext.tsx\n"));

/***/ })

});