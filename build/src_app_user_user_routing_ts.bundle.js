"use strict";exports.id="src_app_user_user_routing_ts",exports.ids=["src_app_user_user_routing_ts"],exports.modules={"./src/app/user/user.controller.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import ProductService from './product.service';\r\nclass UserController {\r\n    constructor() {\r\n        this.posts = [\r\n            {\r\n                name: 'Marcin',\r\n                author: 'Dolor sit amet',\r\n                title: 'Lorem Ipsum'\r\n            }\r\n        ];\r\n        this.getAllUsers = (req, res) => {\r\n            res.send(this.posts);\r\n        };\r\n        this.createAUser = (req, res) => {\r\n            const post = req.body;\r\n            this.posts.push(post);\r\n            res.send(post);\r\n        };\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController());\r\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/user/user.controller.ts?")},"./src/app/user/user.routing.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.controller */ "./src/app/user/user.controller.ts");\n\r\n\r\nclass UserRouter {\r\n    constructor() {\r\n        this.path = \'/users\';\r\n        this.controller = _user_controller__WEBPACK_IMPORTED_MODULE_1__["default"];\r\n        this.router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        this.router.get(this.path, this.controller.getAllUsers);\r\n        this.router.post(this.path, this.controller.createAUser);\r\n        this.router.delete(this.path, this.controller.getAllUsers);\r\n        this.router.put(this.path, this.controller.getAllUsers);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserRouter().router);\r\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/user/user.routing.ts?')}}