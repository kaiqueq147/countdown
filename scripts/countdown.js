export default class Countdown {
  constructor(date) {
    this.initialDate = date;
  }
  get _atualDate() {
    return new Date();
  }
  get _inititalDate() {
    return new Date(this.initialDate);
  }
  get _timeStampDiff() {
    return this._atualDate.getTime() - this._inititalDate.getTime();
  }
  get _atualDay() {
    return Math.floor(this._atualDay);
  }
  get year() {
    return Math.floor(this._timeStampDiff / (12 * 30 * 24 * 60 * 60 * 1000));
  }
  get month() {
    return Math.floor(this._timeStampDiff / (30 * 24 * 60 * 60 * 1000));
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  // get monthByDays(){
  //     return Math.round(this._timeStampDiff )
  // }
  get total() {
    const year = this.year;
    const month = this.month;
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
      month,
      year,
    };
  }
}
