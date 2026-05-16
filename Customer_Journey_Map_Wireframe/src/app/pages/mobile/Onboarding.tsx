import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, ArrowRight } from "lucide-react";

export default function MobileOnboarding() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: "restaurants", label: "Restaurants", emoji: "🍽️" },
    { id: "markets", label: "Märkte", emoji: "🛍️" },
    { id: "secondhand", label: "Second-Hand", emoji: "👕" },
    { id: "bike", label: "Fahrrad", emoji: "🚲" },
    { id: "repair", label: "Repair-Cafés", emoji: "🔧" },
    { id: "events", label: "Events", emoji: "🎉" },
    { id: "volunteering", label: "Volunteering", emoji: "🤝" },
    { id: "sharing", label: "Sharing", emoji: "♻️" },
    { id: "discounts", label: "Studi-Rabatte", emoji: "🎓" },
    { id: "outdoor", label: "Natur & Outdoor", emoji: "🌳" },
    { id: "gardening", label: "Urban Gardening", emoji: "🌱" },
    { id: "courses", label: "Kurse", emoji: "📚" },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-[100dvh] w-screen bg-white flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-6">
        <div className="flex gap-2">
          <div className="h-1 flex-1 bg-emerald-600 rounded-full" />
          <div className="h-1 flex-1 bg-neutral-200 rounded-full" />
          <div className="h-1 flex-1 bg-neutral-200 rounded-full" />
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            Was interessiert dich?
          </h1>
          <p className="text-sm text-neutral-600">
            Wähle deine Interessen aus, damit wir dir passende Empfehlungen zeigen können
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {interests.map((interest) => {
            const isSelected = selectedInterests.includes(interest.id);
            return (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`relative p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                }`}
              >
                <div className="text-2xl mb-1">{interest.emoji}</div>
                <div className="text-sm font-medium text-neutral-900">{interest.label}</div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 pb-8 pt-2">
        <button
          onClick={() => navigate("/mobile/home")}
          disabled={selectedInterests.length === 0}
          className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
            selectedInterests.length > 0
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
          }`}
        >
          Weiter
          <ArrowRight className="w-5 h-5" />
        </button>
        {selectedInterests.length > 0 && (
          <p className="text-center text-xs text-neutral-500 mt-2">
            {selectedInterests.length} Interessen ausgewählt
          </p>
        )}
      </div>
    </div>
  );
}
