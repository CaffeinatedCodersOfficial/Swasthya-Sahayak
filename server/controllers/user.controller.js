import { User } from "../models/user.model.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }

    const userData = {
      email: user.email,
      name: user.name,
      isVerified: user.isVerified,
      role: user.role,
    };

    res.json({ success: true, userData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
