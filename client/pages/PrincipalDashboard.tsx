import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  BookOpen,
  Shield,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Settings,
  FileCheck,
} from "lucide-react";

export default function PrincipalDashboard() {
  const [currentTime] = useState(new Date());

  const schoolStats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12",
      trend: "up",
      color: "blue",
    },
    {
      title: "Teachers",
      value: "89",
      change: "+3",
      trend: "up",
      color: "green",
    },
    {
      title: "Classes",
      value: "45",
      change: "0",
      trend: "stable",
      color: "purple",
    },
    {
      title: "Average Attendance",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      color: "orange",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: "Timetable",
      teacher: "Mrs. Johnson",
      subject: "Mathematics Grade 9",
      priority: "high",
      submittedAt: "2 hours ago",
    },
    {
      id: 2,
      type: "Assignment",
      teacher: "Mr. Smith",
      subject: "English Literature",
      priority: "medium",
      submittedAt: "1 day ago",
    },
    {
      id: 3,
      type: "Field Trip",
      teacher: "Dr. Brown",
      subject: "Science Laboratory",
      priority: "high",
      submittedAt: "3 hours ago",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New student enrollment",
      user: "Emily Johnson",
      time: "10 minutes ago",
      type: "enrollment",
    },
    {
      id: 2,
      action: "Teacher performance review",
      user: "Mrs. Davis",
      time: "1 hour ago",
      type: "review",
    },
    {
      id: 3,
      action: "Homework visibility updated",
      user: "Mr. Wilson",
      time: "2 hours ago",
      type: "update",
    },
    {
      id: 4,
      action: "New announcement published",
      user: "Principal Office",
      time: "4 hours ago",
      type: "announcement",
    },
  ];

  const classOverview = [
    {
      grade: "Grade 9",
      students: 156,
      teachers: 8,
      avgPerformance: 87,
      attendance: 95.2,
    },
    {
      grade: "Grade 10",
      students: 142,
      teachers: 9,
      avgPerformance: 89,
      attendance: 93.8,
    },
    {
      grade: "Grade 11",
      students: 128,
      teachers: 11,
      avgPerformance: 91,
      attendance: 94.5,
    },
    {
      grade: "Grade 12",
      students: 119,
      teachers: 12,
      avgPerformance: 93,
      attendance: 96.1,
    },
  ];

  const teacherPerformance = [
    {
      name: "Mrs. Johnson",
      subject: "Mathematics",
      rating: 4.8,
      students: 89,
      satisfaction: 96,
    },
    {
      name: "Mr. Smith",
      subject: "English",
      rating: 4.6,
      students: 92,
      satisfaction: 94,
    },
    {
      name: "Dr. Brown",
      subject: "Science",
      rating: 4.9,
      students: 76,
      satisfaction: 98,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Good morning, Principal Davis! 🎓
          </h1>
          <p className="text-gray-600 mt-1">
            Leading excellence in education every day
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* School Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {schoolStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="flex items-center">
                  {stat.trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  )}
                  {stat.trend === "down" && (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm ml-1 ${
                      stat.trend === "up"
                        ? "text-green-500"
                        : stat.trend === "down"
                          ? "text-red-500"
                          : "text-gray-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="h-20 bg-purple-600 hover:bg-purple-700 flex flex-col gap-2">
          <Plus className="h-6 w-6" />
          Add User
        </Button>
        <Button
          variant="outline"
          className="h-20 border-blue-500 text-blue-600 hover:bg-blue-50 flex flex-col gap-2"
        >
          <FileCheck className="h-6 w-6" />
          Review Approvals
        </Button>
        <Button
          variant="outline"
          className="h-20 border-green-500 text-green-600 hover:bg-green-50 flex flex-col gap-2"
        >
          <BarChart3 className="h-6 w-6" />
          View Analytics
        </Button>
        <Button
          variant="outline"
          className="h-20 border-orange-500 text-orange-600 hover:bg-orange-50 flex flex-col gap-2"
        >
          <Settings className="h-6 w-6" />
          School Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              Pending Approvals
              <Badge variant="destructive" className="ml-2">
                {pendingApprovals.length}
              </Badge>
            </CardTitle>
            <CardDescription>Items requiring your approval</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div
                key={approval.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {approval.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(approval.priority)}`}
                    >
                      {approval.priority}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">{approval.subject}</h4>
                  <p className="text-xs text-gray-500">
                    By {approval.teacher} • {approval.submittedAt}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Reject
                  </Button>
                  <Button size="sm" className="text-xs">
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest system activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{activity.action}</h4>
                  <p className="text-xs text-gray-500">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Class Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-green-600" />
              Class Overview
            </CardTitle>
            <CardDescription>Performance metrics by grade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classOverview.map((grade, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{grade.grade}</h4>
                    <p className="text-xs text-gray-500">
                      {grade.students} students • {grade.teachers} teachers
                    </p>
                  </div>
                  <div className="flex gap-8 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Performance</p>
                      <p
                        className={`font-semibold ${getPerformanceColor(
                          grade.avgPerformance,
                        )}`}
                      >
                        {grade.avgPerformance}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Attendance</p>
                      <p
                        className={`font-semibold ${getPerformanceColor(
                          grade.attendance,
                        )}`}
                      >
                        {grade.attendance}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teacher Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-orange-600" />
              Top Teacher Performance
            </CardTitle>
            <CardDescription>Highest performing educators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teacherPerformance.map((teacher, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{teacher.name}</h4>
                    <p className="text-xs text-gray-500">
                      {teacher.subject} • {teacher.students} students
                    </p>
                  </div>
                  <div className="flex gap-8 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="font-semibold text-yellow-600">
                        ⭐ {teacher.rating}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Satisfaction</p>
                      <p className="font-semibold text-green-600">
                        {teacher.satisfaction}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
