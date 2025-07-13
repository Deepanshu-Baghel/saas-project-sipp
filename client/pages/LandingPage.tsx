import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  Trophy,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";

interface LandingPageProps {
  onLogin: () => void;
  onRegister: () => void;
}

export default function LandingPage({ onLogin, onRegister }: LandingPageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Learning",
      description: "Interactive homework and assignment management system",
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Organized timetables and class scheduling for everyone",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Students, teachers, and principals working together",
    },
    {
      icon: Trophy,
      title: "Performance Tracking",
      description: "Real-time grades and progress monitoring",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Protected data with role-based access control",
    },
    {
      icon: Star,
      title: "User Friendly",
      description: "Intuitive interface designed for all age groups",
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Sarah Johnson",
      role: "Mathematics Teacher",
      content:
        "DigiSchool has transformed how I manage my classes and interact with students. The assignment tracking is fantastic!",
    },
    {
      name: "Principal Davis",
      role: "School Principal",
      content:
        "The analytics and oversight tools help me make better decisions for our school. Highly recommended!",
    },
    {
      name: "Alex Chen",
      role: "Grade 10 Student",
      content:
        "I love how easy it is to check my homework and grades. The video class feature is really helpful too!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DigiSchool</h1>
              <p className="text-xs text-gray-500">Digital Learning Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onLogin}>
              Login
            </Button>
            <Button
              onClick={onRegister}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              Trusted by 500+ Schools Worldwide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to
              <span className="text-blue-600 block">DigiSchool</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empowering education through technology. Connect students,
              teachers, and administrators in one comprehensive digital learning
              platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onLogin}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              Get Started
              <GraduationCap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Modern Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to enhance learning, teaching, and
              school management in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Everyone in Education
            </h2>
            <p className="text-lg text-gray-600">
              Tailored experiences for students, teachers, and administrators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">
                  Students
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  ✓ Track homework and assignments
                </p>
                <p className="text-gray-600">✓ View grades and progress</p>
                <p className="text-gray-600">✓ Join video classes</p>
                <p className="text-gray-600">
                  ✓ Check schedules and announcements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">
                  Teachers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">✓ Manage classes and students</p>
                <p className="text-gray-600">✓ Create and assign homework</p>
                <p className="text-gray-600">✓ Grade submissions</p>
                <p className="text-gray-600">✓ Message students and parents</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-600">
                  Principals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">✓ School-wide oversight</p>
                <p className="text-gray-600">✓ User management</p>
                <p className="text-gray-600">✓ Performance analytics</p>
                <p className="text-gray-600">✓ Approval workflows</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from educators and students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educators already using DigiSchool to enhance
            their teaching and learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onRegister}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onLogin}
              className="text-lg px-8 py-6 border-white text-white hover:bg-blue-700"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">DigiSchool</h3>
                <p className="text-sm text-gray-400">
                  Digital Learning Platform
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 DigiSchool. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Empowering education through technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
