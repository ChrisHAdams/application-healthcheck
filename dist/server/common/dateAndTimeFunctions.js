'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateAndTime = function () {
  function DateAndTime() {
    _classCallCheck(this, DateAndTime);
  }

  _createClass(DateAndTime, null, [{
    key: 'getReverseDate',
    value: function getReverseDate(d) {

      var day = ('0' + d.getDate().toString()).slice(-2);
      var month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
      var year = d.getFullYear().toString();

      return '' + year + month + day;
    }
  }, {
    key: 'getDateAndTime',
    value: function getDateAndTime(d) {

      var day = ('0' + d.getDate().toString()).slice(-2);
      var month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
      var year = d.getFullYear().toString();
      var hour = ('0' + d.getHours().toString()).slice(-2);
      var minute = ('0' + d.getMinutes().toString()).slice(-2);
      var seconds = ('0' + d.getSeconds().toString()).slice(-2);

      return day + '\\' + month + '\\' + year + ' : ' + hour + ':' + minute + ':' + seconds;
    }
  }, {
    key: 'getDate',
    value: function getDate(d) {

      var day = ('0' + d.getDate().toString()).slice(-2);
      var month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
      var year = d.getFullYear().toString();

      return day + '\\' + month + '\\' + year;
    }
  }, {
    key: 'getTime',
    value: function getTime(d) {

      var hour = ('0' + d.getHours().toString()).slice(-2);
      var minute = ('0' + d.getMinutes().toString()).slice(-2);
      var seconds = ('0' + d.getSeconds().toString()).slice(-2);

      return hour + ':' + minute + ':' + seconds;
    }
  }]);

  return DateAndTime;
}();

module.exports = DateAndTime;