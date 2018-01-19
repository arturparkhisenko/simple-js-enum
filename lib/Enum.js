export default class Enum {
  constructor(values, { frozen = true } = {}) {
    this.values = [];
    this.numbers = [];

    for (const key in values) {
      const value = values[key];
      const isArray = Array.isArray(values);
      this[key] = value;
      this[value] = isArray ? parseInt(key) : key;
      this.values.push(isArray ? value : key);
      this.numbers.push(isArray ? parseInt(key) : value);
    }

    if (frozen) Object.freeze(this);
  }
}