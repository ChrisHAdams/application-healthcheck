
export function getTimeStamp() {

  const timeStamp = new Date();

  let hours = `0${timeStamp.getHours()}`;
  hours = hours.substring(hours.length - 2);

  let minutes = `0${timeStamp.getMinutes()}`;
  minutes = minutes.substring(minutes.length - 2);

  let seconds = `0${timeStamp.getSeconds()}`;
  seconds = seconds.substring(seconds.length - 2);

  return `${hours}:${minutes}:${seconds}`;
}
