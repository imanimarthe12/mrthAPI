"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _weekplan = _interopRequireDefault(require("../controllers/weekplan.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/weekplan', _weekplan["default"].addPlan);
routes.patch('/weekplan', _weekplan["default"].updatePlan);
routes.get('/weekplani', _weekplan["default"].filterDate);
routes.get('/weekplan', _weekplan["default"].getAllWeekPlan);
var _default = routes;
exports["default"] = _default;