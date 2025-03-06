
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Buscar por marca, modelo o ubicación..."
        className="pl-10 pr-4 h-12 rounded-full border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};
