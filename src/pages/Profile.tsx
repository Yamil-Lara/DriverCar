
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mi Perfil</h1>
            <p className="text-secondary">usuario@ejemplo.com</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Settings className="text-primary" />
              <span>Configuración de la cuenta</span>
            </div>
            <Button variant="outline">Editar</Button>
          </div>
          
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-4">Mis Reservaciones</h2>
            <p className="text-muted-foreground">No tienes reservaciones activas</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
