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
  Phone,
  Globe,
  CreditCard,
  DollarSign,
  Percent,
  Hash,
  Upload as UploadIcon,
  Star,
  Heart,
  Zap,
  Clock,
  MapPin
} from 'lucide-react';
import { format } from 'date-fns';

const FormElements = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Text inputs
    textInput: '',
    passwordInput: '',
    emailInput: '',
    phoneInput: '',
    urlInput: '',
    searchInput: '',
    
    // Number inputs
    numberInput: 0,
    rangeInput: 50,
    currencyInput: 0,
    percentageInput: 0,
    
    // Date/Time inputs
    dateInput: '',
    timeInput: '',
    datetimeInput: '',
    monthInput: '',
    weekInput: '',
    
    // Other inputs
    colorInput: '#3b82f6',
    fileInput: null as File | null,
    textareaInput: '',
    
    // Form controls
    switchValue: false,
    checkboxValue: false,
    radioValue: '',
    selectValue: '',
    multiSelectValue: [] as string[],
    tagsValue: [] as string[],
    sliderValue: [50],
    
    // Advanced inputs
    searchableSelectValue: '',
    autocompleteValue: '',
    dateValue: undefined as Date | undefined,
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
    { label: 'Japan', value: 'jp' },
    { label: 'Brazil', value: 'br' },
  ];

  const skillOptions = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Node.js', value: 'nodejs' },
    { label: 'Python', value: 'python' },
    { label: 'PHP', value: 'php' },
  ];

  const autocompleteOptions = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'
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
            Complete showcase of all available form input types and UI components
          </p>
        </div>
      </div>

      <Tabs defaultValue="text-inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-muted/30 backdrop-blur-sm">
          <TabsTrigger value="text-inputs" className="transition-all duration-300">
            <User className="mr-2 h-4 w-4" />
            Text Inputs
          </TabsTrigger>
          <TabsTrigger value="number-inputs" className="transition-all duration-300">
            <Hash className="mr-2 h-4 w-4" />
            Number Inputs
          </TabsTrigger>
          <TabsTrigger value="date-time" className="transition-all duration-300">
            <Clock className="mr-2 h-4 w-4" />
            Date & Time
          </TabsTrigger>
          <TabsTrigger value="selection" className="transition-all duration-300">
            <Search className="mr-2 h-4 w-4" />
            Selection
          </TabsTrigger>
          <TabsTrigger value="advanced" className="transition-all duration-300">
            <Zap className="mr-2 h-4 w-4" />
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Text Inputs Tab */}
        <TabsContent value="text-inputs" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Basic Text Inputs
                </CardTitle>
                <CardDescription>Standard text input variations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-input">Text Input</Label>
                  <Input
                    id="text-input"
                    type="text"
                    placeholder="Enter text..."
                    value={formData.textInput}
                    onChange={(e) => handleInputChange('textInput', e.target.value)}
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
                  <Label htmlFor="phone-input">Phone Input</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone-input"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phoneInput}
                      onChange={(e) => handleInputChange('phoneInput', e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url-input">URL Input</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="url-input"
                      type="url"
                      placeholder="https://example.com"
                      value={formData.urlInput}
                      onChange={(e) => handleInputChange('urlInput', e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="search-input">Search Input</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search-input"
                      type="search"
                      placeholder="Search..."
                      value={formData.searchInput}
                      onChange={(e) => handleInputChange('searchInput', e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Text Areas & Special States</CardTitle>
                <CardDescription>Multi-line text and input states</CardDescription>
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

                <div className="space-y-2">
                  <Label htmlFor="readonly-input">Read-only Input</Label>
                  <Input
                    id="readonly-input"
                    value="This is read-only"
                    readOnly
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color-input">Color Input</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="color-input"
                      type="color"
                      value={formData.colorInput}
                      onChange={(e) => handleInputChange('colorInput', e.target.value)}
                      className="w-20 h-10 p-1 rounded-md"
                    />
                    <span className="text-sm text-muted-foreground">{formData.colorInput}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Number Inputs Tab */}
        <TabsContent value="number-inputs" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-primary" />
                  Number Inputs
                </CardTitle>
                <CardDescription>Numeric input variations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Label htmlFor="currency-input">Currency Input</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="currency-input"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.currencyInput}
                      onChange={(e) => handleInputChange('currencyInput', parseFloat(e.target.value) || 0)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="percentage-input">Percentage Input</Label>
                  <div className="relative">
                    <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="percentage-input"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0"
                      value={formData.percentageInput}
                      onChange={(e) => handleInputChange('percentageInput', parseFloat(e.target.value) || 0)}
                      className="pr-10 transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
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

                <div className="space-y-2">
                  <Label>Progress Bar</Label>
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-muted-foreground">{progress}% complete</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>File & Upload Inputs</CardTitle>
                <CardDescription>File handling components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>File Upload</Label>
                  <FileUpload
                    onFileSelect={(file) => handleInputChange('fileInput', file)}
                    accept="image/*"
                    maxSize={5 * 1024 * 1024} // 5MB
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-input">Native File Input</Label>
                  <Input
                    id="file-input"
                    type="file"
                    onChange={(e) => handleInputChange('fileInput', e.target.files?.[0] || null)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="multiple-files">Multiple Files</Label>
                  <Input
                    id="multiple-files"
                    type="file"
                    multiple
                    className="transition-all duration-200 focus:scale-[1.02]"
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Date & Time Tab */}
        <TabsContent value="date-time" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Date & Time Inputs
                </CardTitle>
                <CardDescription>Various date and time input types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date-input">Date Input</Label>
                  <Input
                    id="date-input"
                    type="date"
                    value={formData.dateInput}
                    onChange={(e) => handleInputChange('dateInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-input">Time Input</Label>
                  <Input
                    id="time-input"
                    type="time"
                    value={formData.timeInput}
                    onChange={(e) => handleInputChange('timeInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="datetime-input">DateTime Input</Label>
                  <Input
                    id="datetime-input"
                    type="datetime-local"
                    value={formData.datetimeInput}
                    onChange={(e) => handleInputChange('datetimeInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="month-input">Month Input</Label>
                  <Input
                    id="month-input"
                    type="month"
                    value={formData.monthInput}
                    onChange={(e) => handleInputChange('monthInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="week-input">Week Input</Label>
                  <Input
                    id="week-input"
                    type="week"
                    value={formData.weekInput}
                    onChange={(e) => handleInputChange('weekInput', e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Advanced Date Components</CardTitle>
                <CardDescription>Custom date and time pickers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Date Time Picker</Label>
                  <DateTimePicker
                    value={formData.dateValue}
                    onChange={(date) => handleInputChange('dateValue', date)}
                  />
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
          </div>
        </TabsContent>

        {/* Selection Tab */}
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
                      <SelectItem value="option4">Option 4</SelectItem>
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

                <div className="space-y-2">
                  <Label>Autocomplete Input</Label>
                  <AutocompleteInput
                    options={autocompleteOptions}
                    placeholder="Type to search..."
                    onSelect={(value) => handleInputChange('autocompleteValue', value)}
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
                  <Label>Multiple Checkboxes</Label>
                  <div className="space-y-2">
                    {['Option A', 'Option B', 'Option C'].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`checkbox-${index}`} />
                        <Label htmlFor={`checkbox-${index}`}>{option}</Label>
                      </div>
                    ))}
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

        {/* Advanced Tab */}
        <TabsContent value="advanced" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Badges & Feedback
                </CardTitle>
                <CardDescription>Status indicators and user feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Badges</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Error</Badge>
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => showToast('info', 'Info!', 'Here is some information')}
                    >
                      Info Toast
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>Buttons and interactive components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Label>Button Sizes</Label>
                  <div className="flex items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Icon Buttons</Label>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Loading States</Label>
                  <div className="flex gap-2">
                    <Button disabled>
                      Loading...
                    </Button>
                    <Button disabled>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Processing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormElements;
