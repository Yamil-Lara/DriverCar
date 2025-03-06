
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-secondary-dark min-h-screen">
      <Card className="max-w-2xl mx-auto p-6 bg-secondary/90 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mi Perfil</h1>
            <p className="text-gray-300">usuario@ejemplo.com</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div className="flex items-center gap-3">
              <Settings className="text-primary" />
              <span className="text-white">Configuración de la cuenta</span>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Editar
            </Button>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <h2 className="text-lg font-semibold mb-4">Mis Reservaciones</h2>
            <p className="text-gray-300">No tienes reservaciones activas</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
