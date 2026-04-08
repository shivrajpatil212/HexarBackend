export default class errorHandler extends Error {
  constructor(message, statusCode = 500, errors = null, code = null) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.code = code;
  }
}