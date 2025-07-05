import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Upload, MessageSquare, Settings, BarChart3, Package } from "lucide-react";

export const MessManagerDashboard = () => {
  const recentFeedback = [
    { id: 1, student: "Student A", rating: "Good", comment: "Loved the dal today!", time: "2 hours ago" },
    { id: 2, student: "Student B", rating: "Average", comment: "Could use more salt in vegetables", time: "4 hours ago" },
    { id: 3, student: "Student C", rating: "Excellent", comment: "Perfect meal!", time: "6 hours ago" },
  ];

  const weeklyStats = {
    totalMeals: 450,
    positiveFeeback: 85,
    attendance: 78,
    wasteReduction: 12
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Mess Manager Dashboard</h2>
        <p className="text-muted-foreground">Manage menus, view feedback, and monitor mess operations</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card bg-gradient-secondary">
          <CardContent className="p-4 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weeklyStats.totalMeals}</div>
            <p className="text-sm text-muted-foreground">Meals Served This Week</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">{weeklyStats.positiveFeeback}%</div>
            <p className="text-sm text-muted-foreground">Positive Feedback</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{weeklyStats.attendance}%</div>
            <p className="text-sm text-muted-foreground">Average Attendance</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">{weeklyStats.wasteReduction}%</div>
            <p className="text-sm text-muted-foreground">Waste Reduction</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Upload Menu</h3>
            <p className="text-sm text-muted-foreground mb-4">Update daily or weekly menu</p>
            <Button variant="gradient" className="transition-smooth">
              Upload Menu
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">View Feedback</h3>
            <p className="text-sm text-muted-foreground mb-4">Check student reviews and comments</p>
            <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
              View All Feedback
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-6 text-center">
            <Package className="h-12 w-12 mx-auto mb-4 text-success" />
            <h3 className="text-lg font-semibold mb-2">Inventory</h3>
            <p className="text-sm text-muted-foreground mb-4">Manage food inventory and supplies</p>
            <Button variant="outline" className="hover:bg-success hover:text-success-foreground">
              Manage Inventory
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Feedback & Menu Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-accent" />
              <span>Recent Feedback</span>
            </CardTitle>
            <CardDescription>
              Latest reviews from students
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{feedback.student}</span>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={feedback.rating === 'Excellent' ? 'default' : feedback.rating === 'Good' ? 'secondary' : 'outline'}
                      className={feedback.rating === 'Excellent' ? 'bg-success' : ''}
                    >
                      {feedback.rating}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{feedback.time}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{feedback.comment}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Feedback
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Menu Management</span>
            </CardTitle>
            <CardDescription>
              Quick menu actions and scheduling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <Button className="justify-start bg-gradient-primary hover:opacity-90 transition-smooth">
                <Upload className="h-4 w-4 mr-2" />
                Upload Today's Menu
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Weekly Menu
              </Button>
              <Button variant="outline" className="justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Menu Templates
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">This Week's Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monday</span>
                  <Badge variant="default" className="bg-success">Uploaded</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tuesday</span>
                  <Badge variant="default" className="bg-success">Uploaded</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Wednesday</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};