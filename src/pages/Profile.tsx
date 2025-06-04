
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Camera, Save, User, Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about creating intuitive user experiences and scalable applications.',
    company: 'Tech Solutions Inc.',
    position: 'Senior Software Engineer',
    joinDate: '2024-01-15',
    avatar: '/placeholder.svg',
  });

  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsEditing(false);
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // In a real app, you'd revert changes here
  };

  const stats = [
    { label: 'Projects Completed', value: '24' },
    { label: 'Team Members', value: '8' },
    { label: 'Total Tasks', value: '156' },
    { label: 'Success Rate', value: '98%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="relative inline-block">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={profileData.avatar} alt={`${profileData.firstName} ${profileData.lastName}`} />
                <AvatarFallback className="text-2xl">
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">
                {profileData.firstName} {profileData.lastName}
              </h3>
              <p className="text-muted-foreground">{profileData.position}</p>
              <Badge variant="secondary">{profileData.company}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                {profileData.email}
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                {profileData.phone}
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                {profileData.location}
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                Joined {new Date(profileData.joinDate).toLocaleDateString()}
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and bio.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isEditing ? (
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => setProfileData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData(prev => ({ ...prev, position: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                  />
                </div>

                <div className="flex gap-4 pt-4 border-t">
                  <Button onClick={handleSave} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Save className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">About</h4>
                  <p className="text-sm leading-relaxed">{profileData.bio}</p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Full Name:</span> {profileData.firstName} {profileData.lastName}
                      </div>
                      <div>
                        <span className="font-medium">Email:</span> {profileData.email}
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span> {profileData.phone}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {profileData.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Professional Information</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Company:</span> {profileData.company}
                      </div>
                      <div>
                        <span className="font-medium">Position:</span> {profileData.position}
                      </div>
                      <div>
                        <span className="font-medium">Member Since:</span> {new Date(profileData.joinDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
