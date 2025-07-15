import { Request, Response, Router } from "express";

const router = Router();

// POST /api/auth/forgot-password
router.post("/forgot-password", async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // TODO: Implement logic to generate password reset token and send email
  // For now, simulate success response
  console.log(`Password reset requested for email: ${email}`);

  res.status(200).json({
    message: "If an account with that email exists, a password reset link has been sent.",
  });
});

export default router;
