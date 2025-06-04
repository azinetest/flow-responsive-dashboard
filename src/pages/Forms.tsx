
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Save, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    department: '',
    description: '',
    experience: 'beginner',
    skills: [] as string[],
    newsletter: false,
    notifications: true,
    priority: [3],
    startDate: undefined as Date | undefined,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const skillOptions = ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "Your information has been saved.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      department: '',
      description: '',
      experience: 'beginner',
      skills: [],
      newsletter: false,
      notifications: true,
      priority: [3],
      startDate: undefined,
    });
    toast({
      title: "Form reset",
      description: "All fields have been cleared.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Forms</h2>
        <p className="text-muted-foreground">
          Comprehensive form example with various input types and validation.
        </p>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>User Information Form</CardTitle>
          <CardDescription>
            Please fill out all required fields. This form demonstrates various input types and validation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={formData.department} onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about yourself..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Experience Level</h3>
              <RadioGroup
                value={formData.experience}
                onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner (0-2 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate (3-5 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Advanced (5+ years)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="space-y-2">
                <Label>Select your skills:</Label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <Badge
                      key={skill}
                      variant={formData.skills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer transition-all duration-200 hover:scale-105"
                      onClick={() => handleSkillToggle(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Priority Slider */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Priority Level</h3>
              <div className="space-y-2">
                <Label>Priority: {formData.priority[0]}/5</Label>
                <Slider
                  value={formData.priority}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Start Date</h3>
              <div className="space-y-2">
                <Label>Preferred start date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                  />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Enable notifications</Label>
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6 border-t">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Submit Form
                  </>
                )}
              </Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forms;
