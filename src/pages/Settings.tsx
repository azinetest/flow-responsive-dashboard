
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { Settings as SettingsIcon, Bell, Shield, Palette, Globe, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      marketing: false,
      updates: true,
    },
    privacy: {
      profileVisible: true,
      activityTracking: false,
      dataCollection: true,
    },
    preferences: {
      language: 'en',
      timezone: 'UTC-8',
      dateFormat: 'MM/DD/YYYY',
    },
  });

  const colors = [
    { name: 'Blue', value: 'blue' },
    { name: 'Purple', value: 'purple' },
    { name: 'Green', value: 'green' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
  ];

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const updateNotificationSetting = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const updatePrivacySetting = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value,
      },
    }));
  };

  const updatePreferenceSetting = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose between light and dark mode
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={theme === 'light' ? 'default' : 'outline'}>Light</Badge>
                  <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                  <Badge variant={theme === 'dark' ? 'default' : 'outline'}>Dark</Badge>
                </div>
              </div>

              <Separator />

              {/* Color Scheme */}
              <div>
                <h4 className="text-sm font-medium mb-3">Primary Color</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose your preferred accent color
                </p>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setPrimaryColor(color.value as any)}
                      className={`relative h-12 w-full rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                        primaryColor === color.value ? 'border-primary shadow-lg' : 'border-border'
                      }`}
                      style={{ backgroundColor: `hsl(var(--${color.value}))` }}
                    >
                      {primaryColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs text-muted-foreground">
                    Current: {colors.find(c => c.value === primaryColor)?.name}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Configure how you'd like to receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.email}
                    onCheckedChange={(checked) => updateNotificationSetting('email', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications in your browser
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.push}
                    onCheckedChange={(checked) => updateNotificationSetting('push', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Marketing Emails</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new features and promotions
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.marketing}
                    onCheckedChange={(checked) => updateNotificationSetting('marketing', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Product Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Get notified about important product updates
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.updates}
                    onCheckedChange={(checked) => updateNotificationSetting('updates', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control your privacy and security settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Public Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to other users
                    </p>
                  </div>
                  <Switch
                    checked={settings.privacy.profileVisible}
                    onCheckedChange={(checked) => updatePrivacySetting('profileVisible', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Activity Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Allow tracking of your activity for analytics
                    </p>
                  </div>
                  <Switch
                    checked={settings.privacy.activityTracking}
                    onCheckedChange={(checked) => updatePrivacySetting('activityTracking', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Data Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      Allow collection of usage data to improve the service
                    </p>
                  </div>
                  <Switch
                    checked={settings.privacy.dataCollection}
                    onCheckedChange={(checked) => updatePrivacySetting('dataCollection', checked)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Account Security</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download Data
                  </Button>
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Preferences
              </CardTitle>
              <CardDescription>
                Configure your general application preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={settings.preferences.language}
                    onValueChange={(value) => updatePreferenceSetting('language', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={settings.preferences.timezone}
                    onValueChange={(value) => updatePreferenceSetting('timezone', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="UTC+0">Greenwich Mean Time (UTC+0)</SelectItem>
                      <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select
                    value={settings.preferences.dateFormat}
                    onValueChange={(value) => updatePreferenceSetting('dateFormat', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-8">
          <Save className="mr-2 h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
