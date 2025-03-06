
import { Button } from "@/components/ui/button";
import { CarFront } from "lucide-react";

const filters = [
  "Todos",
  "SUV",
  "Sedán",
  "Deportivo",
  "Pickup",
  "Económico",
];

export const FilterBar = () => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="outline"
          className="flex items-center gap-2 whitespace-nowrap hover:bg-primary hover:text-white transition-colors"
        >
          <CarFront className="h-4 w-4" />
          {filter}
        </Button>
      ))}
    </div>
  );
};
