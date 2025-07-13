import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Video,
  ClipboardCheck,
  UserCheck,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { UserRole } from "./RoleSelector";

interface SidebarProps {
  userRole: UserRole;
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  onBackToLanding: () => void;
}

export default function Sidebar({
  userRole,
  currentPage,
  onPageChange,
  onLogout,
  onBackToLanding,
}: SidebarProps) {
  const getNavigationItems = () => {
    switch (userRole) {
      case "student":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "homework", label: "Homework", icon: BookOpen },
          { id: "schedule", label: "Schedule", icon: Calendar },
          { id: "grades", label: "Grades", icon: GraduationCap },
          { id: "video-class", label: "Video Classes", icon: Video },
          { id: "announcements", label: "Announcements", icon: MessageSquare },
        ];
      case "teacher":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "classes", label: "My Classes", icon: Users },
          { id: "assignments", label: "Assignments", icon: FileText },
          { id: "submissions", label: "Submissions", icon: ClipboardCheck },
          { id: "schedule", label: "Schedule", icon: Calendar },
          { id: "messages", label: "Messages", icon: MessageSquare },
        ];
      case "principal":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "overview", label: "Add Student", icon: UserCheck },
          { id: "users", label: "Fees Portal", icon: Settings },
          { id: "approvals", label: "Assign Teachers", icon: Shield },
          { id: "analytics", label: "Analytics", icon: BarChart3 },
          { id: "settings", label: "Settings", icon: Settings },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  const getRoleColor = () => {
    switch (userRole) {
      case "student":
        return "bg-school-blue border-school-blue";
      case "teacher":
        return "bg-school-green border-school-green";
      case "principal":
        return "bg-school-purple border-school-purple";
      default:
        return "bg-primary border-primary";
    }
  };

  const getRoleTitle = () => {
    switch (userRole) {
      case "student":
        return "Student Portal";
      case "teacher":
        return "Teacher Portal";
      case "principal":
        return "Principal Portal";
      default:
        return "Portal";
    }
  };

  return (
    <div className="h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg ${getRoleColor()} flex items-center justify-center`}
          >
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground text-sm">
              {getRoleTitle()}
            </h2>
            <p className="text-xs text-sidebar-foreground/60 capitalize">
              {userRole} Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10 px-3",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
              onClick={() => onPageChange(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-10 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={onBackToLanding}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-10 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
