
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { MultiSelect } from '@/components/ui/multi-select';
import { TagsInput } from '@/components/ui/tags-input';
import { FileUpload } from '@/components/ui/file-upload';
import { DateTimePicker } from '@/components/ui/date-time-picker';
import { AutocompleteInput } from '@/components/ui/autocomplete-input';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  Calendar as CalendarIcon, 
  Search, 
  Eye, 
  EyeOff, 
  User, 
  Mail, 
  Lock,
  Upload as UploadIcon,
  Star,
  Heart,
  Zap
} from 'lucide-react';
import { format } from 'date-fns';

const FormElements = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    textInput: '',
    numberInput: 0,
    emailInput: '',
    passwordInput: '',
    textareaInput: '',
    switchValue: false,
    checkboxValue: false,
    radioValue: '',
    selectValue: '',
    searchableSelectValue: '',
    multiSelectValue: [] as string[],
    sliderValue: [50],
    tagsValue: [] as string[],
    dateValue: undefined as Date | undefined,
    fileValue: null as File | null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [progress] = useState(75);

  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
  ];

  const skillOptions = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Node.js', value: 'nodejs' },
  ];

  const autocompleteOptions = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const showToast = (type: 'success' | 'error' | 'warning' | 'info', title: string, description: string) => {
    toast({
      title,
      description,
      variant: type === 'error' ? 'destructive' : 'default',
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Form Elements Reference
          </h2>
          <p className="text-muted-foreground">
            Complete showcase of all available form components and UI elements
          </p>
        </div>
      </div>

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-muted/30 backdrop-blur-sm">
          <TabsTrigger value="inputs" className="transition-all duration-300">
            <User className="mr-2 h-4 w-4" />
            Input Fields
          </TabsTrigger>
          <TabsTrigger value="selection" className="transition-all duration-300">
            <Search className="mr-2 h-4 w-4" />
            Selection
          </TabsTrigger>
          <TabsTrigger value="feedback" className="transition-all duration-300">
            <Star className="mr-2 h-4 w-4" />
            Feedback
          </TabsTrigger>
          <TabsTrigger value="interactive" className="transition-all duration-300">
            <Zap className="mr-2 h-4 w-4" />
            Interactive
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inputs" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Text Inputs */}
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Text Inputs
                </CardTitle>
                <CardDescription>Various text input types and states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-input">Text Input</Label>
                  <Input
                    id="text-input"
                    placeholder="Enter text..."
                    value={formData.textInput}
                    onChange={(e) => handleInputChange('textInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="number-input">Number Input</Label>
                  <Input
                    id="number-input"
                    type="number"
                    placeholder="Enter number..."
                    value={formData.numberInput}
                    onChange={(e) => handleInputChange('numberInput', parseInt(e.target.value) || 0)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-input">Email Input</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.emailInput}
                      onChange={(e) => handleInputChange('emailInput', e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-input">Password Input</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password..."
                      value={formData.passwordInput}
                      onChange={(e) => handleInputChange('passwordInput', e.target.value)}
                      className="pl-10 pr-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="error-input">Input with Error</Label>
                  <Input
                    id="error-input"
                    placeholder="This field has an error"
                    className="border-destructive focus:border-destructive"
                  />
                  <p className="text-sm text-destructive">This field is required</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disabled-input">Disabled Input</Label>
                  <Input
                    id="disabled-input"
                    placeholder="This input is disabled"
                    disabled
                    className="opacity-60"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Textarea and File Upload */}
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5 text-primary" />
                  Text Areas & Upload
                </CardTitle>
                <CardDescription>Multi-line text and file inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea
                    id="textarea"
                    placeholder="Enter multiple lines of text..."
                    value={formData.textareaInput}
                    onChange={(e) => handleInputChange('textareaInput', e.target.value)}
                    className="min-h-[100px] transition-all duration-200 focus:scale-[1.01] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label>File Upload</Label>
                  <FileUpload
                    onFileSelect={(file) => handleInputChange('fileValue', file)}
                    accept="image/*"
                    maxSize={5 * 1024 * 1024} // 5MB
                  />
                </div>

                <div className="space-y-2">
                  <Label>Date Time Picker</Label>
                  <DateTimePicker
                    value={formData.dateValue}
                    onChange={(date) => handleInputChange('dateValue', date)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Tags Input</Label>
                  <TagsInput
                    value={formData.tagsValue}
                    onChange={(tags) => handleInputChange('tagsValue', tags)}
                    placeholder="Add tags..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Autocomplete Input</Label>
                  <AutocompleteInput
                    options={autocompleteOptions}
                    placeholder="Type to search..."
                    onSelect={(value) => console.log('Selected:', value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="selection" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Dropdowns & Select</CardTitle>
                <CardDescription>Various selection components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Native Select</Label>
                  <Select value={formData.selectValue} onValueChange={(value) => handleInputChange('selectValue', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Searchable Select</Label>
                  <SearchableSelect
                    options={countryOptions}
                    value={formData.searchableSelectValue}
                    onChange={(value) => handleInputChange('searchableSelectValue', value)}
                    placeholder="Search countries..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Multi-Select</Label>
                  <MultiSelect
                    options={skillOptions}
                    selected={formData.multiSelectValue}
                    onChange={(selected) => handleInputChange('multiSelectValue', selected)}
                    placeholder="Select skills..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Checkboxes & Radio</CardTitle>
                <CardDescription>Selection controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Standard Checkbox</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="checkbox"
                      checked={formData.checkboxValue}
                      onCheckedChange={(checked) => handleInputChange('checkboxValue', checked)}
                    />
                    <Label htmlFor="checkbox">I agree to the terms</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Switch Toggle</Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="switch"
                      checked={formData.switchValue}
                      onCheckedChange={(checked) => handleInputChange('switchValue', checked)}
                    />
                    <Label htmlFor="switch">Enable notifications</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Radio Buttons</Label>
                  <RadioGroup value={formData.radioValue} onValueChange={(value) => handleInputChange('radioValue', value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option3" id="r3" />
                      <Label htmlFor="r3">Option 3</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Progress & Sliders</CardTitle>
                <CardDescription>Progress indicators and range inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Progress Bar</Label>
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-muted-foreground">{progress}% complete</p>
                </div>

                <div className="space-y-2">
                  <Label>Range Slider</Label>
                  <Slider
                    value={formData.sliderValue}
                    onValueChange={(value) => handleInputChange('sliderValue', value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">Value: {formData.sliderValue[0]}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Badges & Tags</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Badges</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Toast Notifications</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => showToast('success', 'Success!', 'Operation completed successfully')}
                    >
                      Success Toast
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => showToast('error', 'Error!', 'Something went wrong')}
                    >
                      Error Toast
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => showToast('warning', 'Warning!', 'Please check your input')}
                    >
                      Warning Toast
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>Buttons, calendars, and other interactive components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Button Variants</Label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Calendar</Label>
                <div className="max-w-fit">
                  <Calendar
                    mode="single"
                    selected={formData.dateValue}
                    onSelect={(date) => handleInputChange('dateValue', date)}
                    className="rounded-md border bg-background"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormElements;
