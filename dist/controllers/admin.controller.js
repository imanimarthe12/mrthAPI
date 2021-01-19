"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config/config"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv["default"].config();

var adminController = /*#__PURE__*/function () {
  function adminController() {
    _classCallCheck(this, adminController);
  }

  _createClass(adminController, null, [{
    key: "addUser",
    value: function () {
      var _addUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, email, firstName, lastName, phoneNumber, password, userType, lemail, hashedPassowrd, post, body, transporter;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, phoneNumber = _req$body.phoneNumber, password = _req$body.password, userType = _req$body.userType;
                lemail = email.toLowerCase();
                hashedPassowrd = _authenticate["default"].hashPassword(password);
                post = {
                  first_name: firstName,
                  last_name: lastName,
                  phone_number: phoneNumber,
                  email: lemail,
                  password: hashedPassowrd,
                  user_type: userType
                };

                _config["default"].query('INSERT INTO users SET ?', post, function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution is: ', results[0]);
                  res.status(201).json({
                    message: "Successful",
                    status: 201
                  });
                });

                body = {
                  from: process.env.EMAIL_USER,
                  to: "".concat(lemail),
                  subject: 'Irondo App registration',
                  html: "<h1>Irondo App registration</h1>\n            You have been registered sucessfully your email is <font color='blue'>".concat(lemail, "</font> and your password is <font color='blue'>").concat(password, "</font> you can use those credentials to login to our account\n            ")
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

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addUser(_x, _x2) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _config["default"].query('SELECT * FROM users;', function (error, results, fields) {
                  if (error) throw error;
                  res.status(200).json({
                    message: "Successful",
                    status: 200,
                    results: results
                  });
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getUser(_x3, _x4) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.query.id;

                _config["default"].query('DELETE FROM users WHERE user_id = ?', [id], function (error, results, fields) {
                  if (error) throw error;
                  res.status(202).json({
                    message: "Deleted Successful",
                    status: 202
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteUser(_x5, _x6) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);

  return adminController;
}();

var _default = adminController;
exports["default"] = _default;