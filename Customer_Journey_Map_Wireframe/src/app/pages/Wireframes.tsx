import { useState } from "react";
import { Home, Map, Calendar, User, Search, Menu, X, Heart, Bell } from "lucide-react";

export default function Wireframes() {
  const [selectedScreen, setSelectedScreen] = useState("onboarding");

  const screens = [
    { id: "onboarding", name: "Onboarding", description: "Interessenauswahl beim ersten Start" },
    { id: "home", name: "Home", description: "Hauptbildschirm mit personalisierten Empfehlungen" },
    { id: "map", name: "Karte", description: "Interaktive Karte mit nachhaltigen Orten" },
    { id: "events", name: "Events", description: "Community Events und Workshops" },
    { id: "profile", name: "Profil", description: "Persönliche Einstellungen und Favoriten" },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">Wireframes</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Low-Fidelity Wireframes ohne Design – Fokus auf Struktur und Informationsarchitektur
          </p>
        </div>

        {/* Screen Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setSelectedScreen(screen.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedScreen === screen.id
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {screen.name}
              </button>
            ))}
          </div>
          <p className="text-sm text-neutral-600 mt-3">
            {screens.find((s) => s.id === selectedScreen)?.description}
          </p>
        </div>

        {/* Wireframe Display */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-[375px] bg-neutral-800 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[700px]">
                {selectedScreen === "onboarding" && <OnboardingWireframe />}
                {selectedScreen === "home" && <HomeWireframe />}
                {selectedScreen === "map" && <MapWireframe />}
                {selectedScreen === "events" && <EventsWireframe />}
                {selectedScreen === "profile" && <ProfileWireframe />}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">Wireframe-Legende</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 border-2 border-neutral-400 rounded flex-shrink-0" />
              <div>
                <div className="font-medium text-neutral-900">Rechteck</div>
                <div className="text-neutral-600">Container/Card</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-neutral-300 rounded flex-shrink-0" />
              <div>
                <div className="font-medium text-neutral-900">Grau gefüllt</div>
                <div className="text-neutral-600">Bild/Grafik</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-neutral-900 rounded flex-shrink-0" />
              <div>
                <div className="font-medium text-neutral-900">Schwarz</div>
                <div className="text-neutral-600">Button/CTA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnboardingWireframe() {
  return (
    <div className="h-full flex flex-col p-6 bg-white">
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8">
        <div className="h-1 flex-1 bg-neutral-900 rounded" />
        <div className="h-1 flex-1 bg-neutral-300 rounded" />
        <div className="h-1 flex-1 bg-neutral-300 rounded" />
      </div>

      {/* Logo placeholder */}
      <div className="w-20 h-20 bg-neutral-300 rounded-2xl mx-auto mb-6" />

      {/* Title */}
      <div className="text-center mb-8">
        <div className="h-8 bg-neutral-900 rounded w-3/4 mx-auto mb-3" />
        <div className="h-4 bg-neutral-400 rounded w-full mx-auto mb-2" />
        <div className="h-4 bg-neutral-400 rounded w-2/3 mx-auto" />
      </div>

      {/* Interest Tags */}
      <div className="flex-1">
        <div className="h-6 bg-neutral-700 rounded w-1/2 mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`h-12 rounded-lg border-2 ${
                i <= 3 ? "border-neutral-900 bg-neutral-100" : "border-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="h-14 bg-neutral-900 rounded-xl mt-6" />
    </div>
  );
}

function HomeWireframe() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <div className="h-8 bg-neutral-900 rounded w-1/2" />
          <div className="flex gap-2">
            <div className="w-8 h-8 border border-neutral-400 rounded" />
            <div className="w-8 h-8 border border-neutral-400 rounded" />
          </div>
        </div>
        {/* Search bar */}
        <div className="h-12 border-2 border-neutral-300 rounded-xl flex items-center px-4">
          <Search className="w-5 h-5 text-neutral-400" />
          <div className="ml-3 h-4 bg-neutral-300 rounded w-1/3" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Categories */}
        <div className="h-6 bg-neutral-700 rounded w-1/3 mb-4" />
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0">
              <div className="w-16 h-16 bg-neutral-300 rounded-xl mb-2" />
              <div className="h-3 bg-neutral-400 rounded w-16" />
            </div>
          ))}
        </div>

        {/* Recommended places */}
        <div className="h-6 bg-neutral-700 rounded w-1/2 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-neutral-300 rounded-xl p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-neutral-300 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-5 bg-neutral-900 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-neutral-400 rounded w-full mb-2" />
                  <div className="flex gap-2">
                    <div className="h-5 bg-neutral-200 rounded-full px-2 w-16" />
                    <div className="h-5 bg-neutral-200 rounded-full px-2 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="home" />
    </div>
  );
}

