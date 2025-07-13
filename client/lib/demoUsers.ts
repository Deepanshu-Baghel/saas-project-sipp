import { AuthService } from "./auth";

// Initialize demo users if they don't exist
export function initializeDemoUsers() {
  const users = AuthService.getUsers();

  // Check if demo users already exist
  const demoEmails = [
    "student@demo.com",
    "teacher@demo.com",
    "principal@demo.com",
  ];

  const existingEmails = users.map((user) => user.email);
  const needsDemo = demoEmails.some((email) => !existingEmails.includes(email));

  if (needsDemo) {
    // Create demo users
    const demoUsers = [
      {
        email: "student@demo.com",
        password: "password123",
        fullName: "Alex Johnson",
        role: "student" as const,
        schoolName: "DigiSchool Demo",
        phoneNumber: "+1234567890",
      },
      {
        email: "teacher@demo.com",
        password: "password123",
        fullName: "Mrs. Sarah Johnson",
        role: "teacher" as const,
        schoolName: "DigiSchool Demo",
        phoneNumber: "+1234567891",
      },
      {
        email: "principal@demo.com",
        password: "password123",
        fullName: "Principal Davis",
        role: "principal" as const,
        schoolName: "DigiSchool Demo",
        phoneNumber: "+1234567892",
      },
    ];

    // Register demo users only if they don't exist
    demoUsers.forEach((userData) => {
      if (!existingEmails.includes(userData.email)) {
        AuthService.register(userData);
      }
    });
  }
}
