import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized, Login again.",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.userId) {
      req.user = { userId: decodedToken.userId, role: decodedToken.role };
    } else {
      return res.json({
        success: false,
        message: "Not Authorized, Login again.",
      });
    }

    res.json({ success: true, message: "User is authorizeds" });
    next();
  } catch (error) {}
};
