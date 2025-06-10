
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import TokenInvalid from "@/pages/auth/TokenInvalid";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import UserView from "@/pages/UserView";
import Forms from "@/pages/Forms";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import FormElements from "@/pages/FormElements";
import TabsDemo from "@/pages/TabsDemo";
import Forbidden from "@/pages/errors/Forbidden";
import ServerError from "@/pages/errors/ServerError";
import PermissionDenied from "@/pages/errors/PermissionDenied";
import Maintenance from "@/pages/errors/Maintenance";
import Unauthorized from "@/pages/errors/Unauthorized";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/token-invalid" element={<TokenInvalid />} />
            
            {/* Error Routes */}
            <Route path="/403" element={<Forbidden />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="/401" element={<Unauthorized />} />
            <Route path="/permission-denied" element={<PermissionDenied />} />
            <Route path="/maintenance" element={<Maintenance />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserView />} />
              <Route path="forms" element={<Forms />} />
              <Route path="form-elements" element={<FormElements />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
