import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Shield, Users, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: string;
  username: string;
  onLogout: () => void;
}

export const DashboardLayout = ({ children, userRole, username, onLogout }: DashboardLayoutProps) => {
  const getRoleIcon = () => {
    switch (userRole) {
      case "student":
        return <User className="h-5 w-5" />;
      case "mess-manager":
        return <Users className="h-5 w-5" />;
      case "admin":
        return <Shield className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const getRoleName = () => {
    return userRole.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mess Management System
              </h1>
              <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
                {getRoleIcon()}
                <span className="text-sm font-medium">{getRoleName()} Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{username}</p>
                  <p className="text-xs text-muted-foreground">{getRoleName()}</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="hover:bg-destructive hover:text-destructive-foreground transition-smooth"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};