import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    title: "Tesla Model 3",
    price: 89,
    location: "Ciudad de México",
    rating: 4.9,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800&q=80",
    title: "BMW Serie 3",
    price: 75,
    location: "Guadalajara",
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800&q=80",
    title: "Mercedes GLC",
    price: 95,
    location: "Monterrey",
    rating: 4.8,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6">
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => navigate("/register")}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Registrarse
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-center mb-8 animate-fade-up">
            Encuentra tu auto ideal
          </h1>
          <SearchBar />
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Explorar por categoría</h2>
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
