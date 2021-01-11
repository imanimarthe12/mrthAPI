"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config/config"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var weekPlan = /*#__PURE__*/function () {
  function weekPlan() {
    _classCallCheck(this, weekPlan);
  }

  _createClass(weekPlan, null, [{
    key: "addPlan",
    value: function () {
      var _addPlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var token, decoded, _req$body, date, day, weekNo, month, team, teamLeader, post;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = req.headers.authorization.split(' ')[1];
                decoded = (0, _jwtDecode["default"])(token);
                _req$body = req.body, date = _req$body.date, day = _req$body.day, weekNo = _req$body.weekNo, month = _req$body.month, team = _req$body.team, teamLeader = _req$body.teamLeader;
                post = {
                  date: date,
                  day: day,
                  week_no: weekNo,
                  month: month,
                  team: team,
                  team_leader: teamLeader
                };

                _config["default"].query('INSERT INTO weekplan SET ?', post, function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution is:', results);
                  res.status(201).json({
                    message: 'Week plan added successful',
                    status: '201'
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addPlan(_x, _x2) {
        return _addPlan.apply(this, arguments);
      }

      return addPlan;
    }()
  }, {
    key: "filterDate",
    value: function () {
      var _filterDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var date;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                date = req.query.date;

                _config["default"].query('SELECT * FROM weekplan WHERE date = ?', [date], function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution: ', results);
                  res.status(200).json({
                    message: 'Successful filtered',
                    status: '200',
                    data: results
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function filterDate(_x3, _x4) {
        return _filterDate.apply(this, arguments);
      }

      return filterDate;
    }()
  }, {
    key: "getAllWeekPlan",
    value: function () {
      var _getAllWeekPlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _config["default"].query('SELECT * FROM weekplan;', function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution: ', results);
                  res.status(200).json({
                    message: 'Successful fetched',
                    status: '200',
                    data: results
                  });
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAllWeekPlan(_x5, _x6) {
        return _getAllWeekPlan.apply(this, arguments);
      }

      return getAllWeekPlan;
    }()
  }, {
    key: "updatePlan",
    value: function () {
      var _updatePlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$body2, date, day, weekNo, month, team, teamLeader, id, post;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body2 = req.body, date = _req$body2.date, day = _req$body2.day, weekNo = _req$body2.weekNo, month = _req$body2.month, team = _req$body2.team, teamLeader = _req$body2.teamLeader;
                id = req.query.id;
                post = {
                  date: date,
                  day: day,
                  week_no: weekNo,
                  month: month,
                  team: team,
                  team_leader: teamLeader
                };

                _config["default"].query('UPDATE weekplan SET ? WHERE planId = ?', [post, id], function (error, results, fields) {
                  if (error) throw error;
                  console.log('The solution is:', results);
                  res.status(203).json({
                    message: 'Week plan updated successful',
                    status: '203'
                  });
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updatePlan(_x7, _x8) {
        return _updatePlan.apply(this, arguments);
      }

      return updatePlan;
    }()
  }]);

  return weekPlan;
}();

var _default = weekPlan;
exports["default"] = _default;