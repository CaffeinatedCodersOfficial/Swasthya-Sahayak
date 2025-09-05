import { User } from "../models/user.model.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return res.json({
        success: false,
        message: "Not authorized, Login again.",
      });
    }

    const user = User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }

    const data = {
      email: user.email,
      name: user.name,
      isVerified: user.isVerified,
    };

    res.json({ succss: true, userData: data });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
