
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Settings, 
  ChartBar, 
  Bell, 
  Shield, 
  Palette,
  Code,
  Star,
  Heart,
  Zap
} from "lucide-react";

const TabsDemo = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Colorful Tabs Demo
        </h1>
        <p className="text-muted-foreground text-lg">
          Beautiful and interactive tab components with gradients and animations
        </p>
      </div>

      {/* Main Tabs Example */}
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-500" />
            Dashboard Overview
          </CardTitle>
          <CardDescription>
            Manage your application with these interactive tabs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <ChartBar className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Alerts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Total Users</p>
                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">12,345</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Revenue</p>
                        <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">$89,432</p>
                      </div>
                      <Star className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400">Growth</p>
                        <p className="text-2xl font-bold text-green-700 dark:text-green-300">+23.5%</p>
                      </div>
                      <Zap className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  View comprehensive analytics and insights about your application performance.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  View Detailed Report
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-4">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 text-blue-500" />
                  User Management
                </h3>
                <p className="text-muted-foreground">
                  Manage user accounts, permissions, and access controls.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    Active Users: 1,234
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    New This Month: 89
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                    Premium Users: 456
                  </Badge>
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  Manage Users
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <Settings className="w-6 h-6 text-purple-500" />
                  Application Settings
                </h3>
                <p className="text-muted-foreground">
                  Configure your application preferences and security settings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                    <CardContent className="p-4 text-center">
                      <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Security</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-pink-200 dark:border-pink-800">
                    <CardContent className="p-4 text-center">
                      <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-pink-700 dark:text-pink-300">Preferences</p>
                    </CardContent>
                  </Card>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  Update Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <Bell className="w-6 h-6 text-yellow-500" />
                  Notifications & Alerts
                </h3>
                <p className="text-muted-foreground">
                  Manage your notification preferences and alert settings.
                </p>
                <div className="space-y-3 max-w-md mx-auto">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <span className="text-sm">Email Notifications</span>
                    <Badge className="bg-green-500 text-white">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <span className="text-sm">Push Notifications</span>
                    <Badge className="bg-blue-500 text-white">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 rounded-lg border border-red-200 dark:border-red-800">
                    <span className="text-sm">Security Alerts</span>
                    <Badge className="bg-red-500 text-white">Critical</Badge>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700">
                  Configure Alerts
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Secondary Tabs Example */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-500" />
            Developer Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="api" className="w-full">
            <TabsList>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
              <TabsTrigger value="sdk">SDK</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold">API Management</h4>
                <p className="text-muted-foreground">
                  Manage your API keys, endpoints, and integration settings.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="docs">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold">Documentation</h4>
                <p className="text-muted-foreground">
                  Access comprehensive documentation and guides for developers.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="sdk">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold">SDK Downloads</h4>
                <p className="text-muted-foreground">
                  Download SDKs and tools for various programming languages.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TabsDemo;
