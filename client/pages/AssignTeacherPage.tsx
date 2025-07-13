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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  UserCheck,
  BookOpen,
  Calendar,
  Users,
  Plus,
  Search,
  Save,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function AssignTeacherPage() {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [assignmentData, setAssignmentData] = useState({
    teacherId: "",
    classes: [],
    subjects: [],
    schedule: [],
  });

  const teachers = [
    {
      id: "1",
      name: "Mrs. Johnson",
      employeeId: "EMP001",
      subject: "Mathematics",
      experience: "8 years",
      status: "active",
      currentLoad: 18,
      maxLoad: 25,
    },
    {
      id: "2",
      name: "Mr. Smith",
      employeeId: "EMP002",
      subject: "English",
      experience: "6 years",
      status: "active",
      currentLoad: 20,
      maxLoad: 25,
    },
    {
      id: "3",
      name: "Dr. Brown",
      employeeId: "EMP003",
      subject: "Science",
      experience: "12 years",
      status: "active",
      currentLoad: 15,
      maxLoad: 22,
    },
    {
      id: "4",
      name: "Ms. Davis",
      employeeId: "EMP004",
      subject: "History",
      experience: "5 years",
      status: "active",
      currentLoad: 22,
      maxLoad: 25,
    },
    {
      id: "5",
      name: "Mr. Wilson",
      employeeId: "EMP005",
      subject: "Physical Education",
      experience: "10 years",
      status: "active",
      currentLoad: 12,
      maxLoad: 20,
    },
  ];

  const classes = [
    { id: "6a", name: "Grade 6A", students: 28 },
    { id: "6b", name: "Grade 6B", students: 25 },
    { id: "7a", name: "Grade 7A", students: 30 },
    { id: "7b", name: "Grade 7B", students: 27 },
    { id: "8a", name: "Grade 8A", students: 26 },
    { id: "8b", name: "Grade 8B", students: 24 },
    { id: "9a", name: "Grade 9A", students: 32 },
    { id: "9b", name: "Grade 9B", students: 29 },
    { id: "10a", name: "Grade 10A", students: 25 },
    { id: "10b", name: "Grade 10B", students: 27 },
    { id: "11a", name: "Grade 11A", students: 22 },
    { id: "11b", name: "Grade 11B", students: 20 },
    { id: "12a", name: "Grade 12A", students: 18 },
    { id: "12b", name: "Grade 12B", students: 16 },
  ];

  const subjects = [
    "Mathematics",
    "English",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Computer Science",
    "Physical Education",
    "Art",
    "Music",
  ];

  const timeSlots = [
    "08:00 - 08:45",
    "08:45 - 09:30",
    "09:30 - 10:15",
    "10:15 - 11:00",
    "11:15 - 12:00",
    "12:00 - 12:45",
    "13:30 - 14:15",
    "14:15 - 15:00",
    "15:00 - 15:45",
  ];

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const currentAssignments = [
    {
      id: 1,
      teacher: "Mrs. Johnson",
      subject: "Mathematics",
      classes: ["Grade 9A", "Grade 9B", "Grade 10A"],
      totalHours: 18,
      status: "active",
    },
    {
      id: 2,
      teacher: "Mr. Smith",
      subject: "English",
      classes: ["Grade 11A", "Grade 11B", "Grade 12A"],
      totalHours: 20,
      status: "active",
    },
    {
      id: 3,
      teacher: "Dr. Brown",
      subject: "Science",
      classes: ["Grade 6A", "Grade 7A", "Grade 8A"],
      totalHours: 15,
      status: "active",
    },
    {
      id: 4,
      teacher: "Ms. Davis",
      subject: "History",
      classes: ["Grade 9A", "Grade 10A", "Grade 11A", "Grade 12A"],
      totalHours: 22,
      status: "active",
    },
  ];

  const handleTeacherSelect = (teacherId: string) => {
    setSelectedTeacher(teacherId);
    setAssignmentData({ ...assignmentData, teacherId });
  };

  const handleClassSelection = (classId: string, checked: boolean) => {
    const updatedClasses = checked
      ? [...assignmentData.classes, classId]
      : assignmentData.classes.filter((id) => id !== classId);
    setAssignmentData({ ...assignmentData, classes: updatedClasses });
  };

  const handleSubjectSelection = (subject: string, checked: boolean) => {
    const updatedSubjects = checked
      ? [...assignmentData.subjects, subject]
      : assignmentData.subjects.filter((s) => s !== subject);
    setAssignmentData({ ...assignmentData, subjects: updatedSubjects });
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLoadColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <UserCheck className="h-8 w-8 text-blue-600" />
            Assign Classes & Subjects
          </h1>
          <p className="text-gray-600 mt-1">
            Manage teacher assignments for classes and subjects
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Assignment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Teacher Selection */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Select Teacher
              </CardTitle>
              <CardDescription>Choose a teacher to assign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredTeachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedTeacher === teacher.id
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => handleTeacherSelect(teacher.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{teacher.name}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getStatusColor(teacher.status)}`}
                      >
                        {teacher.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>ID: {teacher.employeeId}</p>
                      <p>Subject: {teacher.subject}</p>
                      <p>Experience: {teacher.experience}</p>
                      <p
                        className={`font-medium ${getLoadColor(
                          teacher.currentLoad,
                          teacher.maxLoad,
                        )}`}
                      >
                        Load: {teacher.currentLoad}/{teacher.maxLoad} hours
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assignment Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                Assignment Details
              </CardTitle>
              <CardDescription>
                Assign classes and subjects to the selected teacher
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {selectedTeacher ? (
                <>
                  {/* Selected Teacher Info */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Selected Teacher:{" "}
                      {teachers.find((t) => t.id === selectedTeacher)?.name}
                    </h3>
                    <p className="text-blue-700 text-sm">
                      Primary Subject:{" "}
                      {teachers.find((t) => t.id === selectedTeacher)?.subject}
                    </p>
                  </div>

                  {/* Class Assignment */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Assign Classes
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {classes.map((class_) => (
                        <div
                          key={class_.id}
                          className="flex items-center space-x-2 p-3 border rounded-lg"
                        >
                          <Checkbox
                            id={class_.id}
                            checked={assignmentData.classes.includes(class_.id)}
                            onCheckedChange={(checked) =>
                              handleClassSelection(class_.id, !!checked)
                            }
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={class_.id}
                              className="text-sm font-medium cursor-pointer"
                            >
                              {class_.name}
                            </Label>
                            <p className="text-xs text-gray-500">
                              {class_.students} students
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subject Assignment */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Assign Subjects
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center space-x-2 p-3 border rounded-lg"
                        >
                          <Checkbox
                            id={subject}
                            checked={assignmentData.subjects.includes(subject)}
                            onCheckedChange={(checked) =>
                              handleSubjectSelection(subject, !!checked)
                            }
                          />
                          <Label
                            htmlFor={subject}
                            className="text-sm font-medium cursor-pointer"
                          >
                            {subject}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Builder */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Weekly Schedule
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="border p-2 bg-gray-50 text-left text-sm font-medium">
                              Time
                            </th>
                            {weekDays.map((day) => (
                              <th
                                key={day}
                                className="border p-2 bg-gray-50 text-center text-sm font-medium"
                              >
                                {day}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {timeSlots.map((slot) => (
                            <tr key={slot}>
                              <td className="border p-2 text-sm font-medium bg-gray-50">
                                {slot}
                              </td>
                              {weekDays.map((day) => (
                                <td
                                  key={`${slot}-${day}`}
                                  className="border p-2"
                                >
                                  <Select>
                                    <SelectTrigger className="h-8 text-xs">
                                      <SelectValue placeholder="-" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {assignmentData.classes.map((classId) => {
                                        const class_ = classes.find(
                                          (c) => c.id === classId,
                                        );
                                        return (
                                          <SelectItem
                                            key={classId}
                                            value={classId}
                                          >
                                            {class_?.name}
                                          </SelectItem>
                                        );
                                      })}
                                    </SelectContent>
                                  </Select>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Assignment
                    </Button>
                    <Button variant="outline">Save as Draft</Button>
                    <Button variant="outline">Preview Schedule</Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Select a teacher to start creating assignments
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Current Assignments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-600" />
            Current Assignments
          </CardTitle>
          <CardDescription>
            Overview of all active teacher assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {assignment.teacher}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {assignment.subject}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(assignment.status)}`}
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Classes:</span>{" "}
                      {assignment.classes.join(", ")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">
                        {assignment.totalHours} hours/week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    View Schedule
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs text-red-600 hover:text-red-700"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