function MapWireframe() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Map Area */}
      <div className="flex-1 bg-neutral-200 relative">
        <div className="absolute inset-0 grid grid-cols-6 gap-px">
          {Array.from({ length: 42 }).map((_, i) => (
            <div key={i} className="bg-neutral-300" />
          ))}
        </div>
        {/* Map pins */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-neutral-900 rounded-full border-4 border-white" />
        <div className="absolute top-1/2 left-2/3 w-8 h-8 bg-neutral-900 rounded-full border-4 border-white" />
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-neutral-900 rounded-full border-4 border-white" />

        {/* Search bar overlay */}
        <div className="absolute top-4 left-4 right-4">
          <div className="h-12 bg-white border border-neutral-300 rounded-xl shadow-lg flex items-center px-4">
            <Search className="w-5 h-5 text-neutral-400" />
            <div className="ml-3 h-4 bg-neutral-300 rounded w-1/2" />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="absolute top-20 left-4 flex gap-2">
          <div className="h-8 bg-white border border-neutral-300 rounded-full px-4 shadow" />
          <div className="h-8 bg-white border border-neutral-300 rounded-full px-4 shadow" />
          <div className="h-8 bg-white border border-neutral-300 rounded-full px-4 shadow" />
        </div>

        {/* Location details card */}
        <div className="absolute bottom-20 left-4 right-4 bg-white rounded-2xl border border-neutral-300 shadow-2xl p-4">
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-neutral-300 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="h-6 bg-neutral-900 rounded w-3/4 mb-2" />
              <div className="h-3 bg-neutral-400 rounded w-full mb-2" />
              <div className="h-3 bg-neutral-400 rounded w-2/3 mb-3" />
              <div className="h-9 bg-neutral-900 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="map" />
    </div>
  );
}

function EventsWireframe() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200">
        <div className="h-8 bg-neutral-900 rounded w-1/2 mb-4" />
        {/* Date filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-16 h-20 rounded-xl border-2 ${
                i === 3 ? "border-neutral-900 bg-neutral-100" : "border-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-neutral-300 rounded-2xl overflow-hidden">
              {/* Event image */}
              <div className="h-40 bg-neutral-300" />
              {/* Event details */}
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <div className="h-6 bg-neutral-200 rounded-full w-20" />
                  <div className="h-6 bg-neutral-200 rounded-full w-24" />
                </div>
                <div className="h-6 bg-neutral-900 rounded w-3/4 mb-2" />
                <div className="h-4 bg-neutral-400 rounded w-full mb-1" />
                <div className="h-4 bg-neutral-400 rounded w-2/3 mb-3" />
                <div className="flex gap-3">
                  <div className="flex-1 h-10 bg-neutral-100 border border-neutral-300 rounded-lg" />
                  <div className="flex-1 h-10 bg-neutral-900 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="events" />
    </div>
  );
}

function ProfileWireframe() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-neutral-900 rounded w-1/3" />
          <div className="w-8 h-8 border border-neutral-400 rounded" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Profile info */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-neutral-300 rounded-full mx-auto mb-4" />
          <div className="h-6 bg-neutral-900 rounded w-1/2 mx-auto mb-2" />
          <div className="h-4 bg-neutral-400 rounded w-1/3 mx-auto" />
        </div>

        {/* Interests section */}
        <div className="mb-8">
          <div className="h-6 bg-neutral-700 rounded w-1/2 mb-4" />
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 border-2 border-neutral-900 rounded-lg bg-neutral-100" />
            ))}
          </div>
        </div>

        {/* Favorites */}
        <div className="mb-8">
          <div className="h-6 bg-neutral-700 rounded w-1/3 mb-4" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 border border-neutral-300 rounded-xl p-3">
                <div className="w-16 h-16 bg-neutral-300 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-4 bg-neutral-900 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-neutral-400 rounded w-full" />
                </div>
                <Heart className="w-5 h-5 text-neutral-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div>
          <div className="h-6 bg-neutral-700 rounded w-1/3 mb-4" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 border border-neutral-300 rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="profile" />
    </div>
  );
}

function BottomNav({ active }: { active: string }) {
  const items = [
    { id: "home", icon: Home },
    { id: "map", icon: Map },
    { id: "events", icon: Calendar },
    { id: "profile", icon: User },
  ];

  return (
    <div className="border-t border-neutral-200 bg-white">
      <div className="flex items-center justify-around h-16 px-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`flex flex-col items-center gap-1 ${
                active === item.id ? "text-neutral-900" : "text-neutral-400"
              }`}
            >
              <Icon className="w-6 h-6" />
              <div className="h-1 w-1 bg-current rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
