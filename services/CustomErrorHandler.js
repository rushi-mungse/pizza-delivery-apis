class CustomErroHandler extends Error {
  constructor(statuscode, message) {
    super();
    this.statuscode = statuscode;
    this.message = message;
  }

  static alreadyExist(message) {
    return new CustomErroHandler(409, message);
  }

  static wrongAuthentication(message) {
    return new CustomErroHandler(401, message);
  }

  static errorHanlder(statusCode, message) {
    return new CustomErroHandler(statusCode, message);
  }
}

export default CustomErroHandler;
