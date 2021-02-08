"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _guard = _interopRequireDefault(require("./routes/guard.route"));

var _weekplan = _interopRequireDefault(require("./routes/weekplan.route"));

var _report = _interopRequireDefault(require("./routes/report.route"));

var _admin = _interopRequireDefault(require("./routes/admin.route"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5000;
app.use((0, _express["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

_config["default"].connect();

app.use('/api', _auth["default"]);
app.use('/api', _guard["default"]);
app.use('/api', _weekplan["default"]);
app.use('/api', _report["default"]);
app.use('/api', _admin["default"]);
app.get('/', (0, _cors["default"])(), function (req, res) {
  res.type('json').status(200).json({
    status: 200,
    message: "Welcome to Irondo Web App API"
  });
});
app.use(function (req, res) {
  res.type('json').status(404).json({
    status: 404,
    errorMessage: "404 Page not "
  });
});
app.listen(port, console.log("The app is running at localhost with the port:" + port));
var _default = app;
exports["default"] = _default;