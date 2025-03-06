
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    title: "Toyota Corolla",
    price: 50,
    location: "Ciudad de México",
    rating: 4.9,
    description: "Sedán compacto, económico y confiable.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800&q=80",
    title: "Honda Civic",
    price: 55,
    location: "Guadalajara",
    rating: 4.7,
    description: "Elegante, eficiente y con excelente rendimiento.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800&q=80",
    title: "Nissan Sentra",
    price: 45,
    location: "Monterrey",
    rating: 4.8,
    description: "Espacioso, cómodo y con gran economía de combustible.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black/95 shadow-sm">
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-primary">AutoRent</h1>
            <div className="space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/register")}
                className="text-white hover:text-primary"
              >
                Iniciar sesión
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Registrarse
              </Button>
            </div>
          </div>
          <div className="text-center py-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Alquila el auto perfecto para tu próxima aventura
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Encuentra los mejores vehículos para alquilar en tu área con precios competitivos y sin complicaciones.
            </p>
            <Button className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6">
              Comenzar ahora
            </Button>
          </div>
          <SearchBar />
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Vehículos destacados</h2>
        <div className="mb-8">
          <FilterBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
