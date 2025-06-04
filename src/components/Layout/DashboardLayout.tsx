
import React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, Home, Users, FileText, Settings, User, LogOut, Moon, Sun, Palette } from 'lucide-react';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Forms', href: '/dashboard/forms', icon: FileText },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // In a real app, this would clear auth tokens
    navigate('/');
  };

  const colors = [
    { name: 'Blue', value: 'blue' },
    { name: 'Purple', value: 'purple' },
    { name: 'Green', value: 'green' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
  ];

  const Sidebar = ({ mobile = false }) => (
    <div className={`flex flex-col h-full ${mobile ? 'p-4' : ''}`}>
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">D</span>
        </div>
        <span className="font-semibold text-lg">Dashboard</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => mobile && setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 border-r bg-card">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <Sidebar mobile />
                </SheetContent>
              </Sheet>
              <h1 className="text-xl font-semibold">
                {navigationItems.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Color Picker */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Palette className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="p-2">
                    <p className="text-sm font-medium mb-2">Choose color</p>
                    <div className="grid grid-cols-5 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setPrimaryColor(color.value)}
                          className={`w-6 h-6 rounded-full border-2 ${
                            primaryColor === color.value ? 'border-primary' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: `hsl(var(--${color.value}))` }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">John Doe</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard/settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
