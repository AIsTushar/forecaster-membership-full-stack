import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  // Create Token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  console.log(token);

  // Set Cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    domain: "vercel.app",
    path: "/",
  });
};
