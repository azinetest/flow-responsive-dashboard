import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { MoreVertical, UserPlus, Filter, ArrowUpDown, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
  joinDate: string;
}

const Users = () => {
  const navigate = useNavigate();
  
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Moderator', status: 'Inactive', avatar: '/placeholder.svg', joinDate: '2024-03-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-04-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Pending', avatar: '/placeholder.svg', joinDate: '2024-05-12' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'Admin', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-01-22' },
    { id: 7, name: 'Chris Wilson', email: 'chris@example.com', role: 'User', status: 'Inactive', avatar: '/placeholder.svg', joinDate: '2024-03-15' },
    { id: 8, name: 'Lisa Garcia', email: 'lisa@example.com', role: 'Moderator', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-02-28' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Inactive': return 'secondary';
      case 'Pending': return 'destructive';
      default: return 'secondary';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'destructive';
      case 'Moderator': return 'default';
      case 'User': return 'secondary';
      default: return 'secondary';
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-primary/10 transition-colors"
          >
            User
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8 ring-2 ring-primary/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "role",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-primary/10 transition-colors"
          >
            Role
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const role = row.getValue("role") as string;
        return (
          <Badge variant={getRoleColor(role) as any} className="hover:scale-105 transition-transform">
            {role}
          </Badge>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-primary/10 transition-colors"
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge variant={getStatusColor(status) as any} className="hover:scale-105 transition-transform">
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "joinDate",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-primary/10 transition-colors"
          >
            Join Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("joinDate"));
        return <div className="font-medium">{date.toLocaleDateString()}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 hover:scale-105 transition-all duration-200">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-xl border-border/50">
              <DropdownMenuItem 
                className="hover:bg-primary/10 transition-colors"
                onClick={() => navigate(`/dashboard/users/${user.id}`)}
              >
                <Eye className="mr-2 h-4 w-4" />
                View profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 transition-colors">
                Edit user
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 transition-colors">
                Reset password
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 hover:bg-destructive/10 transition-colors">
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Users Management
          </h2>
          <p className="text-muted-foreground">
            Manage your team members and their permissions with enhanced data tables.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border/50 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Enhanced User Table
          </CardTitle>
          <CardDescription>
            Advanced data table with sorting, filtering, pagination and column visibility controls.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <DataTable 
            columns={columns} 
            data={users} 
            searchKey="name"
            searchPlaceholder="Search users by name..."
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
