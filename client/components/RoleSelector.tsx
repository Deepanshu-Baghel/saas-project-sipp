import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, BookOpen, Shield, ArrowLeft } from "lucide-react";

export type UserRole = "student" | "teacher" | "principal";

interface RoleSelectorProps {
  onRoleSelect: (role: UserRole) => void;
  onBackToLanding: () => void;
}

export default function RoleSelector({
  onRoleSelect,
  onBackToLanding,
}: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const roles = [
    {
      id: "student" as const,
      title: "Student",
      description: "Access homework, schedules, grades, and join video classes",
      icon: GraduationCap,
      color: "school-blue",
    },
    {
      id: "teacher" as const,
      title: "Teacher",
      description:
        "Manage classes, assign homework, check submissions, and message students",
      icon: BookOpen,
      color: "school-green",
    },
    {
      id: "principal" as const,
      title: "Principal",
      description:
        "Oversee school operations, manage users, and view analytics",
      icon: Shield,
      color: "school-purple",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={onBackToLanding}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div></div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            School Management System
          </h1>
          <p className="text-lg text-gray-600">
            Select your role to access your personalized dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected
                    ? "ring-2 ring-primary shadow-lg scale-105"
                    : "hover:scale-102"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${
                      role.color === "school-blue"
                        ? "bg-blue-100"
                        : role.color === "school-green"
                          ? "bg-green-100"
                          : "bg-purple-100"
                    } flex items-center justify-center`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        role.color === "school-blue"
                          ? "text-blue-600"
                          : role.color === "school-green"
                            ? "text-green-600"
                            : "text-purple-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    className={`w-full ${isSelected ? "bg-primary" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (selectedRole) {
                        onRoleSelect(selectedRole);
                      }
                    }}
                    disabled={!isSelected}
                  >
                    {isSelected ? "Continue to Dashboard" : "Select This Role"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
