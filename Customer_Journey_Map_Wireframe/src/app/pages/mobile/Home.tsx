import { useNavigate } from "react-router";
import { Search, Bell, Heart, MapPin, Star, Home, Map, Calendar, User } from "lucide-react";

export default function MobileHome() {
  const navigate = useNavigate();

  const categories = [
    { id: "bio", label: "Bio-Läden", emoji: "🥬", color: "bg-green-100 text-green-700" },
    { id: "secondhand", label: "Second-Hand", emoji: "👕", color: "bg-purple-100 text-purple-700" },
    { id: "markets", label: "Märkte", emoji: "🛍️", color: "bg-orange-100 text-orange-700" },
    { id: "repair", label: "Reparatur", emoji: "🔧", color: "bg-blue-100 text-blue-700" },
  ];

  const places = [
    {
      id: 1,
      name: "Bio-Laden Lendplatz",
      category: "Bio-Laden",
      distance: "0.3 km",
      rating: 4.5,
      tags: ["Bio", "Regional", "Unverpackt"],
      image: "bio-shop",
    },
    {
      id: 2,
      name: "Vintage Store Graz",
      category: "Second-Hand",
      distance: "0.8 km",
      rating: 4.8,
      tags: ["Vintage", "Second-Hand"],
      image: "vintage",
    },
    {
      id: 3,
      name: "Repair Café Jakomini",
      category: "Reparatur",
      distance: "1.2 km",
      rating: 4.7,
      tags: ["Repair", "DIY", "Kostenlos"],
      image: "repair",
    },
  ];

  return (
    <div className="h-[100dvh] w-screen bg-white flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-neutral-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Hallo Lisa! 👋</h1>
            <p className="text-sm text-neutral-600">Entdecke nachhaltiges Graz</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors">
            <Bell className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Suche nach Orten, Events..."
            className="w-full pl-12 pr-4 py-3 bg-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="px-6 py-6">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">Kategorien</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`flex-shrink-0 ${cat.color} px-4 py-3 rounded-xl transition-all hover:shadow-md`}
              >
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <div className="text-xs font-medium whitespace-nowrap">{cat.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-neutral-900">In deiner Nähe</h2>
            <button
              onClick={() => navigate("/mobile/map")}
              className="text-sm text-emerald-600 font-medium hover:text-emerald-700"
            >
              Alle anzeigen
            </button>
          </div>

          <div className="space-y-4">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white border border-neutral-200 rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <span className="text-3xl">
                      {place.category === "Bio-Laden"
                        ? "🥬"
                        : place.category === "Second-Hand"
                        ? "👕"
                        : "🔧"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-neutral-900 text-sm">{place.name}</h3>
                      <button className="flex-shrink-0 ml-2">
                        <Heart className="w-5 h-5 text-neutral-400 hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                    <p className="text-xs text-neutral-600 mb-2">{place.category}</p>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{place.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{place.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {place.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 bg-white">
        <div className="flex items-center justify-around h-16 px-6">
          <button className="flex flex-col items-center gap-1 text-emerald-600">
            <Home className="w-6 h-6" />
            <div className="w-1 h-1 bg-emerald-600 rounded-full" />
          </button>
          <button
            onClick={() => navigate("/mobile/map")}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
          >
            <Map className="w-6 h-6" />
            <div className="w-1 h-1 bg-transparent rounded-full" />
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
