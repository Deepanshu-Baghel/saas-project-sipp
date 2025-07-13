import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Users,
  Calendar,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AddStudentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    class: "",
    section: "",
    rollNumber: "",
    admissionDate: "",
    previousSchool: "",
    medicalInfo: "",
  });

  const [recentlyAdded, setRecentlyAdded] = useState([
    {
      id: 1,
      name: "Emily Johnson",
      class: "Grade 9",
      section: "A",
      rollNumber: "9A001",
      admissionDate: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Michael Chen",
      class: "Grade 10",
      section: "B",
      rollNumber: "10B015",
      admissionDate: "2024-01-12",
      status: "pending",
    },
    {
      id: 3,
      name: "Sarah Williams",
      class: "Grade 11",
      section: "A",
      rollNumber: "11A008",
      admissionDate: "2024-01-10",
      status: "active",
    },
  ]);

  const classes = [
    { value: "grade-6", label: "Grade 6" },
    { value: "grade-7", label: "Grade 7" },
    { value: "grade-8", label: "Grade 8" },
    { value: "grade-9", label: "Grade 9" },
    { value: "grade-10", label: "Grade 10" },
    { value: "grade-11", label: "Grade 11" },
    { value: "grade-12", label: "Grade 12" },
  ];

  const sections = [
    { value: "a", label: "Section A" },
    { value: "b", label: "Section B" },
    { value: "c", label: "Section C" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add student logic here
    console.log("Adding student:", formData);

    // Add to recently added list
    const newStudent = {
      id: recentlyAdded.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      class: formData.class,
      section: formData.section,
      rollNumber: formData.rollNumber,
      admissionDate: formData.admissionDate,
      status: "active",
    };

    setRecentlyAdded([newStudent, ...recentlyAdded]);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      class: "",
      section: "",
      rollNumber: "",
      admissionDate: "",
      previousSchool: "",
      medicalInfo: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <UserPlus className="h-8 w-8 text-purple-600" />
            Add New Student
          </h1>
          <p className="text-gray-600 mt-1">
            Register a new student and assign them to a class
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Registration Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Student Information</CardTitle>
              <CardDescription>
                Enter the student's personal and academic details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="student@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter address"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter parent name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Parent Phone *</Label>
                      <Input
                        id="parentPhone"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter parent phone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Parent Email</Label>
                    <Input
                      id="parentEmail"
                      name="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="class">Class *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("class", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          {classes.map((cls) => (
                            <SelectItem key={cls.value} value={cls.value}>
                              {cls.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="section">Section *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("section", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select section" />
                        </SelectTrigger>
                        <SelectContent>
                          {sections.map((section) => (
                            <SelectItem
                              key={section.value}
                              value={section.value}
                            >
                              {section.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rollNumber">Roll Number *</Label>
                      <Input
                        id="rollNumber"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 9A001"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admissionDate">Admission Date *</Label>
                      <Input
                        id="admissionDate"
                        name="admissionDate"
                        type="date"
                        value={formData.admissionDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="previousSchool">Previous School</Label>
                      <Input
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        placeholder="Enter previous school name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medicalInfo">Medical Information</Label>
                    <Input
                      id="medicalInfo"
                      name="medicalInfo"
                      value={formData.medicalInfo}
                      onChange={handleInputChange}
                      placeholder="Any medical conditions or allergies"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Recently Added Students */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Recently Added
              </CardTitle>
              <CardDescription>
                Students added in the last few days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentlyAdded.map((student) => (
                <div
                  key={student.id}
                  className="p-3 border rounded-lg space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{student.name}</h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(student.status)}`}
                    >
                      {student.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>
                      Class: {student.class} - {student.section}
                    </p>
                    <p>Roll: {student.rollNumber}</p>
                    <p>Admitted: {student.admissionDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Students</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">New This Month</span>
                <span className="font-semibold text-green-600">+23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending Admission</span>
                <span className="font-semibold text-yellow-600">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Classes</span>
                <span className="font-semibold">45</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
