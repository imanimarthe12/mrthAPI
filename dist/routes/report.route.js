"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _report = _interopRequireDefault(require("../controllers/report.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/report', _report["default"].addReport);
routes.get('/report', _report["default"].getAllReports);
routes.get('/reporti', _report["default"].getOneReport);
var _default = routes;
exports["default"] = _default;