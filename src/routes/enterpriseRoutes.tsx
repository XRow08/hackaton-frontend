import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  NotFoundPage,
  Register,
  CreateEvent,
  Event,
  Perfil,
  MyEvent,
  CreateTicket,
  Login,
} from "../pages";

export const EnterpriseRoutes = createBrowserRouter([
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
    path: "/login",
    element: <Login />,
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
    path: "/perfil",
    element: <Perfil />,
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
