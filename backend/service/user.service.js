function hashPasswordService(password) {
  argon2.hash(password);
}

exports.hashPasswordService = hashPasswordService;
