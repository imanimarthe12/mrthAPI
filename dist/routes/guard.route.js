"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _guard = _interopRequireDefault(require("../controllers/guard.conntroller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/guard', _guard["default"].addGuard);
routes.get('/guard', _guard["default"].getGuards);
routes["delete"]('/guard', _guard["default"].deleteGuard);
routes.patch('/password', _guard["default"].changePassword);
var _default = routes;
exports["default"] = _default;