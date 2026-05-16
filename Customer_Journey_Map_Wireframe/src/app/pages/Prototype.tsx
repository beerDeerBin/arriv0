import { useNavigate } from "react-router";
import { Smartphone, ArrowRight } from "lucide-react";

export default function Prototype() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">Klickdummy</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Interaktiver Prototyp der Newbie App Graz – Klicken Sie sich durch die wichtigsten Screens
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-emerald-900 mb-2">Interaktiver Prototyp</h3>
              <p className="text-sm text-emerald-800">
                Dieser Klickdummy zeigt die Kernfunktionen der Newbie App. Navigieren Sie durch Onboarding,
                Startseite, Karte, Events und Profil. Alle Interaktionen sind funktionsfähig.
              </p>
            </div>
          </div>
        </div>

        {/* Start Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">Newbie App Graz</h2>
            <p className="text-lg text-neutral-600 mb-8">Nachhaltig ankommen in Graz</p>

            <button
              onClick={() => navigate("/dummy/onboarding")}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Prototyp starten
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Feature Overview */}
          <div className="border-t border-neutral-200 bg-neutral-50 p-8">
            <h3 className="font-semibold text-neutral-900 mb-4">Enthaltene Screens:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-semibold text-sm">1</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Onboarding</div>
                  <div className="text-sm text-neutral-600">Interessenauswahl & Personalisierung</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-semibold text-sm">2</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Startseite</div>
                  <div className="text-sm text-neutral-600">Personalisierte Empfehlungen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-semibold text-sm">3</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Karte</div>
                  <div className="text-sm text-neutral-600">Nachhaltige Orte in Graz</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-semibold text-sm">4</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Events</div>
                  <div className="text-sm text-neutral-600">Community-Veranstaltungen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-semibold text-sm">5</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Profil</div>
                  <div className="text-sm text-neutral-600">Einstellungen & Favoriten</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <h3 className="font-semibold text-neutral-900 mb-3">Design-Prinzipien</h3>
          <div className="space-y-2 text-sm text-neutral-700">
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">✓</span>
              <span>
                <strong>Grün & Nachhaltig:</strong> Farbschema basiert auf Grüntönen (#gogreen)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">✓</span>
              <span>
                <strong>Einfache Navigation:</strong> Bottom Navigation für schnellen Zugriff
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">✓</span>
              <span>
                <strong>Personalisiert:</strong> Inhalte basieren auf ausgewählten Interessen
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">✓</span>
              <span>
                <strong>Community-fokussiert:</strong> Events und Vernetzung im Vordergrund
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
