import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Settings, BarChart3, AlertTriangle, Calendar, Lock } from "lucide-react";

export const AdminDashboard = () => {
  const systemStats = {
    totalStudents: 450,
    messManagers: 3,
    activeComplaints: 5,
    menuApprovalsPending: 2
  };

  const recentActivity = [
    { id: 1, action: "New student registered", user: "John Doe", time: "30 mins ago", type: "info" },
    { id: 2, action: "Menu uploaded for approval", user: "Mess Manager A", time: "1 hour ago", type: "warning" },
    { id: 3, action: "Complaint resolved", user: "System", time: "2 hours ago", type: "success" },
    { id: 4, action: "Inventory alert triggered", user: "System", time: "3 hours ago", type: "alert" },
  ];

  const pendingApprovals = [
    { id: 1, item: "Weekly Menu - Mess A", requestedBy: "Manager A", date: "Today" },
    { id: 2, item: "Special Menu - Festival", requestedBy: "Manager B", date: "Tomorrow" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
        <p className="text-muted-foreground">Oversee system operations, manage users, and approve content</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card bg-gradient-secondary">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{systemStats.totalStudents}</div>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{systemStats.messManagers}</div>
            <p className="text-sm text-muted-foreground">Mess Managers</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-warning" />
            <div className="text-2xl font-bold text-warning">{systemStats.activeComplaints}</div>
            <p className="text-sm text-muted-foreground">Active Complaints</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-success" />
            <div className="text-2xl font-bold text-success">{systemStats.menuApprovalsPending}</div>
            <p className="text-sm text-muted-foreground">Pending Approvals</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
            <p className="text-sm text-muted-foreground mb-4">Add, edit, or remove students and managers</p>
            <Button variant="gradient" className="transition-smooth">
              Manage Users
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <Settings className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Menu Templates</h3>
            <p className="text-sm text-muted-foreground mb-4">Create and manage menu templates</p>
            <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
              Manage Templates
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-success" />
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p className="text-sm text-muted-foreground mb-4">View comprehensive system reports</p>
            <Button variant="outline" className="hover:bg-success hover:text-success-foreground">
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed & Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-accent" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest system activities and events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">By {activity.user}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge 
                      variant={
                        activity.type === 'success' ? 'default' : 
                        activity.type === 'warning' ? 'secondary' : 
                        activity.type === 'alert' ? 'destructive' : 'outline'
                      }
                      className={activity.type === 'success' ? 'bg-success' : ''}
                    >
                      {activity.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-warning" />
              <span>Pending Approvals</span>
            </CardTitle>
            <CardDescription>
              Items waiting for your approval
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="border rounded-lg p-4 space-y-3">
                <div className="space-y-1">
                  <h4 className="font-medium">{approval.item}</h4>
                  <p className="text-sm text-muted-foreground">
                    Requested by {approval.requestedBy} • {approval.date}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-destructive hover:text-destructive-foreground">
                    Reject
                  </Button>
                </div>
              </div>
            ))}
            
            {pendingApprovals.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Lock className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No pending approvals</p>
              </div>
            )}
            
            <div className="pt-4 border-t">
              <Button variant="gradient" className="w-full transition-smooth">
                <Lock className="h-4 w-4 mr-2" />
                Lock/Unlock Menu for Week
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};