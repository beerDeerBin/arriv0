import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Users, Clock, Heart, Share2, Home, Map, Calendar, User } from "lucide-react";

export default function MobileEvents() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(16);

  const dates = [
    { day: 14, weekday: "Mo" },
    { day: 15, weekday: "Di" },
    { day: 16, weekday: "Mi" },
    { day: 17, weekday: "Do" },
    { day: 18, weekday: "Fr" },
    { day: 19, weekday: "Sa" },
    { day: 20, weekday: "So" },
  ];

  const events = [
    {
      id: 1,
      title: "Repair Café Workshop",
      date: "16. Apr 2026",
      time: "14:00 - 17:00",
      location: "Repair Café Jakomini",
      participants: 12,
      maxParticipants: 15,
      tags: ["Repair", "DIY", "Kostenlos"],
      category: "Workshop",
    },
    {
      id: 2,
      title: "Bauernmarkt am Lendplatz",
      date: "16. Apr 2026",
      time: "06:00 - 13:00",
      location: "Lendplatz, Graz",
      participants: null,
      maxParticipants: null,
      tags: ["Bio", "Regional", "Markt"],
      category: "Markt",
    },
    {
      id: 3,
      title: "Urban Gardening Treffen",
      date: "16. Apr 2026",
      time: "16:00 - 18:00",
      location: "Gemeinschaftsgarten St. Peter",
      participants: 8,
      maxParticipants: 20,
      tags: ["Urban Gardening", "Community"],
      category: "Treffen",
    },
    {
      id: 4,
      title: "Kleidertauschparty",
      date: "16. Apr 2026",
      time: "18:00 - 21:00",
      location: "Community Space Lend",
      participants: 24,
      maxParticipants: 30,
      tags: ["Second-Hand", "Social"],
      category: "Event",
    },
  ];

  return (
    <div className="h-[100dvh] w-screen bg-white flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-neutral-100">
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Events & Aktivitäten</h1>
        <p className="text-sm text-neutral-600">Community-Events in deiner Nähe</p>
      </div>

      <div className="px-6 py-4 border-b border-neutral-100">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((date) => (
            <button
              key={date.day}
              onClick={() => setSelectedDate(date.day)}
              className={`flex-shrink-0 w-16 rounded-xl transition-all ${
                selectedDate === date.day
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <div className="py-3">
                <div className="text-xs font-medium mb-1">{date.weekday}</div>
                <div className="text-xl font-bold">{date.day}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-4">
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center relative">
                <div className="text-white text-5xl">
                  {event.category === "Workshop"
                    ? "🔧"
                    : event.category === "Markt"
                    ? "🛍️"
                    : event.category === "Treffen"
                    ? "🌱"
                    : "👕"}
                </div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-neutral-900 text-lg mb-2">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>
                      {event.date} · {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{event.location}</span>
                  </div>
                  {event.participants !== null && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>
                        {event.participants}/{event.maxParticipants} Teilnehmer
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                    Teilnehmen
                  </button>
                  <button className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-100 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          <button
            onClick={() => navigate("/mobile/map")}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600"
          >
            <Map className="w-6 h-6" />
            <div className="w-1 h-1 bg-transparent rounded-full" />
          </button>
          <button className="flex flex-col items-center gap-1 text-emerald-600">
            <Calendar className="w-6 h-6" />
            <div className="w-1 h-1 bg-emerald-600 rounded-full" />
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
