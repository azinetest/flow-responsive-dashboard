
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ViewScreen from '@/components/common/ViewScreen';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const UserView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock user data - in real app, this would come from API
  const user = {
    id: id || '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Admin',
    status: 'Active',
    avatar: '/placeholder.svg',
    joinDate: '2024-01-15',
    department: 'Engineering',
    location: 'San Francisco, CA',
    lastLogin: '2024-06-06T10:30:00Z',
    projects: 12,
    completedTasks: 145
  };

  const fields = [
    {
      label: 'Email',
      value: (
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <span>{user.email}</span>
        </div>
      ),
      type: 'custom' as const
    },
    {
      label: 'Phone',
      value: (
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <span>{user.phone}</span>
        </div>
      ),
      type: 'custom' as const
    },
    {
      label: 'Location',
      value: (
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{user.location}</span>
        </div>
      ),
      type: 'custom' as const
    },
    {
      label: 'Role',
      value: user.role,
      type: 'badge' as const,
      variant: 'destructive' as const
    },
    {
      label: 'Status',
      value: user.status,
      type: 'badge' as const,
      variant: 'default' as const
    },
    {
      label: 'Department',
      value: user.department,
      type: 'text' as const
    },
    {
      label: 'Join Date',
      value: user.joinDate,
      type: 'date' as const
    },
    {
      label: 'Last Login',
      value: user.lastLogin,
      type: 'date' as const
    },
    {
      label: 'Active Projects',
      value: user.projects,
      type: 'text' as const
    },
    {
      label: 'Completed Tasks',
      value: user.completedTasks,
      type: 'text' as const
    }
  ];

  const handleEdit = () => {
    console.log('Edit user:', user.id);
    // Navigate to edit page
  };

  const handleDelete = () => {
    console.log('Delete user:', user.id);
    // Show confirmation dialog
  };

  const customActions = (
    <>
      <Button
        variant="outline"
        className="hover:scale-105 transition-all duration-300"
        onClick={() => console.log('Send message')}
      >
        <Mail className="mr-2 h-4 w-4" />
        Send Message
      </Button>
      <Button
        className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={handleEdit}
      >
        Edit Profile
      </Button>
    </>
  );

  return (
    <ViewScreen
      title={user.name}
      subtitle={`${user.role} in ${user.department}`}
      avatar={{
        src: user.avatar,
        fallback: user.name.split(' ').map(n => n[0]).join('')
      }}
      fields={fields}
      onBack={() => navigate('/dashboard/users')}
      onEdit={handleEdit}
      onDelete={handleDelete}
      customActions={customActions}
    />
  );
};

export default UserView;
