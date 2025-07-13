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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  Trophy,
  Clock,
  Target,
  Download,
  RefreshCw,
} from "lucide-react";

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("current-month");
  const [selectedClass, setSelectedClass] = useState("all");

  const periods = [
    { value: "current-month", label: "Current Month" },
    { value: "last-month", label: "Last Month" },
    { value: "current-quarter", label: "Current Quarter" },
    { value: "last-quarter", label: "Last Quarter" },
    { value: "current-year", label: "Current Year" },
  ];

  const classOptions = [
    { value: "all", label: "All Classes" },
    { value: "grade-6", label: "Grade 6" },
    { value: "grade-7", label: "Grade 7" },
    { value: "grade-8", label: "Grade 8" },
    { value: "grade-9", label: "Grade 9" },
    { value: "grade-10", label: "Grade 10" },
    { value: "grade-11", label: "Grade 11" },
    { value: "grade-12", label: "Grade 12" },
  ];

  const overviewStats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12",
      trend: "up",
      percentage: "+0.97%",
      icon: Users,
      color: "blue",
    },
    {
      title: "Average Attendance",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      percentage: "+2.28%",
      icon: Calendar,
      color: "green",
    },
    {
      title: "Average Score",
      value: "87.5%",
      change: "-1.2%",
      trend: "down",
      percentage: "-1.35%",
      icon: Trophy,
      color: "orange",
    },
    {
      title: "Teacher Performance",
      value: "4.6/5",
      change: "+0.2",
      trend: "up",
      percentage: "+4.55%",
      icon: Target,
      color: "purple",
    },
  ];

  const classAttendance = [
    {
      class: "Grade 6",
      totalStudents: 156,
      presentToday: 148,
      attendanceRate: 94.9,
      avgAttendance: 95.2,
      trend: "up",
    },
    {
      class: "Grade 7",
      totalStudents: 142,
      presentToday: 135,
      attendanceRate: 95.1,
      avgAttendance: 94.8,
      trend: "up",
    },
    {
      class: "Grade 8",
      totalStudents: 138,
      presentToday: 129,
      attendanceRate: 93.5,
      avgAttendance: 93.9,
      trend: "down",
    },
    {
      class: "Grade 9",
      totalStudents: 156,
      presentToday: 147,
      attendanceRate: 94.2,
      avgAttendance: 94.5,
      trend: "down",
    },
    {
      class: "Grade 10",
      totalStudents: 142,
      presentToday: 134,
      attendanceRate: 94.4,
      avgAttendance: 93.8,
      trend: "up",
    },
    {
      class: "Grade 11",
      totalStudents: 128,
      presentToday: 122,
      attendanceRate: 95.3,
      avgAttendance: 94.5,
      trend: "up",
    },
    {
      class: "Grade 12",
      totalStudents: 119,
      presentToday: 114,
      attendanceRate: 95.8,
      avgAttendance: 96.1,
      trend: "down",
    },
  ];

  const subjectPerformance = [
    {
      subject: "Mathematics",
      avgScore: 85.2,
      participation: 92.5,
      submissions: 94.8,
      trend: "up",
      students: 650,
    },
    {
      subject: "English",
      avgScore: 88.7,
      participation: 95.2,
      submissions: 96.5,
      trend: "up",
      students: 1247,
    },
    {
      subject: "Science",
      avgScore: 82.4,
      participation: 89.3,
      submissions: 91.2,
      trend: "down",
      students: 780,
    },
    {
      subject: "History",
      avgScore: 86.9,
      participation: 91.8,
      submissions: 93.4,
      trend: "up",
      students: 890,
    },
    {
      subject: "Geography",
      avgScore: 84.1,
      participation: 88.7,
      submissions: 89.9,
      trend: "down",
      students: 560,
    },
  ];

  const teacherPerformance = [
    {
      name: "Mrs. Johnson",
      subject: "Mathematics",
      rating: 4.8,
      studentSatisfaction: 96,
      classAvgScore: 87.5,
      attendanceRate: 95.2,
      trend: "up",
    },
    {
      name: "Mr. Smith",
      subject: "English",
      rating: 4.6,
      studentSatisfaction: 94,
      classAvgScore: 89.2,
      attendanceRate: 94.8,
      trend: "up",
    },
    {
      name: "Dr. Brown",
      subject: "Science",
      rating: 4.9,
      studentSatisfaction: 98,
      classAvgScore: 85.8,
      attendanceRate: 96.1,
      trend: "up",
    },
    {
      name: "Ms. Davis",
      subject: "History",
      rating: 4.4,
      studentSatisfaction: 92,
      classAvgScore: 86.3,
      attendanceRate: 93.7,
      trend: "down",
    },
    {
      name: "Mr. Wilson",
      subject: "Physical Education",
      rating: 4.7,
      studentSatisfaction: 95,
      classAvgScore: 92.1,
      attendanceRate: 97.3,
      trend: "up",
    },
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "orange":
        return "text-orange-600";
      case "purple":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            School Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            Comprehensive insights into school performance and metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p
                      className={`text-2xl font-bold ${getStatColor(stat.color)}`}
                    >
                      {stat.value}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm ${getTrendColor(stat.trend)}`}>
                        {stat.change} ({stat.percentage})
                      </span>
                    </div>
                  </div>
                  <Icon className={`h-8 w-8 ${getStatColor(stat.color)}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <Label className="text-sm font-medium">Filter by Class:</Label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {classOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Class-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              Class-wise Attendance
            </CardTitle>
            <CardDescription>
              Daily and average attendance rates by class
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classAttendance.map((class_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-sm">{class_.class}</h4>
                      <Badge variant="outline" className="text-xs">
                        {class_.totalStudents} students
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600">
                      Present Today: {class_.presentToday}/
                      {class_.totalStudents}
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${getPerformanceColor(
                          class_.attendanceRate,
                        )}`}
                      >
                        {class_.attendanceRate}%
                      </span>
                      {class_.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      Avg: {class_.avgAttendance}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Subject Performance
            </CardTitle>
            <CardDescription>
              Academic performance metrics by subject
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="p-3 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{subject.subject}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${getPerformanceColor(
                          subject.avgScore,
                        )}`}
                      >
                        {subject.avgScore}%
                      </span>
                      {subject.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                    <div>
                      <span className="font-medium">Participation:</span>{" "}
                      {subject.participation}%
                    </div>
                    <div>
                      <span className="font-medium">Submissions:</span>{" "}
                      {subject.submissions}%
                    </div>
                    <div>
                      <span className="font-medium">Students:</span>{" "}
                      {subject.students}
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
              <GraduationCap className="h-5 w-5 text-purple-600" />
              Teacher Performance Analytics
            </CardTitle>
            <CardDescription>
              Comprehensive teacher evaluation metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teacherPerformance.map((teacher, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {teacher.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {teacher.subject}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-medium">
                          {teacher.rating}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Satisfaction:</span>{" "}
                        <span
                          className={getPerformanceColor(
                            teacher.studentSatisfaction,
                          )}
                        >
                          {teacher.studentSatisfaction}%
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Avg Score:</span>{" "}
                        <span
                          className={getPerformanceColor(teacher.classAvgScore)}
                        >
                          {teacher.classAvgScore}%
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Attendance:</span>{" "}
                        <span
                          className={getPerformanceColor(
                            teacher.attendanceRate,
                          )}
                        >
                          {teacher.attendanceRate}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {teacher.trend === "up" ? (
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    )}
                    <Button size="sm" variant="outline" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-600" />
            Key Insights & Recommendations
          </CardTitle>
          <CardDescription>
            AI-powered insights based on current performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Positive Trend</h4>
              </div>
              <p className="text-sm text-green-800">
                Overall attendance has improved by 2.1% this month, with Grade
                11 showing the highest improvement.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-900">
                  Attention Needed
                </h4>
              </div>
              <p className="text-sm text-yellow-800">
                Science subject performance has declined by 1.2%. Consider
                additional support for struggling students.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Achievement</h4>
              </div>
              <p className="text-sm text-blue-800">
                Dr. Brown maintains the highest student satisfaction rate at 98%
                with excellent teaching methodologies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Label({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <label className={className}>{children}</label>;
}
