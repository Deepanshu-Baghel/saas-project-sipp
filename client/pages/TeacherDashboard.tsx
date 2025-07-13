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
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  BookOpen,
  Plus,
  Eye,
} from "lucide-react";

export default function TeacherDashboard() {
  const [currentTime] = useState(new Date());

  const myClasses = [
    {
      id: 1,
      subject: "Mathematics - Grade 9",
      students: 28,
      schedule: "Mon, Wed, Fri - 09:00 AM",
      room: "Room 101",
      nextClass: "Today at 09:00 AM",
    },
    {
      id: 2,
      subject: "Mathematics - Grade 10",
      students: 25,
      schedule: "Tue, Thu - 10:00 AM",
      room: "Room 101",
      nextClass: "Tomorrow at 10:00 AM",
    },
    {
      id: 3,
      subject: "Advanced Algebra",
      students: 18,
      schedule: "Wed, Fri - 14:00 PM",
      room: "Room 103",
      nextClass: "Today at 14:00 PM",
    },
  ];

  const recentAssignments = [
    {
      id: 1,
      title: "Algebra Practice Sheet",
      subject: "Mathematics - Grade 9",
      dueDate: "2024-01-15",
      submissions: 22,
      totalStudents: 28,
      status: "active",
    },
    {
      id: 2,
      title: "Quadratic Equations Quiz",
      subject: "Mathematics - Grade 10",
      dueDate: "2024-01-16",
      submissions: 25,
      totalStudents: 25,
      status: "completed",
    },
    {
      id: 3,
      title: "Advanced Calculus Problems",
      subject: "Advanced Algebra",
      dueDate: "2024-01-18",
      submissions: 12,
      totalStudents: 18,
      status: "active",
    },
  ];

  const pendingSubmissions = [
    {
      id: 1,
      studentName: "Emily Johnson",
      assignment: "Algebra Practice Sheet",
      submittedAt: "2 hours ago",
      grade: null,
      priority: "high",
    },
    {
      id: 2,
      studentName: "Michael Chen",
      assignment: "Quadratic Equations Quiz",
      submittedAt: "1 day ago",
      grade: null,
      priority: "medium",
    },
    {
      id: 3,
      studentName: "Sarah Williams",
      assignment: "Advanced Calculus Problems",
      submittedAt: "3 hours ago",
      grade: null,
      priority: "high",
    },
  ];

  const todaySchedule = [
    {
      id: 1,
      subject: "Mathematics - Grade 9",
      time: "09:00 - 09:45",
      room: "Room 101",
      students: 28,
      status: "current",
    },
    {
      id: 2,
      subject: "Advanced Algebra",
      time: "14:00 - 14:45",
      room: "Room 103",
      students: 18,
      status: "upcoming",
    },
    {
      id: 3,
      subject: "Office Hours",
      time: "15:00 - 16:00",
      room: "Room 101",
      students: 0,
      status: "upcoming",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Emily Johnson",
      subject: "Question about homework",
      preview: "Hi Mrs. Johnson, I have a question about problem 5...",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 2,
      from: "Parent - Michael Chen",
      subject: "Regarding Michael's progress",
      preview: "Hello, I wanted to discuss Michael's recent performance...",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      from: "Principal Davis",
      subject: "Faculty meeting reminder",
      preview: "Reminder: Faculty meeting tomorrow at 3:30 PM...",
      time: "4 hours ago",
      unread: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "active":
        return "bg-blue-100 text-blue-800";
      case "current":
        return "bg-blue-100 text-blue-800";
      case "upcoming":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, Mrs. Johnson! 👩‍🏫
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to inspire young minds today?
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="h-20 bg-green-600 hover:bg-green-700 flex flex-col gap-2">
          <Plus className="h-6 w-6" />
          Create Assignment
        </Button>
        <Button
          variant="outline"
          className="h-20 border-blue-500 text-blue-600 hover:bg-blue-50 flex flex-col gap-2"
        >
          <Eye className="h-6 w-6" />
          Grade Submissions
        </Button>
        <Button
          variant="outline"
          className="h-20 border-purple-500 text-purple-600 hover:bg-purple-50 flex flex-col gap-2"
        >
          <MessageSquare className="h-6 w-6" />
          Send Message
        </Button>
        <Button
          variant="outline"
          className="h-20 border-orange-500 text-orange-600 hover:bg-orange-50 flex flex-col gap-2"
        >
          <Calendar className="h-6 w-6" />
          View Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Classes */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              My Classes
            </CardTitle>
            <CardDescription>
              Overview of your teaching schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {myClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-sm mb-2">
                    {classItem.subject}
                  </h4>
                  <div className="space-y-2 text-xs text-gray-600">
                    <p className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {classItem.students} students
                    </p>
                    <p className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {classItem.schedule}
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Next: {classItem.nextClass}
                    </p>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Manage Class
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Recent Assignments
            </CardTitle>
            <CardDescription>Track assignment progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(assignment.status)}`}
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">{assignment.title}</h4>
                  <p className="text-xs text-gray-500">{assignment.subject}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Due: {assignment.dueDate}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {assignment.submissions}/{assignment.totalStudents}
                  </div>
                  <div className="text-xs text-gray-500">submitted</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              Pending Submissions
            </CardTitle>
            <CardDescription>Assignments waiting for grading</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(submission.priority)}`}
                    >
                      {submission.priority}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">
                    {submission.studentName}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {submission.assignment}
                  </p>
                  <p className="text-xs text-gray-500">
                    Submitted {submission.submittedAt}
                  </p>
                </div>
                <Button size="sm" variant="outline">
                  Grade
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes and meetings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaySchedule.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">{item.subject}</h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time} • {item.room}
                  </p>
                  {item.students > 0 && (
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {item.students} students
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Messages
              <Badge variant="destructive" className="ml-2">
                2
              </Badge>
            </CardTitle>
            <CardDescription>Recent messages and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 border rounded-lg ${
                  message.unread ? "bg-blue-50 border-blue-200" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm">{message.from}</h4>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <h5 className="text-sm font-medium text-gray-900 mb-1">
                  {message.subject}
                </h5>
                <p className="text-xs text-gray-600 truncate">
                  {message.preview}
                </p>
                {message.unread && (
                  <div className="flex justify-end mt-2">
                    <Badge variant="destructive" className="text-xs">
                      New
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
