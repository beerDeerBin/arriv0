import { createHashRouter, Navigate } from "react-router";
import Root from "./Root";
import CustomerJourney from "./pages/CustomerJourney";
import Wireframes from "./pages/Wireframes";
import Prototype from "./pages/Prototype";
import PrototypeOnboarding from "./pages/prototype/Onboarding";
import PrototypeHome from "./pages/prototype/Home";
import PrototypeMap from "./pages/prototype/Map";
import PrototypeEvents from "./pages/prototype/Events";
import PrototypeProfile from "./pages/prototype/Profile";
import MobileOnboarding from "./pages/mobile/Onboarding";
import MobileHome from "./pages/mobile/Home";
import MobileMap from "./pages/mobile/Map";
import MobileEvents from "./pages/mobile/Events";
import MobileProfile from "./pages/mobile/Profile";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: <Navigate to="/journey" replace /> },
      { path: "journey", Component: CustomerJourney },
      { path: "wireframes", Component: Wireframes },
      { path: "dummy", Component: Prototype },
      { path: "dummy/onboarding", Component: PrototypeOnboarding },
      { path: "dummy/home", Component: PrototypeHome },
      { path: "dummy/map", Component: PrototypeMap },
      { path: "dummy/events", Component: PrototypeEvents },
      { path: "dummy/profile", Component: PrototypeProfile },
    ],
  },
  { path: "/mobile", Component: MobileOnboarding },
  { path: "/mobile/home", Component: MobileHome },
  { path: "/mobile/map", Component: MobileMap },
  { path: "/mobile/events", Component: MobileEvents },
  { path: "/mobile/profile", Component: MobileProfile },
]);
