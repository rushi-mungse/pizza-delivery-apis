class CustomErroHandler extends Error {
  constructor(statuscode, message) {
    super();
    this.statuscode = statuscode;
    this.message = message;
  }

  static alreadyExist(message) {
    return new CustomErroHandler(409, message);
  }
}

export default CustomErroHandler;
