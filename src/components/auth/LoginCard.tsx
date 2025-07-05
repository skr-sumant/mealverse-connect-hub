import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Shield, Users } from "lucide-react";

interface LoginCardProps {
  onLogin: (role: string, credentials: { username: string; password: string }) => void;
}

export const LoginCard = ({ onLogin }: LoginCardProps) => {
  const [role, setRole] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role && username && password) {
      onLogin(role, { username, password });
    }
  };

  const getRoleIcon = (roleType: string) => {
    switch (roleType) {
      case "student":
        return <User className="h-5 w-5" />;
      case "mess-manager":
        return <Users className="h-5 w-5" />;
      case "admin":
        return <Shield className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Mess Management System
        </CardTitle>
        <CardDescription>
          Select your role and login to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="role">User Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Student</span>
                  </div>
                </SelectItem>
                <SelectItem value="mess-manager">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Mess Manager</span>
                  </div>
                </SelectItem>
                <SelectItem value="admin">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            variant="gradient"
            className="w-full transition-smooth"
            disabled={!role || !username || !password}
          >
            <div className="flex items-center space-x-2">
              {getRoleIcon(role)}
              <span>Login as {role?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};