export const secondsToString = (seconds) => {
  seconds = seconds / 10000;
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10) ? '0' + minute : minute;
  var second = (seconds % 60).toFixed(0);
  second = (second < 10) ? '0' + second : second;
  return minute + ':' + second;
}

export const toDateFormat = (value) => new Date(value).toLocaleDateString('es-es')