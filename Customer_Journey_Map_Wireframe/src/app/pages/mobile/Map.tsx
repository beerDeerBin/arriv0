import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Navigation, Star, Clock, Phone, Home, Map, Calendar, User, X } from "lucide-react";

export default function MobileMap() {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState<number | null>(1);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters = ["Bio", "Second-Hand", "Märkte", "Reparatur", "Events"];

  const places = [
    {
      id: 1,
      name: "Bio-Laden Lendplatz",
      category: "Bio-Laden",
      address: "Lendplatz 20, 8020 Graz",
      hours: "Mo-Fr 8:00-19:00",
      phone: "+43 316 123456",
      rating: 4.5,
      position: { top: "35%", left: "45%" },
    },
    {
      id: 2,
      name: "Vintage Store",
      category: "Second-Hand",
      address: "Annenstraße 15, 8020 Graz",
      hours: "Di-Sa 10:00-18:00",
      phone: "+43 316 234567",
      rating: 4.8,
      position: { top: "55%", left: "60%" },
    },
    {
      id: 3,
      name: "Bauernmarkt",
      category: "Markt",
      address: "Kaiser-Josef-Platz, 8010 Graz",
      hours: "Mo-Sa 6:00-13:00",
      phone: "",
      rating: 4.7,
      position: { top: "45%", left: "30%" },
    },
  ];

  const selectedPlaceData = places.find((p) => p.id === selectedPlace);

  return (
    <div className="h-[100dvh] w-screen bg-white flex flex-col overflow-hidden">
      <div className="flex-1 relative bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 gap-px opacity-20">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-emerald-200" />
          ))}
        </div>

        {places.map((place) => (
          <button
            key={place.id}
            onClick={() => setSelectedPlace(place.id)}
            className="absolute transform -translate-x-1/2 -translate-y-full transition-all hover:scale-110"
            style={{ top: place.position.top, left: place.position.left }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-all ${
                selectedPlace === place.id
                  ? "bg-emerald-600 scale-125"
                  : "bg-emerald-500 hover:bg-emerald-600"
              }`}
            >
              <div className="text-white text-xl">📍</div>
            </div>
          </button>
        ))}

        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="bg-white rounded-xl shadow-lg border border-neutral-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Suche auf der Karte..."
                className="w-full pl-12 pr-4 py-3 text-sm focus:outline-none rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-4 right-4 z-20">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => {
              const isActive = activeFilters.includes(filter);
              return (
                <button
                  key={filter}
                  onClick={() =>
                    setActiveFilters((prev) =>
                      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
                    )
                  }
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <button className="absolute bottom-32 right-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Navigation className="w-5 h-5 text-emerald-600" />
        </button>

        {selectedPlaceData && (
          <div className="absolute bottom-4 left-4 right-4 z-30 bg-white rounded-2xl shadow-2xl border border-neutral-200">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">
                    {selectedPlaceData.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">{selectedPlaceData.category}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedPlaceData.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-600" />
                </button>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-start gap-2 text-neutral-700">
                  <span className="text-emerald-600">📍</span>
                  <span>{selectedPlaceData.address}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{selectedPlaceData.hours}</span>
                </div>
                {selectedPlaceData.phone && (
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{selectedPlaceData.phone}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                  Route starten
                </button>
                <button className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-100 transition-colors">
                  ♥
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200 bg-white">
        <div className="flex items-center justify-around h-16 px-6">
          <button
            onClick={() => navigate("/mobile/home")}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
          >
            <Home className="w-6 h-6" />
            <div className="w-1 h-1 bg-transparent rounded-full" />
          </button>
          <button className="flex flex-col items-center gap-1 text-emerald-600">
            <Map className="w-6 h-6" />
            <div className="w-1 h-1 bg-emerald-600 rounded-full" />
          </button>
          <button
            onClick={() => navigate("/mobile/events")}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
          >
            <Calendar className="w-6 h-6" />
            <div className="w-1 h-1 bg-transparent rounded-full" />
          </button>
          <button
            onClick={() => navigate("/mobile/profile")}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
          >
            <User className="w-6 h-6" />
            <div className="w-1 h-1 bg-transparent rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
