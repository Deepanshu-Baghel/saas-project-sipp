export interface User {
  id: string;
  email: string;
  fullName: string;
  role: "student" | "teacher" | "principal";
  schoolName: string;
  phoneNumber?: string;
  createdAt: string;
}

// Simple localStorage-based user storage for demo
export class AuthService {
  private static USERS_KEY = "digischool_users";
  private static CURRENT_USER_KEY = "digischool_current_user";

  // Get all registered users
  static getUsers(): User[] {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Save users to localStorage
  static saveUsers(users: User[]): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // Register a new user
  static register(userData: {
    email: string;
    password: string;
    fullName: string;
    role: "student" | "teacher" | "principal";
    schoolName: string;
    phoneNumber?: string;
  }): { success: boolean; message: string; user?: User } {
    const users = this.getUsers();

    // Check if user already exists
    if (users.find((user) => user.email === userData.email)) {
      return { success: false, message: "User with this email already exists" };
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      fullName: userData.fullName,
      role: userData.role,
      schoolName: userData.schoolName,
      phoneNumber: userData.phoneNumber,
      createdAt: new Date().toISOString(),
    };

    // Save password separately (in real app, this would be hashed)
    const passwords = JSON.parse(
      localStorage.getItem("digischool_passwords") || "{}",
    );
    passwords[userData.email] = userData.password;
    localStorage.setItem("digischool_passwords", JSON.stringify(passwords));

    // Add user to users list
    users.push(newUser);
    this.saveUsers(users);

    return { success: true, message: "Registration successful", user: newUser };
  }

  // Login user
  static login(
    email: string,
    password: string,
  ): { success: boolean; message: string; user?: User } {
    const users = this.getUsers();
    const passwords = JSON.parse(
      localStorage.getItem("digischool_passwords") || "{}",
    );

    const user = users.find((u) => u.email === email);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    if (passwords[email] !== password) {
      return { success: false, message: "Invalid password" };
    }

    // Set current user
    this.setCurrentUser(user);
    return { success: true, message: "Login successful", user };
  }

  // Get current logged in user
  static getCurrentUser(): User | null {
    const currentUser = localStorage.getItem(this.CURRENT_USER_KEY);
    return currentUser ? JSON.parse(currentUser) : null;
  }

  // Set current user
  static setCurrentUser(user: User): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  // Logout
  static logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }

  // Check if user is logged in
  static isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
