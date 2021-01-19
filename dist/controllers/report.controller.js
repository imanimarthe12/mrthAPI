"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import jwtDecode from 'jwt-decode';
_dotenv["default"].config();

var ReportController = /*#__PURE__*/function () {
  function ReportController() {
    _classCallCheck(this, ReportController);
  }

  _createClass(ReportController, null, [{
    key: "addReport",
    value: function () {
      var _addReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, reportNo, date, feesCollected, usedFees, reciepientEmail, restAmount, post, body, transporter;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, reportNo = _req$body.reportNo, date = _req$body.date, feesCollected = _req$body.feesCollected, usedFees = _req$body.usedFees, reciepientEmail = _req$body.reciepientEmail;
                restAmount = feesCollected - usedFees;
                post = {
                  report_no: reportNo,
                  date: date,
                  collected_fees: feesCollected,
                  used_fees: usedFees,
                  rest_amount: restAmount
                };

                _config["default"].query('INSERT INTO report SET ?', post, function (error, results, fields) {
                  if (error) throw error;
                  res.status(201).json({
                    message: 'Successul report added',
                    status: 201
                  });
                });

                body = {
                  from: process.env.EMAIL_USER,
                  to: "".concat(reciepientEmail),
                  subject: 'The Monthly Report of Income and Expenses of Irondo',
                  html: "<h1>Reports</h1>\n                    <font size='5'><b>Report Number:</b> ".concat(reportNo, "</font><p></p>\n                    <font size='5'><b>Date:</b> ").concat(date, "</font><p></p>\n                    <font size='5'><b>Fees Collected:</b> ").concat(feesCollected, "</font><p></p>\n                    <font size='5'><b>Used Fees:</b> ").concat(usedFees, "</font><p></p>\n                    <font size='5'><b>Rest Amount:</b> ").concat(restAmount, "</font><p></p>")
                };
                transporter = _nodemailer["default"].createTransport({
                  service: 'gmail',
                  auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                  }
                });
                transporter.verify(function (error, success) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Server is ready to take our messages');
                  }
                });
                transporter.sendMail(body, function (err, result) {
                  if (err) {
                    console.log(err);
                    return false;
                  }

                  console.log(result);
                  console.log('Email Sent');
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addReport(_x, _x2) {
        return _addReport.apply(this, arguments);
      }

      return addReport;
    }()
  }, {
    key: "getAllReports",
    value: function () {
      var _getAllReports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _config["default"].query('SELECT * FROM report', function (error, results, fields) {
                  if (error) throw error;
                  res.status(201).json({
                    message: 'Successul report fetched',
                    status: 200,
                    data: results
                  });
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllReports(_x3, _x4) {
        return _getAllReports.apply(this, arguments);
      }

      return getAllReports;
    }()
  }, {
    key: "getOneReport",
    value: function () {
      var _getOneReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = req.query.reportNo;

                _config["default"].query('SELECT * FROM report WHERE report_no = ?', [data], function (error, results, fields) {
                  if (error) throw error;
                  res.status(201).json({
                    message: 'Successul report fetched',
                    status: 200,
                    data: results
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getOneReport(_x5, _x6) {
        return _getOneReport.apply(this, arguments);
      }

      return getOneReport;
    }()
  }]);

  return ReportController;
}();

var _default = ReportController;
exports["default"] = _default;