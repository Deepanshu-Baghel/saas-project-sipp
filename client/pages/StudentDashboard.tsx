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
  Calendar,
  Clock,
  BookOpen,
  Video,
  CheckCircle,
  AlertCircle,
  Star,
  Bell,
} from "lucide-react";

export default function StudentDashboard() {
  const [currentTime] = useState(new Date());

  const upcomingHomework = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Algebra Practice Sheet",
      dueDate: "2024-01-15",
      priority: "high",
      submitted: false,
    },
    {
      id: 2,
      subject: "English",
      title: "Essay: My Summer Vacation",
      dueDate: "2024-01-16",
      priority: "medium",
      submitted: true,
    },
    {
      id: 3,
      subject: "Science",
      title: "Chemistry Lab Report",
      dueDate: "2024-01-18",
      priority: "low",
      submitted: false,
    },
  ];

  const todaySchedule = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mrs. Johnson",
      time: "09:00 - 09:45",
      room: "Room 101",
      status: "completed",
    },
    {
      id: 2,
      subject: "English",
      teacher: "Mr. Smith",
      time: "10:00 - 10:45",
      room: "Room 205",
      status: "current",
    },
    {
      id: 3,
      subject: "Science",
      teacher: "Dr. Brown",
      time: "11:00 - 11:45",
      room: "Lab 1",
      status: "upcoming",
    },
    {
      id: 4,
      subject: "History",
      teacher: "Ms. Davis",
      time: "13:00 - 13:45",
      room: "Room 302",
      status: "upcoming",
    },
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Quiz 3", grade: "A", points: 95 },
    { subject: "English", assignment: "Essay 2", grade: "B+", points: 87 },
    { subject: "Science", assignment: "Lab Test", grade: "A-", points: 92 },
  ];

  const announcements = [
    {
      id: 1,
      title: "School Sports Day",
      message: "Annual sports day will be held on January 20th.",
      from: "Principal",
      time: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      title: "Library Hours Extended",
      message: "Library will remain open until 8 PM during exam week.",
      from: "Librarian",
      time: "1 day ago",
      priority: "medium",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "current":
        return "bg-blue-100 text-blue-800";
      case "upcoming":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Good morning, Alex! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to start another great day of learning?
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
        <Button className="h-20 bg-blue-600 hover:bg-blue-700 flex flex-col gap-2">
          <Video className="h-6 w-6" />
          Join Video Class
        </Button>
        <Button
          variant="outline"
          className="h-20 border-green-500 text-green-600 hover:bg-green-50 flex flex-col gap-2"
        >
          <BookOpen className="h-6 w-6" />
          View Homework
        </Button>
        <Button
          variant="outline"
          className="h-20 border-purple-500 text-purple-600 hover:bg-purple-50 flex flex-col gap-2"
        >
          <Calendar className="h-6 w-6" />
          Check Schedule
        </Button>
        <Button
          variant="outline"
          className="h-20 border-orange-500 text-orange-600 hover:bg-orange-50 flex flex-col gap-2"
        >
          <Star className="h-6 w-6" />
          View Grades
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Homework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              Upcoming Homework
            </CardTitle>
            <CardDescription>Stay on top of your assignments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingHomework.map((homework) => (
              <div
                key={homework.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {homework.subject}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(homework.priority)}`}
                    >
                      {homework.priority}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">{homework.title}</h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Due: {homework.dueDate}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {homework.submitted ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaySchedule.map((class_) => (
              <div
                key={class_.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(class_.status)}`}
                    >
                      {class_.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm">{class_.subject}</h4>
                  <p className="text-xs text-gray-500">{class_.teacher}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {class_.time} • {class_.room}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-600" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest academic performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentGrades.map((grade, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{grade.subject}</h4>
                  <p className="text-xs text-gray-500">{grade.assignment}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    {grade.grade}
                  </div>
                  <div className="text-xs text-gray-500">{grade.points}%</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-purple-600" />
              Announcements
            </CardTitle>
            <CardDescription>Latest updates from school</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-3 border rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{announcement.title}</h4>
                  <Badge
                    variant="outline"
                    className={`text-xs ${getPriorityColor(announcement.priority)}`}
                  >
                    {announcement.priority}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600">{announcement.message}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>From: {announcement.from}</span>
                  <span>{announcement.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
