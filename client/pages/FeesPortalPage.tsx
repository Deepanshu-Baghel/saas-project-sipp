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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Search,
  Filter,
  Download,
} from "lucide-react";

export default function FeesPortalPage() {
  const [selectedQuarter, setSelectedQuarter] = useState("q1-2024");
  const [searchTerm, setSearchTerm] = useState("");

  const quarters = [
    { value: "q1-2024", label: "Q1 2024 (Jan-Mar)" },
    { value: "q2-2024", label: "Q2 2024 (Apr-Jun)" },
    { value: "q3-2024", label: "Q3 2024 (Jul-Sep)" },
    { value: "q4-2024", label: "Q4 2024 (Oct-Dec)" },
  ];

  const feesOverview = {
    totalCollected: 2450000,
    totalPending: 185000,
    totalStudents: 1247,
    paidStudents: 1098,
    pendingStudents: 149,
    collectionRate: 93.0,
  };

  const teacherSalaryOverview = {
    totalPaid: 1850000,
    totalPending: 95000,
    totalTeachers: 89,
    paidTeachers: 84,
    pendingTeachers: 5,
    paymentRate: 95.1,
  };

  const studentFees = [
    {
      id: 1,
      name: "Emily Johnson",
      class: "Grade 9A",
      rollNumber: "9A001",
      totalFees: 15000,
      paidAmount: 15000,
      pendingAmount: 0,
      status: "paid",
      lastPayment: "2024-01-15",
      quarter: "Q1 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      class: "Grade 10B",
      rollNumber: "10B015",
      totalFees: 15000,
      paidAmount: 10000,
      pendingAmount: 5000,
      status: "partial",
      lastPayment: "2024-01-10",
      quarter: "Q1 2024",
    },
    {
      id: 3,
      name: "Sarah Williams",
      class: "Grade 11A",
      rollNumber: "11A008",
      totalFees: 18000,
      paidAmount: 0,
      pendingAmount: 18000,
      status: "pending",
      lastPayment: "-",
      quarter: "Q1 2024",
    },
    {
      id: 4,
      name: "David Brown",
      class: "Grade 12A",
      rollNumber: "12A012",
      totalFees: 20000,
      paidAmount: 20000,
      pendingAmount: 0,
      status: "paid",
      lastPayment: "2024-01-08",
      quarter: "Q1 2024",
    },
    {
      id: 5,
      name: "Jessica Davis",
      class: "Grade 9B",
      rollNumber: "9B023",
      totalFees: 15000,
      paidAmount: 7500,
      pendingAmount: 7500,
      status: "partial",
      lastPayment: "2024-01-12",
      quarter: "Q1 2024",
    },
  ];

  const teacherSalaries = [
    {
      id: 1,
      name: "Mrs. Johnson",
      subject: "Mathematics",
      employeeId: "EMP001",
      monthlySalary: 45000,
      paidAmount: 45000,
      pendingAmount: 0,
      status: "paid",
      paymentDate: "2024-01-31",
      month: "January 2024",
    },
    {
      id: 2,
      name: "Mr. Smith",
      subject: "English",
      employeeId: "EMP002",
      monthlySalary: 42000,
      paidAmount: 42000,
      pendingAmount: 0,
      status: "paid",
      paymentDate: "2024-01-31",
      month: "January 2024",
    },
    {
      id: 3,
      name: "Dr. Brown",
      subject: "Science",
      employeeId: "EMP003",
      monthlySalary: 50000,
      paidAmount: 0,
      pendingAmount: 50000,
      status: "pending",
      paymentDate: "-",
      month: "January 2024",
    },
    {
      id: 4,
      name: "Ms. Davis",
      subject: "History",
      employeeId: "EMP004",
      monthlySalary: 40000,
      paidAmount: 40000,
      pendingAmount: 0,
      status: "paid",
      paymentDate: "2024-01-28",
      month: "January 2024",
    },
    {
      id: 5,
      name: "Mr. Wilson",
      subject: "Physical Education",
      employeeId: "EMP005",
      monthlySalary: 35000,
      paidAmount: 17500,
      pendingAmount: 17500,
      status: "partial",
      paymentDate: "2024-01-15",
      month: "January 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "partial":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const filteredStudentFees = studentFees.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredTeacherSalaries = teacherSalaries.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-green-600" />
            Fees Portal
          </h1>
          <p className="text-gray-600 mt-1">
            Manage student fees and teacher salaries
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Select value={selectedQuarter} onValueChange={setSelectedQuarter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {quarters.map((quarter) => (
                <SelectItem key={quarter.value} value={quarter.value}>
                  {quarter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Student Fees Collected
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(feesOverview.totalCollected)}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Fees Pending
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {formatCurrency(feesOverview.totalPending)}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Teacher Salaries Paid
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {formatCurrency(teacherSalaryOverview.totalPaid)}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Collection Rate
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {feesOverview.collectionRate}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Student Fees and Teacher Salaries */}
      <Tabs defaultValue="student-fees" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student-fees">Student Fees</TabsTrigger>
          <TabsTrigger value="teacher-salaries">Teacher Salaries</TabsTrigger>
        </TabsList>

        {/* Student Fees Tab */}
        <TabsContent value="student-fees">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Student Fee Management
              </CardTitle>
              <CardDescription>
                Track and manage quarterly student fee payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredStudentFees.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {student.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getStatusColor(student.status)}`}
                        >
                          {student.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Class:</span>{" "}
                          {student.class}
                        </div>
                        <div>
                          <span className="font-medium">Roll:</span>{" "}
                          {student.rollNumber}
                        </div>
                        <div>
                          <span className="font-medium">Total Fees:</span>{" "}
                          {formatCurrency(student.totalFees)}
                        </div>
                        <div>
                          <span className="font-medium">Last Payment:</span>{" "}
                          {student.lastPayment}
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">
                          Paid: {formatCurrency(student.paidAmount)}
                        </span>
                      </div>
                      {student.pendingAmount > 0 && (
                        <div className="text-sm">
                          <span className="text-red-600 font-medium">
                            Pending: {formatCurrency(student.pendingAmount)}
                          </span>
                        </div>
                      )}
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          View Details
                        </Button>
                        {student.pendingAmount > 0 && (
                          <Button size="sm" className="text-xs">
                            Send Reminder
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Teacher Salaries Tab */}
        <TabsContent value="teacher-salaries">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Teacher Salary Management
              </CardTitle>
              <CardDescription>
                Track and manage monthly teacher salary payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTeacherSalaries.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {teacher.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getStatusColor(teacher.status)}`}
                        >
                          {teacher.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Subject:</span>{" "}
                          {teacher.subject}
                        </div>
                        <div>
                          <span className="font-medium">Employee ID:</span>{" "}
                          {teacher.employeeId}
                        </div>
                        <div>
                          <span className="font-medium">Monthly Salary:</span>{" "}
                          {formatCurrency(teacher.monthlySalary)}
                        </div>
                        <div>
                          <span className="font-medium">Payment Date:</span>{" "}
                          {teacher.paymentDate}
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">
                          Paid: {formatCurrency(teacher.paidAmount)}
                        </span>
                      </div>
                      {teacher.pendingAmount > 0 && (
                        <div className="text-sm">
                          <span className="text-red-600 font-medium">
                            Pending: {formatCurrency(teacher.pendingAmount)}
                          </span>
                        </div>
                      )}
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          View Details
                        </Button>
                        {teacher.pendingAmount > 0 && (
                          <Button size="sm" className="text-xs">
                            Process Payment
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
