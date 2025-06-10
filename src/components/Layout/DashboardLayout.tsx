
import React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, Home, Users, FileText, Settings, User, LogOut, Moon, Sun, Palette, LayoutDashboard, Zap, Sparkles } from 'lucide-react';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      isActive: location.pathname === "/dashboard",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Users",
      icon: Users,
      href: "/dashboard/users",
      isActive: location.pathname === "/dashboard/users",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Forms",
      icon: FileText,
      href: "/dashboard/forms",
      isActive: location.pathname === "/dashboard/forms",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Form Elements",
      icon: Zap,
      href: "/dashboard/form-elements",
      isActive: location.pathname === "/dashboard/form-elements",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
      isActive: location.pathname === "/dashboard/profile",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      isActive: location.pathname === "/dashboard/settings",
      gradient: "from-gray-500 to-slate-500",
    },
  ];

  const handleLogout = () => {
    // In a real app, this would clear auth tokens
    navigate('/');
  };

  const colors = [
    { name: 'Blue', value: 'blue' as const, color: '221.2 83.2% 53.3%' },
    { name: 'Purple', value: 'purple' as const, color: '262.1 83.3% 57.8%' },
    { name: 'Green', value: 'green' as const, color: '142.1 76.2% 36.3%' },
    { name: 'Orange', value: 'orange' as const, color: '24.6 95% 53.1%' },
    { name: 'Red', value: 'red' as const, color: '346.8 77.2% 49.8%' },
    { name: 'Pink', value: 'pink' as const, color: '322.2 84% 60.5%' },
    { name: 'Indigo', value: 'indigo' as const, color: '231.7 48.6% 59%' },
    { name: 'Teal', value: 'teal' as const, color: '173.4 80.4% 40%' },
    { name: 'Emerald', value: 'emerald' as const, color: '160.1 84.1% 39.4%' },
    { name: 'Amber', value: 'amber' as const, color: '37.7 92.1% 50.2%' },
  ];

  const getColorHsl = (colorValue: string) => {
    const colorMap = {
      blue: '221.2 83.2% 53.3%',
      purple: '262.1 83.3% 57.8%',
      green: '142.1 76.2% 36.3%',
      orange: '24.6 95% 53.1%',
      red: '346.8 77.2% 49.8%',
      pink: '322.2 84% 60.5%',
      indigo: '231.7 48.6% 59%',
      teal: '173.4 80.4% 40%',
      emerald: '160.1 84.1% 39.4%',
      amber: '37.7 92.1% 50.2%',
    };
    return colorMap[colorValue as keyof typeof colorMap] || colorMap.blue;
  };

  const Sidebar = ({ mobile = false }) => (
    <div className={`flex flex-col h-full ${mobile ? 'p-4' : ''} bg-gradient-to-b from-card via-card/95 to-card/80 backdrop-blur-xl relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Header */}
      <div className="relative flex items-center gap-3 px-6 py-6 border-b border-border/50">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-110">
            <Sparkles className="text-white h-5 w-5 animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        <div>
          <span className="font-bold text-xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Dashboard
          </span>
          <p className="text-xs text-muted-foreground font-medium">
            Admin Panel v2.0
          </p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 relative z-10">
        {menuItems.map((item, index) => {
          const isActive = item.isActive;
          return (
            <Link
              key={item.title}
              to={item.href}
              onClick={() => mobile && setSidebarOpen(false)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden ${
                isActive 
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]' 
                  : 'hover:bg-gradient-to-r hover:from-muted hover:to-muted/50 hover:shadow-md'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated background for active state */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-90 rounded-xl`} />
              )}
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative z-10 flex items-center gap-3">
                <div className={`p-1 rounded-lg ${isActive ? 'bg-white/20' : 'group-hover:bg-primary/10'} transition-all duration-300`}>
                  <item.icon className={`h-5 w-5 transition-all duration-300 ${
                    isActive 
                      ? 'scale-110 text-white' 
                      : 'group-hover:scale-105 group-hover:text-primary'
                  }`} />
                </div>
                <span className={`font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : ''
                }`}>
                  {item.title}
                </span>
              </div>
              
              {isActive && (
                <div className="ml-auto relative z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer with user info */}
      <div className="relative z-10 p-4 border-t border-border/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 hover:scale-[1.02]">
          <Avatar className="h-8 w-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-72 border-r border-border/50 bg-card/50 backdrop-blur-xl relative overflow-hidden">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72 bg-card/95 backdrop-blur-xl">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl supports-[backdrop-filter]:bg-card/30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden hover:scale-105 transition-transform">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72 bg-card/95 backdrop-blur-xl">
                  <Sidebar mobile />
                </SheetContent>
              </Sheet>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {menuItems.find(item => item.href === location.pathname)?.title || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:scale-105 transition-all duration-300 hover:bg-primary/10">
                {theme === 'dark' ? 
                  <Sun className="h-5 w-5 text-amber-500" /> : 
                  <Moon className="h-5 w-5 text-blue-600" />
                }
              </Button>

              {/* Color Picker */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:scale-105 transition-all duration-300 hover:bg-primary/10">
                    <Palette className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-xl border-border/50">
                  <div className="p-4">
                    <p className="text-sm font-medium mb-4 text-center">Choose Theme Color</p>
                    <div className="grid grid-cols-5 gap-3 mb-4">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setPrimaryColor(color.value)}
                          className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg relative overflow-hidden ${
                            primaryColor === color.value 
                              ? 'border-foreground shadow-lg scale-110 ring-2 ring-offset-2 ring-primary' 
                              : 'border-transparent hover:border-muted-foreground'
                          }`}
                          style={{ 
                            backgroundColor: `hsl(${color.color})`,
                            boxShadow: primaryColor === color.value ? `0 0 20px hsl(${color.color} / 0.5)` : undefined
                          }}
                          title={color.name}
                        >
                          {primaryColor === color.value && (
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground text-center">Gradient Presets</p>
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-8 rounded-lg gradient-rainbow cursor-pointer hover:scale-110 transition-transform" title="Rainbow" />
                        <div className="w-8 h-8 rounded-lg gradient-sunset cursor-pointer hover:scale-110 transition-transform" title="Sunset" />
                        <div className="w-8 h-8 rounded-lg gradient-ocean cursor-pointer hover:scale-110 transition-transform" title="Ocean" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:scale-105 transition-all duration-300">
                    <Avatar className="h-8 w-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-xl border-border/50" align="end">
                  <div className="flex items-center justify-start gap-2 p-3 border-b border-border/50">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">John Doe</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard/profile')} className="hover:bg-primary/10 transition-colors">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard/settings')} className="hover:bg-primary/10 transition-colors">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="hover:bg-destructive/10 text-destructive transition-colors">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-background/50 to-background">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
