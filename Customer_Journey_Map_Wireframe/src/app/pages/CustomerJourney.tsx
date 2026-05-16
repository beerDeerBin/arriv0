import { User, Search, MapPin, Users, BookOpen, Star, Frown, Smile, Heart } from "lucide-react";

export default function CustomerJourney() {
  const phases = [
    {
      phase: "Awareness",
      title: "Entdeckung",
      emotion: "😕 Unsicher",
      icon: Search,
      color: "bg-amber-100 border-amber-300",
      textColor: "text-amber-700",
      description: "Lisa ist neu in Graz und fühlt sich verloren",
      touchpoints: [
        "Empfehlung von Kommilitonen",
        "Social Media (Instagram #grazgreen)",
        "Uni-Welcome-Event",
      ],
      thoughts: [
        "Wo kann ich hier nachhaltig einkaufen?",
        "Wie finde ich Gleichgesinnte?",
        "Alles ist so neu hier...",
      ],
      actions: [
        "Google-Suche: 'nachhaltig leben Graz'",
        "App im Store entdecken",
        "Beschreibung und Reviews lesen",
      ],
    },
    {
      phase: "Consideration",
      title: "Interesse",
      emotion: "🤔 Neugierig",
      icon: MapPin,
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-700",
      description: "Lisa lädt die App herunter und erkundet sie",
      touchpoints: [
        "App Download (iOS/Android)",
        "Onboarding mit Interessensauswahl",
        "Erste Kartenansicht",
      ],
      thoughts: [
        "Das sieht übersichtlich aus",
        "Genau solche Orte habe ich gesucht!",
        "Die Kategorien passen zu mir",
      ],
      actions: [
        "App installieren",
        "Interessen auswählen (Bio, Second-Hand, Events)",
        "Standort freigeben",
        "Karte erkunden",
      ],
    },
    {
      phase: "First Use",
      title: "Erste Nutzung",
      emotion: "😊 Begeistert",
      icon: Star,
      color: "bg-emerald-100 border-emerald-300",
      textColor: "text-emerald-700",
      description: "Lisa findet ihren ersten Bio-Laden",
      touchpoints: [
        "Interaktive Karte",
        "Bio-Laden in der Nähe gefunden",
        "Öffnungszeiten & Bewertungen",
      ],
      thoughts: [
        "Super, das ist gleich um die Ecke!",
        "Die Infos sind genau das, was ich brauche",
        "Das macht das Ankommen einfacher",
      ],
      actions: [
        "Suche nach 'Bio-Laden'",
        "Geschäft auf Karte antippen",
        "Details ansehen",
        "Route dorthin starten",
      ],
      painPoints: [],
    },
    {
      phase: "Engagement",
      title: "Aktive Nutzung",
      emotion: "❤️ Verbunden",
      icon: Users,
      color: "bg-purple-100 border-purple-300",
      textColor: "text-purple-700",
      description: "Lisa nutzt Community-Features",
      touchpoints: [
        "Event-Kalender",
        "Workshop-Anmeldung",
        "Community kennenlernen",
      ],
      thoughts: [
        "Ich kann hier neue Leute treffen!",
        "Der Repair-Café-Workshop passt perfekt",
        "Diese Community ist genau mein Ding",
      ],
      actions: [
        "Events durchstöbern",
        "Zu Workshop anmelden",
        "Favoriten speichern",
        "Push-Benachrichtigungen aktivieren",
      ],
      painPoints: [],
    },
    {
      phase: "Loyalty",
      title: "Treue Nutzerin",
      emotion: "🌟 Botschafterin",
      icon: Heart,
      color: "bg-pink-100 border-pink-300",
      textColor: "text-pink-700",
      description: "Lisa empfiehlt die App weiter",
      touchpoints: [
        "Tägliche App-Nutzung",
        "Community-Mitglied",
        "Empfehlungen an Freunde",
      ],
      thoughts: [
        "Diese App ist unverzichtbar geworden",
        "Meine Freunde sollten das auch nutzen",
        "Ich fühle mich in Graz angekommen",
      ],
      actions: [
        "Regelmäßige Nutzung für Alltag",
        "App an Erasmus-Studierende empfehlen",
        "Bei Events aktiv teilnehmen",
        "Neue Orte in der App entdecken",
      ],
      painPoints: [],
    },
  ];

  const persona = {
    name: "Lisa",
    age: 22,
    role: "Masterstudentin (Erasmus)",
    goals: [
      "Nachhaltig leben in Graz",
      "Neue Leute kennenlernen",
      "Sich in der Stadt orientieren",
    ],
    frustrations: [
      "Kennt sich in Graz nicht aus",
      "Weiß nicht, wo nachhaltige Läden sind",
      "Fühlt sich einsam in neuer Stadt",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">Customer Journey Map</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Die Reise einer Newcomerin in Graz – Von der Entdeckung bis zur aktiven Nutzung der Newbie App
          </p>
        </div>

        {/* Persona Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-neutral-900 mb-1">{persona.name}</h2>
              <p className="text-lg text-neutral-600 mb-4">
                {persona.age} Jahre · {persona.role}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                    <Smile className="w-5 h-5" />
                    Ziele
                  </h3>
                  <ul className="space-y-1">
                    {persona.goals.map((goal, i) => (
                      <li key={i} className="text-neutral-700 text-sm flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                    <Frown className="w-5 h-5" />
                    Frustrationen
                  </h3>
                  <ul className="space-y-1">
                    {persona.frustrations.map((frustration, i) => (
                      <li key={i} className="text-neutral-700 text-sm flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{frustration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Phases */}
        <div className="space-y-8">
          {phases.map((phaseData, index) => {
            const Icon = phaseData.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
              >
                <div className={`${phaseData.color} border-b p-6`}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 bg-white rounded-xl shadow-sm`}>
                      <Icon className={`w-6 h-6 ${phaseData.textColor}`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                        Phase {index + 1}: {phaseData.phase}
                      </div>
                      <h3 className={`text-2xl font-bold ${phaseData.textColor}`}>
                        {phaseData.title}
                      </h3>
                    </div>
                    <div className="ml-auto text-3xl">{phaseData.emotion}</div>
                  </div>
                  <p className="text-neutral-700 ml-16">{phaseData.description}</p>
                </div>

                <div className="p-6 grid md:grid-cols-3 gap-6">
                  {/* Touchpoints */}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      Touchpoints
                    </h4>
                    <ul className="space-y-2">
                      {phaseData.touchpoints.map((tp, i) => (
                        <li key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Thoughts */}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Gedanken
                    </h4>
                    <ul className="space-y-2">
                      {phaseData.thoughts.map((thought, i) => (
                        <li key={i} className="text-sm text-neutral-700 italic bg-neutral-50 p-2 rounded-lg">
                          "{thought}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-purple-600" />
                      Aktionen
                    </h4>
                    <ul className="space-y-2">
                      {phaseData.actions.map((action, i) => (
                        <li key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Insights */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Erstkontakt ist entscheidend
              </h3>
              <p className="text-emerald-100 text-sm">
                Empfehlungen von Peers und Unis sind der wichtigste Kanal für Newcomer
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🗺️</span>
                Lokale Orientierung
              </h3>
              <p className="text-emerald-100 text-sm">
                Die interaktive Karte ist das Kernfeature, das sofortigen Mehrwert bietet
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">👥</span>
                Community bindet
              </h3>
              <p className="text-emerald-100 text-sm">
                Events und Vernetzung verwandeln User zu loyalen Botschaftern
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
