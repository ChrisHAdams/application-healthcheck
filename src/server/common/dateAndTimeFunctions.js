class DateAndTime {

  static getReverseDate(d){

    const day = ('0' + d.getDate().toString()).slice(-2);
    const month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
    const year = d.getFullYear().toString();

    return(`${year}${month}${day}`);
  }

  static getDateAndTime(d){

    const day = ('0' + d.getDate().toString()).slice(-2);
    const month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
    const year = d.getFullYear().toString();
    const hour = ('0' + d.getHours().toString()).slice(-2);
    const minute = ('0' + d.getMinutes().toString()).slice(-2);
    const seconds = ('0' + d.getSeconds().toString()).slice(-2);

    return(`${day}\\${month}\\${year} : ${hour}:${minute}:${seconds}`);
  }

  static getDate(d){

    const day = ('0' + d.getDate().toString()).slice(-2);
    const month = ('0' + (d.getMonth() + 1).toString()).slice(-2);
    const year = d.getFullYear().toString();

    return(`${day}\\${month}\\${year}`);
  }

  static getTime(d){

    const hour = ('0' + d.getHours().toString()).slice(-2);
    const minute = ('0' + d.getMinutes().toString()).slice(-2);
    const seconds = ('0' + d.getSeconds().toString()).slice(-2);

    return(`${hour}:${minute}:${seconds}`);
  }

}

module.exports = DateAndTime;