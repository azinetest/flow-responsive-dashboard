
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { MultiSelect } from '@/components/ui/multi-select';
import { useToast } from '@/hooks/use-toast';
import { Save, Plus, Trash2, Star, Heart, Zap } from 'lucide-react';

const Forms = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    skills: [] as string[],
    newsletter: false,
    notifications: true,
    bio: '',
  });

  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'it' },
    { label: 'Japan', value: 'jp' },
    { label: 'South Korea', value: 'kr' },
  ];

  const skillOptions = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Node.js', value: 'nodejs' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'Go', value: 'go' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "Your information has been saved successfully.",
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Interactive Forms
          </h2>
          <p className="text-muted-foreground">
            Showcase of enhanced form components with animations and modern UI elements.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Plus className="mr-2 h-4 w-4" />
          New Form
        </Button>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted/30 backdrop-blur-sm">
          <TabsTrigger value="basic" className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground">
            <Star className="mr-2 h-4 w-4" />
            Basic Form
          </TabsTrigger>
          <TabsTrigger value="advanced" className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground">
            <Zap className="mr-2 h-4 w-4" />
            Advanced
          </TabsTrigger>
          <TabsTrigger value="preferences" className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground">
            <Heart className="mr-2 h-4 w-4" />
            Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Enter your personal details with enhanced form controls.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Country</Label>
                  <SearchableSelect
                    options={countries}
                    value={formData.country}
                    onChange={(value) => handleInputChange('country', value)}
                    placeholder="Select your country"
                    searchPlaceholder="Search countries..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Bio</Label>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="min-h-[100px] transition-all duration-200 focus:scale-[1.01] hover:shadow-md resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Basic Information
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Advanced Components
              </CardTitle>
              <CardDescription>
                Explore multi-select dropdowns and advanced form controls.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Technical Skills</Label>
                  <MultiSelect
                    options={skillOptions}
                    selected={formData.skills}
                    onChange={(skills) => handleInputChange('skills', skills)}
                    placeholder="Select your skills..."
                  />
                  <p className="text-xs text-muted-foreground">
                    Select multiple skills that match your expertise
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-border/50">
                    <AccordionTrigger className="hover:text-primary transition-colors">
                      Additional Settings
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="experience" className="text-sm font-medium">Years of Experience</Label>
                          <Input
                            id="experience"
                            type="number"
                            placeholder="5"
                            className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary" className="text-sm font-medium">Expected Salary</Label>
                          <Input
                            id="salary"
                            placeholder="$80,000"
                            className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-border/50">
                    <AccordionTrigger className="hover:text-primary transition-colors">
                      Portfolio & Links
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="portfolio" className="text-sm font-medium">Portfolio URL</Label>
                        <Input
                          id="portfolio"
                          placeholder="https://yourportfolio.com"
                          className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/in/yourname"
                          className="transition-all duration-200 focus:scale-[1.02] hover:shadow-md"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Advanced Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                User Preferences
              </CardTitle>
              <CardDescription>
                Configure your account preferences with toggle switches.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50">
                  <div className="space-y-0.5">
                    <Label className="text-base font-medium">Email Newsletter</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly updates and product news
                    </p>
                  </div>
                  <Switch
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50">
                  <div className="space-y-0.5">
                    <Label className="text-base font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about important updates
                    </p>
                  </div>
                  <Switch
                    checked={formData.notifications}
                    onCheckedChange={(checked) => handleInputChange('notifications', checked)}
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50">
                  <div className="space-y-0.5">
                    <Label className="text-base font-medium">Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to recruiters
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50">
                  <div className="space-y-0.5">
                    <Label className="text-base font-medium">Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive tips, offers, and product announcements
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80" />
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hover:scale-105 transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forms;
