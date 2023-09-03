const jwt = require("jsonwebtoken");
// Auth-middleware
const verifyToken = (req, res, next) => {
  const tokenFromHeader = req.headers.authorization?.split(" ")[1];

  if (!tokenFromHeader) {
    return res.status(401).json({
      message: "Missing token information",
    });
  }

  try {
    const decodedToken = jwt.verify(tokenFromHeader, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
