"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bef353953bfb3a',
  password: '33e6e91a',
  database: 'heroku_acda310e3aec3d0'
});

var _default = connection;
exports["default"] = _default;