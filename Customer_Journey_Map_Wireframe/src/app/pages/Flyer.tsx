import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Flyer() {
  return (
    <div className="w-full h-screen relative">
      <Link
        to="/journey"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-700 shadow-md backdrop-blur hover:bg-white"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück
      </Link>
      <iframe
        src="/poster/flyer.html"
        title="Arrivo Rollen-Flyer A4"
        className="w-full h-full border-0"
      />
    </div>
  );
}
