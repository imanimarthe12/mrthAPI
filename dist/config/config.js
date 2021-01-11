"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'irondo'
});

var _default = connection;
exports["default"] = _default;