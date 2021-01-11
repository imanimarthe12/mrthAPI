"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../controllers/admin.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/adduser', _admin["default"].addUser);
routes.get('/getusers', _admin["default"].getUser);
routes["delete"]('/user', _admin["default"].deleteUser);
var _default = routes;
exports["default"] = _default;