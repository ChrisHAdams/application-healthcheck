export default class Log {

  log = [];

  constructor(){

  }

  info(messageValue) {
    this.log.push({ type: 'info', message: messageValue });
  }

  error(messageValue) {
    this.log.push({ type: 'error', message: messageValue });
  }

  getLogEntries() {
    return this.log;
  }

}


