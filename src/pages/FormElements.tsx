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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
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
  MapPin,
  Home,
  ChevronRight,
  Bell,
  CheckCircle,
  AlertCircle,
  XCircle,
  Info,
  Settings,
  Activity,
  BarChart3,
  Users,
  Shield,
  Rocket,
  Palette,
  Layers,
  Database,
  Cloud,
  Wifi,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  FileText,
  Bookmark,
  Award,
  TrendingUp,
  Target,
  Code,
  Lightbulb,
  Coffee
} from 'lucide-react';
import { format, addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

const FormElements = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    textInput: '',
    passwordInput: '',
    emailInput: '',
    phoneInput: '',
    urlInput: '',
    searchInput: '',
    numberInput: 0,
    rangeInput: 50,
    currencyInput: 0,
    percentageInput: 0,
    dateInput: '',
    timeInput: '',
    datetimeInput: '',
    monthInput: '',
    weekInput: '',
    colorInput: '#3b82f6',
    fileInput: null as File | null,
    textareaInput: '',
    switchValue: false,
    checkboxValue: false,
    radioValue: '',
    selectValue: '',
    multiSelectValue: [] as string[],
    tagsValue: [] as string[],
    sliderValue: [50],
    searchableSelectValue: '',
    autocompleteValue: '',
    dateValue: undefined as Date | undefined,
    dateRange: undefined as DateRange | undefined,
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
    const toastConfig = {
      title,
      description,
      variant: type === 'error' ? 'destructive' as const : 'default' as const,
    };

    toast(toastConfig);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="space-y-8 animate-fade-in p-8">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                  <Home className="h-4 w-4" />
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components" className="text-slate-600 hover:text-primary transition-colors">
                  UI Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Form Elements</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Form Elements Showcase
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Complete collection of beautiful, interactive form components with modern design patterns
          </p>
        </div>

        <Tabs defaultValue="showcase" className="w-full">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-2">
            <TabsList className="grid w-full grid-cols-7 bg-transparent gap-2">
              <TabsTrigger 
                value="showcase" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Palette className="mr-2 h-4 w-4" />
                Showcase
              </TabsTrigger>
              <TabsTrigger 
                value="text-inputs"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white transition-all duration-300"
              >
                <User className="mr-2 h-4 w-4" />
                Text Inputs
              </TabsTrigger>
              <TabsTrigger 
                value="number-inputs"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Hash className="mr-2 h-4 w-4" />
                Numbers
              </TabsTrigger>
              <TabsTrigger 
                value="date-time"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Clock className="mr-2 h-4 w-4" />
                Date & Time
              </TabsTrigger>
              <TabsTrigger 
                value="selection"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Search className="mr-2 h-4 w-4" />
                Selection
              </TabsTrigger>
              <TabsTrigger 
                value="feedback"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Bell className="mr-2 h-4 w-4" />
                Feedback
              </TabsTrigger>
              <TabsTrigger 
                value="cards"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Layers className="mr-2 h-4 w-4" />
                Cards
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="showcase" className="space-y-8 mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-black/20"></div>
                <CardHeader className="relative z-10 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Advanced Analytics</CardTitle>
                  <CardDescription className="text-white/80">
                    Real-time insights and comprehensive data visualization
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-white">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Performance</span>
                      <Badge className="bg-white/20 text-white border-white/30">95%</Badge>
                    </div>
                    <Progress value={95} className="bg-white/20" />
                    <Button className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white">
                      View Details
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-white/10 dark:bg-slate-800/10 backdrop-blur-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-500/20"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Security Center
                  </CardTitle>
                  <CardDescription>
                    Advanced protection with multi-layer security
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-sm text-muted-foreground">Monitoring</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600">
                      Configure Security
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative z-10 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Revenue Growth</CardTitle>
                  <CardDescription className="text-white/80">
                    Monthly performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-white">
                  <div className="space-y-4">
                    <div className="text-4xl font-bold">$124,590</div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-300" />
                      <span className="text-green-300">+12.5% vs last month</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="font-semibold">1.2K</div>
                        <div className="text-xs text-white/70">Orders</div>
                      </div>
                      <div>
                        <div className="font-semibold">$89</div>
                        <div className="text-xs text-white/70">Avg Order</div>
                      </div>
                      <div>
                        <div className="font-semibold">94%</div>
                        <div className="text-xs text-white/70">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Interactive Accordion Cards
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="features" className="border-0">
                  <Card className="group bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl text-blue-800 dark:text-blue-200">Platform Features</CardTitle>
                          <CardDescription className="text-blue-600 dark:text-blue-300">
                            Comprehensive overview of all available features
                          </CardDescription>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                          <Database className="h-8 w-8 text-blue-500" />
                          <div>
                            <div className="font-semibold">Advanced Database</div>
                            <div className="text-sm text-muted-foreground">Real-time synchronization</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                          <Cloud className="h-8 w-8 text-green-500" />
                          <div>
                            <div className="font-semibold">Cloud Integration</div>
                            <div className="text-sm text-muted-foreground">Seamless cloud storage</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                          <Shield className="h-8 w-8 text-purple-500" />
                          <div>
                            <div className="font-semibold">Enterprise Security</div>
                            <div className="text-sm text-muted-foreground">Bank-level encryption</div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>

                <AccordionItem value="team" className="border-0">
                  <Card className="group bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 border-emerald-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl text-emerald-800 dark:text-emerald-200">Team Management</CardTitle>
                          <CardDescription className="text-emerald-600 dark:text-emerald-300">
                            Collaborate efficiently with your team members
                          </CardDescription>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 mt-4">
                        <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                              JD
                            </div>
                            <div>
                              <div className="font-semibold">John Doe</div>
                              <div className="text-sm text-muted-foreground">Project Manager</div>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                              SM
                            </div>
                            <div>
                              <div className="font-semibold">Sarah Miller</div>
                              <div className="text-sm text-muted-foreground">Lead Developer</div>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Away</Badge>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                          <Users className="mr-2 h-4 w-4" />
                          Invite Team Member
                        </Button>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>

                <AccordionItem value="analytics" className="border-0">
                  <Card className="group bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-purple-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Activity className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl text-purple-800 dark:text-purple-200">Analytics Dashboard</CardTitle>
                          <CardDescription className="text-purple-600 dark:text-purple-300">
                            Detailed insights and performance metrics
                          </CardDescription>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="space-y-4">
                          <div className="p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Page Views</span>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="text-2xl font-bold">24,578</div>
                            <Progress value={75} className="mt-2" />
                          </div>
                          <div className="p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Conversion Rate</span>
                              <Target className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="text-2xl font-bold">3.24%</div>
                            <Progress value={65} className="mt-2" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Bounce Rate</span>
                              <Activity className="h-4 w-4 text-orange-500" />
                            </div>
                            <div className="text-2xl font-bold">2.1%</div>
                            <Progress value={20} className="mt-2" />
                          </div>
                          <div className="p-4 bg-white/50 dark:bg-slate-600/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Session Duration</span>
                              <Clock className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="text-2xl font-bold">4m 32s</div>
                            <Progress value={85} className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Beautiful Badge Collection
              </h3>
              
              <Card className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Status & Category Badges
                  </CardTitle>
                  <CardDescription>
                    Various badge styles for different use cases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Status Badges</Label>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                        <Clock className="mr-1 h-3 w-3" />
                        Pending
                      </Badge>
                      <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
                        <XCircle className="mr-1 h-3 w-3" />
                        Inactive
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg">
                        <Info className="mr-1 h-3 w-3" />
                        Info
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Priority Badges</Label>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0 shadow-lg animate-pulse">
                        Critical
                      </Badge>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                        High
                      </Badge>
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white border-0 shadow-lg">
                        Medium
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                        Low
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Technology Badges</Label>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg">
                        <Code className="mr-1 h-3 w-3" />
                        React
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-lg">
                        <Database className="mr-1 h-3 w-3" />
                        Node.js
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 shadow-lg">
                        <Zap className="mr-1 h-3 w-3" />
                        TypeScript
                      </Badge>
                      <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0 shadow-lg">
                        <Lightbulb className="mr-1 h-3 w-3" />
                        GraphQL
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="text-inputs" className="space-y-6 mt-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-xl border border-blue-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
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
                      className="transition-all duration-200 focus:scale-[1.02] bg-white/50 backdrop-blur-sm"
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
                        className="pl-10 transition-all duration-200 focus:scale-[1.02] bg-white/50 backdrop-blur-sm"
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
                        className="pl-10 pr-10 transition-all duration-200 focus:scale-[1.02] bg-white/50 backdrop-blur-sm"
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
                        className="pl-10 transition-all duration-200 focus:scale-[1.02] bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-xl border border-purple-200/50 shadow-xl">
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
                      className="min-h-[100px] transition-all duration-200 focus:scale-[1.01] resize-none bg-white/50 backdrop-blur-sm"
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
                        className="w-20 h-10 p-1 rounded-md bg-white/50 backdrop-blur-sm"
                      />
                      <span className="text-sm text-muted-foreground">{formData.colorInput}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

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
                      maxSize={5 * 1024 * 1024}
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

          <TabsContent value="date-time" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Native Date & Time Inputs
                  </CardTitle>
                  <CardDescription>HTML5 date and time input types</CardDescription>
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
                    <Label>Date Range Picker</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.dateRange?.from ? (
                            formData.dateRange.to ? (
                              <>
                                {format(formData.dateRange.from, "LLL dd, y")} -{" "}
                                {format(formData.dateRange.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(formData.dateRange.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date range</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={formData.dateRange?.from}
                          selected={formData.dateRange}
                          onSelect={(range) => handleInputChange('dateRange', range)}
                          numberOfMonths={2}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Single Date Calendar</Label>
                    <div className="max-w-fit">
                      <Calendar
                        mode="single"
                        selected={formData.dateValue}
                        onSelect={(date) => handleInputChange('dateValue', date)}
                        className="rounded-md border bg-background p-3 pointer-events-auto"
                      />
                    </div>
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
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>Checkboxes, radios, and switches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Checkboxes</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="checkbox-1"
                          checked={formData.checkboxValue}
                          onCheckedChange={(checked) => handleInputChange('checkboxValue', checked)}
                        />
                        <Label htmlFor="checkbox-1">Primary checkbox</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox-2" defaultChecked />
                        <Label htmlFor="checkbox-2">Checked by default</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox-3" disabled />
                        <Label htmlFor="checkbox-3" className="text-muted-foreground">Disabled checkbox</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox-4" disabled defaultChecked />
                        <Label htmlFor="checkbox-4" className="text-muted-foreground">Disabled & checked</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Switch Toggles</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="switch-1"
                          checked={formData.switchValue}
                          onCheckedChange={(checked) => handleInputChange('switchValue', checked)}
                        />
                        <Label htmlFor="switch-1">Enable notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="switch-2" defaultChecked />
                        <Label htmlFor="switch-2">Auto-save enabled</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="switch-3" disabled />
                        <Label htmlFor="switch-3" className="text-muted-foreground">Disabled switch</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Radio Buttons</Label>
                    <RadioGroup value={formData.radioValue} onValueChange={(value) => handleInputChange('radioValue', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="r1" />
                        <Label htmlFor="r1">Small</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="r2" />
                        <Label htmlFor="r2">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="r3" />
                        <Label htmlFor="r3">Large</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extra-large" id="r4" />
                        <Label htmlFor="r4">Extra Large</Label>
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
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Notifications & Alerts
                  </CardTitle>
                  <CardDescription>Toast notifications and alert states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Toast Notifications</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                        onClick={() => showToast('success', 'Success!', 'Operation completed successfully')}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Success
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                        onClick={() => showToast('error', 'Error!', 'Something went wrong')}
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Error
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
                        onClick={() => showToast('warning', 'Warning!', 'Please check your input')}
                      >
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Warning
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                        onClick={() => showToast('info', 'Info!', 'Here is some information')}
                      >
                        <Info className="mr-2 h-4 w-4" />
                        Info
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Badge Variants</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Status Badges</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        <Clock className="mr-1 h-3 w-3" />
                        Pending
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                        <XCircle className="mr-1 h-3 w-3" />
                        Inactive
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        <Info className="mr-1 h-3 w-3" />
                        Info
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Progress Indicators</Label>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Upload Progress</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="w-full" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Download Progress</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="w-full bg-blue-100" />
                      </div>
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
                      <Button size="icon" variant="outline">
                        <Bell className="h-4 w-4" />
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

          <TabsContent value="cards" className="space-y-8 mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-white/20 dark:bg-slate-800/20 backdrop-blur-2xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Coffee className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Morning Productivity</CardTitle>
                  <CardDescription>Start your day with focused energy</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Daily Goal</span>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">8 hours</Badge>
                    </div>
                    <Progress value={65} className="bg-white/30" />
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0">
                      Start Session
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">Task Completed</CardTitle>
                        <CardDescription className="text-emerald-600 dark:text-emerald-400">
                          Great job finishing your project!
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-emerald-700 dark:text-emerald-300">
                      You've successfully completed the "Website Redesign" project. Time to celebrate! 🎉
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-orange-800 dark:text-orange-200">Sales Performance</CardTitle>
                      <CardDescription className="text-orange-600 dark:text-orange-400">
                        Monthly revenue tracking
                      </CardDescription>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-orange-800 dark:text-orange-200">$24.5K</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        +15.3%
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Target: $30K</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="bg-orange-100" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-orange-700 dark:text-orange-300">145</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">Orders</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-orange-700 dark:text-orange-300">$169</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">Avg. Value</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Device Status</CardTitle>
                      <CardDescription>Connected devices overview</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Mobile App</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Wifi className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">WiFi Network</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-600 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Headphones className="h-5 w-5 text-indigo-500" />
                        <span className="font-medium">Audio Device</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-yellow-600">Idle</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-200 dark:border-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-pink-800 dark:text-pink-200">Social Engagement</CardTitle>
                        <CardDescription className="text-pink-600 dark:text-pink-400">Weekly summary</CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">2.4K</div>
                        <div className="text-xs text-pink-600 dark:text-pink-400">Likes</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">856</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400">Comments</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">127</div>
                        <div className="text-xs text-indigo-600 dark:text-indigo-400">Shares</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Engagement Rate</span>
                        <span className="font-medium">8.5%</span>
                      </div>
                      <Progress value={85} className="bg-pink-100" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-800 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-cyan-800 dark:text-cyan-200">Cloud Storage</CardTitle>
                        <CardDescription className="text-cyan-600 dark:text-cyan-400">File management</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">
                      85% Used
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Storage Used</span>
                        <span className="font-medium">85.2 GB of 100 GB</span>
                      </div>
                      <Progress value={85} className="bg-cyan-100" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-600 rounded-lg">
                        <Camera className="h-4 w-4 text-green-500" />
                        <div>
                          <div className="text-sm font-medium">Photos</div>
                          <div className="text-xs text-muted-foreground">24.5 GB</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-600 rounded-lg">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">Documents</div>
                          <div className="text-xs text-muted-foreground">12.8 GB</div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FormElements;
