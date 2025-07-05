import { useState } from "react";
import { LoginCard } from "@/components/auth/LoginCard";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { MessManagerDashboard } from "@/components/dashboard/MessManagerDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [user, setUser] = useState<{
    role: string;
    username: string;
  } | null>(null);
  const { toast } = useToast();

  const handleLogin = (role: string, credentials: { username: string; password: string }) => {
    // Simulate login - in real app, this would validate against backend
    setUser({ role, username: credentials.username });
    toast({
      title: "Login Successful",
      description: `Welcome, ${credentials.username}!`,
    });
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const renderDashboard = () => {
    switch (user?.role) {
      case "student":
        return <StudentDashboard />;
      case "mess-manager":
        return <MessManagerDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
        <LoginCard onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <DashboardLayout
      userRole={user.role}
      username={user.username}
      onLogout={handleLogout}
    >
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Index;
