import { createBrowserRouter } from "react-router-dom";
import {
  CreateEvent,
  CreateTicket,
  EventSoon,
  Home,
  MyEvent,
  NotFoundPage,
  Register,
  Event,
  Perfil,
  EventActive,
} from "../pages";

export const UserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event",
    element: <Event />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event-active",
    element: <EventActive />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event-soon",
    element: <EventSoon />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/my-event/:name",
    element: <MyEvent />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-ticket",
    element: <CreateTicket />,
    errorElement: <NotFoundPage />,
  },
]);
