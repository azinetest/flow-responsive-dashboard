
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, MoreVertical, UserPlus, Filter } from 'lucide-react';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Moderator', status: 'Inactive', avatar: '/placeholder.svg', joinDate: '2024-03-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active', avatar: '/placeholder.svg', joinDate: '2024-04-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Pending', avatar: '/placeholder.svg', joinDate: '2024-05-12' },
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const aValue = a[sortField as keyof typeof a];
    const bValue = b[sortField as keyof typeof b];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage your team members and their permissions.
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            A list of all users in your organization including their role and status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => handleSort('name')} className="cursor-pointer hover:bg-muted/50">
                    User {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => handleSort('role')} className="cursor-pointer hover:bg-muted/50">
                    Role {sortField === 'role' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => handleSort('status')} className="cursor-pointer hover:bg-muted/50">
                    Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => handleSort('joinDate')} className="cursor-pointer hover:bg-muted/50">
                    Join Date {sortField === 'joinDate' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRoleColor(user.role) as any}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(user.status) as any}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit user</DropdownMenuItem>
                          <DropdownMenuItem>Reset password</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {sortedUsers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No users found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
