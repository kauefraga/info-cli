// hours : minutes : seconds
type Format = 'h:m' | 'h:m:s'

class Time {
  constructor(
    private format: Format,
  ) {
    this.format = format;
  }

  get now() {
    const date = new Date();

    const t = {
      'h:m': `${date.getHours()}h:${date.getMinutes()}`,
      'h:m:s': `${date.getHours()}h:${date.getMinutes()}:${date.getSeconds()}`,
    };

    if (date.getHours() >= 19 && date.getHours() <= 7) {
      return `🌝 ${t[this.format]}`;
    }

    return `🌞 ${t[this.format]}`;
  }
}

export default Time;
