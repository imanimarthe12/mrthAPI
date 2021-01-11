"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _config = _interopRequireDefault(require("../config/config"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var guardController = /*#__PURE__*/function () {
  function guardController() {
    _classCallCheck(this, guardController);
  }

  _createClass(guardController, null, [{
    key: "addGuard",
    value: function () {
      var _addGuard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, firstName, lastName, nId, telephone, post;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, nId = _req$body.nId, telephone = _req$body.telephone;
                post = {
                  nid: nId,
                  first_name: firstName,
                  last_name: lastName,
                  telephone: telephone
                };

                _config["default"].query('INSERT INTO guard SET ?', post, function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution is:', results);
                  res.status(201).json({
                    message: 'Guard added successfully',
                    status: '201'
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addGuard(_x, _x2) {
        return _addGuard.apply(this, arguments);
      }

      return addGuard;
    }()
  }, {
    key: "getGuards",
    value: function () {
      var _getGuards = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _config["default"].query('SELECT * FROM guard;', function (error, results, fields) {
                  if (error) throw error;
                  console.log(results);
                  res.status('200').json({
                    message: 'Get all guards',
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

      function getGuards(_x3, _x4) {
        return _getGuards.apply(this, arguments);
      }

      return getGuards;
    }()
  }, {
    key: "deleteGuard",
    value: function () {
      var _deleteGuard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var nId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                nId = req.query.nid;

                _config["default"].query('DELETE FROM guard WHERE nid = ?', [nId], function (error, results, fields) {
                  if (error) throw error;
                  res.status(202).json({
                    message: 'Guard deleted successful',
                    status: '202'
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteGuard(_x5, _x6) {
        return _deleteGuard.apply(this, arguments);
      }

      return deleteGuard;
    }()
  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var password, hashedPassowrd, nId;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                password = req.body.password;
                hashedPassowrd = _authenticate["default"].hashPassword(password);
                nId = req.query.nid;

                _config["default"].query('UPDATE users SET password = ? WHERE user_id = ?', [hashedPassowrd, nId], function (error, results, fields) {
                  if (error) throw error;
                  res.status(203).json({
                    status: 203,
                    message: "passsword successfully changed!"
                  });
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function changePassword(_x7, _x8) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  }]);

  return guardController;
}();

var _default = guardController;
exports["default"] = _default;