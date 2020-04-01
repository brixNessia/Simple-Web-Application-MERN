module.exports = decodeToken = token => {
  try {
    const authHeader = token.headers.authorization;
    if (authHeader) {
      const token = token.headers.authorization.split(" ")[1];
      const decoded = jwt.decode(token, { complete: true });
      token.headers.authorization = decoded.payload.user.id;
      return token.headers.authorization;
    }
  } catch (error) {}
};
