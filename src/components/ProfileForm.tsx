
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface ProfileFormProps {
  profile: {
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
  };
  onUpdate: () => void;
}

export const ProfileForm = ({ profile, onUpdate }: ProfileFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: profile.first_name || "",
    last_name: profile.last_name || "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = supabase.auth.getUser();
      if (!user) throw new Error("No hay usuario autenticado");

      let avatarUrl = profile.avatar_url;

      // Si hay un nuevo archivo de avatar, súbelo
      if (avatarFile) {
        const fileExt = avatarFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${(await user).data.user?.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('profile_photos')
          .upload(filePath, avatarFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('profile_photos')
          .getPublicUrl(filePath);

        avatarUrl = publicUrl;
      }

      // Actualizar el perfil
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: formData.first_name,
          last_name: formData.last_name,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('id', (await user).data.user?.id);

      if (error) throw error;

      toast({
        title: "Perfil actualizado",
        description: "Los cambios han sido guardados exitosamente.",
      });

      onUpdate();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo actualizar el perfil. Por favor intenta de nuevo.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage 
            src={avatarFile ? URL.createObjectURL(avatarFile) : profile.avatar_url || undefined} 
            alt="Avatar" 
          />
          <AvatarFallback>
            <User className="w-12 h-12" />
          </AvatarFallback>
        </Avatar>
        <Input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="max-w-xs"
        />
      </div>
      
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Nombre"
            value={formData.first_name}
            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
          />
        </div>
        <div>
          <Input
            placeholder="Apellido"
            value={formData.last_name}
            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
          />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Guardando..." : "Guardar cambios"}
      </Button>
    </form>
  );
};
