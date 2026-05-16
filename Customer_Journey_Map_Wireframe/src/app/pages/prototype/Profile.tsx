import { useNavigate } from "react-router";
import { Settings, Heart, LogOut, ChevronRight, Bell, Globe, Shield, HelpCircle, Home, Map, Calendar, User } from "lucide-react";

export default function PrototypeProfile() {
  const navigate = useNavigate();

  const interests = [
    { id: "restaurants", label: "Restaurants", emoji: "🍽️" },
    { id: "markets", label: "Märkte", emoji: "🛍️" },
    { id: "secondhand", label: "Second-Hand", emoji: "👕" },
    { id: "bike", label: "Fahrrad", emoji: "🚲" },
    { id: "repair", label: "Repair-Cafés", emoji: "🔧" },
    { id: "events", label: "Events", emoji: "🎉" },
  ];

  const favorites = [
    {
      id: 1,
      name: "Bio-Laden Lendplatz",
      category: "Bio-Laden",
      emoji: "🥬",
    },
    {
      id: 2,
      name: "Vintage Store Graz",
      category: "Second-Hand",
      emoji: "👕",
    },
    {
      id: 3,
      name: "Repair Café Jakomini",
      category: "Reparatur",
      emoji: "🔧",
    },
  ];

  const settingsItems = [
    { icon: Bell, label: "Benachrichtigungen", value: "An" },
    { icon: Globe, label: "Sprache", value: "Deutsch" },
    { icon: Shield, label: "Datenschutz", value: "" },
    { icon: HelpCircle, label: "Hilfe & Support", value: "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <button
            onClick={() => navigate("/dummy")}
            className="text-sm text-neutral-600 hover:text-neutral-900 mb-4 flex items-center gap-1"
          >
            ← Zurück zur Übersicht
          </button>

          <div className="bg-neutral-800 rounded-[3rem] p-4 shadow-2xl">
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              <div className="h-[700px] flex flex-col">
                {/* Status Bar */}
                <div className="px-8 pt-4 pb-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-neutral-900 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-6 pt-4 pb-4 border-b border-neutral-100">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-neutral-900">Profil</h1>
                    <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                      <Settings className="w-5 h-5 text-neutral-700" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto pb-24">
                  {/* Profile Info */}
                  <div className="px-6 py-6 text-center border-b border-neutral-100">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl text-white font-bold">L</span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-1">Lisa Müller</h2>
                    <p className="text-sm text-neutral-600">Seit März 2026 in Graz</p>
                  </div>

                  {/* Interests */}
                  <div className="px-6 py-6 border-b border-neutral-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-neutral-900">Meine Interessen</h3>
                      <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                        Bearbeiten
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {interests.map((interest) => (
                        <div
                          key={interest.id}
                          className="p-3 border-2 border-emerald-600 bg-emerald-50 rounded-xl text-center"
                        >
                          <div className="text-2xl mb-1">{interest.emoji}</div>
                          <div className="text-xs font-medium text-emerald-900">{interest.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Favorites */}
                  <div className="px-6 py-6 border-b border-neutral-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Favoriten
                      </h3>
                      <span className="text-sm text-neutral-600">{favorites.length}</span>
                    </div>
                    <div className="space-y-3">
                      {favorites.map((fav) => (
                        <div
                          key={fav.id}
                          className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">{fav.emoji}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-neutral-900 text-sm mb-0.5">{fav.name}</h4>
                            <p className="text-xs text-neutral-600">{fav.category}</p>
                          </div>
                          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Settings */}
                  <div className="px-6 py-6">
                    <h3 className="font-bold text-neutral-900 mb-4">Einstellungen</h3>
                    <div className="space-y-2">
                      {settingsItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={index}
                            className="w-full flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                          >
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-neutral-600" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-medium text-neutral-900 text-sm">{item.label}</div>
                              {item.value && <div className="text-xs text-neutral-500">{item.value}</div>}
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-400" />
                          </button>
                        );
                      })}
                    </div>

                    {/* Logout */}
                    <button className="w-full mt-6 flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-semibold">
                      <LogOut className="w-5 h-5" />
                      Abmelden
                    </button>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-neutral-200 bg-white">
                  <div className="flex items-center justify-around h-16 px-6">
                    <button
                      onClick={() => navigate("/dummy/home")}
                      className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
                    >
                      <Home className="w-6 h-6" />
                      <div className="w-1 h-1 bg-transparent rounded-full" />
                    </button>
                    <button
                      onClick={() => navigate("/dummy/map")}
                      className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
                    >
                      <Map className="w-6 h-6" />
                      <div className="w-1 h-1 bg-transparent rounded-full" />
                    </button>
                    <button
                      onClick={() => navigate("/dummy/events")}
                      className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
                    >
                      <Calendar className="w-6 h-6" />
                      <div className="w-1 h-1 bg-transparent rounded-full" />
                    </button>
                    <button className="flex flex-col items-center gap-1 text-emerald-600">
                      <User className="w-6 h-6" />
                      <div className="w-1 h-1 bg-emerald-600 rounded-full" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
