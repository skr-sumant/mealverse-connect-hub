import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, Check } from "lucide-react";

export const StudentDashboard = () => {
  const todaysMenu = {
    breakfast: ["Poha", "Tea/Coffee", "Fruits"],
    lunch: ["Rice", "Dal", "Sabzi", "Roti", "Salad"],
    dinner: ["Rice", "Rajma", "Aloo Gobi", "Roti", "Sweet"]
  };

  const mealTimings = {
    breakfast: "7:00 AM - 9:00 AM",
    lunch: "12:00 PM - 2:00 PM",
    dinner: "7:00 PM - 9:00 PM"
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to Your Mess Dashboard</h2>
        <p className="text-muted-foreground">View menus, submit feedback, and manage your meal preferences</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-semibold">Weekly Menu</h3>
            <p className="text-sm text-muted-foreground">View upcoming meals</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-4 text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-accent" />
            <h3 className="font-semibold">Feedback</h3>
            <p className="text-sm text-muted-foreground">Share your thoughts</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-warning" />
            <h3 className="font-semibold">Meal Timings</h3>
            <p className="text-sm text-muted-foreground">Check serving hours</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer">
          <CardContent className="p-4 text-center">
            <Check className="h-8 w-8 mx-auto mb-2 text-success" />
            <h3 className="font-semibold">Attendance</h3>
            <p className="text-sm text-muted-foreground">Mark meal attendance</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Menu */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Today's Menu</span>
            </CardTitle>
            <CardDescription>
              Delicious meals prepared fresh for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(todaysMenu).map(([meal, items]) => (
              <div key={meal} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold capitalize text-lg">{meal}</h4>
                  <Badge variant="secondary">{mealTimings[meal as keyof typeof mealTimings]}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <Badge key={index} variant="outline" className="bg-gradient-secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Meal Timings & Quick Feedback */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-warning" />
                <span>Meal Timings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(mealTimings).map(([meal, timing]) => (
                <div key={meal} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span className="font-medium capitalize">{meal}</span>
                  <Badge variant="outline">{timing}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <span>Quick Feedback</span>
              </CardTitle>
              <CardDescription>
                How was your meal experience today?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="hover:bg-success hover:text-success-foreground">
                  👍 Good
                </Button>
                <Button variant="outline" className="hover:bg-warning hover:text-warning-foreground">
                  👎 Poor
                </Button>
              </div>
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
              <MessageSquare className="h-4 w-4 mr-2" />
              Detailed Feedback
            </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};