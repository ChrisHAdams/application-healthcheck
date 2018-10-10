'use strict';

function MockLogger() {
  this.log = [];

  function info(messageValue) {
    this.log.push({ type: 'info', message: messageValue });
  }

  function error(messageValue) {
    this.log.push({ type: 'error', message: messageValue });
  }

  function getLogEntries() {
    return this.log;
  }

  this.info = info;
  this.error = error;
  this.getLogEntries = getLogEntries;
}

module.exports = MockLogger;