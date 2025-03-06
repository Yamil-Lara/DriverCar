
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

interface CarCardProps {
  image: string;
  title: string;
  price: number;
  location: string;
  rating: number;
  description: string;
}

export const CarCard = ({ image, title, price, location, rating, description }: CarCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-up bg-secondary/90 text-white">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-primary mr-1" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        <div className="flex items-center text-sm text-gray-300 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-gray-300 text-sm">/día</span>
          </div>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Ver detalles
          </Button>
        </div>
      </div>
    </Card>
  );
};
