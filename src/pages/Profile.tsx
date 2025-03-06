
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ProfileForm } from "@/components/ProfileForm";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 bg-secondary-dark min-h-screen">
        <Card className="max-w-2xl mx-auto p-6 bg-secondary/90 text-white">
          <p className="text-center">Cargando...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-secondary-dark min-h-screen">
      <Card className="max-w-2xl mx-auto p-6 bg-secondary/90 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mi Perfil</h1>
              <p className="text-gray-300">{profile?.email}</p>
            </div>
          </div>
          <Button onClick={handleSignOut} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Cerrar sesión
          </Button>
        </div>
        
        {isEditing ? (
          <ProfileForm 
            profile={profile} 
            onUpdate={() => {
              getProfile();
              setIsEditing(false);
            }} 
          />
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <Settings className="text-primary" />
                <span className="text-white">Configuración de la cuenta</span>
              </div>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </Button>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <h2 className="text-lg font-semibold mb-4">Información Personal</h2>
              <div className="space-y-2 text-gray-300">
                <p>Nombre: {profile?.first_name || 'No especificado'}</p>
                <p>Apellido: {profile?.last_name || 'No especificado'}</p>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Profile;
